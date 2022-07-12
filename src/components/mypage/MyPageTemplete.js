import React from 'react';
import styled from 'styled-components';
import MyPageItemListContainer from '../../containers/mypage/MyPageItemListContainer';

const MyPageTempleteBlock = styled.div``;

function MyPageTemplete() {
  return (
    <MyPageTempleteBlock>
      <MyPageItemListContainer />
    </MyPageTempleteBlock>
  );
}

export default MyPageTemplete;
