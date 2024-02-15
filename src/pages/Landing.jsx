import { Link } from "react-router-dom";
import { Logo } from "../App";
import "./Landing.sass";
import { ModalForm } from "../components/Modal";
import { OutlinedTextField } from "../components/Inputs";
import { useState } from "react";
import {
  IconAlertTriangle,
  IconExclamationCircle,
  IconExclamationMark,
  IconTriangle,
} from "@tabler/icons-react";

export default function Landing() {
  const [prueba, setPrueba] = useState("");
  return (
    <>
      <header>
        <Logo />
        <nav>
          <Link to={"/login"}>Iniciar sesión</Link>
          <Link to={"/register"}>Crear Cuenta</Link>
        </nav>
        <ModalForm>
          <OutlinedTextField
            label={"prueba"}
            value={prueba}
            onChange={(e) => setPrueba(e.target.value)}
          >
            Prueba
          </OutlinedTextField>
          
          
        </ModalForm>
      </header>
    </>
  );
}
