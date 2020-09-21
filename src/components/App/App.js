import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (

  // <div>
  //   <Home />
  // </div>

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </BrowserRouter>
);

export default App;