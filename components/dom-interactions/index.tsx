"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const BODY_FIX_CLASS = "fix"
const ASIDE_OPEN_CLASS = "aside-responsive-left-open"
const ASIDE_SELECTOR = ".aside-responsive-left"
const ASIDE_TOGGLE_SELECTOR = ".btn-aside-responsive-left"
const CARD_LINK_SELECTOR = "[data-link]"
const PASSWORD_TOGGLE_SELECTOR = "[data-password-toggle]"
const COPY_TRIGGER_SELECTOR = "[data-copy]"
const COUNTER_SELECTOR = "[data-counter]"
const TRUNCATE_CONTAINER_SELECTOR = "[data-truncate]"
const TRUNCATE_ITEM_SELECTOR = "[data-truncate-item]"
const TRUNCATE_STATIC_SELECTOR = "[data-truncate-static]"
const TRUNCATE_MORE_SELECTOR = "[data-truncate-more]"
const INTERACTIVE_SELECTOR = "a, button, input, select, textarea, label"
const COPY_CLASS = "copied"
const DEFAULT_COPY_TIMEOUT_MS = 2000

const copyTimeoutByElement = new WeakMap<HTMLElement, number>()

function pad2(value: number): string {
  return String(value).padStart(2, "0")
}

function renderCounter(counter: HTMLElement, remainingMs: number) {
  const clampedMs = Math.max(remainingMs, 0)
  const totalSeconds = Math.floor(clampedMs / 1000)

  const days = counter.querySelector<HTMLElement>("[data-counter-days]")
  const hours = counter.querySelector<HTMLElement>("[data-counter-hours]")
  const minutes = counter.querySelector<HTMLElement>("[data-counter-minutes]")
  const seconds = counter.querySelector<HTMLElement>("[data-counter-seconds]")

  let remaining = totalSeconds

  if (days) {
    const value = Math.floor(remaining / 86400)
    days.textContent = pad2(value)
    remaining -= value * 86400
  }

  if (hours) {
    const value = Math.floor(remaining / 3600)
    hours.textContent = pad2(value)
    remaining -= value * 3600
  }

  if (minutes) {
    const value = Math.floor(remaining / 60)
    minutes.textContent = pad2(value)
    remaining -= value * 60
  }

  if (seconds) {
    seconds.textContent = pad2(remaining)
  }
}

function tickCounters() {
  const now = Date.now()
  const counters = Array.from(
    document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR)
  )

  counters.forEach((counter) => {
    const targetRaw = counter.dataset.counter
    if (!targetRaw) return

    const targetMs = Date.parse(targetRaw)
    if (Number.isNaN(targetMs)) return

    renderCounter(counter, targetMs - now)
  })
}

function truncateTagsContainer(container: HTMLElement) {
  const staticItems = Array.from(
    container.querySelectorAll<HTMLElement>(TRUNCATE_STATIC_SELECTOR)
  )
  const manualItems = Array.from(
    container.querySelectorAll<HTMLElement>(TRUNCATE_ITEM_SELECTOR)
  )
  const allChildren = Array.from(container.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement
  )
  const truncateItems = (manualItems.length > 0 ? manualItems : allChildren).filter(
    (item) =>
      !item.matches(TRUNCATE_STATIC_SELECTOR) && !item.matches(TRUNCATE_MORE_SELECTOR)
  )

  if (truncateItems.length === 0) return

  let more = container.querySelector<HTMLElement>(TRUNCATE_MORE_SELECTOR)
  if (!more) {
    const firstTagClass = truncateItems[0].className
    const moreElement = document.createElement("span")
    if (firstTagClass) moreElement.className = firstTagClass
    moreElement.setAttribute("data-truncate-more", "")
    container.appendChild(moreElement)
    more = moreElement
  }

  staticItems.forEach((item) => {
    item.style.display = ""
  })
  truncateItems.forEach((item) => {
    item.style.display = ""
  })
  more.style.display = "none"
  more.textContent = "+0"

  const availableWidth = container.clientWidth
  if (availableWidth <= 0) return

  const epsilon = 2
  const styles = window.getComputedStyle(container)
  const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0

  function getVisibleItemsWidth(items: HTMLElement[]): number {
    const visibleItems = items.filter((item) => item.style.display !== "none")
    const itemsWidth = visibleItems.reduce((acc, item) => acc + item.offsetWidth, 0)
    const gapsWidth = Math.max(visibleItems.length - 1, 0) * gap
    return itemsWidth + gapsWidth
  }

  const visibleWithoutMore = [...staticItems, ...truncateItems]
  const contentWidthWithoutMore = getVisibleItemsWidth(visibleWithoutMore)
  if (contentWidthWithoutMore <= availableWidth + epsilon) return

  let bestK = -1
  let bestHidden = 0

  for (let k = truncateItems.length - 1; k >= 1; k--) {
    const hiddenCount = truncateItems.length - k

    more.textContent = "+" + hiddenCount
    more.style.display = ""

    truncateItems.forEach((item, index) => {
      item.style.display = index < k ? "" : "none"
    })

    const currentWidth = getVisibleItemsWidth([...staticItems, ...truncateItems, more])
    if (currentWidth <= availableWidth + epsilon) {
      bestK = k
      bestHidden = hiddenCount
      break
    }
  }

  if (bestK === -1) {
    // Keep at least one tag visible when space is too tight.
    truncateItems.forEach((item, index) => {
      item.style.display = index === 0 ? "" : "none"
    })
    const hiddenCount = Math.max(truncateItems.length - 1, 0)
    more.textContent = "+" + hiddenCount
    more.style.display = hiddenCount > 0 ? "" : "none"
    return
  }

  truncateItems.forEach((item, index) => {
    item.style.display = index < bestK ? "" : "none"
  })
  more.textContent = "+" + bestHidden
  more.style.display = ""
}

