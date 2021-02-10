import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

// Screens Import
import HomeScreen from './views/HomeScreen';
import CreateScreen from './views/CreateScreen';
import SellScreen from './views/SellScreen';
// import TestScreen from './views/TestScreen';

export default class App extends React.Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Router>
          <div>
            <Menu theme="dark" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: "rgb(39, 39, 39)" }}>
              <Menu.Item key="home" icon={<MailOutlined />} className="hoverTab">
                Home
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="create" icon={<AppstoreOutlined />} className="hoverTab">
                Create Token
                <Link to="/create" />
              </Menu.Item>
              <Menu.Item key="sell" icon={<AppstoreOutlined />} className="hoverTab">
                Token Management
                <Link to="/sell" />
              </Menu.Item>
              <Menu.Item key="login" icon={<AppstoreOutlined />} className="hoverTab">
                Connect your wallet
                <Link to="/login" />
              </Menu.Item>
            </Menu>
          </div>

          <Route exact path="/" component={HomeScreen} />
          <Route path="/create" component={CreateScreen} />
          <Route path="/sell" component={SellScreen} />
        </Router>
      </>
    );
  }
}
