'use client'

import { useEffect } from 'react'

const COUNTER_SELECTOR = '[data-footer-counter]'

interface CounterParts {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function toArray<T extends Node>(list: NodeListOf<T>) {
  return Array.from(list)
}

function getParts(remainingMs: number): CounterParts {
  const clampedMs = Math.max(remainingMs, 0)
  const totalSeconds = Math.floor(clampedMs / 1000)

  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

function renderCounter(counter: HTMLElement, parts: CounterParts) {
  const days = counter.querySelector<HTMLElement>('[data-counter-days]')
  const hours = counter.querySelector<HTMLElement>('[data-counter-hours]')
  const minutes = counter.querySelector<HTMLElement>('[data-counter-minutes]')
  const seconds = counter.querySelector<HTMLElement>('[data-counter-seconds]')

  if (!days || !hours || !minutes || !seconds) return

  days.textContent = String(parts.days)
  hours.textContent = String(parts.hours)
  minutes.textContent = String(parts.minutes)
  seconds.textContent = String(parts.seconds)
}

function tickCounters() {
  const now = Date.now()

  toArray(document.querySelectorAll<HTMLElement>(COUNTER_SELECTOR)).forEach((counter) => {
    const targetRaw = counter.dataset.counterTarget
    if (!targetRaw) return

    const targetMs = Date.parse(targetRaw)
    if (Number.isNaN(targetMs)) return

    renderCounter(counter, getParts(targetMs - now))
  })
}

export function FooterCounter() {
  useEffect(() => {
    tickCounters()
    const interval = window.setInterval(tickCounters, 1000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return null
}
