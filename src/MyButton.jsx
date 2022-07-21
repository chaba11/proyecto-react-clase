/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

export default function MyButton() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <button type="button" onClick={handleClick}>
      Clickeado {contador} veces
    </button>
  );
}
