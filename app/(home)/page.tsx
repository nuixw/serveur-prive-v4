import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Input } from "@/components/form"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Presentation } from "@/components/presentation"
import { games } from "@/lib/games"

export default function HomePage() {
  return (
    <>
      <div className="home-banner-wrapper">
        <Banner className="home-banner">
          <div className="home-banner-left">
            <h1>
              Trouvez ou référencez{" "}
              <span>
                un serveur <strong>privé</strong> de jeu
              </span>{" "}
              sur nos classements gratuits.
            </h1>
            <div className="banner-bottom home-banner-bottom">
              <Button href="/" icon="hugeicons:add-circle">
                Ajouter mon serveur
              </Button>
              <BannerStat icon="hugeicons:left-to-right-list-dash">
                <strong>11,754</strong> serveurs
              </BannerStat>
              <BannerStat icon="hugeicons:download-02">
                <strong>487,954</strong> votes
              </BannerStat>
            </div>
          </div>
          <div className="home-banner-right">
            <img
              className="home-banner-right-image"
              src="/img/home/home-banner-characters.webp"
              alt="Banner right"
              loading="lazy"
              draggable="false"
              width={1342}
              height={804}
            />
          </div>
        </Banner>
      </div>
      <Container>
        <section>
          <div className="home-top">
            <h2>
              Explorez la liste des <strong>serveurs privés</strong> en
              choisissant votre jeu préféré.
            </h2>
            <Input
              icon="hugeicons:search-01"
              type="search"
              name="search"
              placeholder="Rechercher un jeu vidéo…"
            />
          </div>
          <div className="games-grid">
            {games.map((game) => (
              <div
                key={game.id}
                className="game-card"
                data-link={`/${game.id}`}
                aria-label={"Serveurs privés " + game.nom}
              >
                <div className="game-card-content">
                  <img
                    src={`/img/games/logo/${game.id}-logo.webp`}
                    alt={game.nom + " logotype"}
                    width={520}
                    height={280}
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="game-card-serveurs">
                    <strong>8,963</strong> serveurs
                  </div>
                  <div className="game-card-tags" data-truncate>
                    <span className="game-card-tag" data-truncate-item>
                      {game.nom}
                    </span>
                    {game.tags.map((tag) => (
                      <span
                        key={tag}
                        className="game-card-tag"
                        data-truncate-item
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="game-card-tag game-card-tag--more"
                      data-truncate-more
                      style={{ display: "none" }}
                    >
                      +0
                    </span>
                  </div>
                  <Link href={`/${game.id}`} className="game-card-link">
                    Explorer les serveurs
                    <Icon icon="hugeicons:arrow-right-02" />
                  </Link>
                </div>
                <img
                  src={`/img/games/affiche/${game.id}.webp`}
                  alt={game.nom + " serveurs privés"}
                  width={520}
                  height={700}
                  loading="lazy"
                  draggable="false"
                  className="game-card-bg"
                />
              </div>
            ))}
          </div>
        </section>
        <Presentation
          className="home-presentation"
          left={
            <>
              <img
                src="/img/home/home-presentation-characters.webp"
                alt="Presentation serveur privé"
                width={861}
                height={746}
                loading="lazy"
                draggable="false"
                className="home-presentation-left-image"
              />
              <h2>
                Une plateforme <strong>innovante</strong>&nbsp;dédiée à la
                promotion de serveurs de&nbsp;jeux
              </h2>
              <div className="intro">
                <p>
                  En offrant un référencement gratuit, nous aidons les
                  administrateurs de serveurs à accroître leur visibilité et à
                  se connecter efficacement avec une communauté de joueurs
                  ciblée et enthousiaste.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Que votre serveur concerne un jeu spécifique ou plusieurs
                  jeux, notre service assure une visibilité optimale et une
                  croissance rapide de votre base de joueurs.
                </p>
              </div>
            </>
          }
          top={
            <>
              <h2 data-selection-black>
                Vous êtes propriétaire d’un serveur privé, mais votre jeu vidéo
                n’est pas dans la&nbsp;liste&nbsp;?
              </h2>
              <div className="intro">
                <p>
                  Pas de panique ! Contactez-nous pour savoir si nous pourrions
                  l’ajouter !
                </p>
              </div>
              <img
                src="/img/home/home-presentation-top.webp"
                alt="Presentation serveur privé"
                width={619}
                height={331}
                loading="lazy"
                draggable="false"
                className="presentation-bg"
              />
            </>
          }
          bottom={
            <>
              <h2>
                Nos classements répertorient des <strong>milliers</strong>
                &nbsp;de serveurs de&nbsp;jeux
              </h2>
              <div className="intro">
                <p>
                  Serveur Privé est l'endroit idéal pour trouver un serveur
                  adapté à vos besoins, quel que soit votre jeu du moment ou le
                  type de serveur que vous recherchez, il y en a pour tous les
                  goûts.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Pour chaque serveur, vous trouverez une description concise
                  accompagnée d'évaluations d'autres joueurs, vous aidant ainsi
                  à choisir un serveur qui répond à vos attentes.
                </p>
              </div>
              <img
                src="/img/home/home-presentation-bottom.webp"
                alt="Presentation serveur privé"
                width={732}
                height={523}
                loading="lazy"
                draggable="false"
                className="presentation-bg"
              />
            </>
          }
        />
      </Container>
    </>
  )
}
