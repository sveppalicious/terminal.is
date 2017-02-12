import React from 'react';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Planks from 'react-planks';
import {greenA400} from 'material-ui/styles/colors'
//import {GoSignIn} from 'react-icons/go';

const styles = {
  spacer: {
    width: '10%'
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
    fetch('https://apis.is/flight?language=en&type=departures')
      .then(response => response.json())
      .then((departures) => { this.setState({
        departures: departures.results
      });
    });
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
                    <Chip backgroundColor={greenA400}>
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
