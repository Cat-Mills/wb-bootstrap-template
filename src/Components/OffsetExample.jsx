import { Container, Row, Col } from "react-bootstrap";

export default function OffsetExample() {
  return (
    <Container fluid>
      <Row>
        <Col className="no-border" xs={{ offset: 4 }}>
          <img src="../../img/puppy.png" alt="puppy" />
        </Col>
      </Row>
      <Row>
        <Col className="no-border" xs="12">
          <h1>Offset Puppy</h1>
          Puppy ipsum dolor sit good dog window paws...
        </Col>
      </Row>
    </Container>
  );
}
