import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";
export function Navbar() {
  return (
    <Nav sticky="top" style={{ backgroundColor: "#292931" }}>
      <Nav.Link to="/" as={NavLink}>
        <img src={"/imgs/logo.png"} height="100" alt="Go-logo"></img>
      </Nav.Link>{" "}
      <div className="navbar-text">
        <h1>Go Travel</h1>
        <p>Exclusive 2023 Catalogue Lines</p>
      </div>
    </Nav>
  );
}
