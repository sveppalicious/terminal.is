import React from 'react';
import {Card, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Planks from 'react-planks';
import {tealA200} from 'material-ui/styles/colors'
const styles = {
  spacer: {
    width: '10%'
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
    fetch('http://apis.is/flight?language=en&type=arrivals')
      .then(response => response.json())
      .then((arrivals) => { this.setState({
        arrivals: arrivals.results
      });
    });
  }

  renderFlights(key) {
    const flight = this.state.arrivals[key];
    // const hasLanded = flight.realArrival.startsWith('Landed');
    return (
        <Card id="flightCard" style={styles.card} zDepth={3}>
          <CardTitle
            title={flight.from}
            subtitle={flight.airline + "   " + flight.flightNumber}
          />
          <CardText>
            <table>
              <tbody>
                <tr>
                  <th  id="tableHeader" scope="colgroup">
                    Scheduled arrival
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
        {Object.keys(this.state.arrivals).map(this.renderFlights)}
      </Planks>
  )};
}
export default Arrivals;
