import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Homepage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
