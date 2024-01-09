'use client'
import { Layout, theme } from 'antd';

import Header from '@/app/components/Header/header'
import Footer from '@/app/components/Footer/footer'
import BreadcrumbComponent from '@/app/components/Common/breadcrumb'

const { Content } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  return (
    <Layout>
        <Header />
        <Content style={{ padding: '0 48px' }}>
          <BreadcrumbComponent/>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            Welcome to Zoe-997 page
          </div>
        </Content>
        <Footer/>
      </Layout>
  )
}
