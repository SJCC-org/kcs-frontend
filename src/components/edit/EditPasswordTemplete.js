import React from 'react';
import styled from 'styled-components';
import EditCategoryContainer from '../../containers/categories/EditCategoryContainer';
import EditPasswordForm from './EditPasswordForm';

const EditPasswordTempleteBlock = styled.div`
  display: flex;
`;

function EditUserTemplete() {
  return (
    <EditPasswordTempleteBlock>
      <EditCategoryContainer />
      <EditPasswordForm />
    </EditPasswordTempleteBlock>
  );
}

export default EditUserTemplete;
