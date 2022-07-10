import React, { useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initailizeForm } from '../../modules/auth';

function LoginFormContainer({ onCloseLoginModal }) {
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
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

  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;

    if ([username, password].includes('')) {
      alert('빈칸을 모두 입력해주세요');
      return;
    }
  };

  return (
    <LoginForm
      form={form}
      onCloseLoginModal={onCloseLoginModal}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginFormContainer;
