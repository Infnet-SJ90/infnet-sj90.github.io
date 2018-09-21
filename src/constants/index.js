import React from 'react';

class Constants {
	constructor() {
		super();
		global.daoUrlBaseSchedules = 'http://localhost:8080/v1/scheduling';
		global.daoUrlBaseCitizens = 'http://localhost:8080/v1/citezen';
		global.daoUrlBaseAddresses = 'http://localhost:8080/v1/address';
		global.daoUrlBaseAuth = 'http://localhost:8080/v1/authentication';
	}
}