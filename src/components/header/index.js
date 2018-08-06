import React, { Component } from 'react';
import Button from '../button';
import Title from '../title';
import './style.css';

export default ({}) => (
  <header>
    <div className="carousel-item active">
      <div className="carousel-caption">
        <Title size={1}>Seja bem vindo!</Title>
        <Title size={3}>Faça já o recolhimento de seu entulho.</Title>
        <Button color="success" url="/login" children="Acesse Já" block />
      </div>
    </div>
  </header>
);
