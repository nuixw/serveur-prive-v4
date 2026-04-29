import { Icon } from "@/components/icon"
import clsx from "clsx"

interface InputProps {
  icon?: string
  className?: string
  classNameField?: string
  htmlFor?: string
  type: string
  name?: string
  placeholder?: string
  value?: string
  label?: string
  required?: boolean
  disabled?: boolean
  onChange?: (value: string) => void
}

export const Input = ({ icon, className, classNameField, htmlFor, type, name, placeholder, value, label, required, disabled, onChange }: InputProps) => {
  return (
    <div className={clsx("field", classNameField)}>
      {label && <label className="field-label" htmlFor={htmlFor}>{label} {required && <span className="field-label-required">*</span>}</label>}
      <div className="field-content">
        {icon && <Icon icon={icon} className="field-icon" />}
        <input id={htmlFor} type={type} className={clsx("field-input", className)} name={name} placeholder={placeholder} value={value} disabled={disabled} onChange={onChange ? (e) => onChange(e.target.value) : undefined} />
      </div>
    </div>
  )
}