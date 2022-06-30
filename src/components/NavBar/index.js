import { PlayCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const NavBar = ({items}) => {
    const episodes = items && items.map(episode => (
        <Menu.Item key={episode.url} icon={<PlayCircleOutlined />}>
            {episode.name}
        </Menu.Item>
    ))
     
    return (
        <Menu mode="vertical">
            {episodes}
        </Menu>
    )
}

export default NavBar;