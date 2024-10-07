import { useEffect, useContext, createContext, useState } from "react";
import { contextStyleMode } from './App.jsx';
import './App.css';
import ColorTheme from "./ColorTheme.jsx";

export const contextColorMode = createContext();

function SwitchStyleTheme() {
    const [darkMode, setDarkMode] = useState(true);
    const [styleTheme, setStyleTheme] = useContext(contextStyleMode);  

    useEffect(() => {
        if (darkMode) {
            if (styleTheme) {
                document.body.classList.remove('body-night-alternative');
                document.body.classList.add('body-night');
            } else {
                document.body.classList.remove('body-night');
                document.body.classList.add('body-night-alternative');
            }
        } else {
            if (styleTheme) {
                document.body.classList.remove('body-day-alternative');
                document.body.classList.add('body-day');
            } else {
                document.body.classList.remove('body-day');
                document.body.classList.add('body-day-alternative');
            }
        }
    }, [styleTheme, darkMode]);  

    const toggleStyle = () => {
        setStyleTheme(!styleTheme);  
    }

    return (
        <>
            <contextColorMode.Provider value={[darkMode, setDarkMode]}>
            <ColorTheme />
            </contextColorMode.Provider>

            <button onClick={toggleStyle}>Cambiar estilo</button>
        </>

    );
}

export default SwitchStyleTheme;
