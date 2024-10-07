import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardChild } from './card.jsx';



function App() {
  {/*TA3*/}
  const [inputValue, setValue] = useState(); //estado para poder setear el valor del inputValue
  {/*TA3*/}
  const setInputValue = (event)=>{ //toma como prop el event y setea el valor
    setValue(event.target.value);
  }

  return (
    <div className="app">
      {/*TA1*/}
      <Card 
        title="Proyecto A"
        description="Desarrollo de una aplicación web para gestión de tareas."
        assignedPerson="María García"
        startDate="2024-09-10"
        endDate="2024-09-30"
      />
      <Card 
        title="Proyecto B"
        description="Implementación de un sistema de autenticación."
        assignedPerson="Juan Pérez"
        startDate="2024-09-15"
        endDate="2024-10-05"
      />
      <Card 
        title="Proyecto C"
        description="Rediseño de la interfaz de usuario para el dashboard."
        assignedPerson="Laura Fernández"
        startDate="2024-09-12"
        endDate="2024-09-25"
      />
      {/*TA2*/}
      <CardChild>
        <p>Proyecto A</p>
        <p>Desarrollo de una aplicación web para gestión de tareas.</p>
        <p>María García</p>
        <p>2024-09-10</p>
        <p>2024-09-30</p>
      </CardChild>
      {/*TA3*/}
      <input value={inputValue} onChange={setInputValue}>
      </input>
      <p>{inputValue}</p>
    </div>
    
    
  )
}

export default App
