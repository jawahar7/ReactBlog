export function addAlertMessage(message) {
	console.log(message)
	return {
		type: 'ADD_ALERT',
		message
	}
}