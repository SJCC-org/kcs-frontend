import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EditUserFormBlock = styled.div`
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
const EditUserFormWrapper = styled.form`
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

    .duplicateBlock {
      display: flex;

      button {
        width: 20%;
        margin-left: 1rem;
        color: ${palette.brown[0]};
        font-size: 13px;
      }
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

function EditUserForm() {
  return (
    <EditUserFormBlock>
      <h2>회원정보 수정</h2>
      <EditUserFormWrapper>
        <div className="inputBlock">
          <span>이름</span>
          <StyledInput />
        </div>
        <div className="inputBlock">
          <span>이메일</span>
          <div className="duplicateBlock">
            <StyledInput />
            <button>인증하기</button>
          </div>
        </div>
        <button>회원정보 수정</button>
      </EditUserFormWrapper>
    </EditUserFormBlock>
  );
}

export default EditUserForm;
