import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SearchField.css";
export function SearchField() {
  return (
    <>
      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            className="search-field"
            placeholder="Search For Item"
          />
        </Form.Group>
      </Form>
    </>
  );
}
