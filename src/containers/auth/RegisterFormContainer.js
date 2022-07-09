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

  useEffect(() => {
    dispatch(initailizeForm('register'));
  }, [dispatch]);

  return <RegisterForm form={form} onChange={onChange} />;
}

export default RegisterFormContainer;
