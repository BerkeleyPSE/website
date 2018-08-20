// node modules
import axios from 'axios';

// local
import {
  API_GET_BROTHERS,
  API_GET_EXECUTIVES,
  API_GET_BROTHER_BY_KEY,
  API_GET_FULLTIMES
} from '../constants/api';

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

export const getBrothers = () => async (dispatch, getState) => {
  const state = getState();
  if (!state.data.brothers.resolved && !state.data.brothers.loading) {
    dispatch({ type: GET_BROTHERS_ATTEMPT });
    const brosPromise = axios.get(API_GET_BROTHERS);
    const execsPromise = axios.get(API_GET_EXECUTIVES);
    const [brosRes, execsRes] = await Promise.all([brosPromise, execsPromise]);
    if (brosRes.status === 200 && execsRes.status === 200)
      dispatch({
        type: GET_BROTHERS_SUCCESS,
        brothers: { ...brosRes.data },
        executives: { ...execsRes.data }
      });
    else dispatch({ type: GET_BROTHERS_FAILURE });
  }
};

export const getBrotherByKey = key => async (dispatch, getState) => {
  if (!key) return null;
  const state = getState();
  const bro = state.data.brothers.data[key] || {};
  if (!bro.resolved && !bro.loading) {
    dispatch({ type: GET_BROTHER_BY_KEY_ATTEMPT, key });
    const res = await axios.get(`${API_GET_BROTHER_BY_KEY}/${key}`);
    if (res.status === 200)
      dispatch({
        type: GET_BROTHER_BY_KEY_SUCCESS,
        key,
        brother: (res.data || {}).data
      });
    else dispatch({ type: GET_BROTHER_BY_KEY_FAILURE, key });
  }
};

export const getFulltimes = () => async (dispatch, getState) => {
  const state = getState();
  if (!state.data.fulltimes.resolved && !state.data.fulltimes.loading) {
    dispatch({ type: GET_FULLTIMES_ATTEMPT });
    const res = await axios.get(API_GET_FULLTIMES);
    if (res.status === 200)
      dispatch({
        type: GET_FULLTIMES_SUCCESS,
        fulltimes: { ...res.data }
      });
    else dispatch({ type: GET_FULLTIMES_FAILURE });
  }
};
