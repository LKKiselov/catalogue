import { Container } from "react-bootstrap";
import { Catalogue } from "../pages/Catalogue";

import { Navbar } from "../components/Navbar/Navbar";
function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Container>
        <Catalogue />
      </Container>{" "}
    </>
  );
}

export default App;
