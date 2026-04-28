"use client"

import { Icon } from "@/components/icon"
import { useTheme } from "next-themes"

export const Switch = () => {
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"
  const isDark = theme === "dark"

  return (
    <div className="switch-theme" role="group" aria-label="Choix du thème">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="switch-theme-button"
        aria-label="Activer le thème clair"
        aria-pressed={isLight ? "true" : "false"}
      >
        <Icon icon="hugeicons:sun-03" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="switch-theme-button"
        aria-label="Activer le thème sombre"
        aria-pressed={isDark ? "true" : "false"}
      >
        <Icon icon="hugeicons:moon-02" aria-hidden="true" />
      </button>
    </div>
  )
}