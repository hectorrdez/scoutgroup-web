import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isLogged, setLogged] = useState(false);

  const data = { isLogged, setLogged };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
