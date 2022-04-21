import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// services
import CvService from "services/cv.service";
// components
import { CV } from './components/cv/CV';
import { Right } from './components/right/Right';
// utils
import styles from './CVPublic.module.css';

export const CVPublic = () => {
  const [Cv, setCv] = useState(null);

  let params = useParams();

  useEffect(() => {
    CvService.getPublicCVDetail(params.slug).then(res => {
      setCv(res.data);
    });
  }, []);

  return (
    <section className={styles.container}>
      {Cv && (
        <div className={`${styles.container__content}`}>
          <Right Cv={Cv} />
          <CV Cv={Cv} />
        </div>
      )}
    </section>
  );
};
