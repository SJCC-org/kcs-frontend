import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'study/CHANGE_FIELD';
const INITIALIZE_FORM = 'study/INITIALIZE_FORM';
const ADD_STUDY_SUCCESS = 'study/ADD_STUDY_SUCCESS';
const ADD_STUDY_FAILURE = 'study/ADD_STUDY_FAILURE';
const STUDY_SUCCESS = 'study/STUDY_SUCCESS';
const STUDY_FAILURE = 'study/STUDY_FAILURE';
const STUDY_LIST_SUCCESS = 'study/STUDY_LIST_SUCCESS';
const STUDY_LIST_FAILURE = 'study/STUDY_LIST_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const addStudySuccess = createAction(
  ADD_STUDY_SUCCESS,
  (addRes) => addRes,
);
export const addStudyFailure = createAction(
  ADD_STUDY_FAILURE,
  (addError) => addError,
);
export const studySuccess = createAction(STUDY_SUCCESS, (studyRes) => studyRes);
export const studyFailure = createAction(
  STUDY_FAILURE,
  (studyError) => studyError,
);
export const studyListSuccess = createAction(
  STUDY_LIST_SUCCESS,
  (listRes) => listRes,
);
export const StudyListFailure = createAction(
  STUDY_LIST_FAILURE,
  (listError) => listError,
);

const initialState = {
  study: {
    title: '',
    description: '',
    schedule: '',
    howTo: '',
    studyCategory: '',
    maxNum: '',
  },

  addRes: null,
  addError: null,
  studyRes: null,
  studyError: null,
  listRes: null,
  listError: null,
};

const study = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [ADD_STUDY_SUCCESS]: (state, { payload: addRes }) => ({
      ...state,
      addRes,
      addError: null,
    }),
    [ADD_STUDY_FAILURE]: (state, { payload: addError }) => ({
      ...state,
      addError,
    }),
    [STUDY_SUCCESS]: (state, { payload: studyRes }) => ({
      ...state,
      studyRes,
      studyError: null,
    }),
    [STUDY_FAILURE]: (state, { payload: studyError }) => ({
      ...state,
      studyError,
    }),
    [STUDY_LIST_SUCCESS]: (state, { payload: listRes }) => ({
      ...state,
      listRes,
      listError: null,
    }),
    [STUDY_LIST_FAILURE]: (state, { payload: listError }) => ({
      ...state,
      listError,
    }),
  },
  initialState,
);

export default study;
