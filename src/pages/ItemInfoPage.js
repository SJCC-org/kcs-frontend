import React from 'react';
import MainTemplete from '../components/MainTemplete';
import ItemInfoContainer from '../containers/itemInfo/ItemInfoContainer';

function ItemInfoPage() {
  return (
    <div>
      <MainTemplete>
        <ItemInfoContainer />
      </MainTemplete>
    </div>
  );
}

export default ItemInfoPage;
