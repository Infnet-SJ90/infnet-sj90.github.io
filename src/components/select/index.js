import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import './style.css';

export default ({ label, onChange, children }) => (
  <FormGroup>
    <Label>{label}:</Label>
    <Input type="select" onChange={onChange}>{children}</Input>
  </FormGroup>
);
