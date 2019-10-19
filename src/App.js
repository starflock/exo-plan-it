import React from 'react';
import logo from './Static/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Grid, Row, Col } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
function valuetext(value) {
  return `${value}°C`;
}

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
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
            <Col xs lg="4">
              <Typography id="discrete-slider" gutterBottom>
                <h4 className="custom-h4">Temperature</h4>
              </Typography>
              <AwesomeSlider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Col>
            <Col xs lg="4">
              <Typography id="discrete-slider" gutterBottom>
                <h4 className="custom-h4">Temperature</h4>
              </Typography>
              <AwesomeSlider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center custom-row-spacing">
            <Col xs lg="4">
              <Typography id="discrete-slider" gutterBottom>
                <h4 className="custom-h4">Temperature</h4>
              </Typography>
              <AwesomeSlider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Col>
            <Col xs lg="4">
              <Typography id="discrete-slider" gutterBottom>
                <h4 className="custom-h4">Temperature</h4>
              </Typography>
              <AwesomeSlider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Col>
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

const AwesomeSlider = withStyles({
  root: {
    color: '#ffc107',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default Routing;
