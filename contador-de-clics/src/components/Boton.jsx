import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import '../style/Boton.css';

function Boton({texto, esBotonDeClic, manejarClic}) {
  return (
    <button
    className={esBotonDeClic ? "boton-clic":"boton-reiniciar"}
    onClick={manejarClic}
    >
        {texto}
    </button>
  );
}

export default Boton;