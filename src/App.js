import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
