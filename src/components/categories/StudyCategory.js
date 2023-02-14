import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

function StudyCategory({ onOpenStudy, onGetCategoryStudy, onGetCategory }) {
  return (
    <StudyCategoryBlock>
      <h1>카테고리</h1>
      <button onClick={onOpenStudy}>개설하기</button>
      <CategoryBlock onClick={onGetCategory}>
        <span>전체보기</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("ALGORITHM")}>
        <span>알고리즘</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("CERTIFICATE")}>
        <span>자격증</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("CLASS_REVIEW")}>
        <span>수업복습</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("PROJECT")}>
        <span>프로젝트</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("CS")}>
        <span>CS</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onGetCategoryStudy("ETC")}>
        <span>기타</span>
      </CategoryBlock>
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
