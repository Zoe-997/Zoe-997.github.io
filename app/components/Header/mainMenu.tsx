'use client'
import { Menu } from 'antd';

const MainMenu = () => {
    const items = new Array(15).fill(null).map((_, index) => ({
        key: index + 1,
        label: `nav ${index + 1}`,
    }));

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    );
}
 
export default MainMenu;