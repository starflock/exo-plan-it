import React from 'react';
import logo from './Static/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Grid, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </header>
      <body className="App-body">
        <Container>
          <Row className="justify-content-md-center custom-row-spacing">
            <img src={logo} className="App-logo" alt="logo" />
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <h1 className="custom-h1">
              Welcome to exoPlanIt
            </h1>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="2">
              <Link to="/"><Button variant="warning" className="full-width-btn">Reset</Button></Link>
            </Col>
            <Col xs lg="2">
              <Link to="/create"><Button variant="warning" className="full-width-btn">Create</Button></Link>
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="4">
              <Link to="/solar"><Button variant="warning" className="full-width-btn">View Solar System</Button></Link>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/solar">
          <Solar />
        </Route>
      </Switch>
    </Router>
  )
}

function Create() {
  return (
    <div className="App-body">
      <Container>
        <Row className="justify-content-md-center custom-row-spacing">
          <h1 className="custom-h1">Create Your Plannet</h1>
        </Row>
        <Row className="justify-content-md-center custom-row-spacing">
          <Col xs lg="2">
            <Button variant="warning" className="full-width-btn">Save</Button>
          </Col>
          <Col xs lg="2">
            <Button variant="warning" className="full-width-btn">Try Again</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center custom-row-spacing">
          <Col xs lg="4">
            <Link to="/"><Button variant="warning" className="full-width-btn">Homepage</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Solar() {
  return (
    <div className="App-body">
      <Container>
        <Row className="justify-content-md-center custom-row-spacing">
          <h1 className="custom-h1">View Solar System</h1>
        </Row>
        <Row className="justify-content-md-center custom-row-spacing">
          <Col xs lg="2">
            <Button variant="warning" className="full-width-btn">Save</Button>
          </Col>
          <Col xs lg="2">
            <Button variant="warning" className="full-width-btn">Try Again</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center custom-row-spacing">
          <Col xs lg="4">
            <Link to="/"><Button variant="warning" className="full-width-btn">Homepage</Button></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Routing;
