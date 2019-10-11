import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_PENDING,
  POST_SUCCESS,
  POST_FAILURE
} from '../actions/action.types';

const initialState = {
  fetching: false,
  fetched: false,
  smurfs: [],
  error: '',
  post_pending: false,
  post_success: false,
  post_error: ''
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
        error: ''
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
        ...state,
        post_pending: true,
        post_error: ''
      };
    case POST_SUCCESS:
      return {
        ...state,
        post_pending: false,
        post_success: true,
        smurfs: [...state.smurfs, action.payload]
      };
    case POST_FAILURE:
      return {
        ...state,
        post_pending: false,
        post_success: false,
        post_error: action.payload
      };

    default:
      return state;
  }
};
