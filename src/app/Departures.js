import React from 'react';
import Planks from 'react-planks';
import FlightCard from './FlightCard';
import axios from 'axios';
import {greenA400, deepOrangeA100, deepOrangeA700, tealA200, deepOrangeA400} from 'material-ui/styles/colors';

function findColor(status) {
  if (status.startsWith('Departed')) {
    return tealA200;
  } else if (status.startsWith('Gate Closed')) {
    return deepOrangeA700;
  } else if (status.startsWith('Go To Gate')) {
    return deepOrangeA100;
  } else if (status.startsWith('Final')) {
    return deepOrangeA400;
  } else {
    return greenA400;
  }
}
class Departures extends React.Component {
  constructor() {
    super();
    this.renderFlights = this.renderFlights.bind(this);
    this.state = {
      departures: {}
    };
  }

  componentWillMount() {
    axios.get('https://apis.is/flight?language=en&type=departures')
      //.then(response.=> response.data.json())
      .then(function (response) {
        //console.log(response.data);
        this.setState({
          departures: response.data.results
      });
    }.bind(this));
  }

  renderFlights(key) {
    const flight = this.state.departures[key];
    const color = findColor(flight.realArrival);
    return (
        <FlightCard
          flightNumber={flight.flightNumber}
          airline={flight.airline}
          location={flight.to}
          plannedArrival={flight.plannedArrival}
          realArrival={flight.realArrival}
          text={'Scheduled departure'}
          color={color}
        />
    )
  };

  render() {
    return (
        <Planks>
          {Object.keys(this.state.departures).map(this.renderFlights)}
        </Planks>
  )};
}
export default Departures;
