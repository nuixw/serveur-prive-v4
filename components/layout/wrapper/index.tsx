"use client"

import NextTopLoader from "nextjs-toploader"
import { Footer } from "../footer"
import { Header } from "../header"

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <NextTopLoader height={2} showSpinner={false} zIndex={9999999} />
    </>
  )
}
