import React, { useState, useEffect } from 'react';

const HookCounterCompo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    /**
     * useEffect is function , that is render "after" every render,
     * dependency array , check for the value mention in the arr to look for change..
     * 
     * [ ] : array of value that the effect depend on
     * 
     * if we give emplty array it memic as componentDiDmount , run only once
     * wiht dependence it behave as componentDidupdate
     */
    useEffect(() => {
        console.log('use Effect')
        document.title = `title count ${count}`;

        return () => {
            //.. componentwillUnmount()
        }
    }, [count])

    return (
        <>
            <p>
                Name : {name}
            </p>
            <button onClick={() => setCount(count + 1)}>change the title count</button>
            <br />
            <div>
                <input type="text" onChange={(event) => setName(event.target.value)} value={name} />

            </div>
        </>
    );
}

export default HookCounterCompo;