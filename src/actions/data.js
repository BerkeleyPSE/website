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
  GET_BROTHERS,
  GET_BROTHER_BY_KEY,
  GET_FULLTIMES
} from '../constants/actions';

export const getBrothersIfNeeded = () => async dispatch => {
  const brosPromise = axios.get(API_GET_BROTHERS);
  const execsPromise = axios.get(API_GET_EXECUTIVES);
  const [brosRes, execsRes] = await Promise.all([brosPromise, execsPromise]);
  dispatch({
    type: GET_BROTHERS,
    brothers: { ...brosRes.data },
    executives: { ...execsRes.data }
  });
};

export const getBrotherByKeyIfNeeded = key => async dispatch => {
  const res = await axios.get(`${API_GET_BROTHER_BY_KEY}/${key}`);
  dispatch({
    type: GET_BROTHER_BY_KEY,
    activeBro: (res.data || {}).data
  });
};

export const getFulltimesIfNeeded = () => async dispatch => {
  const res = await axios.get(API_GET_FULLTIMES);
  dispatch({
    type: GET_FULLTIMES,
    fulltimes: { ...res.data }
  });
};

// export const getInternshipsIfNeeded = () => async dispatch => {
// const res = await axios.get(API_GET_INTERNSHIPS);
// dispatch({
//   type: GET_INTERNSHIPS,
//   internships: res.data
// });
// return res.data;
// };
