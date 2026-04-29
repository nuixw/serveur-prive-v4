import { Container } from "@/components/container"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Socials } from "@/components/socials"

const menus = [
  {
    title: "Informations",
    links: [
      {
        title: "Conditions d'utilisation",
        href: "/default"
      },
      {
        title: "Conditions de vente",
        href: "/default"
      },
      {
        title: "Foire aux questions",
        href: "/default"
      },
      {
        title: "Règlement",
        href: "/default"
      },
      {
        title: "Contactez-nous",
        href: "/default"
      }
    ]
  },
  {
    title: "Créateurs",
    links: [
      {
        title: "Documentation",
        href: "/default"
      },
      {
        title: "APIs",
        href: "/default"
      },
      {
        title: "Plugins",
        href: "/default"
      },
      {
        title: "Discord",
        href: "https://discord.gg/JmMszJE"
      },
      {
        title: "X",
        href: "https://x.com/serveur_prive"
      }
    ]
  }
]

const socials = [
  {
    id: "x",
    icon: "hugeicons:new-twitter",
    href: "https://x.com/serveur_prive"
  },
  {
    id: "discord",
    icon: "hugeicons:discord",
    href: "https://discord.gg/JmMszJE"
  }
]

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <section className="footer-top">
          <div className="footer-top-left">
            <h2 className="footer-top-left-title">Découvrez des serveurs privés francophones pour tous les goûts</h2>
            <div className="paragraph">
              <p>Serveur-prive.net propose un classement gratuit qui répertorie les serveurs privés de jeux vidéo. Trouvez ou référencez un serveur privé sur nos listes.</p>
            </div>
            <Socials socials={socials} />
          </div>
          <nav className="footer-nav" aria-label="Navigation secondaire">
            {menus.map((menu, id) => (
              <section className="footer-nav-section" key={id}>
                <h3>{menu.title}</h3>
                <ul>
                  {menu.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </section>
        <section className="footer-counter">
          <h2>Prochain reset des classements & votes dans</h2>
          <div className="footer-counter-value" data-footer-counter data-counter-target={new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString()}>
            <span><strong data-counter-days>8</strong> jours</span>{' '}
            <span><strong data-counter-hours>12</strong> heures</span>{' '}
            <span><strong data-counter-minutes>34</strong> minutes et</span>{' '}
            <span><strong data-counter-seconds>56</strong> secondes</span>
            <Icon icon="svg-spinners:clock" />
          </div>
        </section>
        <section className="footer-bottom">
          <p><span className="logo">serveur<strong>prive</strong></span> © 2026. Tous droits réservés.</p>
          <p>Tous les noms de jeux cités sont des marques commerciales ™ ou des marques déposées ® de leurs détenteurs respectifs.</p>
        </section>
      </Container>
    </footer>
  )
}
