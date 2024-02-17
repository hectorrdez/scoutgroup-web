import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import {
  FormComponents,
  FormControls,
  FormFieldError,
  FormFields,
  FormStatus,
} from "../../components/Form";
import { OutlinedPassField, OutlinedTextField } from "../../components/Inputs";
import { ModalForm } from "../../components/Modal";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: null,
    password: null,
  });

  const [showHints, setHints] = useState(false);

  const { isLogged, setLogged } = useContext(AuthContext);

  const onChangeData = (e) => {
    const { name, value } = e.target;
    if (value == "") {
      setFormErrors((prevData) => ({
        ...prevData,
        [name]: "El campo no puede estar vacío",
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: "" }));
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setHints(true);
  };

  if (isLogged) {
    return <Navigate to={"/home"} />;
  }

  return (
    <ModalForm only onSubmit={onFormSubmit}>
      <FormFields>
        <OutlinedTextField
          label={"username"}
          value={formData.username}
          onChange={onChangeData}
          error={formErrors.username}
          required
          showHints={showHints}
        >
          Usuario
        </OutlinedTextField>
        <OutlinedPassField
          label="password"
          value={formData.password}
          onChange={onChangeData}
          error={formErrors.password}
          showHints={showHints}
        >
          Contraseña
        </OutlinedPassField>
      </FormFields>
      <FormControls>
        <Button type="submit">Entrar</Button>
      </FormControls>
    </ModalForm>
  );
}
