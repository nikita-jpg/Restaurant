import React from 'react';
import '../Header/header.css'
import { Tab } from '../Tab/Tab';

const Header = () => {
    return (
        <div className="header header_inside">
            <Tab></Tab>
            <Tab></Tab>
            <Tab></Tab>
        </div>
    )
}

export {Header}