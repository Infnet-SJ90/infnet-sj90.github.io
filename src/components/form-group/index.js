import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import './style.css';

export default ({ label, type, ...props }) => (
  <FormGroup>
    <Label>{label}:</Label>
    <Input type={type} {...props} />
  </FormGroup>
);
