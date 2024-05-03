'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { GoHomeFill } from "react-icons/go";

const BreadcrumbComponent = () => {
  const pathname = usePathname()
  const breadcrumbItems = pathname.split('/').map(item => (
    {
      href: item === '' ? "/" : `/${item}`,
      title: item === '' ? <GoHomeFill /> : item.replace('-', ' ')
    }
  ))

  return (
    <>
      {pathname !== '/' ?
        <ul className='flex flex-wrap items-center py-2'>
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              {index === 0 ? '' : '/' } &nbsp;
              <Link href={item.href} className='capitalize hover:text-[#1677ff]'>{item.title}</Link> &nbsp;
            </li>
          ))}
        </ul>
      :
        <div className='h-[40px]'></div>
      }
    </>
  );
}
 
export default BreadcrumbComponent;