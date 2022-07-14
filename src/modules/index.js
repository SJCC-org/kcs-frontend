import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import user from './user';
import study from './study';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  study,
});

export default rootReducer;
