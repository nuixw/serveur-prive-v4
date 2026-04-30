import { Container } from "../container"

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Container className="wrapper">{children}</Container>
}
