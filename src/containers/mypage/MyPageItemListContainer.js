import React from 'react';
import { useSelector } from 'react-redux';
import MyPageItemList from '../../components/mypage/MyPageItemList';

function MyPageItemListContainer() {
  const { userRes } = useSelector(({ user }) => ({
    userRes: user.userRes,
  }));
  return <MyPageItemList userRes={userRes} />;
}

export default MyPageItemListContainer;
