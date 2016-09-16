import React from 'react';

import NavigationBar from './NavigationBar'

class App extends React.Component {
	render() {
		return(
			<div className="row">
				<div className="col-md-12">
					<NavigationBar />				
					{this.props.children}
				</div>			
			</div>				
		);
	}
}

export default App;