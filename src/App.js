import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (

      <div className="container">

        <h3>Want to go :</h3><Link to='/login'>LOGIN</Link><hr />
        <h3>Want to go :</h3><Link to='/register'>REGISTER</Link>

      </div>

    );
  }
}

export default App;
