// node modules
import axios from 'axios';

import { POST_SUCCESS, POST_FAILURE } from '../constants/actions';

// local
import {
  API_POST_REGFORM,
  API_POST_COFFEE_CHAT_FORM,
  API_POST_APPLICATION
} from '../constants/api';

export const onSubmitRegform = (values, formName) => async dispatch => {
  const res = await axios.post(API_POST_REGFORM, values);
  if (res.status === 201) {
    debugger;
    dispatch({ type: POST_SUCCESS, formName });
  } else dispatch({ type: POST_FAILURE, formName });
};

export const onSubmitApplication = (values, formName) => async dispatch => {
  const res = await axios.post(API_POST_APPLICATION, values);
  if (res.status === 201) dispatch({ type: POST_SUCCESS, formName });
  else dispatch({ type: POST_FAILURE, formName });
};

export const onSubmitCoffeeChatForm = (values, formName) => async dispatch => {
  const res = await axios.post(API_POST_COFFEE_CHAT_FORM, values);
  if (res.status === 201) dispatch({ type: POST_SUCCESS, formName });
  else dispatch({ type: POST_FAILURE, formName });
};
