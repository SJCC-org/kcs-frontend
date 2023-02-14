import React, { useState } from "react";
import styled from "styled-components";
import MyPageCategory from "../categories/MyPageCategory";
import MyPageItem from "./MyPageItem";

function MyPageItemList({ userRes, listRes }) {
  const [switchCategory, setSwitchCategory] = useState("make");

  const onSwitchCategory = (name) => {
    setSwitchCategory(name);
    console.log(switchCategory);
  };
  return (
    userRes && (
      <WholeWrapper>
        <MyPageCategory onSwitchCategory={onSwitchCategory} />
        <MyPageItemListBlock>
          <h2>{userRes.name}님 안녕하세요!</h2>
          {listRes &&
            (switchCategory === "make" ? (
              listRes.organizedStudies.length === 0 ? (
                <EmptyPage>개설한 스터디가 없습니다.</EmptyPage>
              ) : (
                listRes.organizedStudies.map((study) => (
                  <MyPageItem key={study.id} study={study} />
                ))
              )
            ) : listRes.participatedStudies.length === 0 ? (
              <EmptyPage>참여한 스터디가 없습니다.</EmptyPage>
            ) : (
              listRes.participatedStudies.map((participant) => (
                <MyPageItem key={participant.id} study={participant} />
              ))
            ))}
        </MyPageItemListBlock>
      </WholeWrapper>
    )
  );
}

export default MyPageItemList;

const WholeWrapper = styled.div`
  display: flex;
`;
const MyPageItemListBlock = styled.div`
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
  margin-top: 5rem;
`;
