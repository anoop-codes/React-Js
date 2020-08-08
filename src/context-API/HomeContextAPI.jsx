import React from 'react';
import { createContext } from 'react';
import ComponentA from './components/ComponentA';

//we have pass a defualt context value 
export const userContext = createContext({
    username: 'default name'
});

//when we have default value , we no deep to have provider , consumer can direclty get the value

const HomeContextAPI = () => {
    return (
        <>
            {/* <userContext.Provider value={{ username: '' }}> */}
            <ComponentA />
            {/* </userContext.Provider> */}
        </>
    );
}

export default HomeContextAPI;