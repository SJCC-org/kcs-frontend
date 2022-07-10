import React from 'react';
import EditPasswordTemplete from '../components/edit/EditPasswordTemplete';
import MainTemplete from '../components/MainTemplete';

function EditUserPage() {
  return (
    <div>
      <MainTemplete>
        <EditPasswordTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
