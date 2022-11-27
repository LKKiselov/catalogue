import { Card } from "react-bootstrap";

export default function StoreItem({ id, name, price, imgUrl }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="fs-4">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
