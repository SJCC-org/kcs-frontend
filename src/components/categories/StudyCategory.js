import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StudyCategoryBlock = styled.div`
  margin-top: 84px;
  width: 200px;
  height: 400px;
  position: sticky;
  top: 100px;
  padding: 1rem;

  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryBlock = styled.div`
  border-bottom: 2px solid ${palette.yellow[0]};
  padding: 1rem 0;
  cursor: pointer;
`;
function StudyCategory() {
  return (
    <StudyCategoryBlock>
      <h1>카테고리</h1>
      <CategoryBlock>
        <span>개설하기</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>알고리즘</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>자격증</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>수업복습</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>프로젝트</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>CS</span>
      </CategoryBlock>
      <CategoryBlock>
        <span>기타</span>
      </CategoryBlock>
    </StudyCategoryBlock>
  );
}

export default StudyCategory;
