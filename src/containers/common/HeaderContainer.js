import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

function HeaderContainer() {
  const { registerRes } = useSelector(({ auth }) => ({
    registerRes: auth.registerRes,
  }));
  return <Header registerRes={registerRes} />;
}

export default HeaderContainer;
