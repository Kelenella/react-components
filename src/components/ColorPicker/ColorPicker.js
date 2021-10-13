import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };
  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = [s.option];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.optionActive);
    }
    return optionClasses.join(' ');
  };
  render() {
    return (
      <>
        <h2 className={s.title}>Color Picker</h2>
        <div className={s.div}>
          {this.props.colors.map((color, index) => (
            <button
              key={color.color}
              type="button"
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color.color,
              }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </>
    );
  }
}
export default ColorPicker;
