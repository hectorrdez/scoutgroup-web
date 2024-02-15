import { useState } from "react";
import { createContext } from "react";

export const AsideContext = createContext();

export function AsideProvider({ children }) {
  const [isExtended, setExtended] = useState(true);

  const data = { isExtended, setExtended };

  return <AsideContext.Provider value={data}>{children}</AsideContext.Provider>;
}
