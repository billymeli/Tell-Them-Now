import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: formReducer,
  router: routerReducer
});

export default rootReducer;
