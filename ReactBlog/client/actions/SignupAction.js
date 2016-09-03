import axios from 'axios';

export function userSignUpRequest(userData) {
	axios.post('/api/userregister', userData).then(function(response){
		console.log(response);
	}).catch(function(err){
		console.log(err);
	});
	return {result: "Success"};
}