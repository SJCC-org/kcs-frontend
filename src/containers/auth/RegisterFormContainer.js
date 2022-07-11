import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/auth/RegisterForm';
import {
  changeField,
  duplicationUsernameFailure,
  duplicationUsernameSuccess,
  initailizeForm,
  registerFailure,
  registerSuccess,
} from '../../modules/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterFormContainer() {
  const { form, userDuplicationRes, registerRes } = useSelector(({ auth }) => ({
    form: auth.register,
    registerRes: auth.registerRes,
    userDuplicationRes: auth.userDuplicationRes,
  }));
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    />
  );
}

export default RegisterFormContainer;
