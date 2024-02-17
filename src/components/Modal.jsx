import { useState } from "react";
import { Form, FormComponents, FormHeader } from "./Form";
import "./Modal.sass";

export function Modal({ children, className = "" }) {
  const [classes, setClasses] = useState(
    ["modal", className.split(" ")].join(" ")
  );

  return (
    <div className={classes}>
      <div className="modal-container">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export function ModalForm({
  children,
  title = "Iniciar sesión",
  only = false,
  onSubmit = () => {},
}) {
  return (
    <Modal className={only ? "only-modal" : ""}>
      <Form onSubmit={onSubmit}>
        <FormHeader>{title}</FormHeader>
        <FormComponents>{children}</FormComponents>
      </Form>
    </Modal>
  );
}
