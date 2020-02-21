import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
});

export default rootReducer;
