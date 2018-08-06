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

    const typeOfRubble = {
      TYPEA: 'A',
      TYPEB: 'B',
      TYPEC: 'C',
      TYPED: 'D'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.refs.data.value);
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
                <FormGroup label="Data" type="date" ref="data" />
                <FormGroup label="Horário" type="time" ref="timeValue" />
              </Row>
              <FormGroup
                label="Endereço"
                type="text"
                placeholder="Endereço"
                ref="addressValue"
              />
              <Row>
                <FormGroup
                  label="Número"
                  type="number"
                  placeholder="Número"
                  ref="addressNumberValue"
                />
                <FormGroup
                  label="Bairro"
                  type="text"
                  placeholder="Bairro"
                  ref="neighborhoodValue"
                />
                <FormGroup
                  label="CEP"
                  type="text"
                  placeholder="00000-000"
                  ref="zipcodeValue"
                />
              </Row>
              <Select label="Tipo de Entulho" ref="typeValue">
                <option>Selecione...</option>
                <option value="classA">Classe A</option>
                <option value="classB">Classe B</option>
                <option value="classC">Classe C</option>
                <option value="classD">Classe D</option>
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
