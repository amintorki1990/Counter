import React from "react";
import ActionType from "../Redux/ActionType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  function oddCounter() {
    if (counter % 2 !== 0) dispatch({ type: ActionType.INCEREMENT });
  }
  function timer() {
    setTimeout(() => {
      dispatch({ type: ActionType.INCEREMENT });
    }, 1500);
  }
  return (
    <div>
      <span style={{ marginRight: 5 }}>Clicked :</span>
      <span style={{ marginRight: 5 }}>{counter}</span>
      <span style={{ marginRight: 5 }}>items</span>
      <button
        style={{ marginRight: 5 }}
        onClick={() => dispatch({ type: ActionType.INCEREMENT })}
      >
        +
      </button>
      <button
        style={{ marginRight: 5 }}
        onClick={() => dispatch({ type: ActionType.DECREMENT })}
      >
        -
      </button>
      <button style={{ marginRight: 5 }} onClick={oddCounter}>
        Increment if odd
      </button>
      <button style={{ marginRight: 5 }} onClick={timer}>
        Increment async
      </button>
    </div>
  );
};

export default Counter;
