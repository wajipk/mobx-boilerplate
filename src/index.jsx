import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button/index.jsx';
import classes from './index.scss';

const reactLogo = require('../public/images/react.png');
ReactDOM.render(
  <div>
    <h1 className={classes.heading}>
      React
      <span className={classes.extension}>.JS</span>
    </h1>
    <img src={reactLogo} alt="logo" width="400" />
    <Button />
  </div>,
  document.getElementById('root'),
);
