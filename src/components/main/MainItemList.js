import React from 'react';
import styled from 'styled-components';
import MainItem from './MainItem';

const MainItemListBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

function MainItemList() {
  return (
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
  );
}

export default MainItemList;
