import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landingPage/landingPage';
import MainUserPage from './mainUserPage/mainUserPage';
import ErrorBoundary from './errorBoundary';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className='App'>
          <ErrorBoundary>
            <Route
              exact path = '/'
              component={LandingPage}
            />
            <Route
              exact path = '/user1'
              component={MainUserPage}
            />
          </ErrorBoundary>
      </main>
    );
  }
}

export default App;