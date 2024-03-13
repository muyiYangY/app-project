import React from 'react';
import { Layout, Flex, Anchor } from 'antd';
import { SiderButton } from '../components/siders/SiderButton';
import './HomeBox.css'
import { UserImg } from '../components/siders/UserImg';
import { CommentArea } from '../components/content/CommentArea';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  minHeight: 590,
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '40px',
  backgroundColor: '#FFFFFF',
  borderRight: '1px solid black'
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',

};
const App = () => (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        <div className='logoP'>首页</div>
        <SiderButton />
        <UserImg />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <CommentArea />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
);
export default App;