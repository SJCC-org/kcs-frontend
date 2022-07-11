import React from 'react';
import EditUserTemplete from '../components/edit/EditUserTemplete';
import MainTemplete from '../components/MainTemplete';
import ResponsiveEditCategoryContainer from '../containers/categories/responsive/ResponsiveEditCategoryContainer';

function EditUserPage() {
  return (
    <div>
      <ResponsiveEditCategoryContainer />
      <MainTemplete>
        <EditUserTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
