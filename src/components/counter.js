import React, { Component } from 'react';


const Counter = ({ increment, decrement, value }) => { 
    return (
        <div>
          <p>{value}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
