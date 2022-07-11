import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIEID = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const DUPLICATION_USERNAME_SUCCESS = 'auth/DUPLICATE_USERNAME_SUCCESS';
const DUPLICATION_USERNAME_FAILURE = 'auth/DUPLICATE_USERNAME_FAILURE';
const DUPLICATION_EMAIL_SUCCESS = 'auth/DUPLICATE_EMAIL_SUCCESS';
const DUPLICATION_EMAIL_FAILURE = 'auth/DUPLICATE_EMAIL_FAILURE';
const MEMBERSHIP_WITHDRAWAL_SUCCESS = 'auth/MEMBERSHIP_WITHDRAWAL_SUCCESS';
const MEMBERSHIP_WITHDRAWAL_FAILURE = 'auth/MEMBERSHIP_WITHDRAWAL_FAILURE';

export const changeField = createAction(
  CHANGE_FIEID,
  ({ form, key, value }) => ({ form, key, value }),
);
export const initailizeForm = createAction(INITIALIZE_FORM, (form) => form);
export const loginSuccess = createAction(LOGIN_SUCCESS, (loginRes) => loginRes);
export const loginFailure = createAction(
  LOGIN_FAILURE,
  (loginError) => loginError,
);
export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  (registerRes) => registerRes,
);
export const registerFailure = createAction(
  REGISTER_FAILURE,
  (registerError) => registerError,
);
export const duplicationUsernameSuccess = createAction(
  DUPLICATION_USERNAME_SUCCESS,
  (userDuplicationRes) => userDuplicationRes,
);
export const duplicationUsernameFailure = createAction(
  DUPLICATION_USERNAME_FAILURE,
  (userDuplicationError) => userDuplicationError,
);
export const duplicationEmailSuccess = createAction(
  DUPLICATION_EMAIL_SUCCESS,
  (emailDuplicationRes) => emailDuplicationRes,
);
export const duplicationEmailFailure = createAction(
  DUPLICATION_EMAIL_FAILURE,
  (emailDuplicationError) => emailDuplicationError,
);
export const membershipWithdrawalSuccess = createAction(
  MEMBERSHIP_WITHDRAWAL_SUCCESS,
  (withDrawalRes) => withDrawalRes,
);
export const membershipWithdrawalFailure = createAction(
  MEMBERSHIP_WITHDRAWAL_FAILURE,
  (withDrawalError) => withDrawalError,
);

const initialState = {
  login: {
    username: '',
    password: '',
  },
  register: {
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  },

  loginRes: null,
  loginError: null,

  registerRes: null,
  registerError: null,

  userDuplicationRes: null,
  userDuplicationError: null,

  emailDuplicationRes: null,
  emailDuplicationError: null,

  withDrawalRes: null,
  withDrawalError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIEID]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [LOGIN_SUCCESS]: (state, { payload: loginRes }) => ({
      ...state,
      loginRes,
      loginError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: loginError }) => ({
      ...state,
      loginError,
    }),
    [REGISTER_SUCCESS]: (state, { payload: registerRes }) => ({
      ...state,
      registerRes,
      registerError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: registerError }) => ({
      ...state,
      registerError,
    }),
    [DUPLICATION_USERNAME_SUCCESS]: (
      state,
      { payload: userDuplicationRes },
    ) => ({
      ...state,
      userDuplicationRes,
      userDuplicationError: null,
    }),
    [DUPLICATION_USERNAME_FAILURE]: (
      state,
      { payload: userDuplicationError },
    ) => ({
      ...state,
      userDuplicationError,
    }),
    [DUPLICATION_EMAIL_SUCCESS]: (state, { payload: emailDuplicationRes }) => ({
      ...state,
      emailDuplicationRes,
      emailDuplicationError: null,
    }),
    [DUPLICATION_EMAIL_FAILURE]: (
      state,
      { payload: emailDuplicationError },
    ) => ({
      ...state,
      emailDuplicationError,
    }),
    [MEMBERSHIP_WITHDRAWAL_SUCCESS]: (state, { payload: withDrawalRes }) => ({
      ...state,
      withDrawalRes,
      withDrawalError: null,
    }),
    [MEMBERSHIP_WITHDRAWAL_SUCCESS]: (state, { payload: withDrawalError }) => ({
      ...state,
      withDrawalError,
    }),
  },
  initialState,
);

export default auth;
