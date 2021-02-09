import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeScreen from './views/HomeScreen';
import CreateScreen from './views/CreateScreen';
import SellScreen from './views/SellScreen';
// import TestScreen from './views/TestScreen';

export default class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/sell">Sell</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route path="/create" component={CreateScreen} />
              <Route path="/sell" component={SellScreen} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
