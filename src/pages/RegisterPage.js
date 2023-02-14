import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import MainTemplete from "../components/MainTemplete";

function RegisterPage() {
  return (
    <div>
      <MainTemplete>
        <RegisterForm />
      </MainTemplete>
    </div>
  );
}

export default RegisterPage;
