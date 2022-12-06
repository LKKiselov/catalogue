import { Nav } from "react-bootstrap";
import "./navbar.css";
export function Navbar() {
  return (
    <Nav style={{ backgroundColor: "#292931", color: "#FFFFFF" }}>
      <img
        src={"/imgs/logo.png"}
        height="100"
        alt="Go-logo"
        className="logo p-3"
      ></img>

      <div className="navbar-text">
        <h1>Go Travel</h1>
        <p>Exclusive 2023 Catalogue Lines</p>
      </div>
    </Nav>
  );
}
