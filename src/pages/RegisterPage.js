import React from 'react';
import MainTemplete from '../components/MainTemplete';
import RegisterFormContainer from '../containers/auth/RegisterFormContainer';

function RegisterPage() {
  return (
    <div>
      <MainTemplete>
        <RegisterFormContainer />
      </MainTemplete>
    </div>
  );
}

export default RegisterPage;
