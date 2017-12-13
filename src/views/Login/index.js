import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { message, Input, Icon } from 'antd';
import styles from './index.less'
class Login extends React.Component {



  render() {
    return (
      <div className={styles['login-back']} style={{background:'blue'}}>
        this is Login!
        <Link to='/index'>首页</Link>
        <br/>
        <Icon type="step-forward" />
        <br/>
        <Input placeholder="Basic usage" />
        this is time {new Date().toLocaleTimeString()}
      </div>
    );
  }
}
export default Login;
