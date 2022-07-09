import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${palette.gray[0]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3rem;

  button {
    cursor: pointer;
    outline: none;
    margin-left: 1rem;
    padding: 0.5rem 0.7rem;
  }
  #login {
    background-color: ${palette.yellow[0]};
    color: ${palette.black[0]};
    font-weight: 400;
    border: 2px solid ${palette.yellow[0]};
    border-radius: 7px;
  }

  #register {
    background-color: white;
    color: ${palette.black[0]};
    font-weight: 400;
    border: 2px solid ${palette.yellow[0]};
    border-radius: 7px;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onMoveRegister = () => {
    navigate('/register');
  };

  const onOpenLoginModal = () => {
    setIsOpen(!isOpen);
  };

  const onCloseLoginModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <LoginForm onCloseLoginModal={onCloseLoginModal} />}
      <HeaderBlock>
        <button id="login" onClick={onOpenLoginModal}>
          로그인
        </button>
        <button id="register" onClick={onMoveRegister}>
          회원가입
        </button>
      </HeaderBlock>
    </>
  );
}

export default Header;
