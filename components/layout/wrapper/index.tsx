"use client"

import { Header } from "../header"

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  )
}
