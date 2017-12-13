import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Login extends React.Component {
  render() {
    return (
      <div>
        this is Login!
        <Link to='/index'>首页</Link>
      </div>
    );
  }
}
export default Login;
