import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import user from './user';
import study from './study';
import comment from './comment';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  study,
  comment,
});

export default rootReducer;
