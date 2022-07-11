import React from 'react';
import styled from 'styled-components';
import MyPageCategory from '../categories/MyPageCategory';
import EditUserForm from './EditUserForm';

const EditUserTempleteBlock = styled.div`
  display: flex;
`;

function EditUserTemplete() {
  return (
    <EditUserTempleteBlock>
      <MyPageCategory />
      <EditUserForm />
    </EditUserTempleteBlock>
  );
}

export default EditUserTemplete;
