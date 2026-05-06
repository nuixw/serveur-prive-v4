import { Link } from "@/components/link"

interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items.length) return null

  return (
    <nav
      className="breadcrumb"
      aria-label="Fil d'Ariane"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ul className="breadcrumb-list">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1

          return (
            <li
              key={`${item.href}-${item.title}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="breadcrumb-item"
            >
              <span
                itemProp="item"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <Link
                  href={item.href}
                  aria-current={isCurrentPage ? "page" : undefined}
                  className="breadcrumb-link"
                >
                  <span itemProp="name">{item.title}</span>
                </Link>
              </span>
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
