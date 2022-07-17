import { createAction, handleActions } from 'redux-actions';

const USER_SUCCESS = 'user/USER_SUCCESS';
const USER_FAILURE = 'user/USER_FALIURE';
const USER_STUDY_LIST_SUCCESS = 'study/USER_STUDY_LIST_SUCCESS';
const USER_STUDY_LIST_FAILURE = 'study/USER_STUDY_LIST_FAILURE';

export const userSuccess = createAction(USER_SUCCESS, (userRes) => userRes);
export const userFailure = createAction(USER_FAILURE, (userError) => userError);
export const userStudyListSuccess = createAction(
  USER_STUDY_LIST_SUCCESS,
  (listRes) => listRes,
);
export const userStudyListFailure = createAction(
  USER_STUDY_LIST_FAILURE,
  (listError) => listError,
);

const initialState = {
  userRes: null,
  userError: null,

  listRes: null,
  listError: null,
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
    [USER_STUDY_LIST_SUCCESS]: (state, { payload: listRes }) => ({
      ...state,
      listRes,
      listError: null,
    }),
    [USER_STUDY_LIST_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      listError,
    }),
  },
  initialState,
);

export default user;
