import React, {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

function AppWithCallbackAfterRender() {
    useEffect(() => {
        console.log('rendered');
    });

    return <App />;
}

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
    <StrictMode>
        <AppWithCallbackAfterRender />
    </StrictMode>,
);
