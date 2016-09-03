import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userSignUpRequest } from '../../actions/SignupAction';

class SignUp extends React.Component {
	render() {
		const { userSignUpRequest } = this.props;
		return(
			<div className="row">
				<SignUpForm userSignUpRequest={userSignUpRequest} />
			</div>			
		)
	}
}

SignUp.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest })(SignUp);