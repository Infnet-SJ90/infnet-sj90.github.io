import React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';
import './style.css';

export default ({ children, decorative, ...props }) => (
  <Card {...props}>
    <CardText>{children}</CardText>
  </Card>
);
