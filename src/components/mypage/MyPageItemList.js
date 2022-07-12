import React from 'react';
import styled from 'styled-components';
import MyPageCategory from '../categories/MyPageCategory';
import MyPageItem from './MyPageItem';

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

function MyPageItemList() {
  return (
    <WholeWrapper>
      <MyPageCategory />
      <MyPageItemListBlock>
        <h2>000님 안녕하세요!</h2>
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
        <MyPageItem />
      </MyPageItemListBlock>
    </WholeWrapper>
  );
}

export default MyPageItemList;
