"use client"

import clsx from "clsx"
import type { CSSProperties } from "react"
import { useEffect, useState } from "react"

import { Avatar } from "@/components/avatar"
import { Banner } from "@/components/banner"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Input } from "@/components/form"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Presentation } from "@/components/presentation"
import { Stars } from "@/components/stars"
import { Wrapper } from "@/components/wrapper"
import { useAppStore } from "@/stores/app"

interface VoteLeaderboardEntry {
  rank: number
  username: string
  votes: number
  profileHref: string
  isPremium?: boolean
}

function getVoteRankModifier(rank: number) {
  if (rank === 1) return "vote-rank--podium-first"
  if (rank === 2) return "vote-rank--podium-second"
  if (rank === 3) return "vote-rank--podium-third"
  return "vote-rank--plain"
}

const VOTE_LEADERBOARD_MOCK: VoteLeaderboardEntry[] = [
  {
    rank: 1,
    username: "deathskorpid",
    votes: 155,
    profileHref: "/profil/deathskorpid"
  },
  {
    rank: 2,
    username: "nexusbloom",
    votes: 148,
    profileHref: "/profil/nexusbloom",
    isPremium: true
  },
  {
    rank: 3,
    username: "craftwave",
    votes: 132,
    profileHref: "/profil/craftwave"
  },
  {
    rank: 4,
    username: "pixelnova",
    votes: 121,
    profileHref: "/profil/pixelnova"
  },
  {
    rank: 5,
    username: "blocksphere",
    votes: 118,
    profileHref: "/profil/blocksphere"
  },
  {
    rank: 6,
    username: "minegalaxy",
    votes: 104,
    profileHref: "/profil/minegalaxy",
    isPremium: true
  },
  {
    rank: 7,
    username: "voidrunner",
    votes: 99,
    profileHref: "/profil/voidrunner",
    isPremium: true
  },
  {
    rank: 8,
    username: "emberforge",
    votes: 94,
    profileHref: "/profil/emberforge"
  },
  { rank: 9, username: "skyshard", votes: 88, profileHref: "/profil/skyshard" },
  {
    rank: 10,
    username: "deeppixel",
    votes: 76,
    profileHref: "/profil/deeppixel"
  }
]

const DEFAULT_COUNTER_TARGET = "2026-05-15T00:00:00.000Z"

