import React, { useEffect, useState } from 'react';

const Address = () => {
    const [address, setAddress] = useState(' ');

    useEffect(() => {
        const getAddress = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('India')
            }, 4000)
        });

        getAddress.then((value) => setAddress(value)).catch((error) => console.log(error))

    }, []);

    return (
        <h1>Address : {address}</h1>
    );
}

export default Address;