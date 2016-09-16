import randomstring from 'randomstring';
import findIndex from 'lodash/findIndex'

export default (state = [], action) => {	
	switch (action.type) {
		case 'ADD_ALERT':
			return addAlert(state, action)
		case 'CLOSE_ALERT_BY_ID':
			return closeAlert(state, action)
		case 'CLOSE_ALERT':
			return [];
		default:
			return state
	}
}

function addAlert(state, action) {
	var alertobj = {id: randomstring.generate(7), message: action.message, result: action.result}
	return [...state, alertobj];
}

function closeAlert(state, action) {
	const index = findIndex(state, {id: action.id});
	return [...state.slice(0, index), ...state.slice(index + 1)]
}