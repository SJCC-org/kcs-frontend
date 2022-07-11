import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const MyPageCategoryBlock = styled.div`
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

function MyPageCategory() {
  return (
    <MyPageCategoryBlock>
      <h1>마이페이지</h1>
      <CategoryBlock>
        <span>비밀번호 찾기</span>
      </CategoryBlock>
      <CategoryBlock>
        <Link to="/mypage/edit/password">
          <span>비밀번호 수정</span>
        </Link>
      </CategoryBlock>
      <CategoryBlock>
        <Link to="/mypage/edit/user">
          <span>회원정보 수정</span>
        </Link>
      </CategoryBlock>
      <CategoryBlock>
        <span>회원 탈퇴</span>
      </CategoryBlock>
    </MyPageCategoryBlock>
  );
}

export default MyPageCategory;
