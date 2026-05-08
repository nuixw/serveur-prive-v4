import { Button } from "@/components/button"
import { Input } from "@/components/form"
import { Link } from "@/components/link"
import { Stars } from "@/components/stars"
import { games } from "@/lib/games"
import { useAppStore } from "@/stores/app"
import { Switch } from "./switch"
import clsx from "clsx"

export const Header = () => {
  const { isConnected } = useAppStore()

  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="header-logo">
          <span className="logo">
            serveur<strong>prive</strong>
          </span>
        </Link>
        <div className="header-games">
          <Button
            icon="hugeicons:award-01"
            variant="secondary"
            transparent
            aria-label="Afficher la liste des jeux"
            aria-haspopup="menu"
            aria-controls="header-games-list"
          >
            Tous les jeux
          </Button>
          <nav className="header-games-nav" aria-label="Navigation des jeux">
            <ul className="header-games-list" id="header-games-list">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    href={`/${game.id}`}
                    title={game.nom}
                    className="header-game-link"
                  >
                    <img
                      src={`/img/games/logo/${game.id}-logo.webp`}
                      alt={game.nom + " logotype"}
                      width={520}
                      height={280}
                      loading="lazy"
                      draggable="false"
                      className="header-game-logo"
                    />
                    <img
                      src={`/img/games/affiche/${game.id}.webp`}
                      alt={game.nom + " serveur privé"}
                      width={520}
                      height={700}
                      loading="lazy"
                      draggable="false"
                      className="header-game-bg"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-search">
          <Input
            icon="hugeicons:search-01"
            type="search"
            name="search"
            placeholder="Rechercher un serveur privé..."
          />
          <div className="search-results">
            <div className="serveur-small-list">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "serveur-item serveur-small",
                    index === 0 && "serveur-premium"
                  )}
                  data-link="/serveur"
                >
                  <img
                    className="serveur-image"
                    src="https://placehold.co/200x100"
                    width={200}
                    height={100}
                    loading="lazy"
                    draggable="false"
                    alt="Nom du serveur"
                  />
                  <div className="serveur-small-content">
                    <Link href="/serveur" className="serveur-item-title">
                      HYPING - LE MEILLEUR SERVEUR MINECRAFT DE 2026
                    </Link>
                    <div className="serveur-small-stats">
                      <Stars note={4} />
                      <div className="tags-list" data-truncate>
                        <span className="tag" data-truncate-item>
                          Survie
                        </span>
                        <span className="tag" data-truncate-item>
                          PVP
                        </span>
                        <span className="tag" data-truncate-item>
                          Vanilla
                        </span>
                        <span className="tag" data-truncate-item>
                          PVP Faction
                        </span>
                        <span
                          className="tag"
                          data-truncate-more
                          style={{ display: "none" }}
                        >
                          +0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <Switch />
        {isConnected ? (
          <Button
            href="/profil"
            variant="secondary"
            icon="hugeicons:user"
            aria-label="Profil"
            border
          >
            Nicobel0
          </Button>
        ) : (
          <Button
            href="/connexion"
            icon="hugeicons:login-circle-01"
            variant="secondary"
            aria-label="Se connecter"
            border
          >
            Se connecter
          </Button>
        )}
        <Button
          href="/"
          icon="hugeicons:add-circle"
          aria-label="Ajouter mon serveur"
        >
          Ajouter mon serveur
        </Button>
      </div>
    </header>
  )
}
