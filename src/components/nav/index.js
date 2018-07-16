import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import NavLink from '../nav-link';
import Button from '../button';

export default class NavComponent extends Component {
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink url="/" children="Home" />
        </NavItem>
        <NavItem className="mx-3">
          <NavLink url="/agendamento" children="Agendamento" />
        </NavItem>
        <NavItem>
          <Button color="info" url="/login" children="Entrar" outline />
        </NavItem>
      </Nav>
    );
  }
}
