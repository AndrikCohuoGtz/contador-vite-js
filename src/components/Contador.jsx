import React, { useState } from "react";
import "./contador.css";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    if (contador >= 0 || contador <0) {
      setContador(contador + 1);
    }
  };

  const decrementarContador = () => {
    if (contador >= 1 || contador <=0) {
      setContador(contador - 1);
    }
  };

  const resetContador = () => {
    setContador(0);
  }

  return (
    <body>
        <h1 className="Title"> CONTADOR </h1>
          <div className="box">
            <div>
                <h1>{contador}</h1>
            </div>
            <div className="boton">
            <button className="btn" onClick={decrementarContador}>
              <i class="word">-</i>
            </button>
            <button className="BotR" onClick={resetContador}>
              <i class="word">Reset</i>
            </button>
            <button className="btn" onClick={incrementarContador}>
              <i class="word">+</i>
            </button>
            </div>
          </div>
    </body>
  );
};

export default Contador;