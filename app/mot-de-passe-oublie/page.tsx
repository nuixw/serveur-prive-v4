import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Input } from "@/components/form"
import { Link } from "@/components/link"
import Script from "next/script"

export default function Page() {
  return (
    <div className="login">
      <Container>
        <div className="login-left">
          <h1>
            Récupération de votre mot de passe associé à votre compte
            serveur-prive.net
          </h1>
        </div>
        <div className="bloc login-right">
          <h2>Mot de passe oublié</h2>
          <p className="intro">
            Entrez l&apos;adresse e-mail de votre compte utilisateur et nous
            vous enverrons un lien de réinitialisation de mot de passe.
          </p>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            async
            defer
          />
          <form className="form" action="">
            <Input
              id="mot-de-passe-oublie-email"
              label="Votre adresse e-mail"
              icon="hugeicons:mail-01"
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              required
            />
            <div className="login-form-bottom">
              <div className="cloudflare">
                <div
                  data-sitekey="1x00000000000000000000AA"
                  data-theme="auto"
                  data-size="normal"
                />
              </div>
              <Button type="submit" icon="hugeicons:reset-password">
                Récupérer
              </Button>
            </div>
          </form>
          <div className="login-right-bottom">
            <span>
              Vous souhaitez vous connecter ?{" "}
              <Link href="/connexion">Connexion</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}
