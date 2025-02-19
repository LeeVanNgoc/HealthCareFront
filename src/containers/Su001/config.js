import axios from '../../axios'

const handleSignUpApi = (userData) => {
	console.log(userData);
	return axios.post('/api/create-new-user', userData)
}


export default handleSignUpApi;	