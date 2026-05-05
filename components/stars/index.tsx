import { Icon } from "@/components/icon"

interface StarsProps {
  note: number
}

export const Stars = ({ note }: StarsProps) => {
  return (
    <div className="stars-list" data-rate={note}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon className="star" icon="hugeicons:star" key={index} />
      ))}
    </div>
  )
}
