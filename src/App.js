import React from 'react';
import logo from './logo.png';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to exoPlanIt
        </p>
      </header>
        <Container>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="2">
              <Link to="/"><Button variant="primary" className ="full-width-btn">Reset</Button></Link>
            </Col>
            <Col xs lg="2">
              <Link to="/create"><Button variant="primary" className ="full-width-btn">Create</Button></Link>
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="4">
              <Button variant="primary" className ="full-width-btn">View Solar System</Button>
            </Col>
          </Row>
        </Container>
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
            </Switch>
        </Router>
    )
}

function Create() {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="/"><Button variant="primary" className ="full-width-btn">Reset</Button></Link>
        </div>
    );
}

export default Routing;