function truncateGameCardTags() {
  const containers = Array.from(
    document.querySelectorAll<HTMLElement>(TRUNCATE_CONTAINER_SELECTOR)
  )
  containers.forEach(truncateTagsContainer)
}

function syncBodyFixClass() {
  document.body.classList.toggle(BODY_FIX_CLASS, window.scrollY > 0)
}

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const tempTextarea = document.createElement("textarea")
  tempTextarea.value = text
  tempTextarea.setAttribute("readonly", "")
  tempTextarea.style.position = "fixed"
  tempTextarea.style.opacity = "0"
  document.body.appendChild(tempTextarea)
  tempTextarea.select()
  document.execCommand("copy")
  document.body.removeChild(tempTextarea)
}

function applyCopiedState(trigger: HTMLElement) {
  const timeoutRaw = trigger.getAttribute("data-copy-timeout")
  const timeoutSeconds = timeoutRaw ? Number(timeoutRaw) : NaN
  const timeoutMs = Number.isFinite(timeoutSeconds)
    ? Math.max(timeoutSeconds, 0) * 1000
    : DEFAULT_COPY_TIMEOUT_MS

  const previousTimeout = copyTimeoutByElement.get(trigger)
  if (previousTimeout) window.clearTimeout(previousTimeout)

  trigger.classList.add(COPY_CLASS)

  const timeoutId = window.setTimeout(() => {
    trigger.classList.remove(COPY_CLASS)
    copyTimeoutByElement.delete(trigger)
  }, timeoutMs)

  copyTimeoutByElement.set(trigger, timeoutId)
}

async function onDocumentClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const copyTrigger = target.closest<HTMLElement>(COPY_TRIGGER_SELECTOR)
  if (copyTrigger) {
    const valueToCopy = copyTrigger.getAttribute("data-copy")
    if (!valueToCopy) return

    try {
      await copyTextToClipboard(valueToCopy)
      applyCopiedState(copyTrigger)
    } catch {
      // Ignore copy failure to avoid blocking UI interactions.
    }
    return
  }

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

  const passwordToggle = target.closest<HTMLElement>(PASSWORD_TOGGLE_SELECTOR)
  if (passwordToggle) {
    const targetId = passwordToggle.getAttribute("data-password-target")
    if (targetId) {
      const input = document.getElementById(targetId)
      if (
        input instanceof HTMLInputElement &&
        (input.type === "password" || input.type === "text")
      ) {
        const nextIsHidden = input.type === "text"
        input.type = nextIsHidden ? "password" : "text"
        passwordToggle.setAttribute(
          "aria-label",
          nextIsHidden ? "Afficher le mot de passe" : "Masquer le mot de passe"
        )
        passwordToggle.setAttribute(
          "aria-pressed",
          nextIsHidden ? "false" : "true"
        )
      }
    }
    event.preventDefault()
    return
  }

  if (target.closest(INTERACTIVE_SELECTOR)) return

  const card = target.closest<HTMLElement>(CARD_LINK_SELECTOR)
  if (!card) return

  const href = card.getAttribute("data-link")
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
