import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

function HeaderContainer() {
  const { registerRes, userRes } = useSelector(({ auth, user }) => ({
    registerRes: auth.registerRes,
    userRes: user.userRes,
  }));
  return <Header registerRes={registerRes} userRes={userRes} />;
}

export default HeaderContainer;
