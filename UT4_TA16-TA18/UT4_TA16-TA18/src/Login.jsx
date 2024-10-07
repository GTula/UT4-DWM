{/*TA18*/}

import { Link, useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {

    const navigate = useNavigate();

    const handleLogin = () => {
      setIsAuthenticated(true); 
      navigate('/')//redirigar al home
    };
  
    return (
      <div>
        <h1>Login</h1>
        <button onClick={handleLogin}>Iniciar Sesión</button>
        <br />
        <Link to="/">Volver al Home</Link>
      </div>
    );
}

export default Login;