import React from 'react';
import ResponsiveMyPageCategory from '../components/categories/responsive/ResponsiveMyPageCategory';
import EditUserTemplete from '../components/edit/EditUserTemplete';
import MainTemplete from '../components/MainTemplete';

function EditUserPage() {
  return (
    <div>
      <ResponsiveMyPageCategory />
      <MainTemplete>
        <EditUserTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
