import React from 'react';
import ResponsiveStudyCategory from '../components/categories/responsive/ResponsiveStudyCategory';
import MainTemplete from '../components/MainTemplete';
import MainItemListContainer from '../containers/main/MainItemListContainer';

function MainPage() {
  return (
    <div>
      <ResponsiveStudyCategory />
      <MainTemplete>
        <MainItemListContainer />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
