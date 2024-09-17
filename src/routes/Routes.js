// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormikEYup from '../components/FormikEYup/index';
import Home from '../pages/home/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormikEYup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
