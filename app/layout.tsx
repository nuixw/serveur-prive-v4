import { DomInteractions } from "@/components/dom-interactions"
import { Main } from "@/components/layout/main"
import { APP_THEME_COLOR } from "@/lib/config"
import { MetadataSeo } from "@/lib/metadata"
import "@/styles/globals.scss"
import type { LayoutProps } from "@/types/layout"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import { fonts } from "./fonts"

export const metadata = MetadataSeo({
  title: "Liste Serveur privé de jeux vidéo gratuit",
  description:
    "Découvrez le classement des serveurs privés de jeux vidéo. Trouvez un serveur Minecraft, Dofus, WoW, Arma, Habbo, Flyff et bien d'autres."
})

export const viewport = {
  themeColor: APP_THEME_COLOR
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning={true}>
      <body className={fonts}>
        <ThemeProvider>
          <Main>{children}</Main>
          <Suspense fallback={null}>
            <DomInteractions />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
