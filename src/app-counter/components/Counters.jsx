import React, { Component, Fragment } from 'react';
import Counter from '../common/Counter';


class Counters extends Component {
    state = {
        counters: [
            { count: 3, id: 0 },
            { count: 0, id: 1 },
            { count: 1, id: 2 },
            { count: 0, id: 3 }
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }

        counters[index].count++;

        this.setState({
            counters
        });
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = { ...counter }

        if (counters[index].count !== 0)
            counters[index].count--;

        this.setState({
            counters
        });
    }

    handleDelete = counter => {
        let counters = [...this.state.counters];
        counters = counters.filter(c => c.id !== counter.id);

        this.setState({
            counters
        });
    }

    handleReset = () => {
        const counters = [...this.state.counters];

        counters.forEach(counter => counter.count = 0);
        this.setState({
            counters
        })
    }
    /**
     * if a function is called as a standalone fun , this , will point to global as, as it create it's own 
     * this, so avoid this, we use arrow func, this in arrow func , bind to the function in which it is called 
     */


    render() {
        const { counters } = this.state;
        return (
            <Fragment>
                <button className="my-3" onClick={this.handleReset}>Reset</button>
                {counters.map((counter) => (
                    <Counter
                        count={counter.count}
                        key={counter.id}
                        increment={() => this.handleIncrement(counter)}
                        decrement={() => this.handleDecrement(counter)}
                        onDelete={() => this.handleDelete(counter)}
                    />
                ))}
            </Fragment>
        );
    }
}

export default Counters;