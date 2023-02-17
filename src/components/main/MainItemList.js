import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainItem from "./MainItem";
import useGetStudyList from "../../lib/hooks/useGetStudyList";
import StudyCategory from "../categories/StudyCategory";
import { getAccessToken } from "../../lib/token";
import AddStudy from "./AddStudy";

const MainItemList = ({ isResponsiveOpen, onIsResponsiveOpen }) => {
  const { listRes, handleStudyList } = useGetStudyList();
  const [isOpenStudy, setIsOpenStudy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleStudyList();
  }, []);

  const onOpenStudy = () => {
    if (getAccessToken("accessToken")) {
      setIsOpenStudy(!isOpenStudy);
    } else {
      alert("로그인 후 이용하실 수 있습니다.");
    }
  };

  const onMoveStudyInfo = (studyId) => {
    if (getAccessToken("accessToken")) {
      navigate(`/study/info/${studyId}`);
    } else {
      alert("로그인 후 이용하실 수 있습니다.");
    }
  };
  return (
    <WholeWrapper>
      <StudyCategory onOpenStudy={onOpenStudy} />
      <MainItemListBlock>
        {isOpenStudy && <AddStudy onOpenStudy={onOpenStudy} />}
        {isResponsiveOpen && (
          <AddStudy onIsResponsiveOpen={onIsResponsiveOpen} />
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
};

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
