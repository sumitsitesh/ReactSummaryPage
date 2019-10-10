import React, {Component} from 'react';

import { Card , Table} from 'react-bootstrap';

class Clientsummary extends Component {
   
  state = {
    summaryData: this.props.clientdata[0]
}
  render() {
    console.log("inside summary page :: ",this.state.summaryData);
     const {data}  = this.props.clientdata[0]
      return (
        <div>
            <h2 style={{marginLeft:"250px"}}>Client Summary</h2>
            <div style={{display:'flex'}}>
 <Card style={{ width: '25rem',marginLeft: '250px',marginBottom: '6px' }}>
          <Card.Body>
                <Card.Title>Client details</Card.Title>
                      <Table >
                          <tbody>
                            <tr>
                              <td>Invoice sort-code </td>
                              <td>{this.state.summaryData.invoiceAccount.sortCode}</td>
                            </tr>
                            <tr>
                              <td>Invoice Account number</td>
                              <td>{this.state.summaryData.invoiceAccount.accountNumber}</td>
                            </tr>
                            <tr>
                              <td>Invoice account-currency</td>
                              <td>{this.state.summaryData.invoiceAccount.currency}</td>
                            </tr>
                            <tr>
                              <td>Invoice account status</td>
                              <td>{this.state.summaryData.status}</td>
                              
                            </tr>
                            <tr>
                              <td>Invoice Contact</td>
                              <td>{this.state.summaryData.invoiceAccount.sortCode}</td>
                            </tr>
                          </tbody>
                  </Table>
          </Card.Body>
    </Card>
</div>
<div style={{ float: 'left'}}>
<Card style={{ width: '25rem', marginLeft: '700px', marginTop: '-345px'}}>
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
                    <td>{this.state.summaryData.clientAddress.secondLine}</td>
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