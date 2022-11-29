import storeItems from "../data/items.json";

import StoreItem from "../components/StoreItem.js";
import { Row, Col } from "react-bootstrap";

export function Catalogue() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item}></StoreItem>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
