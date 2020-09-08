import axios from "axios";
import authActions from '../auth/authActions';

const API_KEY = "AIzaSyAzkkul3bJfhrhBJeKVRFEup9ABHzZZl3E";

// axios.defaults.baseURL = "https://react7.firebaseio.com/";

const methods = {
    signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  };

  export const register = (userData) => (dispatch) => {
      dispatch(authActions.registerRequest())
    axios
      .post(methods.signUp, userData)
      .then((res) =>
        dispatch(authActions.registerSuccess({ token: res.data.idToken, email: res.data.email }))
      )
      .catch((error) => dispatch(authActions.registerError(error)))
  };
  

  export const login = (userData) => (dispatch) => {
    dispatch(authActions.loginRequest())
  axios
    .post(methods.signIn, userData)
    .then((res) =>
      dispatch(authActions.loginSuccess({ token: res.data.idToken, email: res.data.email }))
    )
    .catch((error) => dispatch(authActions.loginError(error)))
};
  
  