// node modules
import { combineReducers } from 'redux';

// local
import DataReducer from './data-reducer';

const rootReducer = combineReducers({
  data: DataReducer
});

export default rootReducer;
