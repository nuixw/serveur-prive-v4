"use client"

import { Icon } from "@/components/icon"
import { Fragment, useId, useState } from "react"

interface StarsRatingInputProps {
  name?: string
  defaultValue?: number
}

export function StarsRatingInput({
  name = "rating",
  defaultValue = 5
}: StarsRatingInputProps) {
  const groupId = useId()
  const [rating, setRating] = useState(defaultValue)

  return (
    <div className="stars-rating">
      <div className="stars-rating-title">Donner une note</div>
      <div className="stars-list stars-list-input">
        {Array.from({ length: 5 }).map((_, index) => {
          const value = index + 1
          const inputId = `${groupId}-${value}`

          return (
            <Fragment key={value}>
              <input
                id={inputId}
                type="radio"
                name={name}
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                aria-label={`${value} étoile${value > 1 ? "s" : ""}`}
              />
              <label htmlFor={inputId} className="star-option">
                <Icon className="star" icon="hugeicons:star" />
              </label>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
