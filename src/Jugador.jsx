/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function Jugador({ nombre, puntos }) {
  // const { nombre, puntos } = props;
  return (
    <>
      <h1>Nombre: {nombre}</h1>
      <h1>Puntos: {puntos}</h1>
    </>
  );
}

Jugador.propTypes = {
  nombre: PropTypes.string.isRequired,
  puntos: PropTypes.number.isRequired,
};
