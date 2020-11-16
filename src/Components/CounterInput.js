import React from 'react'

const CounterInput = (props) => {
    return (
        <div>
            <button onClick={() => props.setCounter(props.counter + 1)}>+</button>
            <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
        </div>
    )
}

export default CounterInput
