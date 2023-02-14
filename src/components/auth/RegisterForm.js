import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

function RegisterForm({
  form,
  error,
  userDuplicationRes,
  onChange,
  onSubmit,
  onCheckPasswordConfirm,
  onDuplicateUsername,
  onAuthEmail,
  onCheckEmail,
  emailDuplicationRes,
}) {
  const [isOpenEmail, setIsOpenEmail] = useState(false);

  const onOpenEmail = () => {
    setIsOpenEmail(!isOpenEmail);
    onAuthEmail();
  };
  return (
    <RegisterFormBlock>
      <h2>회원가입</h2>
      <RegisterFormWrapper onSubmit={onSubmit}>
        <div className="inputBlock">
          <span>이름</span>
          <StyledInput
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className="inputBlock">
          <span>아이디</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder="아이디를 입력해주세요"
            />
            <button type="button" onClick={onDuplicateUsername}>
              중복확인
            </button>
          </div>
        </div>
        {userDuplicationRes === true && (
          <ErrorMessageBlock>아이디가 중복됩니다.</ErrorMessageBlock>
        )}
        {userDuplicationRes === false && (
          <ErrorMessageBlock>사용가능한 아이디 입니다.</ErrorMessageBlock>
        )}
        <div className="inputBlock">
          <span>비밀번호</span>
          <StyledInput
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="inputBlock">
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={onChange}
            onKeyUp={onCheckPasswordConfirm}
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </div>
        {error && (
          <ErrorMessageBlock>비밀번호가 일치하지 않습니다.</ErrorMessageBlock>
        )}
        <div className="inputBlock">
          <span>이메일</span>
          <div className="duplicateBlock">
            <StyledInput
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="이메일을 입력해주세요"
            />
            <button type="button" onClick={onOpenEmail}>
              인증하기
            </button>
          </div>
        </div>
        {isOpenEmail && (
          <div className="inputBlock">
            <div className="duplicateBlock">
              <StyledInput
                type="text"
                placeholder="인증코드를 입력해주세요"
                name="code"
                value={form.code}
                onChange={onChange}
              />
              <button type="button" onClick={onCheckEmail}>
                확인
              </button>
            </div>
          </div>
        )}
        {emailDuplicationRes === false ? (
          <ErrorMessageBlock>인증코드가 일치하지 않습니다.</ErrorMessageBlock>
        ) : (
          <ErrorMessageBlock>인증코드가 일치합니다.</ErrorMessageBlock>
        )}
        <button type="submit" style={{ margin: "1rem  0" }}>
          회원가입
        </button>
      </RegisterFormWrapper>
    </RegisterFormBlock>
  );
}

export default RegisterForm;

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

  @media (max-width: 430px) {
    width: 100%;
  }

  .inputBlock {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    .duplicateBlock {
      display: flex;

      @media (max-width: 500px) {
        flex-direction: column;
      }

      button {
        width: 20%;
        margin-left: 1rem;
        color: ${palette.brown[0]};
        font-size: 13px;

        @media (max-width: 500px) {
          width: 100%;
          margin: 0.5rem 0;
        }
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
    color: ${palette.brown[0]};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    background-color: ${palette.yellow[0]};
    font-size: 18px;
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

const ErrorMessageBlock = styled.div`
  text-align: center;
  color: red;
  font-weight: bold;
`;
