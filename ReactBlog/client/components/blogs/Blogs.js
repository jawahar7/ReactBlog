import React from 'React';
import Loading from 'react-loading-bar';

class Blogs extends React.Component {
	constructor(props) {
		super(props);
		console.log('Initial State');
		this.state = {
			show: true
		}
	}

	componentDidMount() {
		this.setState({show: true});
	}	

	render() {
		return(
			<div>
				<Loading show={this.state.show} color="#a09999" />
				<div>This is Blog Page</div>
			</div>
		)
	}
}

export default Blogs;