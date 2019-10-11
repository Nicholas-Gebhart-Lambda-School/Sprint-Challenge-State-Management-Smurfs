import axios from 'axios';
import { FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE } from './action.types';

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCH_PENDING });

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('error in fetch', err);
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};
