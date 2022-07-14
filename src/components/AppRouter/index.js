import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';

import { privateRoutes, publicRoutes } from '../../router';
const isAuth = true;

const AppRouter = () => {

  const routes = isAuth ? privateRoutes : publicRoutes;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({path, component}) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;