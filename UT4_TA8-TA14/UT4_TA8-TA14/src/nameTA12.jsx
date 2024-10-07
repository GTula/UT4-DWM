import { useState, useContext } from "react";
import {context} from './App.jsx'
import {context2} from './App.jsx'

function Name () {
    {/*TA12*/}
    const [name, setName] = useContext(context);

    {/*TA13*/}
    const [name2, setName2] = useContext(context2);

    const [inputValue, setInputValue] = useState('');
    

    const handlerInputName = (event) =>{
        setInputValue(event.target.value);
    };

    const changeName = () =>{
        setName2(inputValue);
    }

    return(
        <>
            {/*TA12*/}
            <button onClick={() => setName('Roberto')}>Cambiar nombre a Roberto</button>
            {/*TA13*/}
            <p>Eliga usted el nombre:</p>
            <input value={inputValue} onChange={handlerInputName}></input><button onClick={changeName}>Confirmar cambio</button>
        </>
        
    )
}

export default Name;