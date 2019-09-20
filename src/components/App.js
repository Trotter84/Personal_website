import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router
} from 'react-router-dom';
import { ScrollManager, WindowScroller } from 'react-scroll-manager';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import Footer from './Footer';


class App extends Component {

  componentDidMount() {
    document.title='Daniel Trotter'
  }

  constructor() {
    super();
    this.history = createHistory();
  }

  render() {
    return (
      <ScrollManager history={this.history}>
        <Router history={this.history}>
          <WindowScroller>
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-me' component={AboutMe} />
                <Route path='/my-work' component={MyWork} />
                <Redirect to='/' />
              </Switch>
              <Footer />
            </div>
          </WindowScroller>
        </Router>
      </ScrollManager>
    );
  }
}

export default App;
