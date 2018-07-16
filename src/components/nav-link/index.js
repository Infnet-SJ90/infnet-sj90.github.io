import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-link.css';

export default class NavComponent extends Component {
  render() {
    const { url, children } = this.props;

    return (
      <NavLink className="nav-link" to={url} activeClassName="active">
        {children}
      </NavLink>
    );
  }
}
