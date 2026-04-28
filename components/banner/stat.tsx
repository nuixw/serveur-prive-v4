import { Icon } from "@/components/icon"
import clsx from "clsx"

interface BannerStatProps {
  className?: string
  icon: string
  children: React.ReactNode
}

export const BannerStat = ({ className, icon, children }: BannerStatProps) => {
  const classNames = clsx("banner-stat", className)

  return (
    <div className={classNames}>
      <Icon icon={icon} />
      <span>{children}</span>
    </div>
  )
}