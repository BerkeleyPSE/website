import {
  GET_BROTHERS_ATTEMPT,
  GET_BROTHERS_SUCCESS,
  GET_BROTHERS_FAILURE,
  GET_BROTHER_BY_KEY_ATTEMPT,
  GET_BROTHER_BY_KEY_SUCCESS,
  GET_BROTHER_BY_KEY_FAILURE,
  GET_FULLTIMES_ATTEMPT,
  GET_FULLTIMES_SUCCESS,
  GET_FULLTIMES_FAILURE
} from '../constants/actions';

const defaultState = {
  brothers: {
    brothersList: [],
    executivesList: [],
    data: {},
    brothersCount: 0,
    executivesCount: 0,
    loading: false,
    resolved: false,
    error: false
  },
  fulltimes: {
    data: [],
    count: 0,
    loading: false,
    resolved: false,
    error: false
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BROTHERS_ATTEMPT:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          loading: true,
          resolved: false,
          error: false
        }
      };
    case GET_BROTHERS_SUCCESS:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          brothersList: action.brothers.data,
          brothersCount: action.brothers.count,
          executivesList: action.executives.data,
          executivesCount: action.executives.count,
          loading: false,
          resolved: true,
          error: false
        }
      };
    case GET_BROTHERS_FAILURE:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          brothersList: [],
          brothersCount: 0,
          executivesList: [],
          executivesCount: 0,
          loading: false,
          resolved: true,
          error: true
        }
      };
    case GET_BROTHER_BY_KEY_ATTEMPT:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          data: {
            ...state.brothers.data,
            [action.key]: {
              loading: true,
              resolved: false,
              error: false
            }
          }
        }
      };
    case GET_BROTHER_BY_KEY_SUCCESS:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          data: {
            ...state.brothers.data,
            [action.key]: {
              ...action.brother,
              loading: false,
              resolved: true,
              error: false
            }
          }
        }
      };
    case GET_BROTHER_BY_KEY_FAILURE:
      return {
        ...state,
        brothers: {
          ...state.brothers,
          data: {
            ...state.brothers.data,
            [action.key]: {
              loading: false,
              resolved: true,
              error: true
            }
          }
        }
      };
    case GET_FULLTIMES_ATTEMPT:
      return {
        ...state,
        fulltimes: {
          ...state.fulltimes,
          loading: true,
          resolved: false,
          error: false
        }
      };
    case GET_FULLTIMES_SUCCESS:
      return {
        ...state,
        fulltimes: {
          ...state.fulltimes,
          count: action.fulltimes.count,
          data: action.fulltimes.data,
          loading: false,
          resolved: true,
          error: false
        }
      };
    case GET_FULLTIMES_FAILURE:
      return {
        ...state,
        fulltimes: {
          ...state.fulltimes,
          count: 0,
          data: [],
          loading: false,
          resolved: true,
          error: true
        }
      };
    default:
      return { ...state };
  }
};
