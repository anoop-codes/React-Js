import React, { useState, useCallback } from 'react';
import TitleCompo from './Title';
import CountComp from './Count';
import ButtomComp from './Button';

const HomeUseCallBackHook = () => {

    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);

    /**
     * useCallback : task a call back as argument and a array of dependence,
     * 
     * it help to prevent the re-rendering of the reusable component
     */
    const incrementAge = useCallback(() => {
        setAge(age + 10)
    }, [age])


    const incrementSalary = () => {
        setSalary(salary + 1000);
    }

    return (
        <>
            <TitleCompo />
            <CountComp text="age" count={age} />
            <ButtomComp handleClick={incrementAge}>incrementAge</ButtomComp>
            <CountComp text="salery" count={salary} />
            <ButtomComp handleClick={incrementSalary}> incrementSalary</ButtomComp>
        </>
    );
}

export default HomeUseCallBackHook;

/**
 * memo/pure component : call the shouldComponentUPdate() mehtod and shallow comapore the state and props ,
 * in the above case the same component is call again with diffetn props , it re-render.
 *
 * useCallBack hook is a hook that will return the memoized version of the callbackFnc that take only changes
 * if one of the dependencies have change.
 *
 * it is usefull when passing callback to optimize child component that rely on the reference equality to
 * prevent the unnecessary renders.
 */