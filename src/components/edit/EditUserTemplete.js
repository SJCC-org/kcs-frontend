import React from "react";
import styled from "styled-components";
import EditCategoryContainer from "../../containers/categories/EditCategoryContainer";
import EditUserForm from "./EditUserForm";

function EditUserTemplete() {
  return (
    <EditUserTempleteBlock>
      <EditCategoryContainer />
      <EditUserForm />
    </EditUserTempleteBlock>
  );
}

export default EditUserTemplete;

const EditUserTempleteBlock = styled.div`
  display: flex;
`;
