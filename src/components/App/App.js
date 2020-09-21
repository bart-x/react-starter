import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

const App = () => (

  // <div>
  //   <Home />
  // </div>

  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path='/' component={Home} />
  //     <Route exact path='/info' component={Info} />
  //   </Switch>
  // </BrowserRouter>
  <div>
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;