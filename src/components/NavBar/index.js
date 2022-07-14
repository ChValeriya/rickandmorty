import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';

import { chooseMenu } from '../../redux/actions';

const NavBar = ({items}) => {
  const dispatch = useDispatch();
  
  const episodes = items.map(({id, name}) => (
    <Menu.Item key={id} icon={<PlayCircleOutlined />}>
      {name}
    </Menu.Item>
  ));
     
  const onMenuItemClick = ({key}) => {
    dispatch(chooseMenu(key));
  };
  return (
    <Menu mode="vertical" onClick={onMenuItemClick}>
      {episodes}
    </Menu>
  );
};

export default NavBar;