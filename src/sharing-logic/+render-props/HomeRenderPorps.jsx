import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import UserCompo from './components/UserCompo';
import RenderPropsCounter from './common/RenderPropsCounter';

const HomeRenderPorps = () => {
    return (
        <>
            <RenderPropsCounter render={(count, onIncrement) => <ClickCounter onIncrement={onIncrement} state={count} />} />
            <RenderPropsCounter render={(count, onIncrement) => <HoverCounter onIncrement={onIncrement} state={count} />} />
            <UserCompo render={(isloggedIn) => isloggedIn ? 'Anoop kumar' : 'Ravi kumar'} />
        </>
    );
}

export default HomeRenderPorps;