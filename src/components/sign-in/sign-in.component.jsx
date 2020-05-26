import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						id='email'
						value={email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						id='password'
						value={password}
						handleChange={this.handleChange}
						required
						label='Password'
					/>
					<CustomButton type='submit'>SIGN IN</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;