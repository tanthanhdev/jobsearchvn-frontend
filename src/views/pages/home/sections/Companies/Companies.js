import React from 'react';
// import { CustomCarousel } from 'molecules';
// import { Button } from 'primereact/button';
import { TopEmployers } from './components/top-employers/TopEmployers';
import styles from './Companies.module.css';

export const Companies = () => (
  <section className={styles.wrapper}>
    <div className={`grid wide ${styles.content}`}>
      <div className={styles.content__header}>
          <h1>Nhà tuyển dụng hàng đầu</h1>
      </div>
      {/* Top Employer - dynamic */}
      <div  id="top-employers" className={`${styles.nav_content} row`}>
        <TopEmployers />
      </div>
      {/* Top Employer end */}
    </div>
  </section>
);
