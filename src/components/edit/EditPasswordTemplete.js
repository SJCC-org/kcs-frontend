import React from 'react';
import styled from 'styled-components';
import MyPageCategory from '../categories/MyPageCategory';
import EditPasswordForm from './EditPasswordForm';

const EditUserTempleteBlock = styled.div`
  display: flex;
`;

function EditUserTemplete() {
  return (
    <EditUserTempleteBlock>
      <MyPageCategory />
      <EditPasswordForm />
    </EditUserTempleteBlock>
  );
}

export default EditUserTemplete;
