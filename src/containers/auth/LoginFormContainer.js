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

  return (
    <LoginForm
      form={form}
      onCloseLoginModal={onCloseLoginModal}
      onChange={onChange}
    />
  );
}

export default LoginFormContainer;
