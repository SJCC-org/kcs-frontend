import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../../containers/auth/LoginFormContainer';

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${palette.gray[0]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: 375px) {
    padding: 0 1rem;
  }

  .headerTitle {
    display: flex;

    @media (max-width: 480px) {
      flex-direction: column;

      h2 {
        margin: 0;

        @media (max-width: 375px) {
          font-size: 20px;
        }
      }
    }
    #kakao {
      color: ${palette.yellow[0]};
    }

    #cloud {
      color: ${palette.brown[0]};
    }
  }
  .buttonWrapper {
    display: flex;
    align-items: center;

    button {
      cursor: pointer;
      outline: none;
      padding: 0.7rem 1.5rem;
      font-size: 18px;

      @media (max-width: 425px) {
        padding: 0.5rem 0.7rem;
        font-size: 16px;
      }
    }
    #login {
      background-color: ${palette.yellow[0]};
      color: ${palette.brown[0]};
      font-weight: bold;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;

      /* @media (max-width: 768px) {
        display: none;
      } */
    }
    /* 
    #register {
      background-color: white;
      color: ${palette.black[0]};
      font-weight: 500;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
    } */
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  // const onMoveRegister = () => {
  //   navigate('/register');
  // };

  const onCloseLoginModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <LoginFormContainer onCloseLoginModal={onCloseLoginModal} />}
      <HeaderBlock>
        <Link to="/">
          <div className="headerTitle">
            <h2 id="kakao">카카오</h2>
            <h2 id="cloud">클라우드 스쿨 스터디</h2>
          </div>
        </Link>
        <div className="buttonWrapper">
          <button id="login" onClick={() => setIsOpen(!isOpen)}>
            로그인
          </button>
          {/* <button id="register" onClick={onMoveRegister}>
            회원가입
          </button> */}
        </div>
      </HeaderBlock>
    </>
  );
}

export default Header;
