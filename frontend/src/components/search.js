import React from "react";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap"; // Uses js destructuring syntax

/*
* Custom Search component. When the state variable changes, 
* This component edits the state variable, not the DOM directly. 
* This component is build using other React Bootstrap components.
*/
const Search = ({word, setWord, handleSubmit}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control 
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Search for new image..." 
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
