import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../services/redux/counterSlice.js';

const ReduxComponent = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    );
  };

export default ReduxComponent