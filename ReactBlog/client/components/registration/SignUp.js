import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userSignUpRequest } from '../../actions/SignupAction';
import { addAlertMessage } from '../../actions/AlertMessageAction.js';
import AlertBar from '../AlertBar';

class SignUp extends React.Component {
	render() {		
		const { userSignUpRequest, addAlertMessage } = this.props;		
		return(
			<div className="row">	
				<AlertBar />		
				<SignUpForm userSignUpRequest={userSignUpRequest} addAlertMessage={addAlertMessage} />
			</div>			
		)
	}
}

SignUp.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addAlertMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest, addAlertMessage })(SignUp);