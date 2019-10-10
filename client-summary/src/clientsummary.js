import React, {Component} from 'react';

import { Card , Table} from 'react-bootstrap';

class Clientsummary extends Component {
   
  state = {
    summaryData: this.props.clientdata[0]
}
  render() {
    console.log("inside summary page :: ",this.state.summaryData);
      return (
        <div style={{backgroundColor:"ghost"}}>
            <h2 style={{marginLeft:"250px", marginTop: '20px',backgroundColor:"ghost"}}>Client Summary</h2>
            <div style={{display:'flex'}}>
 <Card style={{ width: '27rem',marginLeft: '250px',marginBottom: '5px' }}>
          <Card.Body>
                <Card.Title>Client details</Card.Title>
                      <Table >
                          <tbody>
                            <tr>
                              <td>Client Id </td>
                              <td>{this.state.summaryData.client_id}</td>
                            </tr>
                            <tr>
                              <td>Client Name</td>
                              <td>{this.state.summaryData.clientName}</td>
                            </tr>
                            <tr>
                              <td>Client status</td>
                              <td>{this.state.summaryData.status}</td>
                            </tr>
                            <tr>
                              <td>Administration type</td>
                              {/* <td>{this.state.summaryData.adminType}</td> */}
                              <td>true</td>
                              
                            </tr>
                            <tr>
                              <td>Password valid for</td>
                              <td>{this.state.summaryData.passwordExpiryPeriod}</td>
                            </tr>
                            <tr>
                              <td>Active from</td>
                              <td>{this.state.summaryData.activeFrom}</td>
                            </tr>
                          </tbody>
                  </Table>
          </Card.Body>
    </Card>
</div>
<div style={{ float: 'left'}}>
<Card style={{ width: '25rem', marginLeft: '700px', marginTop: '-390px'}}>
        <Card.Body>
          <Card.Title>Primary Contact</Card.Title>
              <Table >
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{this.state.summaryData.primaryContact.first_name}</td>
                  </tr>
                  <tr>
                    <td>Username</td>
                    <td>{this.state.summaryData.primaryContact.username}</td>
                  </tr>
                  <tr>
                    <td>Client Address</td>
                    <td>{this.state.summaryData.clientAddress.firstLine} {this.state.summaryData.clientAddress.secondLine},
                    {this.state.summaryData.clientAddress.city},{this.state.summaryData.clientAddress.country} {this.state.summaryData.clientAddress.postcode}
                    </td>
                  </tr>
                </tbody>
          </Table>
        </Card.Body>
</Card>
</div>
      </div>
      );
  }
}

export default Clientsummary;