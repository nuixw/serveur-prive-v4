import clsx from "clsx"
import { Cal_Sans } from "next/font/google"
import localFont from "next/font/local"

const heading = Cal_Sans({
  variable: "--font-heading",
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["system-ui", "Arial"]
})

const main = localFont({
  variable: "--font-main",
  display: "swap",
  preload: true,
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
      weight: "300 800"
    },
    {
      path: "../public/fonts/satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "300 800"
    }
  ],
  fallback: ["system-ui", "Arial"]
})

export const fonts = clsx(heading.variable, main.variable)
