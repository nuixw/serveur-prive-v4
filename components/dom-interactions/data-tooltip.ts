const LAYER_ID = "global-data-tooltip"
const HOVER_POINTER_QUERY = "(hover: hover) and (pointer: fine)"
const VIEWPORT_PADDING = 8
const TOOLTIP_GAP = 8

let layer: HTMLDivElement | null = null
let activeAnchor: HTMLElement | null = null
let scrollRaf = 0
let pendingShowRaf = 0

function canUseHoverTooltip(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia(HOVER_POINTER_QUERY).matches
}

/** Hors souris « fine + hover » : ouverture au tap, pas au survol. */
export function isTooltipTapMode(): boolean {
  return !canUseHoverTooltip()
}

function getLayer(): HTMLDivElement {
  if (layer?.isConnected) return layer
  const existing = document.getElementById(LAYER_ID)
  if (existing instanceof HTMLDivElement) {
    layer = existing
    return layer
  }
  const el = document.createElement("div")
  el.id = LAYER_ID
  el.className = "global-data-tooltip"
  el.setAttribute("role", "tooltip")
  el.setAttribute("aria-hidden", "true")
  document.body.appendChild(el)
  layer = el
  return el
}

function hideTooltipLayer(): void {
  const el = layer ?? document.getElementById(LAYER_ID)
  if (!(el instanceof HTMLDivElement)) return
  el.classList.remove("global-data-tooltip--visible")
  el.textContent = ""
  el.removeAttribute("data-variant")
  el.removeAttribute("style")
  el.setAttribute("aria-hidden", "true")
}

function syncTooltipGeometry(anchor: HTMLElement, el: HTMLDivElement): void {
  const rect = anchor.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  const tw = el.offsetWidth
  const th = el.offsetHeight

  let left = rect.left + rect.width / 2 - tw / 2
  left = Math.max(VIEWPORT_PADDING, Math.min(left, vw - VIEWPORT_PADDING - tw))

  let top = rect.top - TOOLTIP_GAP - th
  if (top < VIEWPORT_PADDING) {
    top = rect.bottom + TOOLTIP_GAP
  }
  if (top + th > vh - VIEWPORT_PADDING) {
    top = Math.max(VIEWPORT_PADDING, vh - VIEWPORT_PADDING - th)
  }

  el.style.left = `${Math.round(left)}px`
  el.style.top = `${Math.round(top)}px`
}

function scheduleShow(anchor: HTMLElement): void {
  const el = getLayer()
  const text = anchor.getAttribute("data-tooltip")?.trim()
  if (!text) return

  el.textContent = text
  if (anchor.closest(".location-card-sponso")) {
    el.dataset.variant = "sponso"
  } else {
    delete el.dataset.variant
  }

  el.classList.remove("global-data-tooltip--visible")
  el.removeAttribute("style")

  cancelAnimationFrame(pendingShowRaf)
  pendingShowRaf = requestAnimationFrame(() => {
    pendingShowRaf = requestAnimationFrame(() => {
      pendingShowRaf = 0
      if (activeAnchor !== anchor) return
      syncTooltipGeometry(anchor, el)
      el.classList.add("global-data-tooltip--visible")
      el.setAttribute("aria-hidden", "false")
    })
  })
}

function onPointerOver(event: PointerEvent): void {
  if (!canUseHoverTooltip()) return
  if (event.pointerType === "touch") return

  const target = event.target
  if (!(target instanceof Element)) return

  const anchor = target.closest<HTMLElement>("[data-tooltip]")
  if (!anchor) return
  if (!anchor.getAttribute("data-tooltip")?.trim()) return

  activeAnchor = anchor
  scheduleShow(anchor)
}

function onPointerOut(event: PointerEvent): void {
  if (!activeAnchor) return
  if (!canUseHoverTooltip()) return

  const related = event.relatedTarget
  if (related instanceof Node && activeAnchor.contains(related)) return

  activeAnchor = null
  cancelAnimationFrame(pendingShowRaf)
  pendingShowRaf = 0
  hideTooltipLayer()
}

function onScrollOrResize(): void {
  if (!activeAnchor) return
  cancelAnimationFrame(scrollRaf)
  scrollRaf = requestAnimationFrame(() => {
    scrollRaf = 0
    const anchor = activeAnchor
    const el = layer ?? document.getElementById(LAYER_ID)
    if (
      !anchor ||
      !(el instanceof HTMLDivElement) ||
      !el.classList.contains("global-data-tooltip--visible")
    ) {
      return
    }
    syncTooltipGeometry(anchor, el)
  })
}

function onTapModePointerDown(event: PointerEvent): void {
  if (canUseHoverTooltip()) return

  const target = event.target
  if (!(target instanceof Element)) return

  const anchor = target.closest<HTMLElement>("[data-tooltip]")
  const layerEl = document.getElementById(LAYER_ID)
  const isOpen =
    layerEl instanceof HTMLDivElement &&
    layerEl.classList.contains("global-data-tooltip--visible")

  if (anchor && anchor.getAttribute("data-tooltip")?.trim()) {
    const sameAnchor = activeAnchor === anchor
    const pendingOpen = pendingShowRaf !== 0
    if (sameAnchor && (isOpen || pendingOpen)) {
      activeAnchor = null
      cancelAnimationFrame(pendingShowRaf)
      pendingShowRaf = 0
      hideTooltipLayer()
      return
    }
    activeAnchor = anchor
    scheduleShow(anchor)
    return
  }

  if (activeAnchor || pendingShowRaf !== 0) {
    activeAnchor = null
    cancelAnimationFrame(pendingShowRaf)
    pendingShowRaf = 0
    hideTooltipLayer()
  }
}

export function createDataTooltipListeners(): () => void {
  if (typeof document === "undefined") return () => {}

  document.addEventListener("pointerover", onPointerOver)
  document.addEventListener("pointerout", onPointerOut)
  document.addEventListener("pointerdown", onTapModePointerDown, true)
  window.addEventListener("resize", onScrollOrResize, { passive: true })
  document.addEventListener("scroll", onScrollOrResize, {
    capture: true,
    passive: true
  })

  return () => {
    document.removeEventListener("pointerover", onPointerOver)
    document.removeEventListener("pointerout", onPointerOut)
    document.removeEventListener("pointerdown", onTapModePointerDown, true)
    window.removeEventListener("resize", onScrollOrResize)
    document.removeEventListener("scroll", onScrollOrResize, true)
    cancelAnimationFrame(scrollRaf)
    cancelAnimationFrame(pendingShowRaf)
    scrollRaf = 0
    pendingShowRaf = 0
    activeAnchor = null
    hideTooltipLayer()
  }
}
