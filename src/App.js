import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import EditPasswordPage from './pages/EditPasswordPage';
import EditUserPage from './pages/EditUserPage';
import ItemInfoPage from './pages/ItemInfoPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Helmet>
        <title>카카오클라우드 스쿨 스터디</title>
      </Helmet>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/study/info" element={<ItemInfoPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit/user" element={<EditUserPage />} />
          <Route path="/mypage/edit/password" element={<EditPasswordPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
