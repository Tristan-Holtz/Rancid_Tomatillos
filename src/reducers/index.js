import { Movies } from './Movies';
import { User } from './User';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: Movies,
  user: User,
});

export default rootReducer;
