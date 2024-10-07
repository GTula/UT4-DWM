import { languageContext } from './App.jsx';
import { useEffect, useContext } from "react";


function Language({texts}){

    const [language, setLanguage] = useContext(languageContext);

    const toggleLanguage = () => {
        if(language == 'es'){
            setLanguage('en');  
        }
        else{
            setLanguage('es');  
        }
        
    }

    return(
        <>
        <button onClick={toggleLanguage}>{texts[language].changeLanguage}</button>
        </>
    )
}

export default Language;