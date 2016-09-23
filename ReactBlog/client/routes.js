import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignIn from './components/registration/SignIn';
import SignUp from './components/registration/SignUp';
import Blogs from './components/blogs/Blogs';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SignIn} />
		<Route path="/SignUp" component={SignUp} />
		<Route path="/Blogs" component={Blogs} />
	</Route>
)