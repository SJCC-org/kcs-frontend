import React, { useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initailizeForm,
  loginFailure,
  loginSuccess,
} from '../../modules/auth';
import axios from 'axios';
import { setCookie } from '../../lib/cookie';

function LoginFormContainer({ onCloseLoginModal }) {
  const { form, loginRes, loginError } = useSelector(({ auth }) => ({
    form: auth.login,
    loginRes: auth.loginRes,
    loginError: auth.loginError,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  useEffect(() => {
    dispatch(initailizeForm('login'));
  }, [dispatch]);

  async function getLogin() {
    const { username, password } = form;
    try {
      const response = await axios.post(
        'https://api.kcs.zooneon.dev/v1/login',
        { username, password },
      );
      let access = response.data.data.accessToken;
      let refresh = response.data.data.refreshToken;

      setCookie('myAToken', access, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
      setCookie('myRToken', refresh, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });

      dispatch(loginSuccess(true));
    } catch (e) {
      dispatch(loginFailure(e));
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;

    if ([username, password].includes('')) {
      alert('빈칸을 모두 입력해주세요');
      return;
    }

    getLogin();
  };

  useEffect(() => {
    if (loginRes) {
      window.location.replace('/');
    }
  }, [loginRes]);

  return (
    <LoginForm
      form={form}
      loginError={loginError}
      onCloseLoginModal={onCloseLoginModal}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginFormContainer;
