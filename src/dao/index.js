import React from 'react';
import axios from 'axios';
import constants from 'constants';

export default class AuthDao{
 method: 'POST',
    url: Constants.global.daoUrlBaseAuth,
    data: qs.stringify(data),
    headers: {
        'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  };
  return dispatch => {
    return axios(authOptions)
    .then(function(response){
      console.log(response.data);
      console.log(response.status);
    })
    .catch(function(error){
      console.log(error);
    });
}

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
