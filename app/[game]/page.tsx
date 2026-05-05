"use client"

import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Button } from "@/components/button"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Stars } from "@/components/stars"
import { Wrapper } from "@/components/wrapper"
import clsx from "clsx"
import { useParams } from "next/navigation"

const categories = [
  {
    title: "Tags",
    icon: "hugeicons:label-important",
    tags: [
      { label: "Survie", href: "/servers?tag=survie" },
      { label: "PVP", href: "/servers?tag=pvp" },
      { label: "Vanilla", href: "/servers?tag=vanilla" },
      { label: "PVP Faction", href: "/servers?tag=pvp-faction" },
      { label: "Semi-RP", href: "/servers?tag=semi-rp" },
      { label: "Modde", href: "/servers?tag=modde" },
      { label: "Mini jeux", href: "/servers?tag=mini-jeux" },
      { label: "Skyblock", href: "/servers?tag=skyblock" },
      { label: "Freebuild", href: "/servers?tag=freebuild" },
      { label: "Roleplay", href: "/servers?tag=roleplay" },
      { label: "Launcher", href: "/servers?tag=launcher" },
      { label: "Creatif", href: "/servers?tag=creatif" },
      { label: "Hardcore", href: "/servers?tag=hardcore" },
      { label: "Practice", href: "/servers?tag=practice" },
      { label: "Bedwars", href: "/servers?tag=bedwars" },
      { label: "Oneblock", href: "/servers?tag=oneblock" },
      { label: "Hunger Games", href: "/servers?tag=hunger-games" },
      { label: "UHC", href: "/servers?tag=uhc" },
      { label: "Prison", href: "/servers?tag=prison" }
    ]
  },
  {
    title: "Versions",
    icon: "hugeicons:server-stack-01",
    tags: [
      { label: "v1.21", href: "/servers?version=v1.21" },
      { label: "v1.20", href: "/servers?version=v1.20" },
      { label: "19", href: "/servers?version=19" },
      { label: "v1.8", href: "/servers?version=v1.8" },
      { label: "v1.18", href: "/servers?version=v1.18" },
      { label: "v1.16", href: "/servers?version=v1.16" },
      { label: "v1.12", href: "/servers?version=v1.12" },
      { label: "v1.17", href: "/servers?version=v1.17" },
      { label: "v1.9", href: "/servers?version=v1.9" },
      { label: "v1.15", href: "/servers?version=v1.15" },
      { label: "v1.14", href: "/servers?version=v1.14" },
      { label: "v1.10", href: "/servers?version=v1.10" },
      { label: "v1.11", href: "/servers?version=v1.11" },
      { label: "v1.7", href: "/servers?version=v1.7" },
      { label: "v1.13", href: "/servers?version=v1.13" },
      { label: "v1.6", href: "/servers?version=v1.6" },
      { label: "v26.1", href: "/servers?version=v26.1" }
    ]
  },
  {
    title: "Accessibilité",
    icon: "hugeicons:two-factor-access",
    tags: [
      { label: "Premium", href: "/servers?access=premium" },
      { label: "Cracker", href: "/servers?access=cracker" }
    ]
  }
]

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
        <aside className="aside aside-relative aside-responsive-left">
          <div className="bloc">
            {categories.map((category) => (
              <div className="bloc-section" key={category.title}>
                <h2>
                  <Icon icon={category.icon} /> {category.title}
                </h2>
                <ul className="tags-list">
                  {category.tags.map((tag) => (
                    <li key={tag.label}>
                      <a href={`/${game}`} className="tag">
                        {tag.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
          <div className="sponso-serveur">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "sponso-serveur-item",
                  (index === 0 || index === 2) && "serveur-premium"
                )}
              >
                <div className="sponso-serveur-top">
                  <img
                    src="https://placehold.co/200x100"
                    width={200}
                    height={100}
                    loading="lazy"
                    draggable="false"
                    className="serveur-image"
                  />
                  <Stars note={4} />
                </div>
                <div className="sponso-serveur-bottom">
                  <Link href="/serveur" className="serveur-item-title">
                    {(index === 0 || index === 2) && (
                      <Icon icon="hugeicons:police-badge" />
                    )}{" "}
                    HYPING - LE MEILLEUR SERVEUR MINECRAFT DE 2026
                  </Link>
                  <div className="tags-list" data-truncate>
                    <span className="tag" data-truncate-static>
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
                      className="tag game-card-tag--more"
                      data-truncate-more
                      style={{ display: "none" }}
                    >
                      +0
                    </span>
                  </div>
                  <div className="serveur-stats">
                    <div className="serveur-stat">
                      <div className="serveur-stat-left">
                        <Icon
                          icon="hugeicons:user-multiple"
                          className="serveur-stat-icon"
                        />
                        <strong>415 / 2000</strong>
                      </div>
                      <div className="serveur-stat-right">
                        <div className="live" />
                      </div>
                    </div>
                    <div className="serveur-stat">
                      <div className="serveur-stat-left">
                        <Icon
                          icon="hugeicons:link-04"
                          className="serveur-stat-icon"
                        />
                        <strong>MC.HYPING.FR</strong>
                      </div>
                      <div className="serveur-stat-right">
                        <Button
                          aria-label="Copier l'url du serveur"
                          icon="hugeicons:copy-01"
                          variant="tertiary"
                          data-copy="MC.HYPING.FR"
                          iconOnly
                        >
                          <Icon
                            icon="hugeicons:checkmark-circle-02"
                            className="btn-icon btn-icon-swap"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={clsx("serveur-item", index === 1 && "serveur-premium")}
              data-link
            >
              <div className="serveur-item-left">
                <div className="serveur-position">{index + 1}</div>
                <img
                  className="serveur-image"
                  src="https://placehold.co/200x100"
                  width={200}
                  height={100}
                  loading="lazy"
                  draggable="false"
                />
                <div className="serveur-item-left-bottom">
                  <div className="serveur-item-rating">
                    <Stars note={4} />
                    <div className="serveur-item-avis">
                      <Icon
                        icon="hugeicons:chatting-01"
                        className="serveur-stat-icon"
                      />
                      45
                    </div>
                  </div>
                  <div className="serveur-item-vote">
                    <span>
                      <strong>15,650</strong> votes
                    </span>
                    <Button variant="secondary" icon="hugeicons:download-02">
                      Voter
                    </Button>
                  </div>
                </div>
              </div>
              <div className="serveur-item-right">
                <Link href="/serveur" className="serveur-item-title">
                  {index === 1 && <Icon icon="hugeicons:police-badge" />} HYPING
                  - LE MEILLEUR SERVEUR MINECRAFT DE 2026
                </Link>
                <div className="tags-list">
                  <span className="tag">Survie</span>
                  <span className="tag">PVP</span>
                  <span className="tag">Vanilla</span>
                  <span className="tag">PVP Faction</span>
                </div>
                <div className="serveur-item-description">
                  Hyping est la meilleure expérience Minecraft francophone du
                  moment. 4 modes de jeu actifs, 0 Pay-to-Win, compatible sur
                  Minecraft Java et Bedrock. Un serveur où 500 000 joueurs ont
                  déjà choisi de passer leur temps parce que le gameplay est
                  réellement innovant et adapté à tous. Rejoignez une communauté
                  soudée, participez à des événements réguliers, et découvrez
                  des fonctionnalités exclusives qui garantissent une aventure
                  unique chaque jour. Que vous soyez un vétéran de Minecraft ou
                  un nouveau joueur, Hyping offre un environnement accueillant,
                  sécurisé et sans tricheurs, propulsé par une équipe passionnée
                  et disponible.
                </div>
                <div className="serveur-stats">
                  <div className="serveur-stat">
                    <div className="serveur-stat-left">
                      <Icon
                        icon="hugeicons:user-multiple"
                        className="serveur-stat-icon"
                      />
                      <strong>415 / 2000</strong> <span> joueurs</span>
                    </div>
                    <div className="serveur-stat-right">
                      <div className="live" />
                    </div>
                  </div>
                  <div className="serveur-stat">
                    <div className="serveur-stat-left">
                      <Icon
                        icon="hugeicons:link-04"
                        className="serveur-stat-icon"
                      />
                      <strong>MC.HYPING.FR</strong>
                    </div>
                    <div className="serveur-stat-right">
                      <Button
                        aria-label="Copier l'url du serveur"
                        icon="hugeicons:copy-01"
                        variant="tertiary"
                        data-copy="MC.HYPING.FR"
                        iconOnly
                      >
                        <Icon
                          icon="hugeicons:checkmark-circle-02"
                          className="btn-icon btn-icon-swap"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="serveur-stat">
                    <div className="serveur-stat-left">
                      <Icon
                        icon="hugeicons:square-lock-02"
                        className="serveur-stat-icon"
                      />
                      Accès
                    </div>
                    <div className="serveur-stat-right">
                      <strong>Public</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="btn-aside-responsive-left"
          icon="hugeicons:sliders-horizontal"
          iconOnly
          aria-label="Filtrer les serveurs"
        >
          <Icon icon="hugeicons:cancel-01" className="btn-icon btn-icon-swap" />
        </Button>
      </Wrapper>
    </>
  )
}
