import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store={store}>
        <h3>Want to go :</h3><Link to='/login'>LOGIN</Link><hr />
        <h3>Want to go :</h3><Link to='/register'>REGISTER</Link>
        </Provider>
      </div>
    );
  }
}

export default App;
