import {Menu} from "antd";
import Link from "next/link";
import {AppstoreOutlined , LogoutOutlined,UserAddOutlined} from "@ant-design/icons";

const {Item} =Menu;

const TopNav = () => {
    return (
    
            <Menu mode="horizontal">
                <Item icon={<AppstoreOutlined  />}>
                    <Link legacyBehavior href="/">
                        <a>App</a>
                   </Link>
                </Item>
                <Item icon={<LogoutOutlined />}> 
                    <Link legacyBehavior  href="/login">
                        <a>Login</a>
                   </Link>
                </Item>
                <Item icon={<UserAddOutlined />}>
                    <Link legacyBehavior href="/register">
                        <a>Register</a>
                   </Link>
                </Item>
                 
                
            </Menu>
        
        
    );
};


export default TopNav;