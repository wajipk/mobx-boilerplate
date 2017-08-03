import React, { Component } from 'react';
import classes from './Button.css';

export class Button extends Component {
  render () {
    return (
      <button className={classes.layout}>
        Hello World
      </button>
    );
  }
}
export default Button;
