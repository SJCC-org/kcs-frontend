import React from 'react';
import styled from 'styled-components';
import MyPageCategory from '../categories/MyPageCategory';

const MyPageTempleteBlock = styled.div``;

function MyPageTemplete() {
  return (
    <MyPageTempleteBlock>
      <MyPageCategory />
    </MyPageTempleteBlock>
  );
}

export default MyPageTemplete;
