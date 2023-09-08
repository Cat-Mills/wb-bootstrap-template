import { Container, Row, Col } from "react-bootstrap";

export default function ColumnSizingExample() {
  return (
    //Inside the container, everything is put in rows and columns
    <Container fluid>
      <Row>
        <Col xs='9'> Column width 9 </Col>
        <Col xs='3'> Column width 3 </Col>
      </Row>
      <Row>
        <Col> Column </Col>
        <Col xs='6'> Column width 6 </Col>
        <Col> Column </Col>
      </Row>
    </Container>
  );
}
