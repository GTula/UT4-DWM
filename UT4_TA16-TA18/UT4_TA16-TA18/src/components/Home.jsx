import { useEffect } from "react";
import '../App.css'

function Home() {

    useEffect(() => {
        document.body.style.backgroundColor = 'lightblue';
        document.body.style.color = 'navy';
    
        return () => {
          document.body.style.backgroundColor = '';
          document.body.style.color = '';
        };
      }, []);

    return (
      <div>
        <h1>Home</h1>
        <p>Esta es la página Home. je</p>
      </div>
    );
  }
  
  export default Home;
  