import { DataConstants } from '../actions/data-actions';

const defaultState = {
  brothers: {
    data: [],
    count: -1
  },
  activeBro: {},
  executives: {
    data: [],
    count: -1
  },
  fulltimes: {
    data: [],
    count: -1
  },
  internships: {
    data: [],
    count: -1
  }
};

const DataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DataConstants.GET_BROTHERS:
    case DataConstants.GET_BROTHER_BY_KEY:
    case DataConstants.GET_FULLTIMES:
    case DataConstants.GET_INTERNSHIPS:
      return { ...state, ...action };
    default:
      return state;
  }
};

export default DataReducer;
