import React from 'react';
import ResponsiveMyPageCategory from '../components/categories/responsive/ResponsiveMyPageCategory';
import MainTemplete from '../components/MainTemplete';
import MyPageTemplete from '../components/mypage/MyPageTemplete';

function MyPage() {
  return (
    <div>
      <ResponsiveMyPageCategory />
      <MainTemplete>
        <MyPageTemplete />
      </MainTemplete>
    </div>
  );
}

export default MyPage;
