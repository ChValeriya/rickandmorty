import { PlayCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';

import { chooseMenu } from '../../redux/actions';

const NavBar = ({items}) => {
    const dispatch = useDispatch();
  
    const episodes = items.map(episode => (
        <Menu.Item key={episode.id} icon={<PlayCircleOutlined />}>
            {episode.name}
        </Menu.Item>
    ))
     
    const onMenuItemClick = (value) => {
        dispatch(chooseMenu(value.key))
    }
    return (
        <Menu mode="vertical" onClick={onMenuItemClick}>
            {episodes}
        </Menu>
    )
}

export default NavBar;