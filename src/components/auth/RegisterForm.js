import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import {
  getDuplicateUser,
  postEmailAuthentication,
  postEmailCode,
  postSignUp,
} from "../../lib/api/auth";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../common/ErrorMsg";

const RegisterForm = () => {
  const [openEmail, setOpenEmail] = useState(false);
  const [codeMsg, setCodeMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    useableNameMsg: "",
    checkPasswordMsg: "",
  });
  const [checkPassword, setCheckPassword] = useState(false);

  const { register, watch, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { useableNameMsg, checkPasswordMsg } = errorMsg;

  const handleDuplicateUser = async () => {
    const res = await getDuplicateUser(watch("username"));
    res?.data
      ? setErrorMsg({ ...errorMsg, useableNameMsg: "아이디가 중복됩니다." })
      : setErrorMsg({
          ...errorMsg,
          useableNameMsg: "사용가능한 아이디 입니다.",
        });
  };

  const handleCheckPassword = () => {
    if (watch("password") !== watch("passwordConfirm")) {
      setCheckPassword(!checkPassword);
      setErrorMsg({
        ...errorMsg,
        checkPasswordMsg: "비밀번호가 일치하지 않습니다.",
      });
    }
  };

  const handleEmailAuthentication = async () => {
    const res = await postEmailAuthentication(watch("email"));
    if (res?.status) {
      setOpenEmail(!openEmail);
      setCodeMsg("");
    }
  };

  const handleCheckCode = async () => {
    const res = await postEmailCode(watch("email"), watch("code"));
    if (res?.data) {
      setCodeMsg("인증코드가 일치합니다.");
    } else {
      setCodeMsg("인증코드가 일치하지 않습니다.");
      setOpenEmail(!openEmail);
    }
  };
  const handleSignUp = async () => {
    const res = await postSignUp(
      watch("username"),
      watch("password"),
      watch("name"),
      watch("email")
    );
    res?.data && navigate("/");
  };

  return (
    <RegisterFormBlock>
      <h2>회원가입</h2>
      <RegisterFormWrapper onSubmit={handleSubmit(handleSignUp)}>
        <div className="inputBlock">
          <span>이름</span>
          <StyledInput
            type="text"
            placeholder="이름을 입력해주세요"
            {...register("name", { required: true })}
          />
        </div>
        <div className="inputBlock">
          <span>아이디</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              placeholder="아이디를 입력해주세요"
              {...register("username", { required: true })}
            />
            <button type="button" onClick={handleDuplicateUser}>
              중복확인
            </button>
          </div>
        </div>
        <ErrorMsg errorMsg={useableNameMsg} />
        <div className="inputBlock">
          <span>비밀번호</span>
          <StyledInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", { required: true })}
          />
        </div>
        <div className="inputBlock">
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            onKeyUp={handleCheckPassword}
            placeholder="비밀번호를 한번 더 입력해주세요"
            {...register("passwordConfirm")}
          />
        </div>
        {checkPassword && <ErrorMsg errorMsg={checkPasswordMsg} />}
        <div className="inputBlock">
          <span>이메일</span>
          <div className="duplicateBlock">
            <StyledInput
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email", { required: true })}
            />
            <button type="button" onClick={handleEmailAuthentication}>
              인증하기
            </button>
          </div>
        </div>
        {openEmail && (
          <div className="inputBlock">
            <div className="duplicateBlock">
              <StyledInput
                type="text"
                placeholder="인증코드를 입력해주세요"
                {...register("code")}
              />
              <button type="button" onClick={handleCheckCode}>
                확인
              </button>
            </div>
          </div>
        )}
        <ErrorMsg errorMsg={codeMsg} />
        <button type="submit" style={{ margin: "1rem  0" }}>
          회원가입
        </button>
      </RegisterFormWrapper>
    </RegisterFormBlock>
  );
};

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
