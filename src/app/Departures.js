import React from 'react';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Planks from 'react-planks';
import {MdFlightLand, MdFlightTakeOff, MdFlight, MdArrowForward} from 'react-icons/lib/md';
import FontIcon from 'material-ui/FontIcon';
import {greenA200, deepOrangeA100, deepOrangeA700, tealA200, deepOrangeA400} from 'material-ui/styles/colors'
//import {GoSignIn} from 'react-icons/go';

const styles = {
  spacer: {
    width: '10%'
  }
}
function findColor(status) {
  if (status.startsWith('Departed')) {
    return {tealA200};
  } else if (status.startsWith('Gate Closed')) {
    return {deepOrangeA700};
  } else if (status.startsWith('Go To Gate')) {
    return {deepOrangeA100};
  } else if (status.startsWith('Final')) {
    return {deepOrangeA400};
  }
}

class Departures extends React.Component {
  constructor() {
    super();
    this.renderFlights = this.renderFlights.bind(this);
    this.state = {
      departures: [],
    };
  }

  componentWillMount() {
    fetch('http://apis.is/flight?language=en&type=departures')
      .then(response => response.json())
      .then((departures) => { this.setState({
        departures: departures.results
      });
    });
  }

  getColor(status) {
    let color = {greenA200}
    if (status.startsWith('Departed')) {
      color = {tealA200};
    } else if (status.startsWith('Gate Closed')) {
      color = {deepOrangeA700};
    } else if (status.startsWith('Go To Gate')) {
      color = {deepOrangeA100};
    } else if (status.startsWith('Final')) {
      color = {deepOrangeA400};
    }
    return color;
  }

  renderFlights(key) {
    const flight = this.state.departures[key];
    //let color = getColor(flight.realArrival)
    return (
        <Card id="flightCard" style={styles.card} zDepth={3}>
          <CardTitle
            title={flight.to}
            subtitle={flight.airline + "   " + flight.flightNumber}
          />
          <CardText>
            <table>
              <tbody>
                <tr>
                  <th  id="tableHeader" scope="colgroup">
                    Scheduled departure
                  </th>
                  <th style={styles.spacer}>

                  </th>
                  <th  id="tableHeader" scope="colgroup">
                    Status
                  </th>
                </tr>
                <tr>
                  <td id="timeRow">
                    {flight.plannedArrival}
                  </td>
                  <td style={styles.spacer}>

                  </td>
                  <td>
                    <Chip backgroundColor={tealA200}>
                      {flight.realArrival}
                    </Chip>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardText>
        </Card>
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
