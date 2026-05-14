const MODAL_OPENED_CLASS = "modal-opened"
const BODY_MODAL_OPEN_CLASS = "modal-is-open"

declare global {
  interface Window {
    openModal?: (id: string) => void
    closeModal?: (id: string) => void
  }
}

function getModalRoot(id: string): HTMLElement | null {
  return document.querySelector<HTMLElement>(`[data-modal="${CSS.escape(id)}"]`)
}

function syncBodyModalLock() {
  const hasOpen =
    document.querySelector<HTMLElement>(
      `[data-modal].${MODAL_OPENED_CLASS}`
    ) !== null
  document.body.classList.toggle(BODY_MODAL_OPEN_CLASS, hasOpen)
}

function setModalVisibility(root: HTMLElement, isOpen: boolean) {
  root.classList.toggle(MODAL_OPENED_CLASS, isOpen)
  root.setAttribute("aria-hidden", isOpen ? "false" : "true")
  syncBodyModalLock()
}

export class Modal {
  open(id: string) {
    const root = getModalRoot(id)
    if (!root) return
    setModalVisibility(root, true)
  }

  close(id: string) {
    const root = getModalRoot(id)
    if (!root) return
    setModalVisibility(root, false)
  }

  closeAll() {
    const opened = document.querySelectorAll<HTMLElement>(
      `[data-modal].${MODAL_OPENED_CLASS}`
    )
    opened.forEach((root) => setModalVisibility(root, false))
  }
}

export const modal = new Modal()

export function openModal(id: string) {
  modal.open(id)
}

export function closeModal(id: string) {
  modal.close(id)
}

export function handleModalClick(event: MouseEvent): boolean {
  const target = event.target
  if (!(target instanceof Element)) return false

  const openTrigger = target.closest<HTMLElement>("[data-modal-open]")
  if (openTrigger) {
    const id = openTrigger.getAttribute("data-modal-open")
    if (id) {
      event.preventDefault()
      modal.open(id)
      return true
    }
  }

  const closeTrigger = target.closest<HTMLElement>("[data-modal-close]")
  if (closeTrigger) {
    const id = closeTrigger.getAttribute("data-modal-close")
    if (id) {
      event.preventDefault()
      modal.close(id)
      return true
    }
  }

  const openedRoot = target.closest<HTMLElement>(
    `[data-modal].${MODAL_OPENED_CLASS}`
  )
  if (openedRoot) {
    const clickedPanel = target.closest<HTMLElement>(".modal-panel")
    if (clickedPanel && openedRoot.contains(clickedPanel)) return false

    const id = openedRoot.getAttribute("data-modal")
    if (id) {
      event.preventDefault()
      modal.close(id)
      return true
    }
  }

  return false
}

function onDocumentKeydown(event: KeyboardEvent) {
  if (event.key !== "Escape") return
  const opened = document.querySelector<HTMLElement>(
    `[data-modal].${MODAL_OPENED_CLASS}`
  )
  if (!opened) return
  event.preventDefault()
  modal.closeAll()
}

export function initModalListeners(): () => void {
  document.addEventListener("keydown", onDocumentKeydown, true)

  window.openModal = openModal
  window.closeModal = closeModal

  return () => {
    document.removeEventListener("keydown", onDocumentKeydown, true)
    modal.closeAll()
    delete window.openModal
    delete window.closeModal
  }
}
