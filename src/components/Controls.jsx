import { IconCaretDown } from "@tabler/icons-react";
import { useState } from "react";
import "./Controls.sass";

export function DropDownList({ children, label }) {
  const [isExtended, setExtended] = useState(false);

  return (
    <div
      className={"dropdown-list" + (isExtended ? " extended" : "")}
      onMouseLeave={() => setExtended(false)}
    >
      <div className="dropdown-header" onClick={() => setExtended(!isExtended)}>
        {label}
        <IconCaretDown />
      </div>
      <div className="dropdown-items">{children}</div>
    </div>
  );
}

export function DropDownListItem({ children }) {
  return <div className="dropdown-item">{children}</div>;
}
