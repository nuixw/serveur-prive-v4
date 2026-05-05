"use client"

import clsx from "clsx"
import { ReactNode } from "react"
import { Icon } from "../icon"
import { Link } from "../link"

export interface ButtonProps {
  children?: ReactNode
  icon?: string
  iconPosition?: "left" | "right"
  href?: string
  className?: string
  disabled?: boolean
  variant?: "primary" | "secondary" | "tertiary"
  border?: boolean
  transparent?: boolean
  iconOnly?: boolean
  onClick?: () => void
}

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
        {...attrs}
      >
        {Content}
      </button>
    )
  }
}
