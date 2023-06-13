import './App.css';
import LogoFreeCode from './componentes/LogoFreeCode';
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setinput] =useState('');

  const agregarInput = val => {

    setinput(input + val);

  };

  const calcularResultado = () => {

    if (input) {
    setinput(evaluate(input))
    } else
    alert('Porfavor ingrese un valor antes')
  };

  return (
    <div className="App">
    
      <LogoFreeCode>
        
      </LogoFreeCode>

      <div className='contenedor-calculadora'>

        <Pantalla input={input}>

        </Pantalla>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={ () => setinput('')} > 
          Limpiar
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
