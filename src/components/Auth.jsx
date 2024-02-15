import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { isLogged } = useContext(AuthContext);

  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
}
