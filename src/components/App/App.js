import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQ';
import List from '../List/ListContainer';
import { AnimatedSwitch } from 'react-router-transition';
import SearchResults from '../SearchResults/SearchResultsContainer';

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
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path="/list/:id" component={List} />
          <Route exact path="/search/:title" component={SearchResults} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;