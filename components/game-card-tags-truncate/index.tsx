'use client'

import { useEffect } from 'react'

const TAGS_CONTAINER_SELECTOR = '.game-card-tags'
const TITLE_SELECTOR = '[data-game-card-title]'
const TAG_SELECTOR = '[data-game-card-trunc]'
const MORE_SELECTOR = '[data-game-card-more]'

const toArray = <T extends Node>(list: NodeListOf<T>) => Array.from(list)

function truncateContainer(container: HTMLElement) {
  const title = container.querySelector<TagsTitle>(TITLE_SELECTOR)
  const truncTags = toArray(container.querySelectorAll<TagsTag>(TAG_SELECTOR))
  const more = container.querySelector<TagsMore>(MORE_SELECTOR)

  if (!title || truncTags.length === 0 || !more) return

  // Reset state before measuring (important on resize).
  truncTags.forEach((tag) => {
    tag.style.display = ''
  })
  more.style.display = 'none'
  more.textContent = '+0'

  const availableWidth = container.clientWidth
  if (availableWidth <= 0) return

  const epsilon = 2

  // Case 1: everything fits (title + all tags). Hide "+x".
  // On mesure la “fin visuelle” du dernier tag affiché.
  const lastTag = truncTags[truncTags.length - 1]
  const lastRight = lastTag.offsetLeft + lastTag.offsetWidth
  if (lastRight <= availableWidth + epsilon) return

  // Case 2: find max visible k such that title + first k tags + "+(n-k)" fits.
  let bestK = 0
  let bestHidden = truncTags.length

  for (let k = truncTags.length - 1; k >= 0; k--) {
    const hiddenCount = truncTags.length - k

    more.textContent = '+' + hiddenCount
    more.style.display = ''

    truncTags.forEach((tag, index) => {
      tag.style.display = index < k ? '' : 'none'
    })

    const moreRight = more.offsetLeft + more.offsetWidth
    if (moreRight <= availableWidth + epsilon) {
      bestK = k
      bestHidden = hiddenCount
      break
    }
  }

  truncTags.forEach((tag, index) => {
    tag.style.display = index < bestK ? '' : 'none'
  })
  more.textContent = '+' + bestHidden
  more.style.display = ''
}

type TagsTitle = HTMLSpanElement
type TagsTag = HTMLSpanElement
type TagsMore = HTMLSpanElement

export function GameCardTagsTruncate() {
  useEffect(() => {
    let scheduled = false

    const run = () => {
      scheduled = false
      toArray(document.querySelectorAll<HTMLElement>(TAGS_CONTAINER_SELECTOR)).forEach(truncateContainer)
    }

    const scheduleRun = () => {
      if (scheduled) return
      scheduled = true
      window.requestAnimationFrame(run)
    }

    const init = () => {
      // On relance un peu après le premier paint (polices/layout) pour que la largeur soit bonne.
      window.requestAnimationFrame(() => window.requestAnimationFrame(run))
      window.addEventListener('resize', scheduleRun, { passive: true })
    }

    init()

    return () => {
      window.removeEventListener('resize', scheduleRun)
    }
  }, [])

  return null
}

