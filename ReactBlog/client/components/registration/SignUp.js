import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userSignUpRequest } from '../../actions/SignupAction';
import { addAlertMessage, closeAllAlert } from '../../actions/AlertMessageAction.js';
import AlertBar from '../AlertBar';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.props.closeAllAlert();
	}

	render() {		
		const { userSignUpRequest, addAlertMessage, closeAllAlert } = this.props;		
		return(
			<div className="container">	
				<AlertBar />		
				<SignUpForm userSignUpRequest={userSignUpRequest} addAlertMessage={addAlertMessage} closeAllAlert={closeAllAlert} />
			</div>			
		)
	}
}

SignUp.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addAlertMessage: React.PropTypes.func.isRequired,
	closeAllAlert: React.PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest, addAlertMessage, closeAllAlert })(SignUp);