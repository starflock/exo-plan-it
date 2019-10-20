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
      planetName: localStorage.getItem("planetName") || "",
    }
  }

  componentDidUpdate() {
    localStorage.setItem("planetName", this.planetName);
  }
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
                defaultValue={this.state.planetName}
                className="form-control"
                type="input"
                name="planetName"
                onChangeCommitted={(event, value) => this.setState({ planetName: value })}/>
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="2">
              <Button variant="warning" className="full-width-btn">Save</Button>
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
