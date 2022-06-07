import React, {useContext} from 'react';
import {DarkModeContext} from './context/DarkModeContext';

function Content() {
    const {darkMode} = useContext(DarkModeContext);
    return (
            <div className='cards'>
                <div  className={darkMode ? `card card-dark` : `card card-light`}  data-text="bacterium"><i className="fas fa-bacterium fa-3x"></i></div>
                <div className={darkMode ? `card card-dark` : `card card-light`} data-text="bahai"><i className="fas fa-bahai fa-3x"></i></div>
                <div className={darkMode ? `card card-dark` : `card card-light`} data-text="bug"><i className="fas fa-bug fa-3x"></i></div>
            </div>
    )
}

export default Content
