// node modules
import axios from 'axios';

import {
  POST_REGFORM_SUCCESS,
  POST_REGFORM_FAILURE,
  POST_COFFEE_CHAT_FORM_SUCCESS,
  POST_COFFEE_CHAT_FORM_FAILURE,
  POST_APPLICATION_SUCCESS,
  POST_APPLICATION_FAILURE
} from '../constants/actions';

// local
import {
  API_POST_REGFORM,
  API_POST_COFFEE_CHAT_FORM,
  API_POST_APPLICATION
} from '../constants/api';

export const onSubmitRegform = values => async dispatch => {
  const res = await axios.post(API_POST_REGFORM, values);
  if (res.status === 204) dispatch({ type: POST_REGFORM_SUCCESS });
  else dispatch({ type: POST_REGFORM_FAILURE });
};
