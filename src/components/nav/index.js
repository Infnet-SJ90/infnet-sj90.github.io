import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import NavLink from '../nav-link';
import Button from '../button';
import './style.css';

export default ({}) => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink url="/" children="Home" />
    </NavItem>
    <NavItem>
      <NavLink url="/agendar" children="Agendar" />
    </NavItem>
    <NavItem>
      <NavLink url="/meus-agendamentos" children="Meus Agendamento" />
    </NavItem>
    <NavItem>
      <Button color="info" url="/login" children="Entrar" outline />
    </NavItem>
  </Nav>
);
