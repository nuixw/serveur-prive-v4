"use client"

import clsx from "clsx"
import { ReactNode } from "react"
import { Icon } from "../icon"
import { Link } from "../link"

interface BaseButtonProps {
  children?: ReactNode
  icon?: string
  iconPosition?: "left" | "right"
  className?: string
  disabled?: boolean
  variant?: "primary" | "secondary" | "tertiary"
  border?: boolean
  transparent?: boolean
  iconOnly?: boolean
  onClick?: () => void
  /** Rattache le bouton à un champ mot de passe (`id`) pour le script global `DomInteractions`. */
  passwordToggleTargetId?: string
}

interface LinkButtonProps extends BaseButtonProps {
  href: string
  type?: never
}

interface NativeButtonProps extends BaseButtonProps {
  href?: undefined
  type?: "button" | "submit" | "reset"
}

export type ButtonProps = LinkButtonProps | NativeButtonProps

export const Button = ({
  children,
  icon,
  iconPosition = "right",
  href,
  className,
  onClick,
  disabled = false,
  variant = "primary",
  border = false,
  transparent = false,
  iconOnly = false,
  type,
  passwordToggleTargetId,
  ...props
}: ButtonProps) => {
  const Content = (
    <>
      {icon && iconPosition == "left" && (
        <Icon icon={icon} className="btn-icon" />
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition == "right" && (
        <Icon icon={icon} className="btn-icon" />
      )}
    </>
  )

  const classNames = clsx(
    "btn",
    className,
    variant,
    border && "border",
    transparent && "transparent",
    iconOnly && "icon-only"
  )

  const attrs = {
    className: classNames,
    onClick,
    disabled
  }

  const passwordToggleAttrs =
    passwordToggleTargetId && !href
      ? {
          "data-password-toggle": "",
          "data-password-target": passwordToggleTargetId
        }
      : {}

  if (href) {
    return (
      <Link
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        {...attrs}
        href={href}
      >
        {Content}
      </Link>
    )
  } else {
    return (
      <button
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        {...passwordToggleAttrs}
        {...attrs}
        type={type ?? "button"}
      >
        {Content}
      </button>
    )
  }
}
