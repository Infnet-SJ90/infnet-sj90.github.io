//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

export default class FacebookComponent extends Component {
	state = {
		isLoggedIn: false,
		userID: "",
		name: "",
		email: "",
		picture: ""
	};

	responseFacebook = response => {
		console.log(response);

		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
		});
	};

	componentClicked = () => console.log("clicked");

	render() {
		let fbContent;

		if (this.state.isLoggedIn) {
			console.log(this.state.email);
		} else {
			fbContent = (
				<FacebookLogin
				appId="268965717063816"
				autoLoad={true}
				fields="name,email"
				onClick={this.componentClicked}
				callback={this.responseFacebook}
				/>
				);
			}

			return <div>{fbContent}</div>;
		}
	}