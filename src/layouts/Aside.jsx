import { useContext } from "react";
import { AsideContext } from "../contexts/AsideContext";
import "./Aside.sass";
import { Link, useLocation } from "react-router-dom";

export default function Aside({ children }) {
  const { isExtended } = useContext(AsideContext);

  return (
    <aside className={"main-aside" + (isExtended ? " extended" : "")}>
      {children}
    </aside>
  );
}

export function AsideOption({ link, children }) {
  const location = useLocation();

  return (
    <div
      className={
        "aside-option" + (location.pathname == link ? " selected" : "")
      }
    >
      <Link to={link}>{children}</Link>
    </div>
  );
}
