import { moviesReducer } from '../reducers/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  moviesReducer
});

export default rootReducer;
