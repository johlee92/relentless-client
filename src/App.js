import React from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from './landingPage/landingPage';
import MainUserPage from './mainUserPage/mainUserPage';

function App() {
  return (
    <main className='App'>
      <Route
        exact path = '/'
        component={LandingPage}
      />
      <Route
        exact path = '/:userId'
        component={MainUserPage}
      />
    </main>
  );
}

export default App;