import React from 'react';
import Character from '../pages/Character';
import Characters from '../pages/Characters';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';

export const privateRoutes = [
  {path: '/', component: <Home />},
  {path: '/characters', component: <Characters />},
  {path: '/characters/:characterId', component: <Character />},
  {path: '/*', component: <NotFound />},
];

export const publicRoutes = [
  {path: '*', component: <Login />}
];
