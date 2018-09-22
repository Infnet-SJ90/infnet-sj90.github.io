import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import './style.css';

export default ({ children, decorative, ...props }) => (
  <Card {...props}>
    {decorative && <CardText className="decorative">{children}</CardText>}
    {!decorative && <CardBody>{children}</CardBody>}
  </Card>
);
