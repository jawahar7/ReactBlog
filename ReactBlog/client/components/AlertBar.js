import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { closeAlertMessage } from '../actions/AlertMessageAction.js';

class AlertBar extends React.Component {

	constructor(props) {
		super(props);
		this.onAlertClose = this.onAlertClose.bind(this);
	}

	onAlertClose(id) {		
		this.props.closeAlertMessage(id);
	}

	render() {		
		const { closeAlertMessage } = this.props;
		const message = this.props.flashMessage.map(m =>
			<Alert key={m.id} bsStyle={m.result}>
				<a href="#" className="close" onClick={() => this.onAlertClose(m.id)} aria-label="close">&times;</a>
    			<strong>{m.message}</strong>
  			</Alert>
		);
		return (
			<div>{message}</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		flashMessage: state.alertmessage
	}
}

export default connect(mapStateToProps, { closeAlertMessage })(AlertBar);
