import React from 'react';

import './App.scss';

const App: React.FC = () => {
    console.log(`KEY: ${process.env.REACT_APP_KEY}\nMODE: ${process.env.NODE_ENV}`);

    return (
        <section>
            <div className="header">React 18 and TypeScript 5 App!🚀</div>
            <p className="body-text">
                Main page. You are running this application in <b>{process.env.NODE_ENV}</b> mode.
            </p>
        </section>
    );
};

export default App;
