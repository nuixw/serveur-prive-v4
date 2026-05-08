import { Avatar } from "@/components/avatar"
import { Banner } from "@/components/banner"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/button"
import { Input, Select, Textarea } from "@/components/form"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@/components/table"
import { Wrapper } from "@/components/wrapper"
import clsx from "clsx"

const asideNav = [
  {
    title: "Dashboard",
    href: "/default",
    icon: "hugeicons:dashboard-square-03",
    active: true
  },
  {
    title: "Actualité",
    href: "/actualite",
    icon: "hugeicons:news",
    active: false
  },
  {
    title: "Mon profil",
    href: "/profil",
    icon: "hugeicons:user",
    active: false
  },
  {
    title: "Paramètres",
    href: "/default",
    icon: "hugeicons:settings-02",
    active: false
  }
] as const

const fakeTags = [
  "Nouveautés",
  "UI kit",
  "Dashboard",
  "Composants",
  "Formulaire",
  "Accessibilité"
] as const

const filterByGame = [
  { label: "Minecraft", checked: true },
  { label: "GTA", checked: false },
  { label: "Rust", checked: false }
] as const

const filterByType = [
  { label: "Classique", checked: true },
  { label: "Premium", checked: false },
  { label: "Sponsorisé", checked: false }
] as const

const selectCategories = [
  { value: "news", label: "Actualité" },
  { value: "guide", label: "Guide" },
  { value: "release", label: "Mise à jour" }
]

const selectPriority = [
  { value: "normal", label: "Normale" },
  { value: "important", label: "Importante" },
  { value: "urgent", label: "Urgente" }
]

