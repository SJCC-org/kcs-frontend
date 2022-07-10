import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EditPasswordFormBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EditPasswordFormWrapper = styled.form`
  width: 400px;
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
          <StyledInput />
        </div>
        <div className="inputBlock">
          <span>새로운 비밀번호</span>
          <StyledInput />
        </div>
        <div className="inputBlock">
          <span>비밀번호 확인</span>
          <StyledInput />
        </div>
        <button>비밀번호 수정하기</button>
      </EditPasswordFormWrapper>
    </EditPasswordFormBlock>
  );
}

export default EditPasswordForm;
