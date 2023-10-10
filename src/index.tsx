import React, {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import Footer from './footer';

import './globals.scss';

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

    return <App />;
}

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <AppWithCallbackAfterRender />
        <Footer />
    </StrictMode>,
);
