import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import View from '../../components/view';

export default class MySchedule extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <p>Página dos Meus Agendamentos</p>
      </View>
    );
  }
}
