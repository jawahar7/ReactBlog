export function addAlertMessage(message, result) {	
	return {
		type: 'ADD_ALERT',
		message,
		result
	}
}

export function closeAlertMessage(id) {	
	return {
		type: 'CLOSE_ALERT_BY_ID',
		id
	}
}

export function closeAllAlert() {
	return {
		type: 'CLOSE_ALERT'
	}
}