import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { ratingsReducer } from './ratingsReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  ratings: ratingsReducer
});

export default rootReducer;
