import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import View from '../../components/view';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Navbar fixed />
        <Header />
      </View>
    );
  }
}
