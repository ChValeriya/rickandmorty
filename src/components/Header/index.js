import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { StarOutlined, LogoutOutlined } from '@ant-design/icons';

const Header = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['home']}>
    <Menu.Item key="home" icon={<HomeOutlined />}>
      <Link to={'/'}>Home</Link>
    </Menu.Item>
    <Menu.Item key="characters" icon={<UserOutlined />}>
      <Link to={'/characters'}>Characters</Link>
    </Menu.Item>
    <Menu.Item key="favorites" icon={<StarOutlined />}>
      <Link to={'/favorites'}>Favorites</Link>
    </Menu.Item>
    <Menu.Item key="logins" icon={<LogoutOutlined />}>
      <Link to={'/login'}>Exit</Link>
    </Menu.Item>
  </Menu>
);

export default Header;