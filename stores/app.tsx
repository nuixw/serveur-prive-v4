import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AppState {
  isConnected: boolean
  setConnected: (connected: boolean) => void
  type: "default" | "premium"
  setType: (type: "default" | "premium") => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isConnected: false,
      setConnected: (connected) => set({ isConnected: connected }),
      type: "default",
      setType: (type) => set({ type })
    }),
    {
      name: "app-storage"
    }
  )
)
