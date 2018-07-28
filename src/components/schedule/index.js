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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({dateValue: event.target.dateValue,
      timeValue: event.target.timeValue,
      addressValue: event.target.addressValue,
      addressNumberValue: event.target.addressNumberValue,
      neighborhoodValue: event.target.neighborhoodValue,
      zipcodeValue: event.target.zipcodeValue,
      typeValue: event.target.typeValue});
  }

  handleSubmit(event) {
    alert('Coleta Cadastrada');
    console.log(this.state.dateValue,
      this.state.timeValue,
      this.state.addressValue,
      this.state.addressNumberValue,
      this.state.neighborhoodValue,
      this.state.zipcodeValue,
      this.state.typeValue);
    event.preventDefault();
  }

  render() {
    return(
      <div className="half-screen">
        <div className="form-group">
          <h1>Agendamento</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Data:</label>
            <input type="date" value={this.state.dateValue} onChange={this.handleChange}/>

            <label>Horário:</label>
            <input type="time" value={this.state.timeValue} onChange={this.handleChange}/>

            <label>Endereço:</label>
            <input type="text" value={this.state.addressValue} onChange={this.handleChange}/>

            <label>Número:</label>
            <input type="number" value={this.state.addressNumberValue} onChange={this.handleChange}/>

            <label>Bairro:</label>
            <input type="text" value={this.state.
              neighborhoodValue} onChange={this.handleChange}/>

            <label>CEP:</label>
            <input type="number" value={this.state.zipcodeValue} onChange={this.handleChange}/>

            <select value={this.state.typeValue} onChange={this.handleChange}>
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
