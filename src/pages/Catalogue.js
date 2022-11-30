import { storeItems } from "../data/items";
import { Card } from "react-bootstrap";
import "./Catalogues.css";
import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
export function Catalogue() {
  const [search, setSearcher] = useState("");
  console.log(search);
  return (
    <>
      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="search"
            className="search-field"
            placeholder="Search For Item"
            onChange={(e) => setSearcher(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <Col key={item.id}>
              <Card className="text-center p-4 ">
                <Card.Title>
                  <span className="fs-4">{item.name}</span>
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={item.imgUrl}
                  style={{ objectFit: "cover" }}
                ></Card.Img>
                <Card.Body className="d-flex flex-column">
                  <span>SRP {item.price}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
