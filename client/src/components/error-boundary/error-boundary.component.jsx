import React, { Component } from 'react';

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		// Process error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		const { hasErrored } = this.state;
		const { children } = this.props;

		if (hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
					<ErrorImageText>Sorry! This page is broken</ErrorImageText>
				</ErrorImageOverlay>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
