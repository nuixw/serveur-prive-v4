"use client"

import { ColorRadio, DOMINANT_COLOR_OPTIONS } from "@/components/form"
import { useEffect, useState } from "react"

export function DominantColorExample() {
  const [color, setColor] = useState("red")

  useEffect(() => {
    document.body.style.setProperty("--primary", `var(--color-${color})`)
    return () => {
      document.body.style.removeProperty("--primary")
    }
  }, [color])

  return (
    <ColorRadio
      id="kit-dominant-color"
      name="dominant-color"
      icon="hugeicons:paint-bucket"
      label="Couleur dominante"
      options={DOMINANT_COLOR_OPTIONS}
      value={color}
      onChange={setColor}
    />
  )
}
