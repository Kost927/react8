import constants from "./authConstans";


//!====================== register ============================

const registerRequest = () => ({
  type: constants.REGISTER_REQUEST,
});
const registerSuccess = (userData) => ({
  type: constants.REGISTER_SUCCESS,
  payload: {...userData},
});
const registerError = (error) => ({
  type: constants.REGISTER_ERROR,
  payload: error,
});


//!====================== login ============================

const loginRequest = () => ({
  type: constants.LOGIN_REQUEST,
});
const loginSuccess = (userData) => ({
  type: constants.LOGIN_SUCCESS,
  payload: userData,
});
const loginError = (error) => ({
  type: constants.LOGIN_ERROR,
  payload: error,
});


//!======================= logout ===========================

const logoutRequest = () => ({
  type: constants.LOGOUT_REQUEST,

});
const logoutSuccess = () => ({
  type: constants.LOGOUT_SUCCESS,
});
const logoutError = (error) => ({
  type: constants.LOGOUT_ERROR,
  payload: error,
});


//!======================= GET ===========================

// const getCurrentUserRequest = (token) => ({
//   type: constants.GET_CURRENT_USER_REQUEST,
//   payload: token,
// });
// const getCurrentUserSuccess = (token) => ({
//   type: constants.GET_CURRENT_USER_SUCCESS,
//   payload: token,
// });
// const getCurrentUserError = (token) => ({
//   type: constants.GET_CURRENT_USER_ERROR,
//   payload: token,
// });

export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

//   getCurrentUserRequest,
//   getCurrentUserSuccess,
//   getCurrentUserError,
};