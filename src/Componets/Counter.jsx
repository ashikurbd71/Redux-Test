import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremnet, incremnet,increamentByvalue } from '../Redux/Features/Counter/CounterSlices';

const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
             <button onClick={() => dispatch(increamentByvalue(5))}>Incremnet</button>
            <button onClick={() => dispatch(incremnet())}>Incremnet</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decremnet())}>Decrement</button>
        </div>
    );
};

export default Counter;