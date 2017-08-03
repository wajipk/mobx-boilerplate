import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button/index.jsx';

const reactLogo = require('../public/images/react.png');
ReactDOM.render(
  <div>
    <h1>React</h1>
    <img src={reactLogo} alt="logo" width="400" />
    <Button />
  </div>,
  document.getElementById('root'),
);
