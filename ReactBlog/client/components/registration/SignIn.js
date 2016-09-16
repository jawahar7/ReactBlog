import React from 'react';
import { connect } from 'react-redux';
import { userSignInRequest } from '../../actions/SignInAction.js';
import { addAlertMessage, closeAllAlert } from '../../actions/AlertMessageAction.js';
import AlertBar from '../AlertBar';
import SignInForm from './SignInForm';

class SignIn extends React.Component {	
	constructor(props) {
		super(props);
		this.props.closeAllAlert();
	}

	render() {
		const { userSignInRequest, addAlertMessage, closeAllAlert } = this.props;
		return(
			<div className="container">
				<AlertBar />
				<SignInForm userSignInRequest={userSignInRequest} addAlertMessage={addAlertMessage} closeAllAlert={closeAllAlert} />
			</div>
		)
	}
}

SignIn.propTypes = {
	userSignInRequest: React.PropTypes.func.isRequired,
	addAlertMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignInRequest, addAlertMessage, closeAllAlert })(SignIn);