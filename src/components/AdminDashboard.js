import React from 'react';
import{
    Link 
  } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    HomeOutlined ,
    LoginOutlined,
    DashboardOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import AdminDashboardContent from'./AdminDashboardContent';

const { Header, Content, Footer, Sider } = Layout;

class AdminDashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/adminDashboard">DASHBOARD</Link> 
            </Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link to="/">HOME</Link> 
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link to="/logout">LOGOUT</Link> 
            </Menu.Item>
            
            
                       
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item> 
               <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <AdminDashboardContent/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>copyright ©2020 Created by Anu</Footer>
        </Layout>
      </Layout>
    );
  }
}


/* #components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
} */
 
export default AdminDashboard;