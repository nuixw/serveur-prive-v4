import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Input } from "@/components/form"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
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
  return (
    <div className="login">
      <Container>
        <div className="login-left">
          <h1>
            Gérez vos serveurs privés, voter en toute simplicité en vous
            inscrivant à serveur-prive.net
          </h1>
        </div>
        <div className="bloc login-right">
          <h2>Créer un compte</h2>
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
              id="inscription-username"
              label="Votre pseudonyme"
              icon="hugeicons:user"
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
            />
            <Input
              id="inscription-email"
              label="Votre adresse e-mail"
              icon="hugeicons:mail-01"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
            />
            <Input
              id="inscription-password"
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
                  passwordToggleTargetId="inscription-password"
                />
              }
            />
            <label htmlFor="inscription-terms" className="field-checkbox">
              <input
                type="checkbox"
                id="inscription-terms"
                name="terms"
                required
              />
              <span>
                En créant un compte, vous confirmez avoir lu et accepté les{" "}
                <Link href="/default">Conditions d&apos;utilisation</Link> et
                les <Link href="/default">Conditions de vente</Link>
              </span>
            </label>
            <div className="login-form-bottom">
              <div className="cloudflare">
                <div
                  data-sitekey="1x00000000000000000000AA"
                  data-theme="auto"
                  data-size="normal"
                />
              </div>
              <Button type="submit" icon="hugeicons:add-circle">
                S&apos;inscrire
              </Button>
            </div>
          </form>
          <div className="login-right-bottom">
            <span>
              Déjà inscrit ? <Link href="/connexion">Se connecter</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}
