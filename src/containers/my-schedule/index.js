import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import View from '../../components/view';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Title from '../../components/title';
import Grid from '../../components/grid';
import Row from '../../components/row';

export default class MySchedule extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <Grid>
        <View className="col-lg-8">
            <Title className="my-4" size={2}>
              Meus Agendamentos
            </Title>
        </View>    
        </Grid>
        <Card style={{width: '30%', marginLeft: '20%'}}>
          <CardHeader style={{backgroundColor: '#a2c515'}}><b>Protocolo:</b></CardHeader>         
          <CardBody>
          <p><b>Data:</b></p>
          <p><b>Local:</b></p>
          <p><b>Tipo de Entulho:</b></p>          
          </CardBody>          
        </Card>
      </View>
    );
  }
}
