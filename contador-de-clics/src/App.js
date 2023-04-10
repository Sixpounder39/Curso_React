import './App.css';
import logo from './images/logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

 let [numClics, setNumClics] = useState(0);

 const manejarClic = () => {
    console.log('Clic');
    numClics = numClics + 1;
    setNumClics(numClics);
  };

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  };


  return (
    <div className="App">
        

      <div className="logo-contenedor">
        <img 
        src={logo} 
        alt="logo" 
        className="logo" />
      </div>
      <div className="contenedor-principal">  

      <Contador 
      numClics={numClics}
      
      />    
      
      <Boton 
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}
      />
      <Boton 
        texto="Reset"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
      />

      </div>

      
      
    </div>
  );
}

export default App;
