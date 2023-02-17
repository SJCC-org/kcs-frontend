import { createAction, handleActions } from "redux-actions";

const USER_SUCCESS = "user/USER_SUCCESS";
const USER_FAILURE = "user/USER_FALIURE";
const USER_STUDY_LIST_SUCCESS = "study/USER_STUDY_LIST_SUCCESS";

export const userSuccess = createAction(USER_SUCCESS, (userRes) => userRes);
export const userFailure = createAction(USER_FAILURE, (userError) => userError);
export const userStudyListSuccess = createAction(
  USER_STUDY_LIST_SUCCESS,
  (listRes) => listRes
);

const initialState = {
  userRes: null,

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
  },
  initialState
);

export default user;
