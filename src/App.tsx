import React from 'react';

import './styles.scss';

const App: React.FC = () => {
    console.log(`KEY: ${process.env.REACT_APP_KEY}\nMODE: ${process.env.NODE_ENV}`);

    return (
        <div className="wrapper">
            <h1>React 18 and TypeScript 5 App!🚀</h1>
        </div>
    );
};

export default App;
