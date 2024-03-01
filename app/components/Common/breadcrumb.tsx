'use client'
import { usePathname } from 'next/navigation'
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link';

const BreadcrumbComponent = () => {
  const pathname = usePathname()
  const breadcrumbItems = pathname.split('/').map(item => (
    {
      href: item === '' ? "/" : `/${item}`,
      title: item === '' ? <HomeOutlined /> : item.replace('-', ' ')
    }
  ))

  return (
    <>
      {pathname !== '/' ?
        <ul className='flex flex-wrap items-center py-2'>
          {breadcrumbItems.map((item, index) => (
            <li key={index}>
              {index === 0 ? '' : '/' } &nbsp;
              <Link href={item.href} className='capitalize'>{item.title}</Link> &nbsp;
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