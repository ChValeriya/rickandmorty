import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { chooseIncrement, chooseDecrement } from '../../redux/actions';

export default function NotFound() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch( chooseIncrement() );
  const handleDecrement = () => dispatch( chooseDecrement() );

  return (
    <div className="App">
      <h1>Redux Sample with Hooks</h1>
      <hr />
      <h1>Counter: {counter}</h1>
      <button variant="contained" color="secondary" onClick={handleDecrement}>
        - Decrement
      </button>
      <button variant="contained" color="primary" onClick={handleIncrement}>
        + Increment
      </button>
    </div>
  );
}
