import React from 'react';
import MainTemplete from '../components/MainTemplete';
import MyPageTemplete from '../components/mypage/MyPageTemplete';

function MyPage() {
  return (
    <div>
      <MainTemplete>
        <MyPageTemplete />
      </MainTemplete>
    </div>
  );
}

export default MyPage;
