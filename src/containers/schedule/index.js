import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import FormGroup from '../../components/form-group';
import Select from '../../components/select';
import Card from '../../components/card';
import Row from '../../components/row';
import Grid from '../../components/grid';
import View from '../../components/view';
import Button from '../../components/button';
import Title from '../../components/title';
import { Form } from 'reactstrap';
import './schedule.css';

export default class ScheduleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: '',
      timeValue: '',
      addressValue: '',
      addressNumberValue: null,
      neighborhoodValue: '',
      zipcodeValue: null,
      typeValue: ''
    };

    this.typeOfRubble = {
      TYPEA: 'A',
      TYPEB: 'B',
      TYPEC: 'C',
      TYPED: 'D'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (field) => (e) => {
    this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <View>
        <Navbar />
        <Grid>
          <View className="col-lg-8">
            <Title className="my-4" size={2}>
              Realizar Agendamento
            </Title>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <FormGroup 
                  label="Data" 
                  type="date" 
                  value={this.state.dateValue} 
                  onChange={this.handleChange('dateValue')} 
                />
                <FormGroup 
                  label="Horário" 
                  type="time" 
                  value={this.state.timeValue} 
                  onChange={this.handleChange('timeValue')} 
                />
              </Row>
              <FormGroup 
                label="Endereço" 
                type="text" 
                placeholder="Endereço"
                value={this.state.addressValue} 
                onChange={this.handleChange('addressValue')} 
              />
              <Row>
                <FormGroup 
                  label="Número" 
                  type="number" 
                  placeholder="Número"
                  value={this.state.addressNumberValue} 
                  onChange={this.handleChange('addressNumberValue')} 
                />
                <FormGroup 
                  label="Bairro" 
                  type="text" 
                  placeholder="Bairro"
                  value={this.state.neighborhoodValue} 
                  onChange={this.handleChange('neighborhoodValue')} 
                />
                <FormGroup 
                  label="CEP" 
                  type="text" 
                  placeholder="00000-000"
                  value={this.state.zipcodeValue} 
                  onChange={this.handleChange('zipcodeValue')} 
                />
              </Row>
              <Select label="Tipo de Entulho" onChange={this.handleChange('typeValue')}>
                <option value="">Selecione...</option>
                <option value={this.typeOfRubble.TYPEA}>Classe A</option>
                <option value={this.typeOfRubble.TYPEB}>Classe B</option>
                <option value={this.typeOfRubble.TYPEC}>Classe C</option>
                <option value={this.typeOfRubble.TYPED}>Classe D</option>
              </Select>
              <Card className="my-4 decorative">
                <strong>Classe A:</strong> Alvenarias, concreto, argamassas e
                solos - podem ser reutilizados na forma de agregados.
                <br />
                <strong>Classe B:</strong> Restos de madeira, metal, plástico,
                papel, papelão, gesso, vidros - podem ser reutilizados no
                próprio canteiro de obra ou encaminhados para reciclagem.
                <br />
                <strong>Classe C:</strong> Resíduos sem tecnologia para
                reciclagem. <br />
                <strong>Classe D:</strong> Resíduos perigosos, tais como tintas,
                solventes, óleos e outros, ou aqueles contaminados oriundos de
                obras em clínicas radiológicas, hospitais, instalações,
                industriais, etc.
                <br />
              </Card>
              <Button
                type="submit"
                color="success"
                children="Realizar Agendamento"
                block
              />
            </Form>
          </View>
          <View className="offset-1 col-3 d-none d-lg-block d-xl-block background" />
        </Grid>
      </View>
    );
  }
}
