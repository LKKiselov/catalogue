import { Form } from "react-bootstrap";
export function SearchField() {
  return <>
  <Form>
  
    <Form.Group controlId="search">
      <Form.Control
        type="search"
        className="search-field"
        placeholder="Search Item or Category"
      />
    </Form.Group>
  </Form></>
}
