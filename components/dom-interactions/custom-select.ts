const ROOT_SELECTOR = "[data-custom-select]"
const TRIGGER_SELECTOR = "[data-custom-select-trigger]"
const DROPDOWN_SELECTOR = "[data-custom-select-dropdown]"
const DROPDOWN_OPEN_CLASS = "field-select-dropdown--open"
const SEARCH_SELECTOR = "[data-custom-select-search]"
const LISTBOX_SELECTOR = "[data-custom-select-listbox]"
const OPTION_SELECTOR = 'li[role="option"]'
const EMPTY_SELECTOR = "[data-custom-select-empty]"

let openRoot: HTMLElement | null = null
let customSelectMutationDebounce = 0

function getCustomSelectRoot(el: Element | null): HTMLElement | null {
  return el?.closest<HTMLElement>(ROOT_SELECTOR) ?? null
}

function rootHasSearch(root: HTMLElement): boolean {
  return root.hasAttribute("data-search")
}

/** Synchronise uniquement les aria du panneau / trigger (pas le libellé : géré par React). */
export function syncCustomSelectTrigger(root: HTMLElement) {
  const panel = root.querySelector<HTMLElement>(DROPDOWN_SELECTOR)
  const trigger = root.querySelector<HTMLElement>(TRIGGER_SELECTOR)
  if (!panel || !trigger) return

  const isOpen = panel.classList.contains(DROPDOWN_OPEN_CLASS)
  panel.setAttribute("aria-hidden", isOpen ? "false" : "true")
  trigger.setAttribute("aria-expanded", isOpen ? "true" : "false")
}

export function syncAllCustomSelectTriggers() {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    syncCustomSelectTrigger(root)
  })
}

function filterOptions(root: HTMLElement, query: string) {
  if (!rootHasSearch(root)) return

  const q = query.trim().toLowerCase()
  const items = root.querySelectorAll<HTMLElement>(
    `${LISTBOX_SELECTOR} ${OPTION_SELECTOR}`
  )
  let visibleCount = 0

  items.forEach((li) => {
    const text = (li.textContent ?? "").toLowerCase()
    const match = !q || text.includes(q)
    li.hidden = !match
    if (match) visibleCount++
  })

  const empty = root.querySelector<HTMLElement>(EMPTY_SELECTOR)
  if (empty) empty.hidden = visibleCount > 0
}

function setDropdownOpen(root: HTMLElement, open: boolean) {
  const trigger = root.querySelector<HTMLElement>(TRIGGER_SELECTOR)
  const panel = root.querySelector<HTMLElement>(DROPDOWN_SELECTOR)
  if (!trigger || !panel) return

  trigger.setAttribute("aria-expanded", open ? "true" : "false")
  panel.classList.toggle(DROPDOWN_OPEN_CLASS, open)
  panel.setAttribute("aria-hidden", open ? "false" : "true")

  if (open) {
    openRoot = root
    const search = root.querySelector<HTMLInputElement>(SEARCH_SELECTOR)
    window.requestAnimationFrame(() => {
      if (search) {
        search.focus()
        search.select()
        filterOptions(root, search.value)
      } else {
        filterOptions(root, "")
      }
    })
    return
  }

  if (openRoot === root) openRoot = null

  const search = root.querySelector<HTMLInputElement>(SEARCH_SELECTOR)
  if (search) {
    search.value = ""
    filterOptions(root, "")
  }
}

function closeAllCustomSelectDropdowns() {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    setDropdownOpen(root, false)
  })
}

export function handleCustomSelectClick(event: MouseEvent): boolean {
  const target = event.target
  if (!(target instanceof Element)) return false

  const option = target.closest<HTMLElement>(OPTION_SELECTOR)
  const rootForOption = getCustomSelectRoot(option)
  if (
    rootForOption &&
    option &&
    rootForOption.contains(option) &&
    !option.hidden
  ) {
    const select = rootForOption.querySelector("select")
    const value = option.dataset.value
    if (select instanceof HTMLSelectElement && value !== undefined) {
      select.value = value
      select.dispatchEvent(new Event("change", { bubbles: true }))
    }
    setDropdownOpen(rootForOption, false)
    event.preventDefault()
    event.stopPropagation()
    return true
  }

  const trigger = target.closest<HTMLElement>(TRIGGER_SELECTOR)
  const rootForTrigger = getCustomSelectRoot(trigger)
  if (rootForTrigger && trigger && rootForTrigger.contains(trigger)) {
    if (!(trigger instanceof HTMLButtonElement) || trigger.disabled) return true

    const isOpen = trigger.getAttribute("aria-expanded") === "true"
    document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((r) => {
      if (r !== rootForTrigger) setDropdownOpen(r, false)
    })
    setDropdownOpen(rootForTrigger, !isOpen)
    event.preventDefault()
    event.stopPropagation()
    return true
  }

  if (!target.closest(ROOT_SELECTOR)) closeAllCustomSelectDropdowns()

  return false
}

export function handleCustomSelectInput(event: Event): boolean {
  const el = event.target
  if (!(el instanceof HTMLInputElement)) return false
  if (!el.matches(SEARCH_SELECTOR)) return false

  const root = getCustomSelectRoot(el)
  if (!root || !rootHasSearch(root)) return false

  filterOptions(root, el.value)
  return false
}

export function handleCustomSelectKeydown(event: KeyboardEvent): boolean {
  if (event.key !== "Escape" || !openRoot) return false

  const root = openRoot
  const trigger = root.querySelector<HTMLElement>(TRIGGER_SELECTOR)
  setDropdownOpen(root, false)
  trigger?.focus()
  event.preventDefault()
  event.stopPropagation()
  return true
}

export function cancelCustomSelectMutationDebounce() {
  if (customSelectMutationDebounce) {
    window.clearTimeout(customSelectMutationDebounce)
    customSelectMutationDebounce = 0
  }
}

export function createCustomSelectMutationObserver(): MutationObserver {
  const observer = new MutationObserver(() => {
    if (customSelectMutationDebounce)
      window.clearTimeout(customSelectMutationDebounce)
    customSelectMutationDebounce = window.setTimeout(() => {
      customSelectMutationDebounce = 0
      syncAllCustomSelectTriggers()
    }, 100)
  })
  observer.observe(document.body, { childList: true, subtree: true })
  return observer
}
