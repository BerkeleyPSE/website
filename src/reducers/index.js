// node modules
import { combineReducers } from 'redux';

// local
import dataReducer from './data';
import appReducer from './app';
import formReducer from './form';

const rootReducer = combineReducers({
  data: dataReducer,
  app: appReducer,
  form: formReducer
});

export default rootReducer;
