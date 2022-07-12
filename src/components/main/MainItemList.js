import React from 'react';
import styled from 'styled-components';
import StudyCategory from '../categories/StudyCategory';
import MainItem from './MainItem';

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

function MainItemList() {
  return (
    <WholeWrapper>
      <StudyCategory />
      <MainItemListBlock>
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
      </MainItemListBlock>
    </WholeWrapper>
  );
}

export default MainItemList;
