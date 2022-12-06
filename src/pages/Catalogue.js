import "./Catalogue.css";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

import { storeItems } from "../data/items";
export function Catalogue() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Button
        variant="primary"
        size="lg"
        value="locks"
        onClick={(e) => {
          setSearch("pillow");
        }}
      >
        Pillows
      </Button>{" "}
      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="search"
            className="search-field"
            placeholder="Search For Item"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Row md={4} xs={3} lg={5} className="g-3">
        {storeItems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.sku.toLowerCase().includes(search);
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
