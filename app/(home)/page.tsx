import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { games } from "@/lib/games"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Banner className="home-banner">
        <div className="home-banner-left">
          <h1>Trouvez ou référencez <span>un serveur <strong>privé</strong> de jeu</span> sur nos classements gratuits.</h1>
          <div className="banner-bottom">
            <Button icon="hugeicons:add-circle">Ajouter mon serveur</Button>
            <BannerStat icon="hugeicons:left-to-right-list-dash"><strong>243,754</strong> serveurs</BannerStat>
            <BannerStat icon="hugeicons:download-02"><strong>1,487,954</strong> votes</BannerStat>
          </div>
        </div>
        <div className="home-banner-right">
          <img className="home-banner-right-image" src="/img/home/home-banner-characters.webp" alt="Banner right" loading="lazy" draggable="false" width={1342} height={804} />
        </div>
      </Banner>
      <Container> 
        <div className="home-top">
          <h2>Explorez la liste des <strong>serveurs privés</strong> en choisissant votre jeu préféré.</h2>
        </div>
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-card-content">
                <img src={`/img/games/logo/${game.id}-logo.webp`} alt={game.nom + " logotype"} width={520} height={280} loading="lazy" draggable="false" />
                <div className="game-card-serveurs"><strong>8,963</strong> serveurs</div>
                <div className="game-card-tags">
                  <span className="game-card-tag">{game.nom}</span>
                  {game.tags.map((tag) => (
                    <span key={tag} className="game-card-tag">{tag}</span>
                  ))}
                </div>
                <Link href={`/${game.id}`} className="game-card-link">
                Explorer les serveurs
                </Link>
              </div>
              <img src={`/img/games/affiche/${game.id}.webp`} alt={game.nom + " serveur privé"} width={520} height={700} loading="lazy" draggable="false" className="game-card-bg" />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
