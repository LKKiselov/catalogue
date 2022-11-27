import storeItems from "../data/items.json";

import StoreItem from "../components/StoreItem.js";
import { Container } from "react-bootstrap";

export function Catalogue() {
  return (
    <>
      <h1>Products</h1>
      <Container className="fluid">
        {storeItems.map((item) => {
          return (
            <div key={item.id}>
              <StoreItem {...item}></StoreItem>
            </div>
          );
        })}
      </Container>
    </>
  );
}
