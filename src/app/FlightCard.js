import React from 'react';
import {Card, CardHeader, CardText, CardTitle, CardMedia} from 'material-ui/Card';
import Chip from 'material-ui/Chip';

const styles = {
  spacer: {
    width: '10%'
  }
}

class FlightCard extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <Card id="flightCard" zDepth={3}>
        <CardTitle
          title={this.props.location}
          subtitle={this.props.airline + "   " + this.props.flightNumber}
        />
        <CardText>
          <table>
            <tbody>
              <tr>
                <th  id="tableHeader" scope="colgroup">
                  {this.props.text}
                </th>
                <th style={styles.spacer}>

                </th>
                <th  id="tableHeader" scope="colgroup">
                  Status
                </th>
              </tr>
              <tr>
                <td id="timeRow">
                  {this.props.plannedArrival}
                </td>
                <td style={styles.spacer}>

                </td>
                <td>
                  <Chip backgroundColor={this.props.color}>
                    {this.props.realArrival}
                  </Chip>
                </td>
              </tr>
            </tbody>
          </table>
        </CardText>
      </Card>
  )};
}
export default FlightCard;
