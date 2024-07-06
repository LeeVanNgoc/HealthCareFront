// reducers.js
import {handleDeleteSelected} from './action';

const initialState = {
  doctors: [], // Khởi tạo danh sách bác sĩ rỗng
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case handleDeleteSelected:
      return {
        ...state,
        doctors: state.doctors.filter(doctor => doctor.email !== action.payload.email), 
      };
    default:
      return state;
  }
};

export default rootReducer;
