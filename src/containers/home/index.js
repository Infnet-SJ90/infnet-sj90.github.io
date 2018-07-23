import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <Header />
      </div>
    );
  }
}
