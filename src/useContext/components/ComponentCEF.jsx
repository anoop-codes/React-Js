import React from 'react';
import { useContext } from 'react';
import { UserContext, ChannelContext } from '../HomeUseContext';

const ComponentCEF = () => {
    const { userName } = useContext(UserContext);
    const { channelName } = useContext(ChannelContext);
    return (
        <div>
            <strong>Hooks Compnent CEF : </strong>
            <ul>
                <li>userName : {userName}</li>
                <li>channelName: {channelName}</li>
            </ul>
        </div>
    );
}

export default ComponentCEF;