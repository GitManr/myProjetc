import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
class Index extends React.Component {
  render() {
    return (
      <div>
        this is Index!
        <Link to='/login'>denglu</Link>
        <Link to='/home'>Home</Link>
      </div>
    );
  }
}
export default Index;
