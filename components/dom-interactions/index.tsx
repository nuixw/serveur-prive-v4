"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const BODY_FIX_CLASS = "fix"
const ASIDE_OPEN_CLASS = "aside-responsive-left-open"
const ASIDE_SELECTOR = ".aside-responsive-left"
const ASIDE_TOGGLE_SELECTOR = ".btn-aside-responsive-left"
const CARD_LINK_SELECTOR = "[data-link]"
const COUNTER_SELECTOR = "[data-footer-counter]"
const TAGS_CONTAINER_SELECTOR = ".game-card-tags"
const TITLE_SELECTOR = "[data-game-card-title]"
const TAG_SELECTOR = "[data-game-card-trunc]"
const MORE_SELECTOR = "[data-game-card-more]"
const INTERACTIVE_SELECTOR = "a, button, input, select, textarea, label"

interface CounterParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function pad2(value: number): string {
  return String(value).padStart(2, "0")
}

function getCounterParts(remainingMs: number): CounterParts {
  const clampedMs = Math.max(remainingMs, 0)
  const totalSeconds = Math.floor(clampedMs / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function renderCounter(counter: HTMLElement, parts: CounterParts) {
  const days = counter.querySelector<HTMLElement>("[data-counter-days]")
  const hours = counter.querySelector<HTMLElement>("[data-counter-hours]")
  const minutes = counter.querySelector<HTMLElement>("[data-counter-minutes]")
  const seconds = counter.querySelector<HTMLElement>("[data-counter-seconds]")

  if (!days || !hours || !minutes || !seconds) return

  days.textContent = pad2(parts.days)
  hours.textContent = pad2(parts.hours)
  minutes.textContent = pad2(parts.minutes)
  seconds.textContent = pad2(parts.seconds)
}

function tickCounters() {
  const now = Date.now()
  const counters = Array.from(
    document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR)
  )

  counters.forEach((counter) => {
    const targetRaw = counter.dataset.counterTarget
    if (!targetRaw) return

    const targetMs = Date.parse(targetRaw)
    if (Number.isNaN(targetMs)) return

    renderCounter(counter, getCounterParts(targetMs - now))
  })
}

function truncateTagsContainer(container: HTMLElement) {
  const title = container.querySelector<HTMLSpanElement>(TITLE_SELECTOR)
  const truncTags = Array.from(
    container.querySelectorAll<HTMLSpanElement>(TAG_SELECTOR)
  )
  const more = container.querySelector<HTMLSpanElement>(MORE_SELECTOR)

  if (!title || truncTags.length === 0 || !more) return

  truncTags.forEach((tag) => {
    tag.style.display = ""
  })
  more.style.display = "none"
  more.textContent = "+0"

  const availableWidth = container.clientWidth
  if (availableWidth <= 0) return

  const epsilon = 2
  const lastTag = truncTags[truncTags.length - 1]
  const lastRight = lastTag.offsetLeft + lastTag.offsetWidth
  if (lastRight <= availableWidth + epsilon) return

  let bestK = 0
  let bestHidden = truncTags.length

  for (let k = truncTags.length - 1; k >= 0; k--) {
    const hiddenCount = truncTags.length - k

    more.textContent = "+" + hiddenCount
    more.style.display = ""

    truncTags.forEach((tag, index) => {
      tag.style.display = index < k ? "" : "none"
    })

    const moreRight = more.offsetLeft + more.offsetWidth
    if (moreRight <= availableWidth + epsilon) {
      bestK = k
      bestHidden = hiddenCount
      break
    }
  }

  truncTags.forEach((tag, index) => {
    tag.style.display = index < bestK ? "" : "none"
  })
  more.textContent = "+" + bestHidden
  more.style.display = ""
}

function truncateGameCardTags() {
  const containers = Array.from(
    document.querySelectorAll<HTMLElement>(TAGS_CONTAINER_SELECTOR)
  )
  containers.forEach(truncateTagsContainer)
}

function syncBodyFixClass() {
  document.body.classList.toggle(BODY_FIX_CLASS, window.scrollY > 0)
}

function onDocumentClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const toggleAsideButton = target.closest<HTMLElement>(ASIDE_TOGGLE_SELECTOR)
  if (toggleAsideButton) {
    document.body.classList.toggle(ASIDE_OPEN_CLASS)
    return
  }

  const isAsideOpen = document.body.classList.contains(ASIDE_OPEN_CLASS)
  const aside = document.querySelector<HTMLElement>(ASIDE_SELECTOR)
  if (isAsideOpen && aside) {
    const clickedInsideAside = target.closest<HTMLElement>(ASIDE_SELECTOR)
    if (!clickedInsideAside) {
      event.preventDefault()
      event.stopPropagation()
      document.body.classList.remove(ASIDE_OPEN_CLASS)
      return
    }
  } else if (isAsideOpen && !aside) {
    document.body.classList.remove(ASIDE_OPEN_CLASS)
  }

  if (target.closest(INTERACTIVE_SELECTOR)) return

  const card = target.closest<HTMLElement>(CARD_LINK_SELECTOR)
  if (!card) return

  const link = card.querySelector<HTMLAnchorElement>("a[href]")
  if (!link) return

  const href = link.getAttribute("href")
  if (!href) return

  window.location.assign(href)
}

export function DomInteractions() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    let tagsTruncateScheduled = false

    const runTagsTruncate = () => {
      tagsTruncateScheduled = false
      truncateGameCardTags()
    }

    const scheduleTagsTruncate = () => {
      if (tagsTruncateScheduled) return
      tagsTruncateScheduled = true
      window.requestAnimationFrame(runTagsTruncate)
    }

    document.addEventListener("click", onDocumentClick, true)
    window.addEventListener("scroll", syncBodyFixClass, { passive: true })
    window.addEventListener("resize", scheduleTagsTruncate, { passive: true })

    syncBodyFixClass()
    tickCounters()
    window.requestAnimationFrame(() =>
      window.requestAnimationFrame(runTagsTruncate)
    )

    const counterInterval = window.setInterval(tickCounters, 1000)

    return () => {
      document.removeEventListener("click", onDocumentClick, true)
      window.removeEventListener("scroll", syncBodyFixClass)
      window.removeEventListener("resize", scheduleTagsTruncate)
      window.clearInterval(counterInterval)
    }
  }, [])

  useEffect(() => {
    syncBodyFixClass()
    tickCounters()
    window.requestAnimationFrame(() => window.requestAnimationFrame(truncateGameCardTags))
  }, [pathname, searchParams])

  return null
}
