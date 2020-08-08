import React from 'react';

const ComponentA = ({ name }) => {
    if (name === 'joker') {
        throw new Error('Joker is not a hero!!!!')
    }

    return (
        <>
            Name: {name}
        </>
    );
}

export default ComponentA;