export default function Page() {
  const { type, setType } = useAppStore()
  const [isVoted, setIsVoted] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [counterTarget, setCounterTarget] = useState(DEFAULT_COUNTER_TARGET)

  useEffect(() => {
    setCounterTarget(new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString())
  }, [])

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

  const bannerStyle = {
    "--bg-url":
      type === "premium"
        ? "url(/img/banner-premium_test_minecraft.webp)"
        : "url(/img/games/banner/minecraft-cover.webp)"
  } as CSSProperties

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
      <Banner className="banner-is-aside serveur-banner" style={bannerStyle}>
        <div className="serveur-banner-content">
          <Breadcrumb
            items={[
              { title: "Accueil", href: "/" },
              { title: "Minecraft", href: "/minecraft" },
              {
                title: "HYPING - LE MEILLEUR SERVEUR MINECRAFT DE 2026",
                href: "/serveur"
              },
              {
                title: "Voter",
                href: "/vote"
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
              href="/serveur"
              icon="hugeicons:arrow-turn-backward"
              variant="secondary"
              aria-label="Retour à la page du serveur"
              iconOnly
            />
            <Button
              href="https://serveur-prive.net"
              icon="hugeicons:link-circle-02"
              variant="secondary"
              className="btn-vote"
              aria-label="Ouvrir le site du serveur"
            >
              Visiter le site
            </Button>
          </div>
        </div>
      </Banner>
      <Wrapper>
        <div className="wrapper-content">
          <div className="vote-top">
            <div className="bloc bloc-vote">
              <h2>Voter pour le serveur</h2>
              <form className="form form-vote">
                <Input
                  icon="hugeicons:passport"
                  type="text"
                  name="username"
                  placeholder="Votre pseudonyme"
                />
                {!isPremium && (
                  <div className="field field-captcha">
                    <div className="field-content">
                      <Icon icon="hugeicons:robot-01" className="field-icon" />
                      <div className="field-captcha-iframe">
                        <iframe
                          id="mtcaptcha-iframe-1"
                          src="https://service.mtcaptcha.com/mtcv1/client/iframe.html?v=2026-05-04.21.37.11&amp;sitekey=MTPublic-42pXmytZe&amp;iframeId=mtcaptcha-iframe-1&amp;widgetSize=mini&amp;custom=true&amp;widgetInstance=mtcaptcha&amp;challengeType=standard&amp;theme=basic&amp;lang=fr&amp;action=&amp;autoFadeOuterText=true&amp;host=https%3A%2F%2Fserveur-prive.net&amp;hostname=serveur-prive.net&amp;serviceDomain=service.mtcaptcha.com&amp;textLength=0&amp;lowFrictionInvisible=&amp;enableMouseFlow=false&amp;miniFormWidth=0&amp;miniFormHeight=45"
                          title="MTCaptcha"
                          sandbox=" allow-forms allow-popups allow-same-origin allow-scripts allow-modals allow-popups-to-escape-sandbox"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="form-vote-bottom">
                  <div className="form-vote-bottom-title">
                    <span>
                      EasyVote
                      <Icon icon="hugeicons:add-circle" />
                    </span>
                    {isPremium ? (
                      <strong className="on">ON</strong>
                    ) : (
                      <strong className="off">OFF</strong>
                    )}
                  </div>
                  <Button
                    disabled={isVoted}
                    type="submit"
                    icon="hugeicons:checkmark-circle-02"
                    onClick={() => setIsVoted(true)}
                  >
                    Je vote maintenant
                  </Button>
                  {isVoted && (
                    <div className="message-blured">
                      <Icon icon="hugeicons:hourglass" />
                      <p>Vous avez déjà voté pour ce serveur, revenez dans</p>
                      <p className="timer" data-counter={counterTarget}>
                        <span>
                          <strong data-counter-hours>00</strong> heures
                        </span>{" "}
                        <span>
                          <strong data-counter-minutes>00</strong> minutes et
                        </span>{" "}
                        <span>
                          <strong data-counter-seconds>00</strong> secondes
                        </span>
                      </p>
                      <p>pour voter à nouveau.</p>
                    </div>
                  )}
                </div>
                <p className="paragraph">
                  Une fois que vous avez voté, vous serez redirigé vers le
                  classement général des serveurs Minecraft.
                </p>
              </form>
            </div>
            <div className="bloc bloc-sponsor">
              <h2>
                <span>
                  Serveurs Minecraft{" "}
                  <strong className="color-premium">sponsorisés</strong> à
                  découvrir…
                </span>
              </h2>
              <div className="serveur-small-list">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="serveur-item serveur-small"
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
          <div className="bloc bloc-easyvote">
            <div className="bloc-easyvote-left">
              <div>
                <h2>
                  Découvrez
                  <strong>
                    EasyVote<span>+</span>
                  </strong>
                </h2>
                <p className="intro">Profitez d'avantages exclusifs !</p>
              </div>
              {isPremium ? (
                <div>
                  <Button
                    variant="premium"
                    icon="hugeicons:crown"
                    iconPosition="left"
                  >
                    Abonné depuis le 15 mai 2026
                  </Button>
                  <div className="mention">
                    <i className="color-premium">*Période d'essai actif.</i>{" "}
                    Prochain paiement le <strong>18 mai 2026</strong> <br />
                    <a onClick={() => setIsPremium(false)}>
                      Résilier mon abonnement
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bloc-easyvote-btn" data-link="/">
                    <Button onClick={() => setIsPremium(true)}>
                      Commencer l'essai
                    </Button>
                    <strong>
                      15 jours <span className="color-primary">gratuits</span>
                    </strong>
                  </div>
                  <div className="mention">
                    *Puis 3,99€ / mois après l'essai. Résiliable à tout moment.
                  </div>
                </div>
              )}
            </div>
            <div className="bloc-easyvote-right">
              <div className="bloc-easyvote-card">
                <Icon icon="hugeicons:robot-01" />
                <div className="bloc-easyvote-card-content">
                  <h3>Pas de captcha à compléter pour voter</h3>
                  <p className="paragraph">
                    Votez plus rapidement sans avoir à compléter le Captcha. Un
                    simple clic sur le bouton "Je vote" et le tour est joué !
                  </p>
                </div>
              </div>{" "}
              <div className="bloc-easyvote-card">
                <Icon icon="hugeicons:euro-send" />
                <div className="bloc-easyvote-card-content">
                  <h3>Les fonds sont reversés au serveur</h3>
                  <p className="paragraph">
                    En souscrivant (et à chaque renouvellement), nous reversons
                    50% du montant au serveur. Le solde est crédité sur son
                    compte Serveur privé.
                  </p>
                </div>
              </div>{" "}
              <div className="bloc-easyvote-card">
                <Icon icon="hugeicons:unavailable" />
                <div className="bloc-easyvote-card-content">
                  <h3>Aucune publicité affichée sur le site</h3>
                  <p className="paragraph">
                    Profitez d'une version allégée du site, plus rapide, plus
                    optimisée et sans publicités qui viennent encombrer votre
                    navigation.
                  </p>
                </div>
              </div>{" "}
              <div className="bloc-easyvote-card">
                <Icon icon="hugeicons:crown" className="icon-crown" />
                <div className="bloc-easyvote-card-content">
                  <h3>Votre badge subscriber est actif</h3>
                  <p className="paragraph">
                    Démarquez-vous des autres, votre pseudo sera affiché en
                    jaune avec le badge "Subscriber" dans l'espace commentaire
                    et dans le top voteurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bloc vote-top-bloc">
            <div className="bloc-section">
              <h2>
                <Icon icon="hugeicons:award-01" aria-hidden="true" /> Top
                voteurs
              </h2>
              <table className="table table-vote">
                <tbody>
                  {VOTE_LEADERBOARD_MOCK.map((entry) => (
                    <tr key={entry.rank} data-link={entry.profileHref}>
                      <td
                        className="table-spacing-before table-vote-rank"
                        data-rank={entry.rank}
                      >
                        <span
                          className={clsx(
                            "vote-rank",
                            getVoteRankModifier(entry.rank)
                          )}
                        >
                          {entry.rank}
                        </span>
                      </td>
                      <td className="table-spacing" />
                      <td className="table-vote-avatar">
                        <Avatar />
                      </td>
                      <td>
                        <span
                          className={clsx(
                            "vote-name",
                            entry.isPremium && "color-premium"
                          )}
                        >
                          {entry.isPremium && (
                            <Icon
                              icon="hugeicons:crown"
                              className="crown"
                              aria-hidden="true"
                            />
                          )}
                          {entry.username}
                        </span>
                      </td>
                      <td>
                        <strong
                          className={clsx(entry.isPremium && "color-premium")}
                        >
                          {entry.votes} votes
                        </strong>
                      </td>
                      <td className="table-actions">
                        <Link
                          href={entry.profileHref}
                          className={clsx(
                            "table-actions-link",
                            entry.isPremium && "color-premium"
                          )}
                        >
                          <span>Voir le profil</span>
                          <Icon
                            icon="hugeicons:arrow-right-02"
                            aria-hidden="true"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              type="button"
              variant="secondary"
              border
              icon="hugeicons:arrow-down-01"
              className="vote-btn-more"
            >
              Afficher plus de résultat
            </Button>
          </div>
        </div>
      </Wrapper>
      <Container className="presentation-vote">
        <Presentation
          left={
            <>
              <h2>
                À propos de <strong>nous</strong>
              </h2>
              <div className="intro">
                <p>
                  Notre classement liste les serveurs Minecraft et les trie par
                  nombre de votes dans un ordre décroissant.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Plus un serveur cumule de votes et plus sa visibilité sur
                  notre classement est améliorée. Vous pouvez soutenir votre
                  serveur préféré en votant pour lui toutes les 1h30. Chaque
                  début de mois, le classement et toutes les statistiques des
                  serveurs sont réinitialisées.
                </p>
              </div>
              <img
                src="/img/vote/vote-presentation-left.webp"
                alt="Presentation serveur privé"
                width={995}
                height={880}
                loading="lazy"
                draggable="false"
                className="presentation-bg presentation-bg-left"
              />
            </>
          }
          top={
            <>
              <h2>
                Pour qui je <strong>vote</strong> ?
              </h2>
              <div className="intro">
                <p>
                  Vous êtes sur le point de voter pour le serveur
                  MC.EVOLUCRAFT.FR - Elu meilleur serveur de 2024 - Survie
                  Semi-RP
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Il compte ce mois-ci 23798 votes de ses joueurs. Grâce à votre
                  soutien, 1653 utilisateurs en provenance de nos classements
                  ont découvert et potentiellement joué sur le serveur.
                </p>
              </div>
              <img
                src="/img/vote/vote-presentation-top.webp"
                alt="Presentation serveur privé"
                width={807}
                height={450}
                loading="lazy"
                draggable="false"
                className="presentation-bg"
              />
            </>
          }
          bottom={
            <>
              <h2>
                Rejoignez-<strong>nous</strong> !
              </h2>
              <div className="intro">
                <p>
                  Découvrez notre classement qui liste les meilleurs serveurs
                  privés francophones.
                </p>
              </div>
              <div className="paragraph">
                <p>
                  Nous en listons des centaines qui n'attendent que votre
                  visite. Seul ou avec des amis, vivez une expérience de jeu
                  personnalisée et unique. Si vous avez créé un serveur, vous
                  pouvez le référencer sur notre classement.
                </p>
              </div>
              <img
                src="/img/vote/vote-presentation-bottom.webp"
                alt="Presentation serveur privé"
                width={828}
                height={436}
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
