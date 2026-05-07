import { Avatar } from "@/components/avatar"
import { Banner } from "@/components/banner"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/button"
import { Icon } from "@/components/icon"
import { Link } from "@/components/link"
import { Pagination } from "@/components/pagination"
import { Wrapper } from "@/components/wrapper"
import { MetadataSeo } from "@/lib/metadata"
import clsx from "clsx"

export const metadata = MetadataSeo({
  title: "Actualité geek, guides et high-tech | Serveur Privé",
  description:
    "Guides, actus serveurs privés, jeux vidéo et informatique : articles, tests et tutoriels pour la communauté serveur-prive.net."
})

const filterTags = [
  { label: "Tous les articles", href: "/actualite", active: true },
  { label: "Guides", href: "/actualite?categorie=guides", active: false },
  {
    label: "Serveur privé",
    href: "/actualite?categorie=serveur-prive",
    active: false
  },
  {
    label: "Informatique",
    href: "/actualite?categorie=informatique",
    active: false
  },
  {
    label: "Jeux vidéos",
    href: "/actualite?categorie=jeux-videos",
    active: false
  }
] as const

const articles = [
  {
    id: "guide-hytale-commandes-2026",
    href: "/actualite/guide-hytale-commandes-2026",
    category: "Guides",
    date: "15 Avril 2026",
    author: "Nicobelo",
    title: "Guide complet des commandes pour serveur Hytale en 2026",
    excerpt:
      "Découvrez les commandes essentielles pour administrer votre serveur Hytale : permissions, monde, joueurs et bonnes pratiques pour une communauté au top dès la sortie. Ce guide couvre l’installation, la gestion des plugins, la configuration avancée et fournit des astuces pour optimiser les performances et la sécurité de votre serveur dès le lancement.",

    views: 458,
    comments: 12,
    imageSrc: "https://placehold.co/320x200/e8e8e8/666?text=Article"
  },
  {
    id: "choisir-hebergeur-serveur-minecraft",
    href: "/actualite/choisir-hebergeur-serveur-minecraft",
    category: "Serveur privé",
    date: "2 Avril 2026",
    author: "Nicobelo",
    title: "Comment choisir un hébergeur pour son serveur Minecraft en 2026",
    excerpt:
      "RAM, processeur, DDoS, panel et support : les critères qui comptent vraiment avant de louer votre machine et lancer votre communauté. Découvrez comment comparer efficacement les offres d’hébergement, quelles erreurs éviter et les meilleures pratiques pour garantir stabilité et performance à vos joueurs, même pendant les pics de trafic.",

    views: 892,
    comments: 34,
    imageSrc: "https://placehold.co/320x200/e8e8e8/666?text=Minecraft"
  },
  {
    id: "latence-jitter-explication",
    href: "/actualite/latence-jitter-explication",
    category: "Informatique",
    date: "28 Mars 2026",
    author: "Nicobelo",
    title: "Latence, jitter, ping : comprendre la connexion à votre serveur",
    excerpt:
      "Une connexion stable change tout pour le multijoueur : on décortique les métriques utiles et leur interprétation, côté joueur comme côté hébergeur. Découvrez également comment la latence et le jitter impactent vos parties et quelles solutions mettre en place pour une meilleure expérience de jeu, que vous soyez joueur ou administrateur de serveur.",

    views: 1240,
    comments: 8,
    imageSrc: "https://placehold.co/320x200/e8e8e8/666?text=Réseau"
  }
] as const

export default function ActualitePage() {
  return (
    <>
      <Banner className="actualite-banner">
        <div className="actualite-banner-inner">
          <Breadcrumb
            items={[
              { title: "Accueil", href: "/" },
              { title: "Actualité", href: "/actualite" }
            ]}
          />
          <h1>Toute l&apos;actualité geek, tests high-tech…</h1>
          <Button href="/default" icon="hugeicons:pen-tool-03">
            Proposer un article
          </Button>
        </div>
      </Banner>
      <Wrapper>
        <aside className="aside aside-responsive-left">
          <div className="bloc">
            <div className="bloc-section">
              <h2>
                <Icon icon="hugeicons:news-01" /> Plus d&apos;articles…
              </h2>
              <ul className="tags-list">
                {filterTags.map((tag) => (
                  <li key={tag.href}>
                    <Link
                      href={tag.href}
                      className={clsx("tag", tag.active && "tag-active")}
                    >
                      {tag.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bloc">
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:list-view" /> Catégories
              </h2>
              <strong className="color-primary">4</strong>
            </div>
            <div className="bloc-section bloc-section-flex">
              <h2>
                <Icon icon="hugeicons:news" /> Nombre d&apos;articles
              </h2>
              <strong className="color-primary">48</strong>
            </div>
          </div>
          <div className="bloc actualite-about">
            <div className="bloc-section">
              <p className="intro">
                Bienvenue dans notre section Actualités, où notre équipe rédige
                divers articles pour vous tenir au courant des nouveautés du
                site.
              </p>
              <p className="paragraph">
                Vous y trouverez également des tutoriels pour configurer et
                améliorer vos fiches serveur, ainsi que des actualités sur vos
                jeux vidéo préférés. Si vous avez l'inspiration et l'âme d'un
                rédacteur, vous pouvez également nous soumettre vos articles.
              </p>
            </div>
          </div>
        </aside>
        <div className="wrapper-content actualite-list">
          {articles.map((article) => (
            <div
              key={article.id}
              className="actualite-article bloc"
              data-link={article.href}
            >
              <div className="actualite-article-media">
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  width={320}
                  height={200}
                  loading="lazy"
                  draggable={false}
                  className="actualite-article-image"
                />
                <div className="actualite-article-badges" aria-hidden>
                  <span className="actualite-article-badge">
                    <Icon icon="hugeicons:view" />
                    {article.views}
                  </span>
                  <span className="actualite-article-badge">
                    <Icon icon="hugeicons:chatting-01" />
                    {article.comments}
                  </span>
                </div>
              </div>
              <div className="actualite-article-body">
                <div className="actualite-article-meta">
                  <span className="tag actualite-article-category">
                    {article.category}
                  </span>
                  <span className="actualite-article-byline">
                    Publié le {article.date} par{" "}
                    <Link href="/default" className="actualite-article-author">
                      <Avatar />
                      {article.author}
                    </Link>
                  </span>
                </div>
                <h2 className="actualite-article-title">
                  <Link href={article.href}>{article.title}</Link>
                </h2>
                <p className="actualite-article-excerpt">{article.excerpt}</p>
              </div>
            </div>
          ))}
          <Pagination />
        </div>
        <Button
          className="btn-aside-responsive-left"
          icon="hugeicons:menu-01"
          iconOnly
          aria-label="Filtres et informations"
        >
          <Icon icon="hugeicons:cancel-01" className="btn-icon btn-icon-swap" />
        </Button>
      </Wrapper>
    </>
  )
}
