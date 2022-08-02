import * as React from 'react';

export const useCalculate = (
  initialParametroA: number = 0,
  InitialParametroB: number = 0
) => {
  const [parametroA, setParametroA] = React.useState(initialParametroA);
  const [parametroB, setParametroB] = React.useState(InitialParametroB);
  const [result, setResult] = React.useState(0);

  const suma = (): void => {
    setResult(parametroA + parametroB);
  };

  const resta = (): void => {
    setResult(parametroA - parametroB);
  };

  const multiplicar = (): void => {
    setResult(parametroA * parametroB);
  };

  const dividir = (): void => {
    setResult(parametroA / parametroB);
  };

  const reset = (): void => {
    setParametroA(0);
    setParametroB(0);
    setResult(0);
  };

  return {
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
  };
};
