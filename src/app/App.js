import { Container } from "react-bootstrap";
import { Catalogue } from "../pages/Catalogue";
import { SearchField } from "../components/SearchField";
import { Navbar } from "../components/Navbar";
function App() {
  return (
    <>
      {" "}
      <Navbar />
      <Container>
        <SearchField />
        <Catalogue />
      </Container>{" "}
    </>
  );
}

export default App;
