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
