import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['home']}>
    <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to={'/'}>Home</Link>
    </Menu.Item>
    <Menu.Item key="characters" icon={<UserOutlined />}>
        <Link to={'/characters'}>Characters</Link>
    </Menu.Item>
  </Menu>
);

export default Header;