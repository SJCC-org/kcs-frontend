import React from 'react';
import EditPasswordTemplete from '../components/edit/EditPasswordTemplete';
import MainTemplete from '../components/MainTemplete';
import ResponsiveEditCategoryContainer from '../containers/categories/responsive/ResponsiveEditCategoryContainer';

function EditUserPage() {
  return (
    <div>
      <ResponsiveEditCategoryContainer />
      <MainTemplete>
        <EditPasswordTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
