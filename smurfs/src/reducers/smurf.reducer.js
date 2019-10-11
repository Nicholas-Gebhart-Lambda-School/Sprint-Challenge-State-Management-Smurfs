import {
  FETCH_PENDING,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions/action.types';

const initialState = {
  fetching: false,
  fetched: false,
  smurfs: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        smurfs: [...state.smurfs, action.payload],
        error: ''
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      };
    default:
      return state;
  }
};
