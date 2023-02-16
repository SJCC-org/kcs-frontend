import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../styles/palette";

function MyPageCategory({ onSwitchCategory }) {
  return (
    <MyPageCategoryBlock>
      <Link to="/mypage">
        <h1>마이페이지</h1>
      </Link>
      <CategoryBlock onClick={() => onSwitchCategory("make")}>
        <span>개설한 스터디</span>
      </CategoryBlock>
      <CategoryBlock onClick={() => onSwitchCategory("enter")}>
        <span>참여한 스터디</span>
      </CategoryBlock>
      <CategoryBlock>
        <Link to="/mypage/edit/user">
          <span>회원정보 수정</span>
        </Link>
      </CategoryBlock>
    </MyPageCategoryBlock>
  );
}

export default MyPageCategory;

const MyPageCategoryBlock = styled.div`
  margin-top: 84px;
  width: 200px;
  height: 400px;
  padding: 1rem;
  position: sticky;
  top: 100px;

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
