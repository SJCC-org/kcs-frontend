import React from 'react';
import styled from 'styled-components';
import EditCategoryContainer from '../../containers/categories/EditCategoryContainer';
import EditUserForm from './EditUserForm';

const EditUserTempleteBlock = styled.div`
  display: flex;
`;

function EditUserTemplete() {
  return (
    <EditUserTempleteBlock>
      <EditCategoryContainer />
      <EditUserForm />
    </EditUserTempleteBlock>
  );
}

export default EditUserTemplete;
