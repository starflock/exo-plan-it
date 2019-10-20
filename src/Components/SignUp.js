import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PlanetView from '../PlanetView';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toViewPlanet: false,
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      localStorage.setItem("username", data.get("username"));
      localStorage.setItem("password", data.get("password"));

      fetch('https://exo-planet-starflock-backend.herokuapp.com/create_user', {
        method: 'POST',
        body: JSON.stringify(localStorage),
        headers: {
          'Content-Type':'application/json'
        }
      }).then(response => {
        window.location.href = "/view";
    })

    }
    render () {
      if (this.state.toViewPlanet === true) {
      return <PlanetView to='/view' />
    }
        return (
          <form onSubmit={this.handleSubmit}>
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
                        <Button type="submit" variant="warning" className="full-width-btn">Sign Up</Button>
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center custom-row-spacing">
                    <Col xs lg="4">
                        <Link to="/"><Button variant="warning" className="full-width-btn">Homepage</Button></Link>
                    </Col>
                    </Row>
                </Container>
            </div >
            </form>
          );
    }
}

export default SignUp;
