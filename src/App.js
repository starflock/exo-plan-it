import React from 'react';
import * as Sentry from '@sentry/browser';
import logo from './Static/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FormErrors } from './FormErrors';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ViewAllPlanets from './Components/ViewAllPlanets';
import SolarSystem from './Components/Solar';
import CreatePlanet from './Components/PlanetCreation';
import PlanetView from './PlanetView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

Sentry.init({ dsn: "https://1ff47f0de2b94685a7c54c4ee8641273@sentry.io/1784839" });


const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  }
}));

const solar_mass_marks = [
  {
    value: 1,
    label: '0.1',
  },
  {
    value: 2,
    label: '0.5',
  },
  {
    value: 3,
    label: '0.75',
  },
  {
    value: 4,
    label: '1.0',
  },
  {
    value: 5,
    label: '1.5',
  },
  {
    value: 6,
    label: '3',
  },
  {
    value: 7,
    label: '5',
  },
  {
    value: 8,
    label: '10',
  },
  {
    value: 9,
    label: '15',
  },
  {
    value: 10,
    label: '25',
  },
  {
    value: 11,
    label: '50',
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      massSlider: localStorage.getItem("massSlider") || 0.1,
      distanceSlider: localStorage.getItem("distanceSlider") || 0,
    }
  }

  componentDidUpdate() {
    localStorage.setItem("massSlider", this.state.massSlider);
    localStorage.setItem("distanceSlider", this.state.distanceSlider);
  }

  scaleToLogarithmic(sliderPosition, minSlider, maxSlider, minLog, maxLog) {
    var minv = Math.log(minLog);
    var maxv = Math.log(maxLog);

    console.log(minv);
    console.log(maxv);

    var scale = (maxv - minv) / (maxSlider - minSlider);

    console.log(scale);

    return Math.exp(minv + scale * (sliderPosition - minSlider));
  }

  scaleToLogarithmicMass(sliderPosition) {
    return this.scaleToLogarithmic(sliderPosition, 1, 11, 0.1, 50).toFixed(3);
  }

  scaleToLogarithmicDistance(sliderPosition) {
    return this.scaleToLogarithmic(sliderPosition, 1, 11, 0.001, 100000).toFixed(3);
  }

  render() {
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
        <div className="App-body">
          <Container>
            <Row className="center-box">
              <figure className="App-figure">
                <img src={logo} className="App-logo" alt="logo" />
              </figure>
            </Row>
            <Row className="center-box custom-row-spacing">
              <h1 className="custom-h1">
                Welcome to exoPlanIt
                            </h1>
            </Row>
            <div className="gutter"></div>
            <Row className="justify-content-md-center custom-row-spacing">
              <Col xs="12" md="4">
                <Typography id="discrete-slider" gutterBottom>
                  <h4 className="custom-h4">Solar Mass (M/Msun)</h4>
                </Typography>
                <AwesomeSlider
                  defaultValue={this.state.massSlider}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  valueLabelFormat={this.scaleToLogarithmicMass.bind(this)}
                  step={1}
                  min={1}
                  max={11}
                  onChangeCommitted={(event, value) => this.setState({ massSlider: value })} />
              </Col>
              <Col xs="12" md="4">
                <Typography id="discrete-slider" gutterBottom>
                  <h4 className="custom-h4">Orbital Distance (AU)</h4>
                </Typography>
                <AwesomeSlider
                  defaultValue={this.state.distanceSlider}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  valueLabelFormat={this.scaleToLogarithmicDistance.bind(this)}
                  step={1}
                  min={1}
                  max={11}
                  onChangeCommitted={(event, value) => this.setState({ distanceSlider: value })} />
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
              <Col xs lg="2">
                <Link to="/login"><Button variant="warning" className="full-width-btn">Login</Button></Link>
              </Col>
              <Col xs lg="2">
                <Link to="/viewallplanets"><Button variant="warning" className="full-width-btn">View  All Planets</Button></Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/create">
          <CreatePlanet />
        </Route>
        <Route path="/solar">
          <SolarSystem />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/view">
          <PlanetView isHabitable={true} />
        </Route>
        <Route path="/viewallplanets">
          <ViewAllPlanets />
        </Route>
      </Switch>
    </Router>
  )
}

const AwesomeSlider = withStyles({
  root: {
    color: '#ffc107',
    height: 8
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
    }
  },
  active: {
  },
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4,
  }
})(Slider);

export default Routing;
