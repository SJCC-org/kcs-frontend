import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../styles/palette";

function EditCategory({ onWithDrawal }) {
  const onAlert = () => {
    alert("준비중 입니다..!");
  };
  return (
    <EditCategoryBlock>
      <Link to="/mypage">
        <h1>마이페이지</h1>
      </Link>
      <CategoryBlock onClick={onAlert}>
        <span>회원정보 수정</span>
      </CategoryBlock>
      <CategoryBlock onClick={onAlert}>
        <span>비밀번호 수정</span>
      </CategoryBlock>
      <CategoryBlock onClick={onWithDrawal}>
        <span>회원 탈퇴</span>
      </CategoryBlock>
    </EditCategoryBlock>
  );
}

export default EditCategory;

const EditCategoryBlock = styled.div`
  margin-top: 84px;
  width: 200px;
  height: 400px;
  padding: 1rem;
  border-radius: 7px;

  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryBlock = styled.div`
  border-bottom: 2px solid ${palette.yellow[0]};
  padding: 1rem 0;
  cursor: pointer;
`;
