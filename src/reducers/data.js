import {
  GET_BROTHERS,
  GET_BROTHER_BY_KEY,
  GET_FULLTIMES
} from '../constants/actions';

const defaultState = {
  brothers: {
    data: [],
    count: -1,
    loading: false,
    resolved: false,
    error: false
  },
  activeBro: {}, // TODO: refactor this to map key => actual bro
  executives: {
    data: [],
    count: -1,
    loading: false,
    resolved: false,
    error: false
  },
  fulltimes: {
    data: [],
    count: -1,
    loading: false,
    resolved: false,
    error: false
  },
  internships: {
    data: [],
    count: -1,
    loading: false,
    resolved: false,
    error: false
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BROTHERS:
    case GET_BROTHER_BY_KEY:
    case GET_FULLTIMES:
      return { ...state, ...action };
    default:
      return state;
  }
};
