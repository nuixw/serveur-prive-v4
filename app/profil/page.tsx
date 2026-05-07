"use client"

import { Avatar } from "@/components/avatar"
import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/button"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Wrapper } from "@/components/wrapper"
import { useAppStore } from "@/stores/app"
import clsx from "clsx"
import { redirect } from "next/navigation"

const profileMenu = [
  [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "hugeicons:home-01",
      href: "/profil",
      active: true,
      gold: false
    },
    {
      id: "servers",
      label: "Mes serveurs",
      icon: "hugeicons:server-stack-01",
      href: "/default",
      active: false,
      gold: false
    },
    {
      id: "profile",
      label: "Mon profil",
      icon: "hugeicons:user-circle",
      href: "/default",
      active: false,
      gold: false
    },
    {
      id: "settings",
      label: "Paramètres",
      icon: "hugeicons:settings-02",
      href: "/default",
      active: false,
      gold: false
    }
  ],
  [
    {
      id: "invoices",
      label: "Mes factures",
      icon: "hugeicons:invoice-01",
      href: "/default",
      active: false,
      gold: false
    },
    {
      id: "account",
      label: "Mon compte",
      icon: "hugeicons:wallet-03",
      href: "/default",
      active: false,
      gold: false
    }
  ],
  [
    {
      id: "rank",
      label: "Première place",
      icon: "hugeicons:award-01",
      href: "/default",
      active: false,
      gold: true
    },
    {
      id: "sponsored",
      label: "Sponsorisé",
      icon: "hugeicons:police-badge",
      href: "/default",
      active: false,
      gold: true
    }
  ]
] as const

const onboardingCards = [
  {
    id: "add-server",
    title: "Ajouter un serveur",
    text: "Ajoutez un serveur de jeu sur nos classements et commencez à recevoir de nouveaux joueurs.",
    icon: "hugeicons:add-circle",
    href: "/default"
  },
  {
    id: "complete-profile",
    title: "Complétez votre profil",
    text: "Complétez votre profil, ajoutez une photo, renseignez une biographie et vos réseaux sociaux.",
    icon: "hugeicons:user-account",
    href: "/default"
  },
  {
    id: "billing",
    title: "Coordonnées & facturation",
    text: "Renseignez vos coordonnées de facturation pour télécharger vos factures à la suite d'un achat.",
    icon: "hugeicons:invoice-02",
    href: "/default"
  },
  {
    id: "ads",
    title: "Publicité",
    text: "Ajoutez un serveur de jeu sur nos classements et commencez à recevoir de nouveaux joueurs.",
    icon: "hugeicons:megaphone-02",
    href: "/default"
  }
] as const

export default function ProfilPage() {
  const { setConnected } = useAppStore()

  return (
    <>
      <Banner className="banner-is-aside profil-banner">
        <div className="profil-avatar-wrapper">
          <Avatar />
          <span className="profil-avatar-badge">3</span>
        </div>
        <div className="profil-banner-texts">
          <Breadcrumb
            items={[
              { title: "Accueil", href: "/" },
              { title: "Dashboard", href: "/profil" }
            ]}
          />
          <h1>Nicobel0</h1>
          <div className="banner-bottom">
            <BannerStat icon="hugeicons:download-02">
              <strong>0 votes</strong> ce mois-ci
            </BannerStat>
            <BannerStat icon="hugeicons:download-03">
              <strong>0 votes</strong> au total
            </BannerStat>
          </div>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-responsive-left">
          <div className="bloc profil-solde">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:euro-circle" /> Solde
              </h2>
              <strong>0.00€</strong>
            </div>
          </div>
          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:laurel-wreath-01" /> Niveau
              </h2>
              <strong className="color-primary">3</strong>
            </div>
          </div>
          <nav className="aside-nav" aria-label="Navigation du profil">
            {profileMenu.map((group, index) => (
              <ul className="bloc bloc-nav" key={`profil-menu-group-${index}`}>
                {group.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "bloc-nav-link",
                        item.active && "bloc-nav-link-active",
                        item.gold && "bloc-nav-link-gold"
                      )}
                    >
                      <Icon icon={item.icon} /> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:calendar-04" /> Inscrit
              </h2>
              <strong>1er juin 2019</strong>
            </div>
          </div>
          <Button
            variant="secondary"
            icon="hugeicons:logout-circle-01"
            iconPosition="right"
            onClick={() => {
              setConnected(false)
              redirect("/")
            }}
            border
          >
            Se déconnecter
          </Button>
        </aside>
        <div className="wrapper-content profil-content">
          <div className="bloc profil-level">
            <h2>
              <Icon icon="hugeicons:laurel-wreath-01" /> Progression avant le{" "}
              <span className="color-primary">niveau 4</span>
            </h2>
            <div className="profil-progress">
              <span className="profil-progress-bar" style={{ width: "73%" }} />
            </div>
            <p className="paragraph">
              <Icon icon="hugeicons:information-circle" /> Gagnez des niveaux en
              votant pour vos serveurs préférés.
            </p>
          </div>
          <div className="bloc profil-start">
            <div className="profil-start-top">
              <h2>
                <Icon icon="hugeicons:idea-01" /> Bien démarrer
              </h2>
              <Button icon="hugeicons:euro-receive">Créditer mon compte</Button>
            </div>
            <div className="profil-cards">
              {onboardingCards.map((card) => (
                <article
                  className="profil-card"
                  key={card.id}
                  data-link={card.href}
                >
                  <h3>
                    <Icon icon={card.icon} /> {card.title}
                  </h3>
                  <p className="paragraph">{card.text}</p>
                  <Button
                    href={card.href}
                    icon="hugeicons:arrow-right-02"
                    iconOnly
                    aria-label={`Ouvrir ${card.title}`}
                  />
                </article>
              ))}
            </div>
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
