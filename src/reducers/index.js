import { moviesReducer } from '../reducers/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
