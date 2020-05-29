import React from 'react';
import{
    Link 
  } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    HomeOutlined ,
    LoginOutlined,
    UserOutlined,
    LogoutOutlined,
    DashboardOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import EditProfile from './EditProfile';
import AddNewRecord from './AddNewRecord';

const { Header, Content, Footer, Sider } = Layout;

class AddNewRecordLoad extends React.Component {
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
           
            <Menu.Item key="1" icon={<ProfileOutlined />}>
               <Link to="/myprofile">Profile</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<ProfileOutlined />}>
            <Link to="/addNewRecord">Add New Record</Link> 
            </Menu.Item>


            <Menu.Item key="3" icon={<LogoutOutlined />}>
            <Link to="/logout">Logout</Link> 
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
             <AddNewRecord/>
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
 
export default AddNewRecordLoad;