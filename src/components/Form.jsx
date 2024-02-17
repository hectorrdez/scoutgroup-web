import {
  IconEye,
  IconEyeClosed,
  IconExclamationCircle,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import "./Form.sass";
import { Logo } from "../App";

export function Form({ children, method = "post", onSubmit = () => {} }) {
  return (
    <form action="#" method={method} onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
}

export function FormComponents({ children }) {
  return <div className="form-components">{children}</div>;
}

export function FormFields({ children }) {
  return <div className="form-fields">{children}</div>;
}

export function FormField({
  children,
  type = "text",
  value,
  onChange,
  label,
  className = "",
  placeholder = "",
  error = null,
  warning = null,
  required = false,
  showHints = false,
}) {
  const [fieldType, setFieldType] = useState(type);

  const [hasError, setError] = useState(error);
  const changeType = () => {
    setFieldType(fieldType == "password" ? "text" : "password");
  };
  useEffect(() => {
    if (required && showHints) {
      if (value == "") {
        setError("El campo no puede estar vacío");
      } else {
        setError(null);
      }
    }
  }, [showHints, value]);

  return (
    <>
      <div
        className={
          "form-field " + className + (hasError != null ? " error" : "")
        }
      >
        <input
          type={fieldType}
          id={label}
          name={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <label htmlFor={label}>{children}</label>
        {type == "password" ? (
          fieldType == "password" ? (
            <IconEyeClosed
              className="form-field-password-icon"
              onClick={changeType}
            />
          ) : (
            <IconEye
              className="form-field-password-icon"
              onClick={changeType}
            />
          )
        ) : (
          ""
        )}
      </div>
      {hasError != null ? <FormFieldError>{hasError}</FormFieldError> : ""}
      {warning != null ? <FormFieldWarning>{warning}</FormFieldWarning> : ""}
    </>
  );
}

export function FormOptions({ children }) {
  return <div className="form-options">{children}</div>;
}
export function FormOption({ children }) {}

export function FormControls({ children }) {
  return <div className="form-controls">{children}</div>;
}
export function FormControl({ children }) {}

export function FormHeader({ children = "form", subtitle = null }) {
  return (
    <div className="form-header">
      <Logo />
      <div className="form-header-title">{children}</div>
      {subtitle != null ? (
        <div className="form-header-subtitle">{subtitle}</div>
      ) : null}
    </div>
  );
}

export function FormFieldError({ icon = <IconExclamationCircle />, children }) {
  return (
    <div className="form-field-error">
      <div className="form-field-error-content">
        <div className="form-field-error-icon">{icon}</div>
        <div className="form-field-error-text">{children}</div>
      </div>
    </div>
  );
}

export function FormFieldWarning({ icon = <IconAlertTriangle />, children }) {
  return (
    <div className="form-field-warning">
      <div className="form-field-warning-content">
        <div className="form-field-warning-icon">{icon}</div>
        <div className="form-field-warning-text">{children}</div>
      </div>
    </div>
  );
}

export function FormStatus({ children }) {
  return <div className="form-status">{children}</div>;
}
