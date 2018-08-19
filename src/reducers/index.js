// node modules
import { combineReducers } from 'redux';

// local
import dataReducer from './data';
import formReducer from './form';

const rootReducer = combineReducers({
  data: dataReducer,
  form: formReducer
});

export default rootReducer;
