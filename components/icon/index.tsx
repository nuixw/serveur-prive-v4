"use client"

// https://icones.js.org/

import { Icon as Iconify, IconProps as IconifyProps } from "@iconify/react"
import clsx from "clsx"

interface IconProps extends Omit<IconifyProps, "icon"> {
  icon: string
}

export const Icon = ({ icon, ...props }: IconProps) => (
  <Iconify
    {...props}
    className={clsx("icon", props.className)}
    icon={icon}
    data-icon={icon}
  />
)
