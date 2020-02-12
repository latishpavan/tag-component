import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Row,
  Container,
  Label,
  Button
} from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [tags, setTags] = React.useState([]);

  const handleSubmit = () => {
    const columnName = document.getElementById("columnName").value;
    const columnType = document.getElementById("columnType").value;

    const newTags = [].concat([...tags, [columnName, columnType]]);
    setTags(newTags);
  };

  const handleDelete = index => {
    tags.splice(index, 1);
    setTags([].concat(tags));
  };

  return (
    <Container fluid className="form-container">
      <Form>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Label for="columnName">Column Name</Label>
              <Input
                type="text"
                id="columnName"
                placeholder="Enter column Name"
              />
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label for="columnType">Column Type</Label>
              <Input type="select" name="select" id="columnType">
                <option>String</option>
                <option>Integer</option>
                <option>DateTime</option>
                <option>Date</option>
                <option>Float</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm="2">
            <Button style={{ marginTop: "30px" }} onClick={handleSubmit}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>
      {tags.map(([name, type], index) => (
        <div className="tag" onClick={() => handleDelete(index)}>
          {name}: {type.toLowerCase()}
        </div>
      ))}
    </Container>
  );
}
