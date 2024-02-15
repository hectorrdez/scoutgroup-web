import { IconUsersGroup } from "@tabler/icons-react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.sass";
import { ProtectedRoute } from "./components/Auth";
import { TextField } from "./components/Inputs";
import { AsideOption } from "./layouts/Aside";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Members from "./pages/Members";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Route>

      <Route path="/" element={<Landing />} />
      <Route
        path="/pruebas"
        element={
          <div id="pruebas">
            <TextField
              label={"usuario"}
              value={user}
              onChange={(e) => setUser(e.target.value)}
            >
              Usuario
            </TextField>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export function Navigation() {
  return (
    <>
      <AsideOption link={"/members"}>Socios</AsideOption>
      <AsideOption link={"/events"}>Eventos</AsideOption>
    </>
  );
}

export function Logo({ linked = false, linkTo = "/home" }) {
  if (linked) {
    return (
      <Link to={linkTo}>
        <div id="logo">
          <IconUsersGroup />
          ScoutGroup
        </div>
      </Link>
    );
  } else {
    return (
      <div id="logo">
        <IconUsersGroup />
        ScoutGroup
      </div>
    );
  }
}
