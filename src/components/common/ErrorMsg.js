import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const ErrorMsg = ({ errorMsg }) => {
  return <ErrorMsgWrapper>{errorMsg}</ErrorMsgWrapper>;
};

export default ErrorMsg;

const ErrorMsgWrapper = styled.div`
  margin-bottom: 0.3rem;

  color: ${palette.red[0]};
  font-weight: bold;

  text-align: center;
`;
