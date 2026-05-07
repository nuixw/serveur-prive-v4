"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Input } from "@/components/form"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { useAppStore } from "@/stores/app"
import { redirect } from "next/navigation"
import Script from "next/script"

const providers = [
  {
    id: "google",
    name: "Google",
    icon: "hugeicons:google"
  },
  {
    id: "discord",
    name: "Discord",
    icon: "hugeicons:apple"
  },
  {
    id: "microsoft",
    name: "Microsoft",
    icon: "hugeicons:microsoft"
  },
  {
    id: "github",
    name: "GitHub",
    icon: "hugeicons:github"
  },
  {
    id: "twitch",
    name: "twitch",
    icon: "hugeicons:twitch"
  },
  {
    id: "spotify",
    name: "spotify",
    icon: "hugeicons:spotify"
  },
  {
    id: "x",
    name: "X - Twitter",
    icon: "hugeicons:new-twitter"
  }
]

export default function Page() {
  const { setConnected } = useAppStore()

  return (
    <div className="login">
      <Container>
        <div className="login-left">
          <h1>
            Gérez vos serveurs privés, voter en toute simplicité en vous
            connectant à serveur-prive.net
          </h1>
        </div>
        <div className="bloc login-right">
          <h2>Se connecter</h2>
          <div className="providers">
            {providers.map((provider) => (
              <button
                type="button"
                key={provider.id}
                className="provider"
                data-provider={provider.id}
                aria-label={provider.name}
                data-social={provider.id}
              >
                <Icon icon={provider.icon} />
              </button>
            ))}
          </div>
          <div className="separator">ou</div>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          />
          <form className="form" action="">
            <Input
              id="connexion-email"
              label="Votre adresse e-mail ou nom d'utilisateur"
              icon="hugeicons:user"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
            />
            <Input
              id="connexion-password"
              label="Votre mot de passe"
              icon="hugeicons:lock-password"
              type="password"
              name="password"
              placeholder="Mot de passe"
              right={
                <Button
                  type="button"
                  aria-label="Afficher le mot de passe"
                  aria-pressed="false"
                  icon="hugeicons:view"
                  iconOnly
                  passwordToggleTargetId="connexion-password"
                >
                  <Icon icon="hugeicons:view-off" className="btn-icon-swap" />
                </Button>
              }
            />
            <label htmlFor="remember" className="field-checkbox">
              <input type="checkbox" id="remember" name="remember" />
              Se souvenir de moi
            </label>
            <div className="login-form-bottom">
              <div className="cloudflare">
                <div
                  data-sitekey="1x00000000000000000000AA"
                  data-theme="auto"
                  data-size="normal"
                />
              </div>
              <Button
                icon="hugeicons:login-circle-01"
                onClick={() => {
                  setConnected(true)
                  redirect("/profil")
                }}
              >
                Se connecter
              </Button>
            </div>
          </form>
          <div className="login-right-bottom">
            <span>
              <Link href="/mot-de-passe-oublie">Mot de passe oublié ?</Link>
            </span>
            <span>
              Pas inscrit ? <Link href="/inscription">Créer un compte</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}
