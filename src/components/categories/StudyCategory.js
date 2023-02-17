import React from "react";
import styled from "styled-components";
import { CATEGORY_LIST } from "../../constants/category";
import useGetStudyList from "../../lib/hooks/useGetStudyList";
import palette from "../../styles/palette";

function StudyCategory({ onOpenStudy }) {
  const { handleStudyCategory, handleStudyList } = useGetStudyList();

  return (
    <StudyCategoryBlock>
      <h1>카테고리</h1>
      <button onClick={onOpenStudy}>개설하기</button>
      <CategoryBlock onClick={handleStudyList}>
        <span>전체보기</span>
      </CategoryBlock>
      {CATEGORY_LIST.map(({ id, en, ko }) => (
        <CategoryBlock key={id} onClick={() => handleStudyCategory(en)}>
          <span>{ko}</span>
        </CategoryBlock>
      ))}
    </StudyCategoryBlock>
  );
}

export default StudyCategory;

const StudyCategoryBlock = styled.div`
  margin-top: 84px;
  width: 200px;
  height: 400px;
  position: sticky;
  top: 100px;
  padding: 1rem;

  h1 {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  button {
    width: 100%;
    border: none;
    background-color: ${palette.yellow[0]};
    padding: 0.5rem 0.7rem;
    border-radius: 7px;
    color: ${palette.brown[0]};
    font-weight: bold;
    cursor: pointer;
  }
`;

const CategoryBlock = styled.div`
  border-bottom: 2px solid ${palette.yellow[0]};
  padding: 1rem 0;
  cursor: pointer;
`;
