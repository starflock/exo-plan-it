import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Grid, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to exoPlanIt
        </p>
      </header>
      <body>
        <Container>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="2">
              <Button variant="primary" className ="full-width-btn">Reset</Button>
            </Col>
            <Col xs lg="2">
              <Button variant="primary" className ="full-width-btn">Create</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="4">
              <Button variant="primary" className ="full-width-btn">View Solar System</Button>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
