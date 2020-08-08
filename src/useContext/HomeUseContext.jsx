import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { createContext } from 'react';


export const UserContext = createContext();
export const ChannelContext = createContext();

const HomeUseContext = () => {
    return (
        <>
            <UserContext.Provider value={{ userName: 'Anoop kumar' }}>
                <ChannelContext.Provider value={{ channelName: 'Code-anoop' }}>
                    <ComponentA />
                    <ComponentB />
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default HomeUseContext;

/**
 * Component BD: trational
 * Compnent CEF : hooks
 */