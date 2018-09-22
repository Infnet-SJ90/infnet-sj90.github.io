import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import View from '../../components/view';
import Title from '../../components/title';
import Grid from '../../components/grid';
import Card from '../../components/card';
import Row from '../../components/row';
import { Badge } from 'reactstrap';

export default class MySchedule extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <Grid>
          <View className="col-lg-12 mt-5">
            <Title className="my-4" size={2}>
              Meus Agendamentos
            </Title>
            <Row>
              <Card>
                <Badge color="danger">Cancelado</Badge>
                <Title size={4}>Protocolo: #545654</Title>
                <strong>Data:</strong> 12/21/1978
                <br />
                <strong>Local:</strong> Avenida João Gomes, 1452 - Centro
                <br />
                <strong>Tipo de Entulho:</strong> Classe A
              </Card>
              <Card>
                <Badge color="success">Realizado</Badge>
                <Title size={4}>Protocolo: #545654</Title>
                <strong>Data:</strong> 12/21/1978
                <br />
                <strong>Local:</strong> Avenida João Gomes, 1452 - Centro
                <br />
                <strong>Tipo de Entulho:</strong> Classe A
              </Card>
            </Row>
          </View>
        </Grid>
      </View>
    );
  }
}
