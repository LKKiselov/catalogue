import { Nav } from "react-bootstrap";
import "./navbar.css";
import { SearchField } from "../SearchField/SearchField";
export function Navbar() {
  return (
    <Nav
      style={{ backgroundColor: "#292931", color: "#FFFFFF", height: "100px" }}
      className="fixed-top"
    >
      <img
        src={"/imgs/logo.png"}
        height="100"
        alt="Go-logo"
        className="logo p-3"
      ></img>

      <div className="navbar-text">
        <h1>Go Travel</h1>
        {/* <SearchField/> */}
        <p>Exclusive 2023 Catalogue Lines</p>
      </div>
    </Nav>
  );
}
