import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import View from '../../components/view';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <p>Página de Login</p>
      </View>
    );
  }
}
