export const APP_NAME = "serveur-prive.net"

export const APP_COLOR_PRIMARY = "#FD4A5C"
export const APP_COLOR_SECONDARY = "#ffffff"
export const APP_THEME_COLOR = APP_COLOR_PRIMARY

export const APP_BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000"
