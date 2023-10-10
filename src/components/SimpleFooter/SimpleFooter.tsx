import React from 'react';

import './SimpleFooter.scss';

export interface SimpleFooterProps {
    /**
     * Content
     */
    children: React.ReactNode;
}

export const SimpleFooter = ({children}: SimpleFooterProps): React.ReactNode => {
    return <footer>{children}</footer>;
};
