import { Banner } from "@/components/banner"
import { BannerStat } from "@/components/banner/stat"
import { Button } from "@/components/button"
import { Select, type SelectOption } from "@/components/form"
import { Icon } from "@/components/icon"
import { LocationOffers } from "@/components/location-offers"
import { Wrapper } from "@/components/wrapper"
import type { CSSProperties } from "react"

const locationBannerStyle = {
  "--bg-url": "url(/img/games/banner/minecraft-cover.webp)"
} as CSSProperties

const sortSelects: {
  id: string
  icon: string
  name: string
  label: string
  options: SelectOption[]
}[] = [
  {
    id: "location-sort-price",
    icon: "hugeicons:euro-circle",
    name: "prix",
    label: "Ordre des prix",
    options: [
      { value: "asc", label: "Prix croissant" },
      { value: "desc", label: "Prix décroissant" }
    ]
  },
  {
    id: "location-sort-host",
    icon: "hugeicons:cloud",
    name: "hebergeur",
    label: "Hébergeur",
    options: [{ value: "", label: "Tous les hébergeurs" }]
  },
  {
    id: "location-sort-country",
    icon: "hugeicons:earth",
    name: "pays",
    label: "Pays",
    options: [{ value: "", label: "Tous les pays" }]
  },
  {
    id: "location-sort-players",
    icon: "hugeicons:user-multiple",
    name: "joueurs",
    label: "Joueurs",
    options: [{ value: "", label: "Tous les joueurs" }]
  }
]

const featureOptions: {
  value: string
  label: string
  defaultChecked?: boolean
}[] = [
  { value: "anti-ddos", label: "Anti DDoS" },
  { value: "backups", label: "Backups" },
  { value: "ip-dedie", label: "IP Dédié" },
  { value: "fichiers", label: "Gestion fichiers", defaultChecked: true },
  { value: "offre-evolutive", label: "Offre évolutive" },
  { value: "sous-domaine", label: "Sous domaine" },
  { value: "setup-instant", label: "Setup instant" },
  { value: "panel", label: "Panel" },
  { value: "multi-jeux", label: "Multi-jeux" },
  { value: "plugins-mods", label: "Plugins mods" },
  { value: "monitoring", label: "Monitoring" },
  { value: "support-24-7", label: "Support 24/7" }
]

const durationOptions = [
  { value: "all", label: "Toutes les durées" },
  { value: "1m", label: "1 mois" },
  { value: "3m", label: "3 mois" },
  { value: "6m", label: "6 mois" },
  { value: "1y", label: "1 an" }
]

export default function LocationServeurPage() {
  return (
    <>
      <Banner
        className="banner-is-aside location-banner"
        style={locationBannerStyle}
      >
        <div className="location-banner-content">
          <h1>Location & hébergement de serveur Minecraft en 2026</h1>
          <div className="paragraph">
            <p>
              Les meilleures offres de location serveur Minecraft débutent à
              partir de quelques euros par mois. Nous comparons les offres de
              chaque hébergeur serveur Minecraft afin de vous aider à trouver le
              meilleur prix et la configuration la plus adaptée. Comparez des
              dizaines d&apos;offres incluant RAM, CPU, nombre de joueurs,
              plugins, modpacks, et identifiez rapidement la solution la plus
              avantageuse. Avec les filtres de tri, vous pouvez comparer selon
              des critères tels que le prix, la durée d&apos;engagement, le pays
              d&apos;hébergement, les avis utilisateurs ou encore les
              fonctionnalités incluses.
            </p>
          </div>
        </div>
        <div className="banner-aside location-banner-aside">
          <img
            src="/img/games/affiche/minecraft.webp"
            alt="Minecraft"
            width={520}
            height={280}
            loading="lazy"
            draggable={false}
            className="location-banner-affiche"
          />
          <div className="location-banner-aside-content">
            <div className="location-banner-top">
              <img
                src="/img/games/logo/minecraft-logo.webp"
                alt="Minecraft"
                width={520}
                height={280}
                loading="lazy"
                draggable={false}
                className="location-banner-logo"
              />
            </div>
            <div className="banner-bottom">
              <BannerStat icon="hugeicons:server-stack-01">
                <strong>5</strong> hébergeurs
              </BannerStat>
              <BannerStat icon="hugeicons:server-stack-03">
                <strong>112</strong> offres
              </BannerStat>
            </div>
            <Button href="/minecraft" icon="hugeicons:award-01">
              Voir les serveurs
            </Button>
          </div>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-responsive-left location-aside">
          <form className="location-filters" method="get" action="">
            <div className="bloc">
              <div className="bloc-section">
                <h2>
                  <Icon icon="hugeicons:filter-mail" /> Trier
                </h2>
                <div className="location-filter-fields">
                  {sortSelects.map((field) => (
                    <Select
                      key={field.id}
                      id={field.id}
                      name={field.name}
                      icon={field.icon}
                      label={field.label}
                      options={field.options}
                      defaultValue={field.options[0]?.value}
                      classNameField="location-filter-field"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="bloc">
              <div className="bloc-section">
                <h2>
                  <Icon icon="hugeicons:all-bookmark" /> Fonctionnalités
                </h2>
                <ul className="tags-list">
                  {featureOptions.map((item) => (
                    <li key={item.value}>
                      <label className="tag-checkbox">
                        <input
                          type="checkbox"
                          name="fonctionnalites"
                          value={item.value}
                          defaultChecked={item.defaultChecked}
                        />
                        {item.label}
                      </label>
                    </li>
                  ))}
                </ul>
                <p className="location-aside-hint">
                  Affiche uniquement les offres qui possèdent toutes les options
                  sélectionnées.
                </p>
              </div>
            </div>
            <div className="bloc">
              <div className="bloc-section">
                <h2>
                  <Icon icon="hugeicons:clock-01" /> Durée du contrat
                </h2>
                <ul className="tags-list">
                  {durationOptions.map((item) => (
                    <li key={item.value}>
                      <label className="tag-checkbox tag-checkbox-text">
                        <input
                          type="checkbox"
                          name="duree"
                          value={item.value}
                        />
                        {item.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              type="reset"
              variant="secondary"
              border
              icon="hugeicons:refresh"
              iconPosition="left"
              className="location-filters-reset"
            >
              Réinitialiser
            </Button>
          </form>
        </aside>
        <div className="wrapper-content location-content">
          <LocationOffers />
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
