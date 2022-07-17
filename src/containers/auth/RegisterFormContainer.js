import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/auth/RegisterForm';
import {
  changeField,
  duplicationEmailFailure,
  duplicationEmailSuccess,
  duplicationUsernameFailure,
  duplicationUsernameSuccess,
  initailizeForm,
  registerFailure,
  registerSuccess,
} from '../../modules/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterFormContainer() {
  const { form, userDuplicationRes, registerRes, emailDuplicationRes } =
    useSelector(({ auth }) => ({
      form: auth.register,
      registerRes: auth.registerRes,
      userDuplicationRes: auth.userDuplicationRes,
      emailDuplicationRes: auth.emailDuplicationRes,
    }));
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAuthEmail = () => {
    async function authEmail() {
      try {
        await axios.post('https://api.kcs.zooneon.dev/v1/email/auth', {
          email: form.email,
        });
      } catch (e) {
        console.log(e);
      }
    }
    authEmail();
  };

  const onCheckEmail = () => {
    async function checkEmail() {
      try {
        const response = await axios.post(
          'https://api.kcs.zooneon.dev/v1/email/verify',
          { email: form.email, code: form.code },
        );
        dispatch(duplicationEmailSuccess(response.data.data));
      } catch (e) {
        dispatch(duplicationEmailFailure(e));
      }
    }
    checkEmail();
  };
  const onCheckPasswordConfirm = () => {
    const { password, passwordConfirm } = form;

    if (password !== passwordConfirm) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  async function getRegister() {
    const { username, password, name, email } = form;
    try {
      const response = await axios.post(
        'https://api.kcs.zooneon.dev/v1/members',
        { username, password, name, email },
      );
      dispatch(registerSuccess(response.data.data));
    } catch (e) {
      dispatch(registerFailure(e));
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, username, password, passwordConfirm, email } = form;

    if ([name, username, password, passwordConfirm, email].includes('')) {
      alert('빈칸을 모두 입력해주세요');
      return;
    }
    if (error) {
      alert('비밀번호 확인을 해주세요');
      return;
    }

    if (userDuplicationRes === null) {
      alert('아이디 중복확인을 해주세요');
      return;
    }
    if (emailDuplicationRes === null) {
      alert('이메일 인증코드를 확인해주세요');
      return;
    }

    getRegister();
  };

  async function duplicateUsername() {
    const { username } = form;
    try {
      const response = await axios.get(
        `https://api.kcs.zooneon.dev/v1/account/exists/${username}`,
      );
      dispatch(duplicationUsernameSuccess(response.data.data));
    } catch (e) {
      dispatch(duplicationUsernameFailure(e));
    }
  }

  const onDuplicateUsername = () => {
    duplicateUsername();
  };

  useEffect(() => {
    dispatch(initailizeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (registerRes) {
      navigate('/');
    }
  }, [registerRes, navigate]);

  return (
    <RegisterForm
      form={form}
      error={error}
      userDuplicationRes={userDuplicationRes}
      onCheckPasswordConfirm={onCheckPasswordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
      onDuplicateUsername={onDuplicateUsername}
      onAuthEmail={onAuthEmail}
      onCheckEmail={onCheckEmail}
      emailDuplicationRes={emailDuplicationRes}
    />
  );
}

export default RegisterFormContainer;
