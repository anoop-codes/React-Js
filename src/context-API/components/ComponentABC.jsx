import React from 'react';
import { userContext } from '../HomeContextAPI';

const ComponentABC = () => {
    return (
        <>
            <userContext.Consumer>
                {
                    ({ username }) => {
                        return <>
                            <strong>User Name: </strong><span>{username}</span>
                        </>
                    }
                }
            </userContext.Consumer>
        </>
    );
}

export default ComponentABC;

/**
 * A arrow function in b/w the consumer, the function get the passed value as it parameter, which then use within the body to return a react elemet
 */