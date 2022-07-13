import React from 'react';
import styled from 'styled-components';
import MainItemContainer from '../../containers/main/MainItemContainer';
import StudyCategory from '../categories/StudyCategory';

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
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
        <MainItemContainer />
      </MainItemListBlock>
    </WholeWrapper>
  );
}

export default MainItemList;
