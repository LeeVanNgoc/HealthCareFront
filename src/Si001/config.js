import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
	const response = axios.post('/api/login-user', null, {
		params: {
			email: userEmail, 
			password: userPassword
		}
	})
	return response
}

export default handleLoginApi;	