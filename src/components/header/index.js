import React, { Component } from 'react';
import Button from '../button';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="carousel-item active">
          <div className="carousel-caption">
            <h1>Seja bem vindo!</h1>
            <h3>Faça já o recolhimento de seu entulho.</h3>
            <Button color="success" url="/login" children="Acesse Já" block />
          </div>
        </div>
      </header>
    );
  }
}
