import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pathToFileURL } from 'node:url'
import * as sass from 'sass'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const entry = path.join(root, 'styles', 'globals-template.scss')
const out = path.join(root, 'template', 'style.css')

const banner =
  '/*! serveur-prive template — généré par npm run template:css — ne pas éditer */\n'

const result = sass.compile(entry, {
  style: 'compressed',
  loadPaths: [root],
  importers: [
    {
      findFileUrl(url) {
        if (url.startsWith('@/')) {
          const rel = url.slice(2)
          return pathToFileURL(path.join(root, rel))
        }
        return null
      }
    }
  ]
})

fs.mkdirSync(path.dirname(out), { recursive: true })
const css = banner + result.css.replaceAll('url("/img/', 'url("/assets/img/')
fs.writeFileSync(out, css, 'utf8')
console.log('Wrote', path.relative(root, out))
