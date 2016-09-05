import React from 'react';
import { Alert } from 'react-bootstrap';

class AlertBar extends React.Component {
	render() {
		return (
			<Alert bsStyle="success">
    			<strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
  			</Alert>
		);
	}
}

export default AlertBar;
