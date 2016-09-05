import { combineReducers } from 'redux';

import AlertMessageReducer from './reducers/AlertMessageReducer';

const rootReducer = combineReducers({
	alertmessage: AlertMessageReducer
});

export default rootReducer;