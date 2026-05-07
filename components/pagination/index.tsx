import { Icon } from "@/components/icon"
import { Link } from "@/components/link"

export function Pagination() {
  return (
    <nav
      className="pagination"
      aria-label="Pagination des articles"
      role="navigation"
    >
      <ul className="pagination-list">
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link pagination-link-icon"
            aria-label="Aller à la page précédente"
          >
            <Icon icon="hugeicons:arrow-left-01" aria-hidden="true" />
          </Link>
        </li>
        <li className="pagination-item">
          <span
            className="pagination-link pagination-link-current"
            aria-current="page"
            aria-label="Page actuelle, page 1"
          >
            1
          </span>
        </li>
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link"
            aria-label="Aller à la page 2"
          >
            2
          </Link>
        </li>
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link"
            aria-label="Aller à la page 3"
          >
            3
          </Link>
        </li>
        <li className="pagination-item" aria-hidden="true">
          <span className="pagination-ellipsis">...</span>
        </li>
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link"
            aria-label="Aller à la page 11"
          >
            11
          </Link>
        </li>
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link"
            aria-label="Aller à la page 12"
          >
            12
          </Link>
        </li>
        <li className="pagination-item">
          <Link
            href="/"
            className="pagination-link pagination-link-icon"
            aria-label="Aller à la page suivante"
          >
            <Icon icon="hugeicons:arrow-right-01" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
