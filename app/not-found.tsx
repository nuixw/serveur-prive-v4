import { Banner } from "@/components/banner"
import { Button } from "@/components/button"

function NotFound() {
  return (
    <Banner className="not-found-banner">
      <h1>Page introuvable</h1>
      <p className="paragraph">
        La page que vous cherchez n’existe pas ou a été déplacée.
      </p>
      <Button href="/" icon="hugeicons:arrow-turn-backward" iconPosition="left">
        Retour à l'accueil
      </Button>
    </Banner>
  )
}

export { NotFound as default }
