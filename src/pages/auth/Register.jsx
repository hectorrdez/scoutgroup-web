import { useContext, useState } from "react";
import { Button } from "../../components/Buttons";
import {
  FormComponents,
  FormControls,
  FormFields,
} from "../../components/Form";
import { OutlinedTextField } from "../../components/Inputs";
import { ModalForm } from "../../components/Modal";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/base/normalize.sass";

export default function Register() {
  const { isLogged } = useContext(AuthContext);

  const [selectedPhase, setSelectedPhase] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    rpassword: "",
  });

  const setOnChangeData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const avanzaOnClick = () => {
    console.log(formData);
    setSelectedPhase(selectedPhase + 1);
  };
  const retrocedeOnClick = () => {
    setSelectedPhase(selectedPhase - 1);
  };

  const phases = [
    <>
      <FormFields>
        <OutlinedTextField
          label={"name"}
          value={formData.name}
          onChange={setOnChangeData}
        >
          Nombre
        </OutlinedTextField>
        <OutlinedTextField
          label={"surname"}
          value={formData.surname}
          onChange={setOnChangeData}
        >
          Apellidos
        </OutlinedTextField>
      </FormFields>
      <FormControls>
        <Button onClick={avanzaOnClick}>Siguiente</Button>
      </FormControls>
    </>,
    <>
      <FormFields>
        <OutlinedTextField
          label={"username"}
          value={formData.username}
          onChange={setOnChangeData}
        >
          Nombre de Usuario
        </OutlinedTextField>
        <OutlinedTextField
          label={"email"}
          value={formData.email}
          onChange={setOnChangeData}
        >
          Correo Electronico
        </OutlinedTextField>
      </FormFields>
      <FormControls>
        <Button onClick={avanzaOnClick}>Siguiente</Button>
      </FormControls>
    </>,
  ];

  const hola = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <ModalForm title={"Iniciar Sesión"} only onSubmit={hola}>
      {phases[selectedPhase]}
    </ModalForm>
  );
}
