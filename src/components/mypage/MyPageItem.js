import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';

const MyPageItemBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 7px;
  margin-bottom: 1rem;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  cursor: pointer;
  padding: 1rem;

  h3 {
    margin: 0;
  }

  .studyStatus {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    font-size: 14px;
    padding: 0.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background-color: ${palette.yellow[0]};
  }
`;

function MyPageItem() {
  const navigate = useNavigate();

  const onMoveStudyInfo = () => {
    navigate('/study/info');
  };
  return (
    <MyPageItemBlock onClick={onMoveStudyInfo}>
      <div className="studyStatus">모집중</div>
      <h3>스터디를 합시다</h3>
    </MyPageItemBlock>
  );
}

export default MyPageItem;