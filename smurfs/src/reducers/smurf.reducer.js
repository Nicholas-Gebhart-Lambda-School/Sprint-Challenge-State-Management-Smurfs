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
} from '../actions/action.types';

const initialState = {
  fetching: false,
  fetched: false,
  smurfs: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case FETCH_PENDING:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        smurfs: action.payload,
        error: '',
        delete: true
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      };
    // POST
    case POST_PENDING:
      return {
        ...state
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case POST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // PUT
    case PUT_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case PUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    // DELETE
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs.filter(smurf => smurf.id !== action.payload)],
        delete: !state.delete
      };
    case DELETE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
