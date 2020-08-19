import React, { lazy, Suspense } from 'react';
import Name from './+fetch/Name';

const Tags = lazy(() => import('./components/Tags'))

const HomeCurrency = () => {
    return (
        // <Suspense fallback={<div>Loaing.....</div>}>
        //     <Tags text='hello !!!' />
        // </Suspense>
        <Name></Name>
    );
}

export default HomeCurrency;