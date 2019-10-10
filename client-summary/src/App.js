import React, {Component} from 'react';
import Header from './header'
import Clientsummary from './clientsummary';
import request from 'superagent';
import Invoicedetails from './Invoicedetails';
import { Table} from 'react-bootstrap';

class App extends Component {

  state = {
    Client: [],
    hasLoaded:false
}

componentDidMount(){
    this.getClient();
  }

  getClient () {
      request
        .get('http://localhost:3000/clients')
        .then((res) =>{
        this.setState({
          Client:res.body,
          hasLoaded:true
        })
        console.log(res.body);
      })
      .catch(err =>{
        console.log(err);
      })
  }
xx
  render() {
    console.log("Client :: " ,this.state.Client)
      return (
      <div>
         
        <Header />
        <Table >
        {this.state.hasLoaded ? <Clientsummary clientdata={this.state.Client}/> : null}
        {this.state.hasLoaded ?<Invoicedetails clientdata={this.state.Client}/> : null}
        </Table>
      </div>
      );
  }
}

export default App;