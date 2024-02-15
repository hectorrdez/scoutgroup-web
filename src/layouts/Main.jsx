import { Navigation } from "../App";
import Aside from "./Aside";
import Header from "./Header";
import "./Main.sass";

export default function Main({ children }) {
  return (
    <>
      <Header />
      <div className="main-container">
        <Aside>
          <Navigation />
        </Aside>
        <main>{children}</main>
      </div>
    </>
  );
}
