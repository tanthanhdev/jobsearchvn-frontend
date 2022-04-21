import React, { useState, useEffect } from 'react';
import styles from './CV.module.css';
import { NotModalBasic1, NotModalBasic2, NotModalBasic3 } from 'components/CVTemplates';
import { icons } from 'utils/icons';

// interface IJobCards {
//   logo: string;
//   title: string;
//   salary: number;
//   currency: string;
//   country: string;
//   company_name: string;
// }

// const JobCards: FC<IJobCards> = ({ logo, title, salary, currency, country, company_name }) => {
export const CV = ({ Cv }) => {
  const [list, setList] = useState([]);
  const myComponents = [
    { title: 'Basic 1', template: NotModalBasic1 },
    { title: 'Basic 2', template: NotModalBasic2 },
    { title: 'Basic 3', template: NotModalBasic3 },
  ];
  const [isRecordExists, setIsRecordExists] = useState(false);

  useEffect(() => {
    setList(myComponents);
    if (Cv.cv_template || Cv.cv_template.status) {
      setIsRecordExists(true);
    } else {
      setIsRecordExists(false);
    }
  }, []);

  return (
    <div>
      {isRecordExists ? (
        <div className={`${styles.list__info}`}>
          {list.map((AnyComponent, index) => {
            if (AnyComponent.title === Cv.cv_template.title) {
              return (
                <AnyComponent.template
                  key={index}
                  Cv={Cv}
                />)
            }
          })}
        </div>
      ) : (
        <img src={icons.no_record} alt="no-cv-found" className={styles.no_record} />
      )}
      {/* <footer className={`${styles.container__footer}`}>
          <button className={`${styles["see-more"]}`}>Xem Thêm</button>
      </footer> */}
    </div>
  );
};