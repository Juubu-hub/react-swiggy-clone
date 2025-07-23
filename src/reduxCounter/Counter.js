import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./countslice";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  return (
    <>
      <h1> {count}</h1>

      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>decrement</button>
    </>
  );
}
export default Counter;
