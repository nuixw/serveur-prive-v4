// Comment: Comment enlever toutes les transitions pendant le changement de thème ?
// Pour désactiver toutes les transitions lors du switch de thème, on injecte temporairement une feuille de style qui force "transition: none !important" sur tous les éléments.
// Cette logique s’exécute à chaque changement de thème via onClick, et retire la feuille de style après un repaint.

'use client'

import { Icon } from '@/components/icon'
import { useTheme } from 'next-themes'

function disableTransitionsTemporarily() {
  const style = document.createElement('style')
  style.innerHTML = `* { transition: none !important; }`
  document.head.appendChild(style)
  // Force a reflow pour appliquer le style avant suppression
  // @ts-ignore
  void document.body.offsetHeight
  setTimeout(() => {
    style.parentNode?.removeChild(style)
  }, 0)
}

export function Switch() {
  const { theme, setTheme } = useTheme()
  const isLight = theme === 'light'
  const isDark = theme === 'dark'

  function handleSetTheme(nextTheme: 'light' | 'dark') {
    disableTransitionsTemporarily()
    setTheme(nextTheme)
  }

  return (
    <div className="switch-theme" role='group' aria-label='Choix du thème'>
      <button
        type='button'
        onClick={() => handleSetTheme('light')}
        className="switch-theme-button"
        aria-label='Activer le thème clair'
        aria-pressed={isLight ? 'true' : 'false'}
      >
        <Icon icon='hugeicons:sun-03' aria-hidden='true' />
      </button>
      <button
        type='button'
        onClick={() => handleSetTheme('dark')}
        className="switch-theme-button"
        aria-label='Activer le thème sombre'
        aria-pressed={isDark ? 'true' : 'false'}
      >
        <Icon icon='hugeicons:moon-02' aria-hidden='true' />
      </button>
    </div>
  )
}