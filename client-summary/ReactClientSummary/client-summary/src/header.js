import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {

  render() {
      return (
        <div>
            <div style={{backgroundColor: 'green'}}>
       <Navbar >
    <Navbar.Brand href="#home">
    <h2>Lloyds Bank</h2>
    <h5 style={{marginLeft:"1350px", marginTop:"-30px"}}>Commercial Banking</h5>
      {/* {' Lloyds Bank'} */}
    </Navbar.Brand>
  </Navbar>
  </div>
      </div>
      );
  }
}

export default Header;