import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require("../images/persona_1.png")}
        alt="testimonio persona 1"
      />
      <div className="contenedor-texto-testimonio" >
        <p className="nombre-testimonio">Emma sueca</p>
        <p className="cargo-testimonio">CEO de suecia</p>
        <p className="texto-testimonio"> lasdj klkajsd lkjasd sasda</p>
      </div>
    </div>
  );
}

export default Testimonio;