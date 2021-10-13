import React, { Component } from 'react';

import s from './Counter.module.css';
import Controls from '../Controls/Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  //   static propTypes = {};
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };
  // const { target } = e;
  // setTimeout(() => {
  //   console.log(target);
  // }, 1000);

  handleDecrement = () => {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  };
  // console.log(this);
  // console.log(e.target);
  // console.log(e.type);

  render() {
    return (
      <div className={s.counter}>
        <span className={s.value}>{this.state.value}</span>

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
export default Counter;
