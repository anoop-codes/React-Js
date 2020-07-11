import React from 'react';

const HeroComponent = ({ heroName }) => {

    if (heroName === 'joker') {
        throw new Error('Not an Herro')
    }

    return (
        <>
            my hero name is : {heroName}
        </>
    );
}

export default HeroComponent;