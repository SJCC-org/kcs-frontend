import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/auth/RegisterForm';
import { changeField, initailizeForm } from '../../modules/auth';

function RegisterFormContainer() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

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
  };

  useEffect(() => {
    dispatch(initailizeForm('register'));
  }, [dispatch]);

  return (
    <RegisterForm
      form={form}
      error={error}
      onCheckPasswordConfirm={onCheckPasswordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterFormContainer;
