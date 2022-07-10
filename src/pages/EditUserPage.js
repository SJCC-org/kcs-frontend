import React from 'react';
import EditUserTemplete from '../components/edit/EditUserTemplete';
import MainTemplete from '../components/MainTemplete';

function EditUserPage() {
  return (
    <div>
      <MainTemplete>
        <EditUserTemplete />
      </MainTemplete>
    </div>
  );
}

export default EditUserPage;
