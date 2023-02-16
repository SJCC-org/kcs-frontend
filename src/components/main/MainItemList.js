import React, { useState } from "react";
import styled from "styled-components";
import AddStudyContainer from "../../containers/main/AddStudyContainer";
import { useNavigate } from "react-router-dom";
import StudyCategoryContainer from "../../containers/categories/StudyCategoryContainer";
import MainItem from "./MainItem";

function MainItemList({
  userRes,
  listRes,
  isResponsiveOpen,
  onIsResponsiveOpen,
}) {
  const [isOpenStudy, setIsOpenStudy] = useState(false);
  const navigate = useNavigate();

  const onOpenStudy = () => {
    if (userRes) {
      setIsOpenStudy(!isOpenStudy);
    } else {
      alert("로그인 후 이용하실 수 있습니다.");
    }
  };

  const onMoveStudyInfo = (studyId) => {
    if (userRes) {
      navigate(`/study/info/${studyId}`);
    } else {
      alert("로그인 후 이용하실 수 있습니다.");
    }
  };
  return (
    <WholeWrapper>
      <StudyCategoryContainer onOpenStudy={onOpenStudy} />
      <MainItemListBlock>
        {isOpenStudy && <AddStudyContainer onOpenStudy={onOpenStudy} />}
        {isResponsiveOpen && (
          <AddStudyContainer onIsResponsiveOpen={onIsResponsiveOpen} />
        )}
        {listRes &&
          (listRes.content.length === 0 ? (
            <EmptyPage>스터디 목록이 없습니다.</EmptyPage>
          ) : (
            listRes.content.map((list) => (
              <MainItem
                key={list.id}
                data={list}
                onMoveStudyInfo={onMoveStudyInfo}
              />
            ))
          ))}
      </MainItemListBlock>
    </WholeWrapper>
  );
}

export default MainItemList;

const WholeWrapper = styled.div`
  display: flex;
`;
const MainItemListBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 84px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EmptyPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;
