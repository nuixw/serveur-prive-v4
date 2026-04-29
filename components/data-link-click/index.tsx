'use client'

import { useEffect } from 'react'

function onDocumentClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  // Do not hijack native interactions on interactive elements.
  if (target.closest('a, button, input, select, textarea, label')) return

  const card = target.closest<HTMLElement>('[data-link]')
  if (!card) return

  const link = card.querySelector<HTMLAnchorElement>('a[href]')
  if (!link) return

  link.click()
}

function syncBodyFixClass() {
  document.body.classList.toggle('fix', window.scrollY > 50)
}

export function DataLinkClick() {
  useEffect(() => {
    document.addEventListener('click', onDocumentClick)
    window.addEventListener('scroll', syncBodyFixClass, { passive: true })
    syncBodyFixClass()

    return () => {
      document.removeEventListener('click', onDocumentClick)
      window.removeEventListener('scroll', syncBodyFixClass)
    }
  }, [])

  return null
}
