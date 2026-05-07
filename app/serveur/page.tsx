"use client"

import { Avatar } from "@/components/avatar"
import { Banner } from "@/components/banner"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/button"
import { VotesHistoryChart } from "@/components/charts/votes-history"
import { Textarea } from "@/components/form"
import { Pagination } from "@/components/pagination"
import { Socials } from "@/components/socials"
import { Stars } from "@/components/stars"
import { StarsRatingInput } from "@/components/stars/rating-input"
import { Wrapper } from "@/components/wrapper"
import { useAppStore } from "@/stores/app"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { useEffect } from "react"

const categories = [
  {
    title: "Tags",
    icon: "hugeicons:label-important",
    tags: [
      { label: "Survie", href: "/servers?tag=survie" },
      { label: "PVP", href: "/servers?tag=pvp" },
      { label: "Vanilla", href: "/servers?tag=vanilla" },
      { label: "PVP Faction", href: "/servers?tag=pvp-faction" }
    ]
  }
]

const socials = [
  {
    id: "telegram",
    icon: "hugeicons:telegram",
    name: "Telegram",
    href: "https://t.me/serveur_prive"
  },
  {
    id: "x",
    icon: "hugeicons:new-twitter",
    name: "X - Twitter",
    href: "https://x.com/serveur_prive"
  },
  {
    id: "discord",
    icon: "hugeicons:discord",
    name: "Discord",
    href: "https://discord.gg/JmMszJE"
  },
  {
    id: "instagram",
    icon: "hugeicons:instagram",
    name: "Instagram",
    href: "https://www.instagram.com/serveur_prive"
  },
  {
    id: "youtube",
    icon: "hugeicons:youtube",
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw"
  }
]

