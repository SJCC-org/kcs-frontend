import React from 'react';
import ResponsiveStudyCategory from '../components/categories/responsive/ResponsiveStudyCategory';
import MainItemList from '../components/main/MainItemList';
import MainTemplete from '../components/MainTemplete';

function MainPage() {
  return (
    <div>
      <ResponsiveStudyCategory />
      <MainTemplete>
        <MainItemList />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
