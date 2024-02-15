import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import { Form, FormComponents, FormFields } from "../../components/Form";
import { OutlinedPassField, OutlinedTextField } from "../../components/Inputs";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { isLogged, setLogged } = useContext(AuthContext);

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "1234") {
      setLogged(true);
    }
  };

  if (isLogged) {
    return <Navigate to={"/home"} />;
  }

  return (
    <Form method="post" onSubmit={onFormSubmit}>
      <FormComponents>
        <FormFields>
          <OutlinedTextField
            label={"username"}
            value={formData.username}
            onChange={onChangeData}
          >
            Usuario
          </OutlinedTextField>
          <OutlinedPassField
            label="password"
            value={formData.password}
            onChange={onChangeData}
          >
            Contraseña
          </OutlinedPassField>
        </FormFields>
      </FormComponents>
      <Button type="submit">Entrar</Button>
    </Form>
  );
}

export function Prueba({ setFunction }) {
  return <button onClick={setFunction}>Cambiar</button>;
}
