import React, {useContext} from 'react';
import Content from './Content';
import Switch from './Switch';
import {DarkModeContext} from './context/DarkModeContext';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content/>
            <Switch />
        </div>
    )
}

export default Container
