import contactsReducers from "./contacts/contactsReducers";
import authReduscers from '../redux/auth/authReducers';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const middleware = [thunk];

const reducers = combineReducers({contacts: contactsReducers, auth: authReduscers})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


export default store;
