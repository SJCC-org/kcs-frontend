import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'comment/CHANGE_FIELD';
const INITIALIZE_FORM = 'comment/INITIALIZE_FORM';
const COMMENT_SUCCESS = 'comment/COMMENT_SUCCESS';
const COMMENT_FAILURE = 'comment/COMMENT_FAILURE';
const ADD_COMMENT_SUCCESS = 'comment/ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'comment/ADD_COMMENT_FAILURE';
const ADD_REPLIES_COMMENT_SUCCESS = 'comment/ADD_REPLIES_COMMENT_SUCCESS';
const ADD_REPLIES_COMMENT_FAILURE = 'comment/ADD_REPLIES_COMMENT_FAILURE';
const DELETE_REPLIES_COMMENT_SUCCESS = 'comment/DELETE_REPLIES_COMMENT_SUCCESS';
const DELETE_REPLIES_COMMENT_FAILURE = 'comment/DELETE_REPLIES_COMMENT_FAILURE';
const MODIFY_REPLIES_COMMENT_SUCCESS = 'comment/MODIFY_REPLIES_COMMENT_SUCCESS';
const MODIFY_REPLIES_COMMENT_FAILURE = 'comment/MODIFY_REPLIES_COMMENT_FAILURE';
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
export const addRepliesCommentSuccess = createAction(
  ADD_REPLIES_COMMENT_SUCCESS,
  (addRepliesRes) => addRepliesRes,
);
export const addRepiesCommentFailure = createAction(
  ADD_REPLIES_COMMENT_FAILURE,
  (addRepliesError) => addRepliesError,
);
export const deleteRepliesCommentSuccess = createAction(
  DELETE_REPLIES_COMMENT_SUCCESS,
  (deleteRepliesRes) => deleteRepliesRes,
);
export const deleteRepiesCommentFailure = createAction(
  DELETE_REPLIES_COMMENT_FAILURE,
  (deleteRepliesError) => deleteRepliesError,
);
export const modifyRepliesCommentSuccess = createAction(
  MODIFY_REPLIES_COMMENT_SUCCESS,
  (modifyRepliesRes) => modifyRepliesRes,
);
export const modifyRepiesCommentFailure = createAction(
  MODIFY_REPLIES_COMMENT_FAILURE,
  (modifyRepliesError) => modifyRepliesError,
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
  modifyReplies: '',
  commentRes: null,
  commentError: null,
  addRes: null,
  addError: null,
  addRepliesRes: null,
  addRepliesError: null,
  deleteRepliesRes: null,
  deleteRepliesError: null,
  modifyRepliesRes: null,
  modifyRepliesError: null,
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
    [ADD_REPLIES_COMMENT_SUCCESS]: (state, { payload: addRepliesRes }) => ({
      ...state,
      addRepliesRes,
      addRepliesError: null,
    }),
    [ADD_REPLIES_COMMENT_FAILURE]: (state, { payload: addRepliesError }) => ({
      ...state,
      addRepliesError,
    }),
    [DELETE_REPLIES_COMMENT_SUCCESS]: (
      state,
      { payload: deleteRepliesRes },
    ) => ({
      ...state,
      deleteRepliesRes,
      deleteRepliesError: null,
    }),
    [DELETE_REPLIES_COMMENT_FAILURE]: (
      state,
      { payload: deleteRepliesError },
    ) => ({
      ...state,
      deleteRepliesError,
    }),
    [MODIFY_REPLIES_COMMENT_SUCCESS]: (
      state,
      { payload: modifyRepliesRes },
    ) => ({
      ...state,
      modifyRepliesRes,
      modifyRepliesError: null,
    }),
    [MODIFY_REPLIES_COMMENT_FAILURE]: (
      state,
      { payload: modifyRepliesError },
    ) => ({
      ...state,
      modifyRepliesError,
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
