/*import React from "react";*/

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"        
        /*src={require("../images/persona_1.png")}*/
        src={require(`../images/persona_${props.imagen}.png`)}
        alt={`testimonio persona ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio" >
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en<strong> {props.empresa}</strong>
        </p>
        <p className="texto-testimonio"> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;