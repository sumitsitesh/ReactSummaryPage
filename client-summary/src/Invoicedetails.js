import React, {Component} from 'react';
import { Table,Button } from 'react-bootstrap';

class Header extends Component {
  state = {
    invoiceData:this.props.clientdata[0]
}
  render() {
    console.log("inside invoice page :: ",this.props.clientdata[0]);
      return (
        <div style={{marginLeft:"250px", marginRight:"250px"}}>
          
       <Table striped bordered hover size="md" >
  <thead>
      <th style={{width: '2000px'}}>
      <h2 style={{marginLeft:"0px"}} >Invoice Details</h2>
      <h5 style={{marginLeft:"680px", marginTop:"-40px", color:"#006400"}}>what are the sort code and account number used for?</h5>
      </th>
  </thead>
  <tbody style={{marginLeft:"10px"}}>
    <tr >
      <td >Invoice sort-code
      <div style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>{this.state.invoiceData.invoiceAccount.sortCode}</div>
      </td>
    </tr>
    <tr>
      <td>Invoice Account number
      <div style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>{this.state.invoiceData.invoiceAccount.accountNumber}</div>
      </td>
    </tr>
    <tr>
      <td>Invoice account-currency
      <div style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>{this.state.invoiceData.invoiceAccount.currency}</div>
      </td>
    </tr>
    <tr>
      <td>Invoice account status
        <div style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>{this.state.invoiceData.status}
           <div><Button variant="danger" >Terminated</Button></div>
        </div>
      </td>
      
    </tr>
    <tr>
      <td>Invoice Contact <div style={{float:"right", marginTop:"10px" ,marginBottom:"10px"}}>{this.state.invoiceData.invoiceAccount.accountNumber}</div></td>
    </tr>
    <tr>
      <Button variant="outline-success" style={{float:"right", marginTop:"10px" ,marginBottom:"10px",color:"#006400"}}>Edit Details</Button>
    </tr>
  </tbody>
</Table>
      </div>
      );
  }
}

export default Header;