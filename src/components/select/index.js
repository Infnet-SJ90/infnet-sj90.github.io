import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import './style.css';

export default ({ label, ref, children }) => (
  <FormGroup>
    <Label>{label}:</Label>
    <Input type="select" ref={ref}>
      {children}
    </Input>
  </FormGroup>
);
