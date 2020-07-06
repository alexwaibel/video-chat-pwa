import React from 'react';
import './App.css';
import Jitsi from './Jitsi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Jitsi />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
