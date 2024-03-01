'use client'
import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const MainMenu = () => {
    const pathname = usePathname()
    const [current, setCurrent] = useState('home');
    const menuItemActive = pathname.split('/').filter(item => item !== '')

    useEffect(() => {
        if (menuItemActive.length === 0) setCurrent('home')
        else {
            setCurrent(menuItemActive[0])
        }
    }, [menuItemActive])
    
    const items: MenuProps['items'] = [
        {
            key: 'home',
            label: (
                <Link href='/'>Home</Link>
            )
        },
        {
            key: 'our-work',
            label: (
                <Link href='/our-work'>Our work</Link>
            )
        },
        {
            key: 'about-us',
            label: (
                <Link href='/about-us'>About us</Link>
            )
        },
        {
            key: 'contact',
            label: (
                <Link href='/contact'>Contact</Link>
            )
        }
    ]  

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
        />
    );
}
 
export default MainMenu;