import { useEffect, useState, createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './nameTA12.jsx'
import ColorTheme from './ColorTheme.jsx'
import SwitchStyleTheme from './switchStyleTheme.jsx'

{/*TA12*/}
export const context = createContext();
{/*TA13*/}
export const context2 = createContext();
{/*TA14*/}
export const contextStyleMode = createContext();


function App() {
  const [value, setValue] = useState('');


  const handlerInput = (event) =>{
    setValue(event.target.value)
  }

  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useState([]);

  const createTask = () =>{
    const newTask = {
      id: tasks.length +1,
      value: value
    }
    setTasks([...tasks, newTask])
    setValue('');
  }

  const deleteTask = (taskId) => {
    const newListTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newListTasks);
  }

  const confirmEditTask = () =>{
    const newListTasks = tasks.map(task =>
      task.id === useId ? { ...task, value: value } : task
    );
    setTasks(newListTasks);
    setShowModal(!showModal);
    setValue('');
  }

  const toggleModal = (taskId, taskValue) =>{
    setUseId(taskId);
    setShowModal(!showModal);
    setValue(taskValue);
  }

  const [useId, setUseId] = useState('')

  {/*TA9*/}
  const [count, setCount] = useState(0);

  const setIncrement = () =>{
    setCount(count + 1);
  }

  const setDecrease = () =>{
    setCount(count - 1);
  }

  useEffect(() =>{
    document.title = `Contador ${count}`;
  },[count])


  {/*TA10*/}
  const [usersData, setUsersData] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsersData(data))
    .catch(error => console.error('Error: ', error))
  },[])

  {/*TA11*/}
  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(lastTime => lastTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  {/*TA12*/}
  const [name, setName] = useState(null);
  {/*TA13*/}
  const [name2, setName2] = useState(null);

  {/*TA14*/}
  const [styleTheme, setStyleTheme] = useState(true);


  return (
    <>
      <input value={value} onChange={handlerInput} />
      <button onClick={createTask}>Enviar</button>
      <ul id="task_list">
        {tasks.map(task => (
          <li key={task.id}>{task.value}
          <button onClick={() => deleteTask(task.id)}>Borrar</button>
          <button onClick ={() => toggleModal(task.id, task.value)}>Editar</button>
          </li> 
        ))}
      </ul>

      {showModal &&
      <div className='modal-back'>
        <div className='modal'>
          <input value={value} onChange={handlerInput}></input>
          <button onClick={confirmEditTask}>Confirmar</button>
        </div>
      </div>
      }

      {/*TA9*/}
      <button onClick={setIncrement}>Incrementar</button>
      <button onClick={setDecrease}>Decrementar</button>
      <p>Contador: {count}</p>

      {/*TA10*/}
      <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usersData.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
    
    {/*TA11*/}
    <p>Tiempo: {time}</p>

    
      {/* TA12 y TA13*/}
      <context.Provider value={[name, setName]}>
        <context2.Provider value={[name2, setName2]}>
          <p>Nombre actual en contexto: {name}</p>
          <Name />
          <p>Nombre elegido en el input: {name2}</p>
        </context2.Provider>
      </context.Provider>

      {/*TA14*/}


      <contextStyleMode.Provider value={[styleTheme, setStyleTheme]}>
        <SwitchStyleTheme /> 
      </contextStyleMode.Provider>
    </>
  )
}

export default App;
