import { POST_SUCCESS, POST_FAILURE } from '../constants/actions';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return { ...state, here: 'yeah', [action.formName]: 201 };
    case POST_FAILURE:
      return { ...state, [action.formName]: 400 };
    default:
      return { ...state };
  }
};
