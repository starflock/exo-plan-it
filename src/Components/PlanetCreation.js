import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class CreatePlanet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planetName: localStorage.getItem("planetName") || ""
    };
  }

  onChange = event => {
      const planetName = event.target.value;
      localStorage.setItem("planetName", planetName);
      this.setState({ planetName });
    };
  render() {
    return (
      <div className="App-body">
        <Container>
          <Row className="justify-content-md-center custom-row-spacing">
            <h1 className="custom-h1">Create Your Planet</h1>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="4">
              <label style={{ color: '#CCCC00', fontWeight: 'bold', fontSize: '150%' }}>Planet Name</label>
              <input
                className="form-control"
                type="input"
                value={this.state.planetName}
                onChange={this.onChange}
                name="planetName"/>
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="2">
              <Link to="/signup"><Button variant="warning" className="full-width-btn">Save</Button></Link>
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
}

export default CreatePlanet;
