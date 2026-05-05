import { Icon } from "@/components/icon"
import { Link } from "@/components/link"

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <Icon icon="alert-circle" width={64} height={64} />
        <h1>Page introuvable</h1>
        <p>La page que vous cherchez n’existe pas ou a été déplacée.</p>
        <Link href="/" className="not-found__link">
          <Icon icon="arrow-left" />
          Retour à l’accueil
        </Link>
      </div>
    </main>
  )
}

export { NotFound as default }
