import type { Metadata } from "next"
import { APP_BASE_URL, APP_NAME } from "./config"

interface MetadataSeoProps {
  title: string
  description: string
}

export const MetadataSeo = ({
  title,
  description
}: MetadataSeoProps): Metadata => {
  const headTitle = title
  const icon = "/favicon.svg"

  return {
    metadataBase: APP_BASE_URL,
    title: headTitle,
    description,
    authors: [{ name: APP_NAME }],
    creator: APP_NAME,
    publisher: APP_NAME,
    applicationName: APP_NAME,
    robots: {
      index: true,
      follow: true
    },
    icons: {
      icon,
      shortcut: icon,
      apple: icon
    },
    openGraph: {
      title: headTitle,
      description,
      type: "website",
      siteName: APP_NAME,
      locale: "fr",
      url: APP_BASE_URL,
      images: [
        {
          url: "/img/thumbnail.png",
          alt: description
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: headTitle,
      description,
      images: ["/img/thumbnail.png"],
      creator: "@serveur_prive",
      site: "@serveur_prive"
    }
  }
}
