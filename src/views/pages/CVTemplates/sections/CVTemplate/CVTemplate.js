import { useState, useEffect } from 'react';
// services
import CvTemplateService from "services/cv-template";
// components
import { Filter } from './components/filter/Filter';
import { CVS } from './components/cvs/CVS';
// utils
import styles from './CVTemplate.module.css';

export const CVTemplate = () => {
  const [CvTemplates, setCvTemplates] = useState([]);
  
  useEffect(() => {
    CvTemplateService.getCvTemplates().then(data => {
      let resArr = [...data];
      resArr = resArr.map(e => {
        return {
          id: e.id ? e.id : 0,
          cv_career: e.cv_career ? e.cv_career : null,
          cv_design: e.cv_design ? e.cv_design : null,
          title_template: e.title ? e.title : null,
          slug: e.slug ? e.slug : null,
          status: e.status ? e.status : null,
          view: e.view ? e.view : 0,
        };
      });
      setCvTemplates(resArr);
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={`${styles.container__content}`}>
        <Filter setCvTemplates={setCvTemplates} />
        <CVS CvTemplates={CvTemplates ? CvTemplates : null} />
      </div>
    </section>
  );
};
