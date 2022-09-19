import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset, incrementByAmount} from "../../features/counter/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
    const increaseHandler = () => {
      dispatch(increment());
    }

    const decreaseHandler = () => {
      dispatch(decrement());
    }

    const resetHandler = () => {
      dispatch(reset());
    }

    const incrementByHandler = () => {
      dispatch(incrementByAmount(10));
    }

    return (
        <section>
            <span>{count}</span>
            <div>
                <button onClick={increaseHandler}>Plus</button>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={incrementByHandler}>Increment By 10</button>
                <button onClick={decreaseHandler}>Plus</button>
            </div>
        </section>
    )
}

export default Counter;