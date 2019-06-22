import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './app.jsx';

const Root = () => (
  <HashRouter>
    <App
      data="title" />
  </HashRouter>
);

export default Root;