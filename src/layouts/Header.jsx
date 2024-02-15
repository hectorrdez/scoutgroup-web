import { IconMenu2 } from "@tabler/icons-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../App";
import { InvertedButton, InvisibleButton } from "../components/Buttons";
import { DropDownList, DropDownListItem } from "../components/Controls";
import SearchBar from "../components/SearchBar";
import { AsideContext } from "../contexts/AsideContext";
import { AuthContext } from "../contexts/AuthContext";
import "./Header.sass";

export default function Header() {
  const { setLogged } = useContext(AuthContext);
  const { isExtended, setExtended } = useContext(AsideContext);

  return (
    <header className="main-header">
      <div className="header-group">
        <InvertedButton onClick={() => setExtended(!isExtended)}>
          <IconMenu2 />
        </InvertedButton>
        <Logo linked />
      </div>
      <div className="header-group">
        <SearchBar />
      </div>
      <div className="header-group">
        <DropDownList label={"Bienvenido, Cliente"}>
          <DropDownListItem>
            <Link>Configuracion</Link>
          </DropDownListItem>
          <DropDownListItem>
            <InvisibleButton onClick={() => setLogged(false)}>
              Salir
            </InvisibleButton>
          </DropDownListItem>
        </DropDownList>
      </div>
    </header>
  );
}
