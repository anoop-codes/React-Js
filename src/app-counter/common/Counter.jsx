import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const counterStyleFunc = (count) => {
    let counterStyle = 'badge badge-';
    return counterStyle += (count > 0) ? 'primary' : 'warning';
}


const Counter = ({ count, increment, decrement, onDelete }) => {
    return (
        <div className="counter-wapper ">
            <div className={counterStyleFunc(count)}>{count}</div>
            <button className="btn btn-sm btn-success" onClick={increment}>+</button>
            <button className="btn btn-sm btn-primary" onClick={decrement}>-</button>
            <button className="btn btn-sm btn-danger" onClick={onDelete}>x</button>
        </div>
    );
}

Counter.defaultProps = {
    count: 0
}

Counter.prototype = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Counter;

/**
 * in react we can return the whole html as a varibale to a function
 */