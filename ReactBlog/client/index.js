import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, 
	document.getElementById('app')
);