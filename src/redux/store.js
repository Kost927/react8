import contactsReducers from './contacts/contactsReducers';
import authReduscers from '../redux/auth/authReducers';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [thunk];

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['email', 'token', 'databaseId', 'isAuth'],
};

const reducers = combineReducers({
  contacts: contactsReducers,
  auth: persistReducer(authPersistConfig, authReduscers),
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
