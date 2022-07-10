import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/auth/RegisterForm';
import { changeField, initailizeForm } from '../../modules/auth';

function RegisterFormContainer() {
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  const dispatch = useDispatch();

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
  };

  useEffect(() => {
    dispatch(initailizeForm('register'));
  }, [dispatch]);

  return <RegisterForm form={form} onChange={onChange} onSubmit={onSubmit} />;
}

export default RegisterFormContainer;
