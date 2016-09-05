import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import rootReducer from './rootreducer'

const store = createStore(
	rootReducer, 	
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ?  window.devToolsExtension() : f => f
	)
);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, 
	document.getElementById('app')
);