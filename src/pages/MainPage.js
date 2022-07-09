import React from 'react';
import MainItemList from '../components/main/MainItemList';
import MainTemplete from '../components/MainTemplete';

function MainPage() {
  return (
    <div>
      <MainTemplete>
        <MainItemList />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
