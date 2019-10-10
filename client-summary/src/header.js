import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react'
import { Navbar } from 'react-bootstrap';

class Header extends Component {

  render() {
      return (
        <div>
            <div style={{backgroundColor: '#006400'}}>
       <Navbar >
            <Navbar.Brand href="#home">
                <h2 style={{marginLeft:"240px",color:'white'}}>LLOYDS BANK</h2>
                <h5 style={{marginLeft:"1350px", marginTop:"-40px",color:'white'}}>COMMERCIAL BANKING</h5>
            </Navbar.Brand>
      </Navbar>
      </div>
      <div style={{backgroundColor: '#228B22',height:"35px"}}>
      <Navbar >
      <div>
   
    <Icon name='home' size='tiny' />
   
  </div>
            <Navbar.Brand >
                <h5 style={{marginLeft:"235px",marginTop:"-7px",color:'white',borderTop:"006400"}}>Account and balances</h5>
                <h5 style={{marginLeft:"480px",marginTop:"-32px",color:'white'}}>Manage payments</h5>
                <h5 style={{marginLeft:"700px",marginTop:"-32px",color:'white'}}>Audit</h5>
            </Navbar.Brand>
      </Navbar>
      </div>
  
      </div>
      );
  }
}

export default Header;