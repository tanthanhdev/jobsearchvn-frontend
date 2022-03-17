// import React from 'react';
// import { CustomCarousel } from 'molecules';
import { Filter } from './components/filter/Filter';
import { CVS } from './components/cvs/CVS';
import styles from './CVTemplate.module.css';

export const CVTemplate = () => (
  <section className={styles.container}>
    <div className={`${styles.container__content}`}>
      <Filter />
      <CVS />
    </div>
  </section>
);