export default function Page() {
  const { type, setType, isConnected } = useAppStore()

  useEffect(() => {
    const root = document.documentElement

    if (type !== "premium") {
      root.style.removeProperty("--primary")
      root.style.removeProperty("--primary-light")
      return
    }

    root.style.setProperty("--primary", "oklch(0.7857 0.1313 222.87)")
    root.style.setProperty("--primary-light", "oklch(0.8214 0.1176 217.54)")

    return () => {
      root.style.removeProperty("--primary")
      root.style.removeProperty("--primary-light")
    }
  }, [type])

  return (
    <>
      <select
        name="type"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value as "default" | "premium")}
        className="tester"
      >
        <option value="default">Default</option>
        <option value="premium">Premium</option>
      </select>
      <Banner
        className="banner-is-aside serveur-banner"
        style={
          {
            "--bg-url":
              type === "premium"
                ? `url(/img/banner-premium_test_minecraft.webp)`
                : `url(/img/games/banner/minecraft-cover.webp)`
          } as React.CSSProperties
        }
      >
        <div className="serveur-banner-content">
          <Breadcrumb
            items={[
              { title: "Accueil", href: "/" },
              { title: "Minecraft", href: "/minecraft" },
              {
                title: "HYPING - LE MEILLEUR SERVEUR MINECRAFT DE 2026",
                href: "/serveur"
              }
            ]}
          />
          <h1>HYPING - LE MEILLEUR SERVEUR MINECRAFT DE 2026</h1>
          <div className="serveur-banner-infos">
            <Stars note={4} />
            <div className="tags-list">
              <span className="tag">Survie</span>
              <span className="tag">PVP</span>
              <span className="tag">Vanilla</span>
              <span className="tag">PVP Faction</span>
            </div>
          </div>
          <div className="banner-bottom">
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
        <div className="banner-aside">
          <div className="serveur-position-wrapper">
            <div className="serveur-position">1</div>
            {type === "premium" && (
              <div className="serveur-position serveur-position-premium">
                <Icon icon="hugeicons:police-badge" />
              </div>
            )}
          </div>
          <img
            src="https://placehold.co/200x100"
            width={200}
            height={100}
            loading="lazy"
            draggable="false"
            className="serveur-banner-image"
            alt="Nom du serveur"
          />
          <div className="serveur-banner-bottom">
            <Button
              href="/minecraft"
              icon="hugeicons:arrow-turn-backward"
              variant="secondary"
              aria-label="Retour à la liste des serveurs"
              iconOnly
            />
            <Button
              href="/vote"
              className="btn-vote"
              icon="hugeicons:download-02"
            >
              Voter
            </Button>
            <Button
              href="https://serveur-prive.net"
              icon="hugeicons:link-circle-02"
              variant="secondary"
              aria-label="Ouvrir le site du serveur"
              iconOnly
            />
          </div>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-relative aside-responsive-left">
          <div className="bloc bloc-author">
            <Avatar />
            <div className="bloc-author-text">
              <span>Proposé par</span>
              <Link href="/serveur">Nicobel0</Link>
            </div>
          </div>
          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:download-02" /> Votes total
              </h2>
              <div className="bloc-section-flex-right">
                <strong className="color-primary">15,650</strong>
              </div>
            </div>
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:chatting-01" /> Avis
              </h2>
              <div className="bloc-section-flex-right">
                <strong className="color-primary">45 commentaires</strong>
              </div>
            </div>
          </div>
          <div className="bloc">
            {categories.map((category) => (
              <div
                className="bloc-section bloc-section-flex"
                key={category.title}
              >
                <h2>
                  <Icon icon={category.icon} /> Autres serveurs
                </h2>
                <ul className="tags-list">
                  {category.tags.map((tag) => (
                    <li key={tag.label}>
                      <a href={`/minecraft`} className="tag">
                        {tag.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:server-stack-01" /> Version
              </h2>
              <a href={`/minecraft`} className="tag">
                v1.21
              </a>
            </div>
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:two-factor-access" /> Accessibilité
              </h2>
              <a href={`/minecraft`} className="tag">
                Public
              </a>
            </div>
          </div>
          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:server-stack-01" /> Création
              </h2>
              <time className="bloc-section-flex-right" dateTime="2021-09-17">
                <strong>17 Septembre 2021</strong>
              </time>
            </div>
          </div>
          <Socials socials={socials} />
        </aside>
        <div className="wrapper-content">
          <div className="bloc bloc-no-padding">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/lw0RldCJH-0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:text-align-left" /> A propos du serveur
            </h2>
            <div className="paragraph">
              <p>
                Hyping est la meilleure expérience Minecraft francophone du
                moment. 4 modes de jeu actifs, 0 Pay-to-Win, compatible sur
                Minecraft Java et Bedrock.
              </p>
              <p>
                Un serveur où 500 000 joueurs ont déjà choisi de passer leur
                temps parce que le gameplay est réellement meilleur. Pourquoi
                pas toi ?
              </p>
              <ul>
                <li>IP Java : MC.HYPING.FR</li>
                <li>IP Bedrock : JOIN.PLAYHYPING.NET</li>
              </ul>
            </div>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:chart-line-data-01" /> Historique des votes
            </h2>
            <VotesHistoryChart />
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:chatting-01" /> Avis des utilisateurs{" "}
              <span className="color-primary">2</span>
            </h2>
            <div className="comments-list">
              <div className="comment">
                <div className="comment-left">
                  <Avatar />
                </div>
                <div className="comment-right">
                  <div className="comment-right-top">
                    <Stars note={5} />
                    <div className="comment-date">
                      Publié le 17 Septembre 2021 par{" "}
                      <Link href="/serveur">LeGamerDu_75</Link>
                    </div>
                  </div>
                  <div className="paragraph">
                    <p>
                      Pas de doute: cest bien lun des meilleurs serveurs
                      Minecraft à exister! Le staff est réactif et la communauté
                      super sympa. Il est rare de sennuyer sur ce serveur: il y
                      a 4 mondes différents à choisir. Le serveur est rempli
                      dobjets custom et le Shop entre joueurs change tout!
                    </p>
                    <p>
                      Le seul point négatif qui risquait que je mette 4 étoiles
                      est quil bug souvent, mais ils sont vite réparés. Ce
                      serveur est super pour jouer seul ou entre amis!
                    </p>
                  </div>
                  <details className="comment-reply-form">
                    <summary
                      className="comment-add-reply"
                      data-close="Annuler ma réponse"
                    >
                      <span>Répondre</span>
                    </summary>
                    <form className="form" action="">
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="Ajouter une réponse…"
                      />
                      <Button type="submit" icon="hugeicons:navigation-03">
                        Poster ma réponse
                      </Button>
                    </form>
                  </details>
                  <div className="comment comment-reply">
                    <div className="comment-left">
                      <Avatar />
                    </div>
                    <div className="comment-right">
                      <div className="comment-right-top">
                        <div className="comment-date">
                          Publié le 17 Septembre 2021 par{" "}
                          <Link href="/serveur">LeGamerDu_75</Link>
                        </div>
                      </div>
                      <div className="paragraph">
                        <p>
                          Super serveur ! L'ambiance est super, des évents
                          réguliers, des staffs réactifs. Je joue depuis environ
                          3 mois et il est toujours aussi addictif et
                          intéressant, aucun moyen de s'ennuyer avec les quêtes,
                          les évents, les classements, les jobs…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="comment-left">
                  <Avatar />
                </div>
                <div className="comment-right">
                  <div className="comment-right-top">
                    <Stars note={3} />
                    <div className="comment-date">
                      Publié le 17 Septembre 2021 par{" "}
                      <Link href="/serveur">LeGamerDu_75</Link>
                    </div>
                  </div>
                  <div className="paragraph">
                    <p>
                      Pas de doute: cest bien lun des meilleurs serveurs
                      Minecraft à exister! Le staff est réactif et la communauté
                      super sympa. Il est rare de sennuyer sur ce serveur: il y
                      a 4 mondes différents à choisir. Le serveur est rempli
                      dobjets custom et le Shop entre joueurs change tout!
                    </p>
                    <p>
                      Le seul point négatif qui risquait que je mette 4 étoiles
                      est quil bug souvent, mais ils sont vite réparés. Ce
                      serveur est super pour jouer seul ou entre amis!
                    </p>
                  </div>
                  <details className="comment-reply-form">
                    <summary
                      className="comment-add-reply"
                      data-close="Annuler ma réponse"
                    >
                      <span>Répondre</span>
                    </summary>
                    <form className="form" action="">
                      <Textarea
                        id="comment"
                        name="comment"
                        placeholder="Ajouter une réponse…"
                      />
                      <Button type="submit" icon="hugeicons:navigation-03">
                        Poster ma réponse
                      </Button>
                    </form>
                  </details>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:star" /> Laissez un avis
            </h2>
            <form className="form" action="">
              <StarsRatingInput />
              <Textarea
                id="comment"
                icon="hugeicons:pen-01"
                name="comment"
                placeholder="Votre avis en quelques mots…"
              />
              <Button type="submit" icon="hugeicons:navigation-03">
                Envoyer mon avis
              </Button>
              {!isConnected && (
                <div className="message-blured">
                  <Icon icon="hugeicons:square-lock-02" />
                  <p>
                    Pour commenter, vous devez{" "}
                    <Link href="/connexion">être connecté</Link> et vous devez
                    avoir cumulé plus de 10 votes pour le serveur.
                  </p>
                  <p className="color-primary">
                    Vous avez cumulé <strong>0</strong> votes.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
        <Button
          className="btn-aside-responsive-left"
          icon="hugeicons:menu-01"
          iconOnly
          aria-label="Menu & informations"
        >
          <Icon icon="hugeicons:cancel-01" className="btn-icon btn-icon-swap" />
        </Button>
      </Wrapper>
    </>
  )
}
