import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Catalogue } from "../pages/Catalogue";
import { PendingOrders } from "../pages/PendingOrders";
import { Navbar } from "../components/Navbar";
function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Catalogue />}></Route>
            <Route path="/orders" element={<PendingOrders />}></Route>
          </Routes>
        </Container>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
