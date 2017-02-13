import React from 'react';
import Planks from 'react-planks';
import FlightCard from './FlightCard';
import axios from 'axios';
import {greenA400, deepOrangeA100, deepOrangeA700, tealA200, deepOrangeA400} from 'material-ui/styles/colors';

function findColor(status) {
  if (status.startsWith('Landed')) {
    return tealA200;
  } else if (status.startsWith('Confirm')) {
    return greenA400;
  } else if (status.startsWith('Estimat')) {
    return deepOrangeA100;
  } else if (status.startsWith('Cancel')) {
    return deepOrangeA700;
  } else {
    return greenA400;
  }
}

class Arrivals extends React.Component {
  constructor() {
    super();
    this.renderFlights = this.renderFlights.bind(this);
    this.state = {
      arrivals: {}
    };
  }

  componentWillMount() {
    axios.get('https://apis.is/flight?language=en&type=arrivals')
      //.then(response.=> response.data.json())
      .then(function (response) {
        //console.log(response.data);
        this.setState({
          arrivals: response.data.results
      });
    }.bind(this));
  }

  renderFlights(key) {
    const flight = this.state.arrivals[key];
    const color = findColor(flight.realArrival);
    return (
        <FlightCard
          flightNumber={flight.flightNumber}
          airline={flight.airline}
          location={flight.from}
          plannedArrival={flight.plannedArrival}
          realArrival={flight.realArrival}
          text={'Scheduled arrival'}
          color={color}
        />
    )
  };

  render() {
    return (
      <Planks>
        {
          Object
            .keys(this.state.arrivals)
            .map(this.renderFlights)
        }
      </Planks>
  )};
}
export default Arrivals;
