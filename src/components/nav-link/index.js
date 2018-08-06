import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default ({ url, children }) => (
  <NavLink className="nav-link" to={url} activeClassName="active">
    {children}
  </NavLink>
);
