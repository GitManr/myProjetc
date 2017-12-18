import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Index from './views/Index';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<BrowserRouter >
    <Switch>
      <Route path="/" component={Login}/>
      <Route path="/index" component={Index}/>
      <Route path="/home" component={Home}/>
    </Switch>
  </BrowserRouter>,document.getElementById('root'));
registerServiceWorker();
