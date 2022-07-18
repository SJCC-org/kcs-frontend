import React from 'react';
import MainTemplete from '../components/MainTemplete';
import MainItemListContainer from '../containers/main/MainItemListContainer';

function MainPage() {
  return (
    <div>
      <MainTemplete>
        <MainItemListContainer />
      </MainTemplete>
    </div>
  );
}

export default MainPage;
