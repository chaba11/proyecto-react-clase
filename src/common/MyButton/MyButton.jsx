/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyButton.module.scss';

export default function MyButton(props) {
  const { contador, handleClick } = props;
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      Clickeado {contador} veces
    </button>
  );
}
MyButton.propTypes = {
  contador: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
