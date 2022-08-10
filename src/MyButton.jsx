/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export default function MyButton(props) {
  const { contador, handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      Clickeado {contador} veces
    </button>
  );
}
MyButton.propTypes = {
  contador: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
