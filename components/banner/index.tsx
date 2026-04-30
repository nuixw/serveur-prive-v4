import clsx from "clsx"
import { Container } from "../container"

interface BannerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const Banner = ({ children, className, style }: BannerProps) => {
  const classNames = clsx("banner", className)

  return (
    <section className={classNames} style={style}>
      <Container className="banner-container">{children}</Container>
    </section>
  )
}
