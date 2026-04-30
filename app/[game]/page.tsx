"use client"

import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Button } from "@/components/button"
import { Wrapper } from "@/components/wrapper"
import { Icon } from "@iconify/react"
import { useParams } from "next/navigation"

export default function Page() {
  const params = useParams()
  const game = params.game as string

  return (
    <>
      <Banner
        className="banner-is-aside game-banner"
        style={
          {
            "--bg-url": `url(/img/games/banner/${game}-cover.webp)`
          } as React.CSSProperties
        }
      >
        <div className="game-banner-content">
          <h1>
            Trouvez un serveur Minecraft gratuit et Français
            sur&nbsp;notre&nbsp;classement
          </h1>
          <div className="paragraph">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              quibusdam repellendus et quo officiis quod rem, illo nostrum neque
              impedit atque sapiente dolorem esse natus commodi nesciunt? Sint,
              expedita veritatis. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptas quas nam exercitationem, iure id
              doloribus velit in, quam facere, dignissimos laboriosam provident
              iste dolor recusandae sint. Fugit dolor labore autem? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="banner-aside game-banner-aside">
          <div className="game-banner-top">
            <img
              src={`/img/games/logo/${game}-logo.webp`}
              alt={`logotype`}
              width={520}
              height={280}
              loading="lazy"
              draggable="false"
              className="game-banner-logo"
            />
          </div>
          <div className="banner-bottom">
            <BannerStat icon="hugeicons:left-to-right-list-dash">
              <strong>1,754</strong> serveurs
            </BannerStat>
            <BannerStat icon="hugeicons:download-02">
              <strong>87,954</strong> votes
            </BannerStat>
          </div>
          <Button href="/" icon="hugeicons:add-circle">
            Ajouter mon serveur
          </Button>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-relative">
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:label-important" /> Tags
            </h2>
            <h2>
              <Icon icon="hugeicons:server-stack-01" /> Versions
            </h2>
            <h2>
              <Icon icon="hugeicons:two-factor-access" /> Accessibilité
            </h2>
          </div>
          <Button href="/default" icon="hugeicons:cloud" variant="secondary">
            Louer un serveur
          </Button>
          <Button
            href="/"
            icon="hugeicons:grid-view"
            iconPosition="left"
            variant="secondary"
            border
          >
            Retour aux jeux
          </Button>
        </aside>
        <div className="wrapper-content">
          <div className="bloc">test</div>
        </div>
      </Wrapper>
    </>
  )
}
