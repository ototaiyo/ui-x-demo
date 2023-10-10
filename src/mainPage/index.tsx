import React, {StrictMode, useEffect} from 'react';

import {SimpleFooter} from '../components';

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
            <SimpleFooter>
                <a href="#">A Footer Link</a>
            </SimpleFooter>
        </StrictMode>
    );
};
