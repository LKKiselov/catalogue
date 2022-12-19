import "./Catalogue.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { storeItems } from "../data/items";
export function Catalogue() {
  const [search, setSearch] = useState("");
  let category = [...new Set(storeItems.map(({ category }) => category))];
  console.log(category);

  return (
    <>
      <div className="catalogue-container">
        <div className="category-btn-container">
          {category.map(function (item, i) {
            return (
              <button
                className="cat-button"
                variant="primary"
                size="lg"
                onClick={(e) => {
                  console.log(item);
                  setSearch(item);
                }}
                key={i}
              >
                {item}
              </button>
            );
          })}
        </div>
        <Form >
          <Form.Group controlId="search">
            <Form.Control
              type="search"
              className="search-field"
              placeholder="Search For Item"
              onChange={(e) => setSearch(e.target.value)} 
            />
          </Form.Group>
        </Form>

        {storeItems
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search) ||
                  item.category.toLowerCase().includes(search) ||
                  item.sku.toLowerCase().includes(search);
          })
          .map((item) => (
            <div className="card-container">
              {" "}
              <ProductCard
                itemSku={item.sku}
                itemName={item.name}
                itemCategory={item.category}
                itemPrice={item.price}
                itemUrl={item.imgUrl}
              />
            </div>
          ))}
      </div>
    </>
  );
}
