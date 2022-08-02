import * as React from 'react';
import { useCalculate } from '../hook/useCalculate';

export default function Calculadora() {
  const {
    parametroA,
    parametroB,
    setParametroA,
    setParametroB,
    result,
    suma,
    resta,
    multiplicar,
    dividir,
    reset,
  } = useCalculate(4, 6);

  const handleParametroA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParametroA(parseInt(e.target.value));
  };

  const handleParametroB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParametroB(parseInt(e.target.value));
  };

  return (
    <div>
      <div>
        <label> Numero 1 </label>
        <input onChange={handleParametroA} value={parametroA} />
      </div>
      <br />
      <div>
        <label> Numero 2 </label>
        <input onChange={handleParametroB} value={parametroB} />
      </div>
      <br />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <strong>Resultado</strong>
        <p style={{ paddingLeft: '0.6em' }}> {result}</p>
      </div>

      <button onClick={suma}> Sumar </button>
      <button onClick={resta}> Restar </button>
      <button onClick={multiplicar}> Multiplicar </button>
      <button onClick={dividir}> dividir </button>
      <button onClick={reset}> Limpiar </button>
    </div>
  );
}
