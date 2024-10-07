import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorTheme from './ColorTheme.jsx'
import Language from './Language.jsx'


export const contextColorMode = createContext();
export const languageContext = createContext();


function App() {

  const texts = {
    es: {
      title: "TA15: Aplicación para cambiar el idioma y tema",
      changeTheme: "Cambiar Tema",
      changeLanguage: "Cambiar Idioma",
    },
    en: {
      title: "TA15: Application to change the language and theme",
      changeTheme: "Change Theme",
      changeLanguage: "Change Language",
    },
  };

  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');

  return (
    <>
      <contextColorMode.Provider value={[darkMode, setDarkMode]}>
        <ColorTheme texts={texts} language={language}/> 
      </contextColorMode.Provider>
      <languageContext.Provider value={[language, setLanguage]}>
        <Language texts={texts} language={language}/> 
        <h1>{texts[language].title}</h1>
      </languageContext.Provider>
    </>
  )
}

export default App
