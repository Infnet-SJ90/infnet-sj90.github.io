import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import Nav from '../nav';
import {
  Navbar,
  Container,
  NavbarToggler,
  NavbarBrand,
  Collapse
} from 'reactstrap';

export default class NavbarComponent extends Component {
  state = {};

  toggle = () => {
    this.setState({ navbarTogglerOpen: !this.state.navbarTogglerOpen });
  };

  dropDownToggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  render() {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Container>
          <NavbarBrand to="/">
            <img src={Logo} alt="Logo" height={30} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.navbarTogglerOpen} navbar>
            <Nav />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
