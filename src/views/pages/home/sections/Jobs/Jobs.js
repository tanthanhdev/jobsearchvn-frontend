// import React from 'react';
// import { CustomCarousel } from 'molecules';
import { JobPopular } from './components/job-popular/JobPopular';
import styles from './Jobs.module.css';

export const Jobs = () => (
  <section className={styles.slide}>
    <div id="job-popular" className={`${styles.jobContainer} ${styles.grid} ${styles.wide} ${styles["sub-content"]}`}>
      <header className={styles["sub-content__header"]}>
        <h2>Việc Làm Hấp Dẫn</h2>
      </header>
      <JobPopular />
    </div>
  </section>
);
