import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
// import { message, Input, Icon } from 'antd';
import styles from './index.less';
import './index.css';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'is begin'};
  }
  componentWillUnmount() {
    console.log(1)

  }
  componentDidMount() {
    this.setState({data:' is no time'})
  }


  render() {
     console.log('hello world')
    return (
      <div  className={styles['login-back']}>
        this is Login!
        <Link to='/index'>首页</Link>
        this is time {this.state.data}
        <div className={styles['test-div']} className='test-div1'>
         this is test div
        </div>
      </div>
    );
  }
}
export default Login;
