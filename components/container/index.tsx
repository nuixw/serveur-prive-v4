import clsx from "clsx"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  const classNames = clsx("container", className)
  return <div className={classNames}>{children}</div>
}
