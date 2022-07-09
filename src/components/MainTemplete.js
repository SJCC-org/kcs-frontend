import React from 'react';
import styled from 'styled-components';

const MainTempleteBlock = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const MainTemplete = ({ children }) => {
  return <MainTempleteBlock>{children}</MainTempleteBlock>;
};

export default MainTemplete;
