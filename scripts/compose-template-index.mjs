/**
 * Régénère le <body> de template/index.html à partir de lib/games.ts.
 * Conserve tout le <head> existant (tout ce qui précède la première balise <body).
 * Commande : npm run template:html
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

function parseGames() {
  const src = fs.readFileSync(path.join(root, 'lib/games.ts'), 'utf8')
  const m = src.match(/export const games = (\[[\s\S]*\])\s*$/m)
  if (!m) throw new Error('Impossible de parser lib/games.ts')
  return new Function(`"use strict"; return ${m[1]}`)()
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(text) {
  return escapeHtml(text).replace(/'/g, '&#39;')
}

function iconify(icon, extraClass = '') {
  const cls = ['icon', extraClass].filter(Boolean).join(' ')
  return `<iconify-icon icon="${escapeAttr(icon)}" data-icon="${escapeAttr(icon)}" class="${escapeAttr(cls)}" aria-hidden="true"></iconify-icon>`
}

function gameCard(game) {
  const tagsHtml = game.tags
    .map(
      (tag) =>
        `                    <span class="game-card-tag" data-truncate-item>${escapeHtml(tag)}</span>\n`
    )
    .join('')

  return `              <div class="game-card" data-link="/${escapeAttr(game.id)}" aria-label="Serveurs privés ${escapeAttr(game.nom)}">
                <div class="game-card-content">
                  <img src="/assets/img/games/logo/${escapeAttr(game.id)}-logo.webp" alt="${escapeAttr(game.nom)} logotype" width="520" height="280" loading="lazy" draggable="false" />
                  <div class="game-card-serveurs">
                    <strong>8,963</strong> serveurs
                  </div>
                  <div class="game-card-tags" data-truncate>
                    <span class="game-card-tag" data-truncate-item>${escapeHtml(game.nom)}</span>
${tagsHtml}                    <span class="game-card-tag game-card-tag--more" data-truncate-more style="display: none">+0</span>
                  </div>
                  <a href="/${escapeAttr(game.id)}" class="game-card-link">Explorer les serveurs ${iconify('hugeicons:arrow-right-02')}</a>
                </div>
                <img src="/assets/img/games/affiche/${escapeAttr(game.id)}.webp" alt="${escapeAttr(game.nom)} serveurs privés" width="520" height="700" loading="lazy" draggable="false" class="game-card-bg" />
              </div>`
}

function buildMain(games) {
  const grid = games.map(gameCard).join('\n')

  return `<main class="main">
      <section class="banner home-banner">
        <div class="container banner-container">
          <div class="home-banner-left">
            <h1>
              Trouvez ou référencez
              <span> un serveur <strong>privé</strong> de jeu </span>
              sur nos classements gratuits.
            </h1>
            <div class="banner-bottom home-banner-bottom">
              <a href="/" class="btn primary">
                <span>Ajouter mon serveur</span>
                ${iconify('hugeicons:add-circle', 'btn-icon')}
              </a>
              <div class="banner-stat">
                ${iconify('hugeicons:left-to-right-list-dash')}
                <span><strong>11,754</strong> serveurs</span>
              </div>
              <div class="banner-stat">
                ${iconify('hugeicons:download-02')}
                <span><strong>487,954</strong> votes</span>
              </div>
            </div>
          </div>
          <div class="home-banner-right">
            <img class="home-banner-right-image" src="/assets/img/home/home-banner-characters.webp" alt="Banner right" loading="lazy" draggable="false" width="1342" height="804" />
          </div>
        </div>
      </section>
      <div class="container">
        <section>
          <div class="home-top">
            <h2>
              Explorez la liste des <strong>serveurs privés</strong> en choisissant votre jeu préféré.
            </h2>
            <div class="field">
              <div class="field-content">
                ${iconify('hugeicons:search-01', 'field-icon')}
                <input type="search" class="field-input" name="search" placeholder="Rechercher un jeu vidéo…" />
              </div>
            </div>
          </div>
          <div class="games-grid">
${grid}
          </div>
        </section>
        <section class="presentation home-presentation">
          <div class="presentation-left presentation-bloc">
            <img src="/assets/img/home/home-presentation-characters.webp" alt="Presentation serveur privé" width="861" height="746" loading="lazy" draggable="false" class="home-presentation-left-image" />
            <h2>Une plateforme <strong>innovante</strong>&nbsp;dédiée à la promotion de serveurs de&nbsp;jeux</h2>
            <div class="intro">
              <p>
                En offrant un référencement gratuit, nous aidons les administrateurs de serveurs à accroître leur visibilité et à se connecter efficacement avec une communauté de joueurs ciblée et enthousiaste.
              </p>
            </div>
            <div class="paragraph">
              <p>
                Que votre serveur concerne un jeu spécifique ou plusieurs jeux, notre service assure une visibilité optimale et une croissance rapide de votre base de joueurs.
              </p>
            </div>
          </div>
          <div class="presentation-right">
            <div class="presentation-top presentation-bloc">
              <h2 data-selection-black>Vous êtes propriétaire d’un serveur privé, mais votre jeu vidéo n’est pas dans la&nbsp;liste&nbsp;?</h2>
              <div class="intro">
                <p>Pas de panique ! Contactez-nous pour savoir si nous pourrions l’ajouter !</p>
              </div>
              <img src="/assets/img/home/home-presentation-top.webp" alt="Presentation serveur privé" width="619" height="331" loading="lazy" draggable="false" class="presentation-bg" />
            </div>
            <div class="presentation-bottom presentation-bloc">
              <h2>Nos classements répertorient des <strong>milliers</strong>&nbsp;de serveurs de&nbsp;jeux</h2>
              <div class="intro">
                <p>
                  Serveur Privé est l'endroit idéal pour trouver un serveur adapté à vos besoins, quel que soit votre jeu du moment ou le type de serveur que vous recherchez, il y en a pour tous les goûts.
                </p>
              </div>
              <div class="paragraph">
                <p>
                  Pour chaque serveur, vous trouverez une description concise accompagnée d'évaluations d'autres joueurs, vous aidant ainsi à choisir un serveur qui répond à vos attentes.
                </p>
              </div>
              <img src="/assets/img/home/home-presentation-bottom.webp" alt="Presentation serveur privé" width="732" height="523" loading="lazy" draggable="false" class="presentation-bg" />
            </div>
          </div>
        </section>
      </div>
    </main>
    <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js" defer></script>`
}

const games = parseGames()
const indexPath = path.join(root, 'template', 'index.html')
const indexSrc = fs.readFileSync(indexPath, 'utf8')
const bodyStart = indexSrc.indexOf('<body')
if (bodyStart === -1) throw new Error('template/index.html sans <body>')
const head = indexSrc.slice(0, bodyStart)

const out = `${head}<body>
    ${buildMain(games)}
</body>
</html>
`
fs.writeFileSync(indexPath, out, 'utf8')
console.log('template/index.html généré (' + games.length + ' jeux)')
