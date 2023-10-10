import React, {StrictMode, useEffect} from 'react';

import {MainSection} from './MainSection';

const AppWithCallbackAfterRender = () => {
    useEffect(() => {
        console.log('rendered');
    });

    return <MainSection />;
};

export const MainPage = () => {
    return (
        <StrictMode>
            <AppWithCallbackAfterRender />
        </StrictMode>
    );
};
