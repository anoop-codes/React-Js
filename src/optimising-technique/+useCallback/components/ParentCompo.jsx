import React from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';
import { useState } from 'react';
import { useCallback } from 'react';

const ParentCompo = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000);

    const IncrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const IncrementSalary = useCallback(() => {
        setSalary(salary + 10000);
    }, [salary])

    return (
        <>
            <Title />

            <Count text='age' count={age} />
            <Button handleIncrement={IncrementAge}>Increment Age</Button>

            <Count text='salary' count={salary} />
            <Button handleIncrement={IncrementSalary}>Increment Salary</Button>
        </>
    );
}

/**
 * first btn , depend on the age , so when the age changes ,it re-render , but increment salary btn also render : this is because a new increment salary btn is created on every render and on dealing with func ,we alwasy have to consisder reference equality and since a function is a props, React.momo see change in the props so re-render.
 */

export default ParentCompo;