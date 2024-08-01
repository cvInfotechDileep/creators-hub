import React, { useState } from 'react'
import "./style.scss"

const DarkLightSwitchButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>
           
        </>
    )
}

export default DarkLightSwitchButton