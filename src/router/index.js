import React from 'react';
import Character from '../pages/Character';
import Characters from '../pages/Characters';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Favorites from '../pages/Favorites';

export const privateRoutes = [
  {path: '/', component: <Home />},
  {path: '/characters', component: <Characters />},
  {path: '/characters/:characterId', component: <Character />},
  {path: '/favorites', component: <Favorites />},
  {path: '/login', component: <Login />},
  {path: '/*', component: <NotFound />},
];

export const publicRoutes = [
  {path: '*', component: <Login />}
];