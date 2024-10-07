import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  {/*TA4*/}
  const [count, setCount] = useState(0);

  const setIncrement = () =>{
    setCount(count + 1);
  }

  const setDecrease = () =>{
    setCount(count - 1);
  }

  {/*TA5*/}
  const [text, setText] = useState('Hola');

  const handlerText = () =>{
    setText(text === 'Hola' ? '' : 'Hola');
  }

  {/*TA6*/}
  const [value, setValue] = useState();


  const handlerInput = (event) =>{
    setValue(event.target.value)
  }

  const [showModal, setShowModal] = useState(false);

  const createTask = () =>{
    const listTask = document.getElementById('task_list');
    {/*TA7*/}// cuando se clickea el boton se elimina el padre (la task)
    listTask.insertAdjacentHTML('beforeend', `<li>${value} <button onClick={event.target.parentElement.remove()}>Borrar</button>`);
    setValue('');
    
  
  }

  const toggleModal = () =>{
    setShowModal(!showModal);
  }

  
  return (
    <>
      {/*TA4*/}
      <button onClick={setIncrement}>Incrementar</button>
      <button onClick={setDecrease}>Decrementar</button>
      <p>{count}</p>
      {/*TA5*/}
      <button onClick={handlerText}>Magia</button>
      <p>{text}</p>

      {/*TA6*/} {/*TA7*/}
      <input value={value} onChange={handlerInput}></input>
      <button onClick={createTask}>Enviar</button>
      <ul id= "task_list">
      </ul>
      
      
    </>
  )
}

export default App
