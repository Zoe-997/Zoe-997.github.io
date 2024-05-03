'use client'
import { useEffect, useState } from 'react';
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
    
    const items: any = [
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
        <nav className="text-white">
            <ul className="flex flex-wrap items-center">
               {items.map((item: any) => (
                <li className={`${current === item.key ? 'bg-[#1677ff]': 'bg-transparent'} p-5`} key={item.key}>{item.label}</li>
               ))}
            </ul>
        </nav>
    );
}
 
export default MainMenu;