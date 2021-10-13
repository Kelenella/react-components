import React from 'react';
import s from '../Counter/Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.controls}>
      <button type="button" onClick={onIncrement} className={s.button}>
        +
      </button>
      <button type="button" onClick={onDecrement} className={s.button}>
        -
      </button>
    </div>
  );
};

export default Controls;
