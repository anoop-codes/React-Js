import React, { useEffect, useState } from 'react';
import Address from './Address';

const Name = () => {
    const [name, setName] = useState(' ');

    useEffect(() => {
        const getName = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('anoop kumar')
            }, 4000)
        });

        getName.then((value) => setName(value)).catch((error) => console.log(error))

    }, []);

    return (
        <>
            <h1>Name : {name}</h1>
            <Address />
        </>

    );
}

export default Name;