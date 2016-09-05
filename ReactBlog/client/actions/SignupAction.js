import axios from 'axios';

export function userSignUpRequest(userData) {
	return dispatch => {
		return axios.post('/api/userregister', userData).then(function(res){
			console.log(res)
		}).catch(function(res){
			console.log(res)
		});	
	} 
	//return axios.post('/api/userregister', userData);
}