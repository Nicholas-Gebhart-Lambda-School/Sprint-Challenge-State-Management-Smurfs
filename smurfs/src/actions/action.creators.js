import axios from 'axios';
import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_PENDING,
  POST_SUCCESS,
  POST_FAILURE,
  PUT_SUCCESS,
  PUT_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE
} from './action.types';

// FETCH
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

// POST
export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_PENDING });

  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_FAILURE, payload: err.response });
    });
};

export const putSmurf = (id, smurf) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      dispatch({ type: PUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PUT_FAILURE, payload: err.response });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: DELETE_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};
