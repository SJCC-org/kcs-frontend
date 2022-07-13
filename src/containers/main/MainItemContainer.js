import React from 'react';
import { useSelector } from 'react-redux';
import MainItem from '../../components/main/MainItem';

function MainItemContainer() {
  const { userRes } = useSelector(({ user }) => ({
    userRes: user.userRes,
  }));
  return <MainItem userRes={userRes} />;
}

export default MainItemContainer;
