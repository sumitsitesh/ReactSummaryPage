import React, {Component} from 'react';
import { Table,Button } from 'react-bootstrap';

class Header extends Component {
  state = {
    invoiceData:this.props.clientdata[0]
}

  render() {
    console.log("inside invoice page :: ",this.props.clientdata[0]);
      return (
        <div>
          
       <Table striped bordered hover size="md" style={{marginLeft:"10px"}}>
  <thead>
  
      <th style={{width: '2000px'}}>
      <h2 style={{marginLeft:"0px"}} >Invoice Details</h2>
      <h5 style={{marginLeft:"850px", marginTop:"-30px"}}>what are the sort code and account number used for?</h5>
      </th>
 
  </thead>
  <tbody style={{marginLeft:"10px"}}>
    <tr >
      <td >Invoice sort-code</td>
      <td style={{marginLeftt:"10px"}}>{this.state.invoiceData.invoiceAccount.sortCode}</td>
    </tr>
    <tr>
      <td>Invoice Account number</td>
      <td>{this.state.invoiceData.invoiceAccount.accountNumber}</td>
    </tr>
    <tr>
      <td>Invoice account-currency</td>
      <td>{this.state.invoiceData.invoiceAccount.currency}</td>
    </tr>
    <tr>
      <td>Invoice account status</td>
      <td>{this.state.invoiceData.status}
      <Button variant="danger" >Terminate</Button>
      </td>
    </tr>
    <tr>
      <td>Invoice Contact</td>
      <td>{this.state.invoiceData.invoiceAccount.accountNumber}</td>
    </tr>
    <tr>
      <Button variant="outline-primary" style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>EDIT</Button>
    </tr>
  </tbody>
</Table>
      </div>
      );
  }
}

export default Header;