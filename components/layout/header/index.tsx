import { Button } from "@/components/button"
import { Input } from "@/components/form"
import { games } from "@/lib/games"
import Link from "next/link"
import { Switch } from "./switch"

export const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="header-logo">
          serveur<strong>prive</strong>
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
                  <Link href={`/${game.id}`} title={game.nom} className="header-game-link">
                    <img src={`/img/games/logo/${game.id}-logo.webp`} alt={game.nom + " logotype"} width={520} height={280} loading="lazy" draggable="false" className="header-game-logo" />
                    <img src={`/img/games/affiche/${game.id}.webp`} alt={game.nom + " serveur privé"} width={520} height={700} loading="lazy" draggable="false" className="header-game-bg" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-search">
          <Input icon="hugeicons:search-01" type="search" name="search" placeholder="Rechercher un serveur privé..." />
        </div>
      </div>
      <div className="header-right">
        <Switch />
        <Button icon="hugeicons:login-circle-01" variant="secondary" border>
          Se connecter
        </Button>
        <Button icon="hugeicons:add-circle">
          Ajouter mon serveur
        </Button>
      </div>
    </header>
  )
}
