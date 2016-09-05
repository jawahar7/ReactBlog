import randomstring from 'randomstring';

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_ALERT':
			return addAlert(state, action)
		default:
			return state
	}
}

function addAlert(state, action) {
	var alertobj = {id: randomstring.generate(7), message: action.message}
	return [...state, alertobj];
}