import randomstring from 'randomstring';
import findIndex from 'lodash/findIndex'

export default (state = [], action) => {
	console.log(state)
	switch (action.type) {
		case 'ADD_ALERT':
			return addAlert(state, action)
		case 'CLOSE_ALERT':
			return closeAlert(state, action)
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