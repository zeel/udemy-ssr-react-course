import React from 'react';
import Home from './components/Home';
import Users from './components/Users';
import { Routes, Route } from 'react-router';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
