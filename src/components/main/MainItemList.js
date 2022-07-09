import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import MainItem from './MainItem';

const MainItemListBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .listHeader {
    width: 100%;
    text-align: right;
    margin-bottom: 1rem;

    button {
      padding: 0.5rem 0.7rem;
      background-color: ${palette.yellow[0]};
      color: ${palette.black[0]};
      font-weight: 500;
      border: 2px solid ${palette.yellow[0]};
      border-radius: 7px;
      cursor: pointer;
    }
  }
`;

function MainItemList() {
  return (
    <MainItemListBlock>
      <div className="listHeader">
        <button>글쓰기</button>
      </div>
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