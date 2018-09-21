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
import FacebookComponent from '../../components/facebook';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newEmail: '',
			loginEmail: '',
			newPassword: '',
			confirmPassword: '',
			loginPassword: '',
			userName: '',
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
			<div class="form-left">
			<Grid>
			<View className="col-lg-8">
			<Title className="my-4" size={2}>
			Cadastro
			</Title>
			<Form onSubmit={this.handleSubmit}>
			<FormGroup 
			label="Nome Completo" 
			type="text" 
			placeholder="Nome Completo"
			value={this.state.userName} 
			onChange={this.handleChange('userName')} 
			/>
			<FormGroup 
			label="E-mail" 
			type="text" 
			placeholder="E-mail"
			value={this.state.newEmail} 
			onChange={this.handleChange('newEmail')} 
			/>
			<FormGroup 
			label="Senha" 
			type="password" 
			placeholder="Senha"
			value={this.state.newPassword} 
			onChange={this.handleChange('newPassword')} 
			/>
			<FormGroup 
			label="Confirme a Senha" 
			type="password" 
			placeholder="Confirme a Senha"
			value={this.state.confirmPassword} 
			onChange={this.handleChange('confirmPassword')} 
			/>
			<Button
			type="submit"
			color="success"
			children="Realizar Cadastro"
			block
			/>
			</Form>
			<p>ou</p>
			<FacebookComponent />
			</View>
			</Grid>
			</div>

			<div class="form-right">
			<Grid>
			<View className="col-lg-8">
			<Title className="my-4" size={2}>
			Login
			</Title>
			<Form onSubmit={this.handleSubmit}>
			<FormGroup 
			label="E-mail" 
			type="text" 
			placeholder="E-mail"
			value={this.state.loginEmail} 
			onChange={this.handleChange('loginEmail')} 
			/>
			<FormGroup 
			label="Senha" 
			type="password" 
			placeholder="Senha"
			value={this.state.newPassword} 
			onChange={this.handleChange('newPassword')} 
			/>
			<Button
			type="submit"
			color="success"
			children="Login"
			block
			/>
			<p>ou</p>
			<FacebookComponent />
			</Form>
			</View>
			</Grid>
			</div>

			</View>
			);
		}
	}
