import React from 'react';
import HeroComponent from './HeroCompo';
import ErrorBoundryCompo from './ErrorBoundryCompo';

const HomeErrorBoundry = () => {
    return (
        <>
            <p>Hero One</p>
            <HeroComponent heroName='ironman' />
            <p>Hero tWo</p>
            <HeroComponent heroName='spiderman' />
            <p>Hero three</p>
            <ErrorBoundryCompo>
                <HeroComponent heroName='joker' />
            </ErrorBoundryCompo>

        </>
    );
}

export default HomeErrorBoundry;

/**
 * Error handling phase
 *      - getDerivedStateFromError(error)
 *          it a static method  getDerivedStateFromError method is used  to render the fallback UI after an error is thorwn
 *
 *      - ComponentDidCatch(error,info)
 *           it is used to log the error method.
 *
 *  error-boundry help to deplay a fall back ui, a section , rether then unmouthing the whole appln.
 *
 * Error Boundry : A class Component that implements either one or both life cyle , getDerivedStateFromError or ComponentDidCatch to become a
 *                 error boundry
 *
 *
 */