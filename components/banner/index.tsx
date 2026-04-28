import clsx from "clsx"
import { Container } from "../container"

interface BannerProps {
  children: React.ReactNode
  className?: string
}

export const Banner = ({ children, className }: BannerProps) => {
  const classNames = clsx("banner", className)

  return (
    <div className={classNames}>
      <Container>
        <div className="banner-content">
          {children}
        </div>
      </Container>
    </div>
  )
}