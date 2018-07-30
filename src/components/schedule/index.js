import React, { Component } from 'react';
import './schedule.css';


export default class ScheduleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {dateValue: '',
      timeValue: '',
      addressValue: '',
      addressNumberValue: null,
      neighborhoodValue: '',
      zipcodeValue: null,
      typeValue: ''
    };


    const typeOfRubble={
      TYPEA: 'Classe A: Alvenarias, concreto, argamassas e solos - podem ser reutilizados na forma de agregados',
      TYPEB: 'Classe B: Restos de madeira, metal, plástico, papel, papelão, gesso, vidros - podem ser reutilizados no próprio canteiro de obra ou encaminhados para reciclagem',
      TYPEC: 'Classe C: Classe C: Resíduos sem tecnologia para reciclagem',
      TYPED: 'Classe D: Resíduos perigosos, tais como tintas, solventes, óleos e outros, ou aqueles contaminados oriundos de obras em clínicas radiológicas, hospitais, instalações, industriais, etc.'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Coleta Cadastrada');
    event.preventDefault();
    console.log(this.refs.dateValue.value,
      this.refs.timeValue.value,
      this.refs.addressValue.value,
      this.refs.addressNumberValue.value,
      this.refs.neighborhoodValue.value,
      this.refs.zipcodeValue.value,
      this.refs.typeValue.value);

  }

  render() {
    return(
      <div className="half-screen">
        <div className="form-group">
          <h1>Agendamento</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Data:</label>
            <input type="date" ref="dateValue"/>

            <label>Horário:</label>
            <input type="time" ref="timeValue"/>

            <label>Endereço:</label>
            <input type="text" ref="addressValue"/>

            <label>Número:</label>
            <input type="number" ref="addressNumberValue"/>

            <label>Bairro:</label>
            <input type="text" ref="neighborhoodValue"/>

            <label>CEP:</label>
            <input type="number" ref="zipcodeValue"/>

            <select ref="typeValue">
              <option value="classA">Classe A: Alvenarias, concreto, argamassas e solos - podem ser reutilizados na forma de agregados</option>
              <option value="classB">Classe B: Restos de madeira, metal, plástico, papel, papelão, gesso, vidros - podem ser reutilizados no próprio canteiro de obra ou encaminhados para reciclagem</option>
              <option  value="classC">Classe C: Resíduos sem tecnologia para reciclagem</option>
              <option  value="classD">Classe D: Resíduos perigosos, tais como tintas, solventes, óleos e outros, ou aqueles contaminados oriundos de obras em clínicas radiológicas, hospitais, instalações, industriais, etc.</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>);
  }
}
