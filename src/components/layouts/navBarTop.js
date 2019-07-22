import React from 'react';
import logo from '../../images/reskill_101.png';
import { NavLink as RRNavLink } from 'react-router-dom';
/*
,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
  */
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas)

  export default class NavBarTop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar className="top-menu" color="" light expand="md">
          <NavbarBrand href="/">
              <img src={logo} style={{width:100}}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-3 mr-auto" navbar>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/">
                      Library
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/skills">
                      Skills
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/certifications">
                      Certifications
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} to="/jobs">
                      Jobs
                    </NavLink>
                </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

/*
<Nav className="ml-auto noBgItem" navbar>
  <NavItem id="sec-menu">
    <NavLink tag={RRNavLink} to="/">
      <FontAwesomeIcon icon={['fas', 'search']} size="sm" />
    </NavLink>
  </NavItem>
  <NavItem id="sec-menu">
    <NavLink tag={RRNavLink} to="/sign-in" className="navUnderL">Sign-in</NavLink>
  </NavItem>
  <NavItem id="sec-menu">
    <NavLink tag={RRNavLink} to="/register" className="navUnderL">Register</NavLink>
  </NavItem>
</Nav>
*/