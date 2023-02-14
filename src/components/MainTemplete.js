import React from "react";
import styled from "styled-components";

const MainTemplete = ({ children }) => {
  return <MainTempleteBlock>{children}</MainTempleteBlock>;
};

export default MainTemplete;

const MainTempleteBlock = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 2rem;
  }
`;
