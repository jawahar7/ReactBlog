import React from 'React';

class SignUpForm extends React.Component {
	constructor(props){
		super(props);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.state = {
			username: '',
			email: '',
			password: '',
			confirmpassword: ''
		}
	}

	onHandleSubmit(e) {
		e.preventDefault();		
		this.props.userSignUpRequest(this.state).then(({data}) => {			
			this.props.addAlertMessage(data.result, "success");
			this.setState({
				username: '',
				email: '',
				password: '',
				confirmpassword: ''
			});
		}).catch(error => {
			console.log(error.response.data)	
			this.props.closeAllAlert();
			this.props.addAlertMessage(error.response.data.error.errmsg, "danger")		
		})﻿
	}

	onHandleChange(e) {
		this.setState({ [e.target.name]: e.target.value });		
	}

	render() {
		return(
			<div className="col-md-12">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-default">
				      <div className="panel-heading">Registration</div>
				      <div className="panel-body">
				      	<form onSubmit={this.onHandleSubmit}>
					      	<div className="form-group">
	                        	<label>Username</label>
	                        	<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onHandleChange} />
	                        </div>
	                        <div className="form-group">
	                        	<label>Email</label>
	                        	<input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onHandleChange} />
	                        </div>
	                        <div className="form-group">
	                        	<label>Password</label>
	                        	<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onHandleChange} />
	                        </div>
	                        <div className="form-group">
	                        	<label>Confirm Password</label>
	                        	<input type="password" className="form-control" name="confirmpassword" value={this.state.confirmpassword} onChange={this.onHandleChange} />
	                        </div>
	                        <input type="submit" className="btn btn-default" value="Register" />
                        </form>
				      </div>
				    </div>
			    </div>
			</div>
		);
	}
}

SignUpForm.propTypes = {
	userSignUpRequest: React.PropTypes.func.isRequired,
	addAlertMessage: React.PropTypes.func.isRequired,
	closeAllAlert: React.PropTypes.func.isRequired
}

export default SignUpForm;