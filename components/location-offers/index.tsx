import { Icon } from "@iconify/react"
import clsx from "clsx"
import Link from "next/link"
import { Button } from "../button"

interface OfferFeature {
  label: string
  included: boolean
  tooltip?: string
}

interface OfferSpec {
  icon: string
  text: string
}

const defaultOfferFeatures: OfferFeature[] = [
  {
    label: "Anti DDoS",
    included: true,
    tooltip:
      "Protection contre les attaques réseau et limitation des interruptions."
  },
  {
    label: "Backups",
    included: true,
    tooltip:
      "Non inclus. Sauvegardes automatiques régulières pour restaurer en cas de problème."
  },
  {
    label: "IP Dédié",
    included: false,
    tooltip:
      "Non inclus. Adresse IP dédiée pour une meilleure stabilité et une configuration plus simple."
  },
  {
    label: "Gestion fichiers",
    included: true,
    tooltip: "Gestion des fichiers du serveur via une interface dédiée."
  },
  {
    label: "Offre évolutive",
    included: true,
    tooltip: "Offres ajustables avec ressources et options modulables."
  },
  {
    label: "Sous domaine",
    included: true,
    tooltip: "Sous domaine inclus pour accéder plus facilement au serveur."
  },
  {
    label: "Setup instant",
    included: false,
    tooltip: "Installation rapide, serveur prêt en quelques instants."
  },
  {
    label: "Panel",
    included: true,
    tooltip: "Panel pour démarrer, arrêter et configurer votre serveur."
  },
  {
    label: "Multi-jeux",
    included: false,
    tooltip:
      "Non inclus. L'offre est disponible pour plusieurs jeux, pas seulement Minecraft."
  },
  {
    label: "Plugins mods",
    included: true,
    tooltip: "Support des plugins et des mods pour personnaliser l’expérience."
  },
  {
    label: "Monitoring",
    included: true,
    tooltip: "Suivi des ressources et statistiques en temps réel."
  },
  {
    label: "Support 24/7",
    included: true,
    tooltip: "Assistance disponible à toute heure, tous les jours."
  }
]

export interface LocationOfferItem {
  id: string
  sponsored?: boolean
  brandName: string
  players: number
  discountPercent?: number
  planName: string
  price: string
  priceStrike?: string
  period?: string
  rating: number
  specs: OfferSpec[]
  features: OfferFeature[]
  visitHref: string
  meta?: {
    societe: string
    anciennete: string
    langues: string
    uptime: string
    paiement: string
  }
}

const demoOffers: LocationOfferItem[] = [
  {
    id: "nitroserv-sponso",
    sponsored: true,
    brandName: "Nitroserv",
    players: 15,
    planName: "Cobble",
    discountPercent: 20,
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-2",
    brandName: "Nitroserv",
    players: 15,
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-3",
    brandName: "Nitroserv",
    players: 15,
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-4",
    brandName: "Nitroserv",
    players: 15,
    planName: "Cobble",
    price: "5,99 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-5",
    brandName: "Nitroserv",
    players: 15,
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-6",
    brandName: "Nitroserv",
    players: 15,
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  },
  {
    id: "offer-7",
    brandName: "Nitroserv",
    players: 15,
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specs: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" },
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: defaultOfferFeatures,
    visitHref: "https://nitroserv.com",
    meta: {
      societe: "Française",
      anciennete: "2004",
      langues: "FR, EN, DE",
      uptime: "99.99%",
      paiement: "Carte Bancaire, Paypal, Bancontact"
    }
  }
]

interface LocationOffersProps {
  offers?: LocationOfferItem[]
}

function LocationOfferCard({ offer }: { offer: LocationOfferItem }) {
  const sponsored = Boolean(offer.sponsored)

  return (
    <article
      className={clsx(
        "bloc location-card",
        sponsored && "location-card-sponso"
      )}
    >
      <div className="location-card-top">
        <div className="location-badges">
          <div className="location-badge location-badge-flag">
            <img
              src="/img/fr.png"
              alt="Français"
              width={16}
              height={16}
              loading="lazy"
              draggable="false"
            />
          </div>
          <div
            className="location-badge"
            data-tooltip="Nombre de joueurs recommandés"
          >
            <Icon icon="hugeicons:user-group" /> 15
          </div>
          {offer.discountPercent && (
            <div className="location-badge location-badge-discount">
              -{offer.discountPercent}%
            </div>
          )}
        </div>
        <div className="location-card-top-left">
          <Link
            href="https://nitroserv.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="location-card-top-left-img"
          >
            <img
              src="/img/nitroserv.svg"
              alt={offer.brandName}
              loading="lazy"
              draggable="false"
            />
          </Link>
          <a
            href="https://trustpilot.com/review/manager.zkillu.fr"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="location-card-top-left-rating"
          >
            <img
              loading="lazy"
              draggable="false"
              alt="3.9 / 5 Trustpilot"
              src="https://serveur-prive.net/img/external_hosts/rates/stars-4.svg"
            />
          </a>
        </div>
        <div className="location-card-top-right">
          <div className="location-card-top-right-content">
            <div className="location-name">{offer.planName}</div>
            <div className="location-price">
              <strong
                className={clsx(offer.discountPercent && "color-primary")}
              >
                {offer.price}
              </strong>
              <small>/ 1 mois</small>
            </div>
            {offer.discountPercent && (
              <div className="location-discount">
                Au lieu de <strong>{offer.priceStrike}</strong>
              </div>
            )}
          </div>
          <Button
            href={offer.visitHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            icon="hugeicons:link-circle-02"
          >
            Visiter
          </Button>
        </div>
      </div>
      <div className="location-card-options">
        {offer.specs.map((spec) => (
          <span className="location-card-option" key={spec.icon}>
            <Icon icon={spec.icon} />
            {spec.text}
          </span>
        ))}
      </div>
      <div className="location-card-fonctionnalites">
        {offer.features.map((feature) => (
          <div
            className={clsx(
              "location-card-fonctionnalite",
              !feature.included && "location-card-fonctionnalite-disabled"
            )}
            key={feature.label}
          >
            <span data-tooltip={feature.tooltip}>
              <Icon
                icon={
                  feature.included
                    ? "hugeicons:checkmark-circle-02"
                    : "hugeicons:cancel-circle"
                }
              />
              {feature.label}
            </span>
          </div>
        ))}
        <div className="location-arrow">
          <Icon icon="hugeicons:arrow-down-01" />
        </div>
      </div>
      <div className="location-card-bottom">
        <div className="location-infos">
          <span>Société</span>
          <strong>{offer.meta?.societe}</strong>
        </div>
        <div className="location-infos">
          <span>Ancienneté</span>
          <strong>{offer.meta?.anciennete}</strong>
        </div>
        <div className="location-infos">
          <span>Langues</span>
          <strong>{offer.meta?.langues}</strong>
        </div>
        <div className="location-infos">
          <span>Uptime</span>
          <strong>{offer.meta?.uptime}</strong>
        </div>
        <div className="location-infos">
          <span>Paiement</span>
          <strong>{offer.meta?.paiement}</strong>
        </div>
      </div>
    </article>
  )
}

export function LocationOffers({ offers = demoOffers }: LocationOffersProps) {
  return (
    <div className="location-offers">
      {offers.map((offer) => (
        <LocationOfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  )
}
