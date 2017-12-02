import React, { Component } from 'react';
import './header.css'

import { Navbar,Nav,NavDropdown,NavItem,MenuItem } from 'react-bootstrap'

class Header extends Component {

  render() {
    return (
      <div className="header">
       <Navbar inverse collapseOnSelect>
       <Navbar.Header>
      <Navbar.Brand>
    <a href="/">  Hello Test ! </a>
      </Navbar.Brand>
     </Navbar.Header>


     <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">About</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>

       </Navbar>
      
      </div>
    );
  }
}

export default Header;