export default function DefaultPage() {
  return (
    <>
      <Banner className="default-banner">
        <div className="default-banner-inner">
          <Breadcrumb
            items={[
              { title: "Accueil", href: "/" },
              { title: "Kit Default", href: "/default" }
            ]}
          />
          <h1>Kit Default - éléments de base</h1>
          <p className="intro">Page kit et composants du site</p>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-responsive-left">
          <div className="bloc bloc-author">
            <Avatar />
            <div className="bloc-author-text">
              <span>Créé par</span>
              <Link href="/profil">Nicobel0</Link>
            </div>
          </div>

          <nav className="aside-nav" aria-label="Navigation du kit">
            <ul className="bloc bloc-nav">
              {asideNav.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "bloc-nav-link",
                      item.active && "bloc-nav-link-active"
                    )}
                  >
                    <Icon icon={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bloc">
            <div className="bloc-section">
              <h2>
                <Icon icon="hugeicons:label-important" /> Tags
              </h2>
              <ul className="tags-list">
                {fakeTags.map((tag) => (
                  <li key={tag}>
                    <Link href="/default" className="tag">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bloc">
            <div className="bloc-section">
              <h2>
                <Icon icon="hugeicons:filter" /> Tags checkbox
              </h2>
              <div className="tags-list">
                {filterByGame.map((filter) => (
                  <label className="tag-checkbox" key={filter.label}>
                    <input type="checkbox" defaultChecked={filter.checked} />
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="bloc-section">
              <h2>
                <Icon icon="hugeicons:target-01" /> Tags radio
              </h2>
              <div className="tags-list">
                {filterByType.map((filter) => (
                  <label
                    className="tag-checkbox tag-checkbox-text"
                    key={filter.label}
                  >
                    <input
                      type="radio"
                      name="kit-aside-mode"
                      defaultChecked={filter.checked}
                    />
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:layers-01" /> Blocs du kit
              </h2>
              <strong className="color-primary">5</strong>
            </div>
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:text-align-left" /> Champs affichés
              </h2>
              <strong className="color-primary">8</strong>
            </div>
          </div>
        </aside>

        <div className="wrapper-content default-kit-content">
          <section className="bloc">
            <h2>
              <Icon icon="hugeicons:text-align-left" /> Titres & paragraphes
            </h2>
            <h2>Exemple de titre secondaire (H2)</h2>
            <h3>Exemple de sous-titre (H3)</h3>
            <h4>Exemple de section (H4)</h4>
            <h5>Exemple de détail (H5)</h5>
            <h6>Exemple de micro-titre (H6)</h6>
            <p className="intro">
              Ceci est un texte d&apos;introduction. Il sert à présenter le
              sujet avec un ton plus visible que le paragraphe standard.
            </p>
            <div className="paragraph">
              <p>
                Ce bloc montre le style de paragraphe par défaut utilisé sur le
                site. Il permet de vérifier la lisibilité sur des textes moyens
                et longs.
              </p>
              <p>
                Vous pouvez aussi y insérer des liens comme{" "}
                <Link href="/actualite">la page Actualité</Link> pour valider le
                comportement visuel global.
              </p>
              <ul>
                <li>Liste à puce pour les points essentiels</li>
                <li>Compatible avec les styles globaux de paragraphes</li>
                <li>Lisible sur desktop et mobile</li>
              </ul>
              <ol>
                <li>Étape 1 : définir la structure</li>
                <li>Étape 2 : appliquer les classes globales</li>
                <li>Étape 3 : vérifier le rendu final</li>
              </ol>
            </div>
          </section>

          <section className="bloc">
            <h2>
              <Icon icon="hugeicons:cursor-01" /> Boutons
            </h2>
            <div className="default-kit-buttons">
              <Button icon="hugeicons:navigation-03" iconPosition="left">
                Primary left
              </Button>
              <Button icon="hugeicons:arrow-right-02" iconPosition="right">
                Primary right
              </Button>
              <Button
                icon="hugeicons:navigation-03"
                iconPosition="left"
                variant="secondary"
              >
                Secondary left
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                variant="secondary"
              >
                Secondary right
              </Button>
              <Button
                icon="hugeicons:navigation-03"
                iconPosition="left"
                variant="tertiary"
              >
                Tertiary left
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                variant="tertiary"
              >
                Tertiary right
              </Button>
              <Button
                icon="hugeicons:navigation-03"
                iconPosition="left"
                variant="premium"
              >
                Premium left
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                variant="premium"
              >
                Premium right
              </Button>
              <Button icon="hugeicons:navigation-03" iconPosition="left" border>
                Primary border
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                border
              >
                Primary border right
              </Button>
              <Button
                icon="hugeicons:navigation-03"
                iconPosition="left"
                variant="secondary"
                border
              >
                Secondary border
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                variant="secondary"
                border
              >
                Secondary border right
              </Button>
              <Button
                icon="hugeicons:navigation-03"
                iconPosition="left"
                variant="premium"
                border
              >
                Premium border
              </Button>
              <Button
                icon="hugeicons:arrow-right-02"
                iconPosition="right"
                variant="premium"
                border
              >
                Premium border right
              </Button>
              <Button
                icon="hugeicons:star"
                iconOnly
                aria-label="Primary icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                variant="secondary"
                aria-label="Secondary icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                variant="tertiary"
                aria-label="Tertiary icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                variant="premium"
                aria-label="Premium icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                border
                aria-label="Primary border icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                variant="secondary"
                border
                aria-label="Secondary border icon only"
              />
              <Button
                icon="hugeicons:star"
                iconOnly
                variant="premium"
                border
                aria-label="Premium border icon only"
              />
              <Button iconPosition="left" disabled>
                Disabled
              </Button>
            </div>
          </section>

          <section className="bloc">
            <h2>
              <Icon icon="hugeicons:table" /> Tableau
            </h2>
            <Table className="table-responsive">
              <TableHead>
                <TableRow>
                  <TableCell as="th">Nom</TableCell>
                  <TableCell as="th">Type</TableCell>
                  <TableCell as="th">Statut</TableCell>
                  <TableCell as="th">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell data-th="Nom">Bloc Typographie</TableCell>
                  <TableCell data-th="Type">Contenu</TableCell>
                  <TableCell data-th="Statut">
                    <span className="tag tag-active">Prêt</span>
                  </TableCell>
                  <TableCell className="table-actions" data-th="Action">
                    <Link href="/default" className="table-actions-link">
                      Voir
                      <Icon icon="hugeicons:arrow-right-02" />
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell data-th="Nom">Bloc Boutons</TableCell>
                  <TableCell data-th="Type">Composant</TableCell>
                  <TableCell data-th="Statut">
                    <span className="tag">En cours</span>
                  </TableCell>
                  <TableCell className="table-actions" data-th="Action">
                    <Link href="/default" className="table-actions-link">
                      Ouvrir
                      <Icon icon="hugeicons:arrow-right-02" />
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell data-th="Nom">Bloc Formulaire</TableCell>
                  <TableCell data-th="Type">Form</TableCell>
                  <TableCell data-th="Statut">
                    <span className="tag">Draft</span>
                  </TableCell>
                  <TableCell className="table-actions" data-th="Action">
                    <Link href="/default" className="table-actions-link">
                      Éditer
                      <Icon icon="hugeicons:arrow-right-02" />
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section className="bloc">
            <h2>
              <Icon icon="hugeicons:alert-02" /> Alertes & messages
            </h2>
            <div className="default-kit-messages">
              <div className="message message-gold">
                <Icon icon="hugeicons:police-badge" />
                <p>
                  Message premium : cette fonctionnalité est réservée aux
                  comptes Gold.
                </p>
              </div>
              <div className="message message-success">
                <Icon icon="hugeicons:checkmark-circle-02" />
                <p>Message succès : vos paramètres ont bien été enregistrés.</p>
              </div>
              <div className="message message-warning">
                <Icon icon="hugeicons:alert-01" />
                <p>Message warning : votre abonnement expire dans 3 jours.</p>
              </div>
              <div className="message message-danger">
                <Icon icon="hugeicons:cancel-circle" />
                <p>
                  Message erreur : une validation est requise avant
                  l&apos;envoi.
                </p>
              </div>
            </div>
          </section>

          <section className="bloc">
            <h2>
              <Icon icon="hugeicons:note-01" /> Champs de formulaire
            </h2>
            <form className="form" action="">
              <div className="field-group">
                <Input
                  id="kit-title"
                  name="title"
                  icon="hugeicons:pen-01"
                  label="Titre"
                  placeholder="Saisir un titre"
                  required
                />
                <Input
                  id="kit-email"
                  type="email"
                  name="email"
                  icon="hugeicons:mail-01"
                  label="Email de contact"
                  placeholder="email@exemple.fr"
                />
              </div>

              <div className="field-group">
                <Select
                  id="kit-category"
                  name="category"
                  icon="hugeicons:folder-01"
                  label="Catégorie"
                  options={selectCategories}
                  showLabel
                />
                <Select
                  id="kit-priority"
                  name="priority"
                  icon="hugeicons:alert-02"
                  label="Priorité"
                  options={selectPriority}
                  showLabel
                />
              </div>

              <Textarea
                id="kit-description"
                name="description"
                icon="hugeicons:comment-01"
                label="Description"
                placeholder="Décrivez votre besoin en quelques lignes..."
                rows={4}
              />

              <div className="default-kit-checks">
                <label className="field-checkbox">
                  <input type="checkbox" name="publish" defaultChecked />
                  Publier immédiatement
                </label>
                <label className="field-checkbox">
                  <input type="checkbox" name="newsletter" />
                  Recevoir les nouveautés
                </label>
              </div>

              <div className="default-kit-radios">
                <label className="field-checkbox">
                  <input type="radio" name="visibility" defaultChecked />
                  Public
                </label>
                <label className="field-checkbox">
                  <input type="radio" name="visibility" />
                  Privé
                </label>
              </div>

              <Button type="submit" icon="hugeicons:navigation-03">
                Envoyer la démo
              </Button>
            </form>
          </section>
        </div>

        <Button
          className="btn-aside-responsive-left"
          icon="hugeicons:menu-01"
          iconOnly
          aria-label="Navigation et tags"
        >
          <Icon icon="hugeicons:cancel-01" className="btn-icon btn-icon-swap" />
        </Button>
      </Wrapper>
    </>
  )
}
