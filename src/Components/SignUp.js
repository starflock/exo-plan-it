import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: localStorage.getItem("username") || "",
            password: localStorage.getItem("password") || ""
        }
    }

    componentDidUpdate() {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
    }

    handleClick(event) {
        alert(localStorage.getItem('username'));
        alert(localStorage[0]);
    }
    
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
                        name="username"
                        onChangeCommitted={(event, value) => this.setState({ username: value })} />
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center custom-row-spacing">
                    <Col xs lg="4">
                        <label style={{ color: '#CCCC00', fontWeight: 'bold', fontSize: '150%' }}>Password</label>
                        <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChangeCommitted={(event, value) => this.setState({ password: value })} />
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center custom-row-spacing">
                    <Col xs lg="2">
                        <Button type="submit" onClick={this.handleClick} variant="warning" className="full-width-btn">Sign Up</Button>
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

export default SignUp;
