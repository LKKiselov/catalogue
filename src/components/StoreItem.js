import { Card } from "react-bootstrap";

export default function StoreItem({
  id,
  name,
  price,
  imgUrl,
  sku,
  productBarcode,
}) {
  return (
    <Card className="text-center p-4 ">
      <Card.Title>
        <span className="fs-4">{name}</span>
      </Card.Title>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <span>SRP {price}</span>
      </Card.Body>
    </Card>
  );
}
