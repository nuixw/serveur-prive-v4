"use client"

import NextTopLoader from "nextjs-toploader"
import { Footer } from "../footer"
import { Header } from "../header"

interface MainProps {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <NextTopLoader height={2} showSpinner={false} zIndex={9999999} />
    </>
  )
}
