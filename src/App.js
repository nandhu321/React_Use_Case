import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRoutes from './Login/LoginRoutes';
import './App.css';
class App extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
    <div >
      <LoginRoutes />
    </div>
    );
  }
}
export default App;
