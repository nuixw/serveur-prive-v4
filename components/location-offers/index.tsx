interface OfferFeature {
  label: string
  included: boolean
}

interface OfferSpec {
  icon: string
  text: string
}

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
  specsHardware: OfferSpec[]
  specsExtras: OfferSpec[]
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
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specsHardware: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" }
    ],
    specsExtras: [
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: [
      { label: "Anti-DDoS", included: true },
      { label: "Backups", included: true },
      { label: "Monitoring", included: true },
      { label: "IP Dédié", included: false },
      { label: "Multi-jeux", included: false },
      { label: "Panel", included: true }
    ],
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
    specsHardware: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" }
    ],
    specsExtras: [
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: [
      { label: "Anti-DDoS", included: true },
      { label: "Backups", included: true },
      { label: "Monitoring", included: true },
      { label: "IP Dédié", included: false },
      { label: "Multi-jeux", included: false },
      { label: "Panel", included: true }
    ],
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
    specsHardware: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" }
    ],
    specsExtras: [
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: [
      { label: "Anti-DDoS", included: true },
      { label: "Backups", included: true },
      { label: "Monitoring", included: true },
      { label: "IP Dédié", included: false },
      { label: "Multi-jeux", included: false },
      { label: "Panel", included: true }
    ],
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
    discountPercent: 20,
    planName: "Cobble",
    price: "4,79 €",
    priceStrike: "5,99 €",
    period: "1 mois",
    rating: 4,
    specsHardware: [
      { icon: "hugeicons:cpu", text: "4 vCPU EPYC 9575F" },
      { icon: "hugeicons:database-01", text: "4 Go RAM" },
      { icon: "hugeicons:hard-drive", text: "Non limité (fair-use)" }
    ],
    specsExtras: [
      { icon: "hugeicons:arrow-right-02", text: "Anti-DDoS inclus" },
      {
        icon: "hugeicons:arrow-right-02",
        text: "Sauvegarde toutes les heures"
      },
      { icon: "hugeicons:arrow-right-02", text: "Support Discord / Tickets" }
    ],
    features: [
      { label: "Anti-DDoS", included: true },
      { label: "Backups", included: true },
      { label: "Monitoring", included: true },
      { label: "IP Dédié", included: false },
      { label: "Multi-jeux", included: false },
      { label: "Panel", included: true }
    ],
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

  return <article className="location-card">-</article>
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
