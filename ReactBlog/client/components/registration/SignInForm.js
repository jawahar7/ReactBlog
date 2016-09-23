import React from 'react';
import { browserHistory } from 'react-router';

class SignInForm extends React.Component {
	constructor(props) {
		super(props);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.state = {
			username: '',
			password: ''
		}
	}

	onHandleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onHandleSubmit(e) {
		e.preventDefault();
		this.props.userSignInRequest(this.state).then(({data}) => {
			console.log(data);
			this.props.closeAllAlert();
			browserHistory.push('/Blogs');
		}).catch(error =>{
			console.log(error.response.data)
			this.props.closeAllAlert();
			this.props.addAlertMessage(error.response.data, "danger");
			browserHistory.push('/Blogs');
		})
	}

	render() {
		return(
			<div className="col-md-12">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-default">
				      <div className="panel-heading">Login</div>
				      <div className="panel-body">
				      	<form onSubmit={this.onHandleSubmit}>
					      	<div className="form-group">
	                        	<label>Username</label>
	                        	<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onHandleChange} />
	                        </div>	                        
	                        <div className="form-group">
	                        	<label>Password</label>
	                        	<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onHandleChange} />
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

SignInForm.propTypes = {
	userSignInRequest: React.PropTypes.func.isRequired,
	addAlertMessage: React.PropTypes.func.isRequired,
	closeAllAlert: React.PropTypes.func.isRequired
}

export default SignInForm;
