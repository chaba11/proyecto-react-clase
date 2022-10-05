/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { LevelContext } from '../../context/LevelContext';
import styles from './Section.module.scss';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className={styles.section}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
