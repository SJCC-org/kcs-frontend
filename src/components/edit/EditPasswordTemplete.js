import React from 'react';
import styled from 'styled-components';
import MyPageCategory from '../categories/MyPageCategory';
import EditPasswordForm from './EditPasswordForm';

const EditPasswordTempleteBlock = styled.div`
  display: flex;
`;

function EditUserTemplete() {
  return (
    <EditPasswordTempleteBlock>
      <MyPageCategory />
      <EditPasswordForm />
    </EditPasswordTempleteBlock>
  );
}

export default EditUserTemplete;
