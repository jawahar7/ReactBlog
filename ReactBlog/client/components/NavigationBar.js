import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to="/" className="navbar-brand" href="#">Blogs</Link>
			    </div>			   
			    <ul className="nav navbar-nav navbar-right">
			      <li><Link to="/SignUp"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
			      <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default NavigationBar;