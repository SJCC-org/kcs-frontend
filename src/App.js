import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
