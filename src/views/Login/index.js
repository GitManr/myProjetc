import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { message, Input, Icon } from 'antd';

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

    return (
      <div  style={{background:'blue'}}>
        this is Login!
        <Link to='/index'>首页</Link>
        <Input />
        this is time {this.state.data}
      </div>
    );
  }
}
export default Login;
