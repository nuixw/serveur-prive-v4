import { Icon } from "@/components/icon"
import clsx from "clsx"
import { ReactNode } from "react"

interface InputProps {
  icon?: string
  className?: string
  classNameField?: string
  id?: string
  type?: string
  name?: string
  placeholder?: string
  value?: string
  label?: string
  required?: boolean
  disabled?: boolean
  onChange?: (value: string) => void
  rows?: number
  right?: ReactNode
}

export const Input = ({
  icon,
  className,
  classNameField,
  id,
  type,
  name,
  placeholder,
  value,
  label,
  required,
  disabled,
  onChange,
  right
}: InputProps) => {
  return (
    <div className={clsx("field", classNameField)}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label} {required && <span className="field-label-required">*</span>}
        </label>
      )}
      <div className="field-content">
        {icon && <Icon icon={icon} className="field-icon" />}
        <input
          id={id}
          type={type}
          className={clsx("field-input", className)}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
        {right && <div className="field-right">{right}</div>}
      </div>
    </div>
  )
}

export const Textarea = ({
  icon,
  className,
  classNameField,
  id,
  name,
  placeholder,
  value,
  label,
  required,
  disabled,
  onChange,
  rows = 3
}: InputProps) => {
  return (
    <div className={clsx("field", classNameField)}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
          {required && <span className="field-label-required">*</span>}
        </label>
      )}
      <div className="field-content">
        {icon && <Icon icon={icon} className="field-icon" />}
        <textarea
          id={id}
          className={clsx("field-input field-textarea", className)}
          name={name}
          placeholder={placeholder}
          value={value}
          rows={rows}
          disabled={disabled}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      </div>
    </div>
  )
}

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
  onChange
}: SelectProps) {
  const isControlled = value !== undefined

  return (
    <div className={clsx("field", classNameField)}>
      {showLabel && label && (
        <label className="field-label" htmlFor={id}>
          {label}{" "}
          {required && <span className="field-label-required">*</span>}
        </label>
      )}
      <div className="field-content field-select">
        <Icon icon={icon} className="field-icon" aria-hidden />
        <select
          id={id}
          name={name}
          form={form}
          autoComplete={autoComplete}
          aria-label={showLabel ? undefined : label}
          className={clsx("field-input field-select-input", className)}
          disabled={disabled}
          required={required}
          {...(isControlled
            ? {
                value,
                onChange: onChange
                  ? (e) => onChange(e.target.value)
                  : undefined
              }
            : {
                defaultValue: defaultValue ?? options[0]?.value,
                onChange: onChange
                  ? (e) => onChange(e.target.value)
                  : undefined
              })}
        >
          {options.map((opt) => (
            <option key={opt.value || opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="field-right field-select-chevron">
          <Icon icon={chevronIcon} aria-hidden />
        </span>
      </div>
    </div>
  )
}
