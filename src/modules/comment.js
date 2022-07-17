import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'comment/CHANGE_FIELD';
const INITIALIZE_FORM = 'comment/INITIALIZE_FORM';
const COMMENT_SUCCESS = 'comment/COMMENT_SUCCESS';
const COMMENT_FAILURE = 'comment/COMMENT_FAILURE';
const ADD_COMMENT_SUCCESS = 'comment/ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'comment/ADD_COMMENT_FAILURE';
const REPLIES_COMMENT_SUCCESS = 'comment/REPLIES_COMMENT_SUCCESS';
const REPLIES_COMMENT_FAILURE = 'comment/REPLIES_COMMENT_FAILURE';

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const commentSuccess = createAction(
  COMMENT_SUCCESS,
  (commentRes) => commentRes,
);
export const commentFailure = createAction(
  COMMENT_FAILURE,
  (commentError) => commentError,
);
export const addCommentSuccess = createAction(
  ADD_COMMENT_SUCCESS,
  (addRes) => addRes,
);
export const addCommentFailure = createAction(
  ADD_COMMENT_FAILURE,
  (addError) => addError,
);
export const repliesCommentSuccess = createAction(
  REPLIES_COMMENT_SUCCESS,
  (repliesRes) => repliesRes,
);
export const repliesCommentFailure = createAction(
  REPLIES_COMMENT_FAILURE,
  (repliesError) => repliesError,
);

const initialState = {
  comment: '',
  commentRes: null,
  commentError: null,
  addRes: null,
  addError: null,
  repliesRes: null,
  repliesError: null,
};

const comment = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [COMMENT_SUCCESS]: (state, { payload: commentRes }) => ({
      ...state,
      commentRes,
      commentError: null,
    }),
    [COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
    [ADD_COMMENT_SUCCESS]: (state, { payload: addRes }) => ({
      ...state,
      addRes,
      addError: null,
    }),
    [ADD_COMMENT_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError,
    }),
    [REPLIES_COMMENT_SUCCESS]: (state, { payload: repliesRes }) => ({
      ...state,
      repliesRes,
      repliesError: null,
    }),
    [REPLIES_COMMENT_FAILURE]: (state, { payload: repliesError }) => ({
      ...state,
      repliesError,
    }),
  },
  initialState,
);

export default comment;
