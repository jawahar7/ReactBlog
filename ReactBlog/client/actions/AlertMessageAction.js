export function addAlertMessage(message, result) {	
	return {
		type: 'ADD_ALERT',
		message,
		result
	}
}

export function closeAlertMessage(id) {
	console.log(id)
	return {
		type: 'CLOSE_ALERT',
		id
	}
}