import { createAction, handleActions } from 'redux-actions';

const USER_SUCCESS = 'user/USER_SUCCESS';
const USER_FAILURE = 'user/USER_FALIURE';

export const userSuccess = createAction(USER_SUCCESS, (userRes) => userRes);
export const userFailure = createAction(USER_FAILURE, (userError) => userError);

const initialState = {
  userRes: null,
  userError: null,
};

const user = handleActions(
  {
    [USER_SUCCESS]: (state, { payload: userRes }) => ({
      ...state,
      userRes,
      userError: null,
    }),
    [USER_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
    }),
  },
  initialState,
);

export default user;
