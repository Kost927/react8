import constants from './authConstans';
import { combineReducers } from 'redux';

const initialState = {
  email: '',
  token: '',
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.REGISTER_REQUEST:
      return { ...state };

    case constants.REGISTER_SUCCESS:
      return { ...state, ...payload };

    case constants.REGISTER_ERROR:
      return payload;

    default:
      return state;
  }
};

const logInReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.LOGIN_REQUEST:
      return { ...state };

    case constants.LOGIN_SUCCESS:
      return { ...state, ...payload };

    case constants.LOGIN_ERROR:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  onRegister: authReducer,
  onLogIn: logInReducer,
});
