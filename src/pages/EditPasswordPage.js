import React from 'react';
import ResponsiveMyPageCategory from '../components/categories/responsive/ResponsiveMyPageCategory';
import EditPasswordTemplete from '../components/edit/EditPasswordTemplete';
import MainTemplete from '../components/MainTemplete';

function EditUserPage() {
  return (
    <div>
      <ResponsiveMyPageCategory />
      <MainTemplete>
        <EditPasswordTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
