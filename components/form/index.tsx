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
  tooltip?: string
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
  right,
  tooltip
}: InputProps) => {
  return (
    <div className={clsx("field", classNameField)}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label} {required && <span className="field-label-required">*</span>}{" "}
          {tooltip && (
            <span data-tooltip={tooltip}>
              <Icon icon="hugeicons:information-circle" />
            </span>
          )}
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

interface FileInputProps {
  icon?: string
  className?: string
  classNameField?: string
  id?: string
  name?: string
  label?: string
  required?: boolean
  disabled?: boolean
  accept?: string
  multiple?: boolean
}

export function FileInput({
  icon,
  className,
  classNameField,
  id,
  name,
  label,
  required,
  disabled,
  accept,
  multiple
}: FileInputProps) {
  return (
    <div className={clsx("field", classNameField)}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label} {required && <span className="field-label-required">*</span>}
        </label>
      )}
      <div className="field-content">
        {icon && <Icon icon={icon} className="field-icon" aria-hidden />}
        <input
          id={id}
          type="file"
          className={clsx("field-input field-input-file", className)}
          name={name}
          required={required}
          disabled={disabled}
          accept={accept}
          multiple={multiple}
        />
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

export {
  ColorRadio,
  DOMINANT_COLOR_OPTIONS,
  type ColorRadioOption
} from "./color-radio"
export { Select, type SelectOption } from "./select"
