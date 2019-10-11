import smurf from './smurf.reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(smurf, middleware);

export default store;
