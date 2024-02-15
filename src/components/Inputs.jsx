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
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"text"}
      className={"text-field " + className}
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
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      className="outlined"
    >
      {children}
    </FormField>
  );
}
export function PassField({
  label,
  children,
  value,
  onChangeerror = null,
  warning = null,
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"password"}
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
}) {
  return (
    <FormField
      label={label}
      value={value}
      onChange={onChange}
      type={"password"}
      className={"outlined"}
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
