import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const LoginFormBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginModal = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  border-radius: 7px;

  .loginHeader {
    width: 100%;
    h2 {
      text-align: center;
    }

    .closeBlock {
      width: 100%;
      text-align: right;
      padding: 1rem 1rem 0 0;

      svg {
        cursor: pointer;
        font-size: 20px;
      }
    }
  }

  .extraInfo {
    display: flex;
    justify-content: center;

    span {
      cursor: pointer;
    }

    #goRegister {
      margin-left: 0.5rem;
    }
  }
`;

const LoginFormWrapper = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80%;
    padding: 0.7rem 0;
    font-weight: bold;
    color: ${palette.black[0]};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background-color: ${palette.yellow[0]};
  }
`;
const StyledInput = styled.input`
  width: 80%;
  outline: none;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};

  &:focus {
    border: 2px solid ${palette.yellow[0]};
  }
`;

function LoginForm({ onCloseLoginModal }) {
  const navigate = useNavigate();

  const onMoveRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <LoginFormBlock>
      <LoginModal>
        <div className="loginHeader">
          <div className="closeBlock">
            <AiOutlineClose onClick={onCloseLoginModal} />
          </div>
          <h2>로그인</h2>
        </div>
        <LoginFormWrapper>
          <StyledInput type="text" placeholder="아이디를 입력해주세요" />
          <StyledInput type="password" placeholder="비밀번호를 입력해주세요" />
          <button type="submit">로그인</button>
        </LoginFormWrapper>
        <div className="extraInfo">
          <span>비밀번호 찾기</span>
          <span
            id="goRegister"
            onClick={() => {
              onMoveRegister();
              onCloseLoginModal();
            }}
          >
            회원가입
          </span>
        </div>
      </LoginModal>
    </LoginFormBlock>
  );
}

export default LoginForm;
