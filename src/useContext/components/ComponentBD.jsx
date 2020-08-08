import React from 'react';
import { UserContext, ChannelContext } from '../HomeUseContext';

const ComponentBD = () => {
    return (
        <>
            <UserContext.Consumer>
                {
                    ({ userName }) => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    ({ channelName }) => {
                                        return <>
                                            <strong>Component BD: </strong>
                                            <ul>
                                                <li>userName : {userName}</li>
                                                <li>channelName: {channelName}</li>
                                            </ul>
                                        </>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    );
}

//consume by a render props pattern

export default ComponentBD;