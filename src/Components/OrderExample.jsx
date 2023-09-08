import { Container, Row, Col } from "react-bootstrap";

export default function OrderExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={{span: 3, order: 2}}>
        <h1>Table of Contents</h1>
        <p>On top for small screens. Appears last (on the right) for medium screens.</p>
        </Col>
        <Col xs={12} md={{span: 9, order: 1}}>
        <h1>Article</h1>
        <p>On the bottom for small screens. Appears first (on the left) for medium screens</p>
        </Col>
      </Row>
    </Container>
  );
}
