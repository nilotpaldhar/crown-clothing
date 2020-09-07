import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';
import './sign-in.style.scss';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart(email, password);
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>

					<FormInput
						type='password'
						name='password'
						value={password}
						handleChange={this.handleChange}
						required
						label='Password'
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton
							type='button'
							onClick={googleSignInStart}
							isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
