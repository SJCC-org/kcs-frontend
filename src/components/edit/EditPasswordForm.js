import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EditPasswordFormBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
const EditPasswordFormWrapper = styled.form`
  width: 400px;

  @media (max-width: 400px) {
    width: 100%;
  }
  .inputBlock {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

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

function EditPasswordForm() {
  return (
    <EditPasswordFormBlock>
      <h2>비밀번호 수정</h2>
      <EditPasswordFormWrapper>
        <div className="inputBlock">
          <span>현재 비밀번호</span>
          <StyledInput
            type="password"
            placeholder="현재 비밀번호를 입력해주세요"
          />
        </div>
        <div className="inputBlock">
          <span>새로운 비밀번호</span>
          <StyledInput
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요"
          />
        </div>
        <div className="inputBlock">
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </div>
        <button>비밀번호 수정하기</button>
      </EditPasswordFormWrapper>
    </EditPasswordFormBlock>
  );
}

export default EditPasswordForm;
