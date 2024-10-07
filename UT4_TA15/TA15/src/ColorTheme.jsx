import { useEffect, useContext } from "react";
import { contextColorMode } from './App.jsx';
import './App.css';

function ColorTheme({texts, language}) {
    const [darkMode, setDarkMode] = useContext(contextColorMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('body-day');
            document.body.classList.add('body-night');
        } else {
            document.body.classList.remove('body-night');
            document.body.classList.add('body-day');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);  
    }

    return (
        <button onClick={toggleTheme}>{texts[language].changeTheme}</button>
    );
}

export default ColorTheme;
