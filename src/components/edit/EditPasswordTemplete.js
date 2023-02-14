import React from "react";
import styled from "styled-components";
import EditCategoryContainer from "../../containers/categories/EditCategoryContainer";
import EditPasswordForm from "./EditPasswordForm";

function EditUserTemplete() {
  return (
    <EditPasswordTempleteBlock>
      <EditCategoryContainer />
      <EditPasswordForm />
    </EditPasswordTempleteBlock>
  );
}

export default EditUserTemplete;

const EditPasswordTempleteBlock = styled.div`
  display: flex;
`;
