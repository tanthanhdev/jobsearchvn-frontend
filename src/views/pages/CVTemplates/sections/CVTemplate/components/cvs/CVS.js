// import { FC } from 'react';
import { useState, useEffect } from 'react';
import styles from './CVS.module.css';
import { Basic1, Basic2, Basic3 } from 'components/CVTemplates';
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
export const CVS = (CvTemplates) => {
  const [list, setList] = useState([]);
  const myComponents = [
    { title: 'Basic 1', template: Basic1 },
    { title: 'Basic 2', template: Basic2 },
    { title: 'Basic 3', template: Basic3 },
  ];
  const [isRecordExists, setIsRecordExists] = useState(false);

  useEffect(() => {
    setList(myComponents);
    if (CvTemplates.CvTemplates.length > 0) {
      setIsRecordExists(true);
    } else {
      setIsRecordExists(false);
    }
  }, [CvTemplates]);

  return (
    <div className={`${styles.container__list}`}>
      <header className={`${styles["container__list-heading"]}`}>
        Danh sách mẫu CV xin việc tiếng Việt chuẩn 2022
      </header>
      <div className={`${styles.list__info}`}>
        {CvTemplates && CvTemplates.CvTemplates.map((item, index) => {
          if (item.status) {
            return (
              <div className={styles['col-4']} key={index}>
                {list.map((AnyComponent, index) => {
                  if (AnyComponent.title === item.title_template) {
                    return (
                      <AnyComponent.template
                        key={index}
                        CvTemplate={item}
                      />)
                  }
                })}
              </div>
            )
          }
        })}
        {!isRecordExists && (
          <img src={icons.no_record} alt="no-records-found" className={styles.no_record} />
        )}
      </div>
      {/* <footer className={`${styles.container__footer}`}>
          <button className={`${styles["see-more"]}`}>Xem Thêm</button>
      </footer> */}
    </div>
  );
};