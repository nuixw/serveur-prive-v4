import { Icon } from "@/components/icon"
import clsx from "clsx"
import type { CSSProperties } from "react"

export interface ColorRadioOption {
  value: string
  label: string
}

export const DOMINANT_COLOR_OPTIONS: ColorRadioOption[] = [
  { value: "red", label: "Rouge" },
  { value: "pink", label: "Rose clair" },
  { value: "magenta", label: "Magenta" },
  { value: "violet", label: "Violet" },
  { value: "indigo", label: "Indigo" },
  { value: "blue", label: "Bleu roi" },
  { value: "sky", label: "Bleu ciel" },
  { value: "cyan", label: "Cyan" },
  { value: "teal", label: "Sarcelle" },
  { value: "lime", label: "Citron vert" },
  { value: "chartreuse", label: "Jaune-vert" },
  { value: "amber", label: "Ambre" },
  { value: "orange", label: "Orange" },
  { value: "brown", label: "Brun" }
]

interface ColorRadioProps {
  id?: string
  name: string
  icon?: string
  label?: string
  required?: boolean
  disabled?: boolean
  classNameField?: string
  options: ColorRadioOption[]
  value: string
  onChange: (value: string) => void
}

export function ColorRadio({
  id,
  name,
  icon,
  label,
  required,
  disabled,
  classNameField,
  options,
  value,
  onChange
}: ColorRadioProps) {
  const groupId = id ?? name
  const labelId = `${groupId}-label`

  return (
    <div className={clsx("field field-color-radio", classNameField)}>
      {label && (
        <div className="field-label" id={labelId}>
          {label}
          {required && <span className="field-label-required">*</span>}
        </div>
      )}
      <div className="field-content field-color-radio-content">
        {icon && <Icon icon={icon} className="field-icon" aria-hidden />}
        <div
          className="field-color-radio-list"
          role="radiogroup"
          aria-labelledby={label ? labelId : undefined}
        >
          {options.map((opt, index) => {
            const inputId = `${groupId}-${opt.value}`
            const checked = value === opt.value
            return (
              <label
                key={opt.value}
                className={clsx(
                  "field-color-radio-item",
                  checked && "field-color-radio-item-selected"
                )}
                title={opt.label}
              >
                <input
                  type="radio"
                  id={inputId}
                  name={name}
                  value={opt.value}
                  checked={checked}
                  disabled={disabled}
                  required={required && index === 0}
                  onChange={() => onChange(opt.value)}
                  className="field-color-radio-input"
                />
                <span
                  className="field-color-radio-swatch"
                  style={
                    {
                      "--field-color-radio-swatch": `var(--color-${opt.value})`
                    } as CSSProperties
                  }
                  aria-hidden
                />
                <span className="field-color-radio-label">{opt.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}
