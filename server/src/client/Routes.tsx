import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
