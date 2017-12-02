import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';
import Test from './pages/test'

//import FontAwesome from 'react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
    <Route exact path='/' component={Test} />
    <Route exact path='/App' component={App} />
  </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))