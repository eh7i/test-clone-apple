import 'styles/bootstrap.scss';
import 'styles/main.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Page} from 'components/Pages';
import Home from 'views/home';

function App() {
  return (
    <div className="app">
      <Router>
        <Page fixed>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  );
}

export default App;
