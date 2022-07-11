import React from 'react';
import styled from 'styled-components';
import MyPageCategoryContainer from '../../containers/categories/MyPageCategoryContainer';

const MyPageTempleteBlock = styled.div``;

function MyPageTemplete() {
  return (
    <MyPageTempleteBlock>
      <MyPageCategoryContainer />
    </MyPageTempleteBlock>
  );
}

export default MyPageTemplete;
