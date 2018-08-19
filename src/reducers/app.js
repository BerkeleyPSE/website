import {
  POST_COFFEE_CHAT_FORM_SUCCESS,
  POST_COFFEE_CHAT_FORM_FAILURE,
  POST_REGFORM_SUCCESS,
  POST_REGFORM_FAILURE,
  POST_APPLICATION_SUCCESS,
  POST_APPLICATION_FAILURE
} from '../constants/actions';

const defaultState = {
  coffeeChatStatus: -1,
  regformStatus: -1,
  appStatus: -1
};

export default (state = defaultState, action) => {
  switch (action) {
    case POST_COFFEE_CHAT_FORM_SUCCESS:
      return { ...state, coffeeChatStatus: 204 };
    case POST_COFFEE_CHAT_FORM_FAILURE:
      return { ...state, coffeeChatStatus: 400 };
    case POST_REGFORM_SUCCESS:
      return { ...state, regformStatus: 204 };
    case POST_REGFORM_FAILURE:
      return { ...state, regformStatus: 400 };
    case POST_APPLICATION_SUCCESS:
      return { ...state, appStatus: 204 };
    case POST_APPLICATION_FAILURE:
      return { ...state, appStatus: 400 };
  }
};
