// node modules
import axios from 'axios';

// local
import API from './api';

export const DataConstants = {
  GET_BROTHERS: 'GET_BROTHERS',
  GET_BROTHER_BY_KEY: 'GET_BROTHER_BY_KEY',
  GET_PREV_BROTHER: 'GET_PREV_BROTHER',
  GET_NEXT_BROTHER: 'GET_NEXT_BROTHER',
  GET_FULLTIMES: 'GET_FULLTIMES',
  GET_INTERNSHIPS: 'GET_INTERNSHIPS'
};

export const DataActions = {
  getBrothers: () => async dispatch => {
    const brosPromise = axios.get(API.GET_BROTHERS);
    const execsPromise = axios.get(API.GET_EXECUTIVES);
    const [brosRes, execsRes] = await Promise.all([brosPromise, execsPromise]);
    dispatch({
      type: DataConstants.GET_BROTHERS,
      brothers: { ...brosRes.data },
      executives: { ...execsRes.data }
    });
  },

  getBrotherByKey: key => async dispatch => {
    const res = await axios.get(`${API.GET_BROTHER_BY_KEY}/${key}`);
    dispatch({
      type: DataConstants.GET_BROTHER_BY_KEY,
      activeBro: (res.data || {}).data
    });
  },

  getFulltimes: () => async dispatch => {
    const res = await axios.get(API.GET_FULLTIMES);
    dispatch({
      type: DataConstants.GET_FULLTIMES,
      fulltimes: { ...res.data }
    });
  },

  getInternships: () => async dispatch => {
    // const res = await axios.get(API.GET_INTERNSHIPS);
    // dispatch({
    //   type: DataConstants.GET_INTERNSHIPS,
    //   internships: res.data
    // });
    // return res.data;
  }
};
