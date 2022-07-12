import React from 'react';
import styled from 'styled-components';
import MyPageItemList from './MyPageItemList';

const MyPageTempleteBlock = styled.div``;

function MyPageTemplete() {
  return (
    <MyPageTempleteBlock>
      <MyPageItemList />
    </MyPageTempleteBlock>
  );
}

export default MyPageTemplete;
