import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class SolarSystem extends Component {
    render() {
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
}

export default SolarSystem;