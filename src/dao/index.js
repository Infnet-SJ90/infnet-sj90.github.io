import React from 'react';
import axios from 'axios';

export default class ScheduleDao{
  state = {
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

  scheduleGet() {
    axios.get(Constants.global.daoUrlBaseSchedules)
    .then(function (response){
      schedule = res.data;
      this.setState({ schedule });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  scheduleFind( id ) {
    axios.find(Constants.global.daoUrlBaseSchedules)
    .then(function (response){
      schedule = res.data;
      this.setState({ schedule });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  schedulePost( data ) {
    axios.post(Constants.global.daoUrlBaseSchedules)
    .then(function (response){
      schedule = res.data;
      this.setState({ schedule });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  scheduleUpdate() {
    axios.update(Constants.global.daoUrlBaseSchedules)
    .then(function (response){
      schedule = res.data;
      this.setState({ schedule });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  scheduleDelete() {
    axios.delete(Constants.global.daoUrlBaseSchedules)
    .then(function (response){
      schedule = res.data;
      this.setState({ schedule });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
