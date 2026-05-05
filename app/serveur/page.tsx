import { Banner } from "@/components/banner"
import { Button } from "@/components/button"
import { Socials } from "@/components/socials"
import { Wrapper } from "@/components/wrapper"
import { Icon } from "@iconify/react"

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
  return (
    <>
      <Banner>
        <h1>Page serveur</h1>
      </Banner>
      <Wrapper>
        <aside className="aside aside-relative aside-responsive-left">
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
          <div className="bloc"></div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:text-align-left" /> A propos du serveur
            </h2>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:chart-line-data-01" /> Historique des votes
            </h2>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:chatting-01" /> Avis des utilisateurs{" "}
              <span className="color-primary">2</span>
            </h2>
          </div>
          <div className="bloc">
            <h2>
              <Icon icon="hugeicons:star" /> Laissez un avis
            </h2>
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
