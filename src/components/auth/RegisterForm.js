import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const RegisterFormBlock = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegisterFormWrapper = styled.form`
  width: 400px;

  .inputBlock {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .duplicateBlock {
      display: flex;

      button {
        width: 20%;
        margin-left: 1rem;
      }
    }

    span {
      font-size: 14px;
      margin-bottom: 0.5rem;
    }
  }

  button {
    width: 100%;
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
  width: 100%;
  outline: none;
  padding: 0.7rem;
  border-radius: 7px;
  border: 1px solid ${palette.gray[1]};

  &:focus {
    border: 2px solid ${palette.yellow[0]};
  }
`;

function RegisterForm() {
  return (
    <RegisterFormBlock>
      <h2>회원가입</h2>
      <RegisterFormWrapper>
        <div className="inputBlock">
          <span>이름</span>
          <StyledInput type="text" placeholder="이름을 입력해주세요" />
        </div>
        <div className="inputBlock">
          <span>아이디</span>
          <div className="duplicateBlock">
            <StyledInput type="text" placeholder="아이디를 입력해주세요" />
            <button>중복확인</button>
          </div>
        </div>
        <div className="inputBlock">
          <span>비밀번호</span>
          <StyledInput type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className="inputBlock">
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </div>
        <div className="inputBlock">
          <span>이메일</span>
          <div className="duplicateBlock">
            <StyledInput type="email" placeholder="이메일을 입력해주세요" />
            <button>인증하기</button>
          </div>
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          <Link to="/">회원가입</Link>
        </button>
      </RegisterFormWrapper>
    </RegisterFormBlock>
  );
}

export default RegisterForm;