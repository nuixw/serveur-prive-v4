"use client"

import { Icon } from "@/components/icon"
import clsx from "clsx"
import { useId, useState, type ChangeEvent } from "react"

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  id?: string
  name?: string
  icon: string
  label: string
  options: SelectOption[]
  defaultValue?: string
  value?: string
  disabled?: boolean
  required?: boolean
  className?: string
  classNameField?: string
  showLabel?: boolean
  chevronIcon?: string
  form?: string
  autoComplete?: string
  onChange?: (value: string) => void
  /** Active le champ de recherche dans le panneau (attribut `data-search` sur le conteneur). */
  searchable?: boolean
  searchPlaceholder?: string
}

export function Select({
  id,
  name,
  icon,
  label,
  options,
  defaultValue,
  value,
  disabled,
  required,
  className,
  classNameField,
  showLabel,
  chevronIcon = "hugeicons:arrow-down-01",
  form,
  autoComplete,
  onChange,
  searchable = false,
  searchPlaceholder = "Rechercher…"
}: SelectProps) {
  const isControlled = value !== undefined
  const reactId = useId()
  const triggerId = id ? `${id}-trigger` : `select-trigger-${reactId}`
  const listboxId = id ? `${id}-listbox` : `select-listbox-${reactId}`

  const [internalValue, setInternalValue] = useState(
    () => defaultValue ?? options[0]?.value ?? ""
  )

  const effectiveValue = isControlled ? (value ?? "") : internalValue

  const selectedLabel =
    options.find((o) => o.value === effectiveValue)?.label ??
    options[0]?.label ??
    ""

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value
    if (!isControlled) setInternalValue(next)
    onChange?.(next)
  }

  const selectProps = {
    name,
    form,
    autoComplete,
    disabled,
    required,
    value: effectiveValue,
    onChange: handleSelectChange
  }

  return (
    <div className={clsx("field", classNameField)}>
      {showLabel && label && (
        <label className="field-label" htmlFor={triggerId}>
          {label} {required && <span className="field-label-required">*</span>}
        </label>
      )}
      <div
        className={clsx(
          "field-content",
          "field-select",
          "field-select--custom"
        )}
        data-custom-select
        {...(searchable ? { "data-search": "" as const } : {})}
      >
        <Icon icon={icon} className="field-icon" aria-hidden />
        <select
          className={clsx(
            "field-input",
            "field-select-input",
            "field-select-native-hidden",
            className
          )}
          tabIndex={-1}
          aria-hidden
          aria-label={label}
          {...selectProps}
        >
          {options.map((opt) => (
            <option key={opt.value || opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          id={triggerId}
          className="field-select-trigger"
          data-custom-select-trigger
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-controls={listboxId}
          disabled={disabled}
        >
          <span data-custom-select-value className="field-select-trigger-value">
            {selectedLabel}
          </span>
          <span className="field-right field-select-chevron" aria-hidden>
            <Icon icon={chevronIcon} />
          </span>
        </button>
        <div className="field-select-dropdown" data-custom-select-dropdown>
          {searchable ? (
            <div className="field-select-search-wrap">
              <input
                type="search"
                className="field-select-search"
                data-custom-select-search
                placeholder={searchPlaceholder}
                autoComplete="off"
                aria-label={searchPlaceholder}
              />
            </div>
          ) : null}
          <ul
            id={listboxId}
            className="field-select-listbox"
            role="listbox"
            data-custom-select-listbox
          >
            {options.map((opt) => (
              <li
                key={opt.value || opt.label}
                role="option"
                data-value={opt.value}
                aria-selected={opt.value === effectiveValue}
              >
                {opt.label}
              </li>
            ))}
            {searchable ? (
              <li
                role="presentation"
                className="field-select-empty"
                hidden
                data-custom-select-empty
              >
                Aucun résultat
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </div>
  )
}
