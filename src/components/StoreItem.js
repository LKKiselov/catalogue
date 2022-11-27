import { Card } from "react-bootstrap";

export default function StoreItem({ id, name, imgUrl }) {
  return (
    <Card>
      <Card.Img
        variant="inline"
        src={imgUrl}
        height="300"
        style={{ objectFit: "cover" }}
        className="col-md-4 "
      ></Card.Img>
    </Card>
  );
}
