import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useNavigate } from "react-router-dom";

function MyPageItem({ study }) {
  const navigate = useNavigate();

  const onMoveStudyInfo = () => {
    navigate(`/study/info/${study.id}`);
  };
  return (
    <MyPageItemBlock onClick={onMoveStudyInfo}>
      <StudyItemHeader>
        <div className="studyInfo">
          <div className="studyCategory">{study.studyCategory}</div>
        </div>
        <div className="studyDate">{study.createdDate.substr(0, 10)}</div>
      </StudyItemHeader>
      <StudyItemTitle>
        <h3>{study.title}</h3>
      </StudyItemTitle>
      <StudyItemNum>
        {study.recruitCompleted ? (
          <div className="studyStatus">모집완료</div>
        ) : (
          <div className="studyStatus">모집중</div>
        )}
        <span>{study.curNum}</span>
        <span>/</span>
        <span>{study.maxNum}</span>
      </StudyItemNum>
    </MyPageItemBlock>
  );
}

export default MyPageItem;

const MyPageItemBlock = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 7px;
  margin-bottom: 1rem;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  cursor: pointer;
  padding: 1rem;
`;

const StudyItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .studyInfo {
    display: flex;
    align-items: center;

    .studyCategory {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      font-size: 14px;
      padding: 0.5rem 1rem;
      background-color: ${palette.yellow[0]};
      margin-right: 0.5rem;
    }
  }

  .studyDate {
    font-size: 15px;
    color: ${palette.gray[2]};
  }
`;
const StudyItemTitle = styled.div`
  width: 100%;
  h3 {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const StudyItemNum = styled.div`
  width: 100%;
  text-align: right;

  .studyStatus {
    color: ${palette.brown[0]};
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;
