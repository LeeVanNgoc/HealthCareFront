import axios from '../axios'

export const getAllDoctor = (inputId) => {
	return axios.get('/api/get-all-doctor-by-id', {
	  params: {
		id: inputId
	  }
	});
}


export const deleteDoctor = (doctorEmail) => {
  return axios.delete(`/api/delete-doctor`, {
    params: { email: doctorEmail }
  });
};

