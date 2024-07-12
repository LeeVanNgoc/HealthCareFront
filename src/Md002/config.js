import axios from '../axios'

const getAllUser = (inputId) => {
	return axios.get('/api/get-all-user-by-id', {
	  params: {
		id: inputId
	  }
	});
  }

export default getAllUser;	