import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
class Login extends Component {
    render () {
        return (
            <div className="App-body">
              <Container>
                <Row className="justify-content-md-center custom-row-spacing">
                  <Col xs lg="4">
                    <label style={{ color: '#CCCC00', fontWeight: 'bold', fontSize: '150%' }}>Username</label>
                    <input
                      className="form-control"
                      type="input"
                      name="username" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center custom-row-spacing">
                  <Col xs lg="4">
                    <label style={{ color: '#CCCC00', fontWeight: 'bold', fontSize: '150%' }}>Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password" />
                  </Col>
                </Row>
                <Row className="justify-content-md-center custom-row-spacing">
                  <Col xs lg="2">
                    <Link to="/create_user"><Button variant="warning" className="full-width-btn">Sign Up</Button></Link>
                  </Col>
                  <Col xs lg="2">
                    <Link to="/get_user"><Button variant="warning" className="full-width-btn">Submit</Button></Link>
                  </Col>
                </Row>
                <Row className="justify-content-md-center custom-row-spacing">
                  <Col xs lg="4">
                    <Link to="/"><Button variant="warning" className="full-width-btn">Homepage</Button></Link>
                  </Col>
                </Row>
              </Container>
            </div >
          );
    }
}

export default Login;