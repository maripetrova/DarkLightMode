import React, {useContext} from 'react';
import {DarkModeContext} from './context/DarkModeContext';

function Switch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <img src={darkMode ? `../img/switch-off.png` : `../img/on-button.png`} alt="Lightswitch on" onClick={handleClick}/>
        </div>
    )
}
export default Switch
