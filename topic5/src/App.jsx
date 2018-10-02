import React from 'react';
import './app.scss';
import { hot } from 'react-hot-loader';
import Landing from './pages/landing/landing';

const App = () => (
  <div className="App">
    <Landing />
  </div>
);
export default hot(module)(App);
