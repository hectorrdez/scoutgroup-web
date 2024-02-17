import { FormField } from "./Form";
import "./Inputs.sass";

export function TextField({
  label,
  children,
  value,
  onChange,
  className = "",
  error = null,
  warning = null,
  required = false,
  showHints = false,
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"text"}
      className={"text-field " + className}
      error={error}
      warning={warning}
      required={required}
      showHints={showHints}
    >
      {children}
    </FormField>
  );
}
export function OutlinedTextField({
  label,
  children,
  value,
  onChange,
  error = null,
  warning = null,
  required = false,
  showHints = false,
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      className="outlined"
      error={error}
      warning={warning}
      required={required}
      showHints={showHints}
    >
      {children}
    </FormField>
  );
}
export function PassField({
  label,
  children,
  value,
  onChange,
  error = null,
  warning = null,
  showHints = false,
  required = true,
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"password"}
      error={error}
      warning={warning}
      showHints={showHints}
      required={required}
    >
      {children}
    </FormField>
  );
}
export function OutlinedPassField({
  label,
  children,
  value,
  onChange,
  error = null,
  warning = null,
  showHints = false,
  required = true,
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"password"}
      className={"outlined"}
      error={error}
      warning={warning}
      showHints={showHints}
      required={required}
    >
      {children}
    </FormField>
  );
}
export function EmailField({
  label,
  children,
  value,
  onChange,
  error = null,
  warning = null,
}) {
  return (
    <FormField type={"email"} label={label} value={value} onChange={onChange}>
      {children}
    </FormField>
  );
}
export function NumberField({
  label,
  children,
  value,
  onChage,
  error = null,
  warning = null,
}) {
  return (
    <FormField type={"number"} label={label} value={value} onChange={onChage}>
      {children}
    </FormField>
  );
}
export function DateField() {}
export function PasswordField() {}
