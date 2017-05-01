import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
  }
}

export default App;
