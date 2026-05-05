import { Icon } from "@iconify/react"

interface SocialsProps {
  className?: string
  socials: {
    id: string
    icon: string
    name: string
    href: string
  }[]
}

export const Socials = ({ socials }: SocialsProps) => {
  return (
    <div className="socials">
      {socials.map((social) => (
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          key={social.icon}
          className="socials-link"
          data-social={social.id}
          aria-label={social.name}
        >
          <Icon icon={social.icon} className="socials-icon" />
        </a>
      ))}
    </div>
  )
}
