// import { FC } from 'react';
import { useState, useEffect } from 'react';
import styles from './CVS.module.css';
import { Basic1 } from 'components/CVTemplates';

// interface IJobCards {
//   logo: string;
//   title: string;
//   salary: number;
//   currency: string;
//   country: string;
//   company_name: string;
// }

// const JobCards: FC<IJobCards> = ({ logo, title, salary, currency, country, company_name }) => {
export const CVS = () => {
  const [list, setList] = useState([]);
  const myComponents = [Basic1];
  useEffect(() => {
    setList(myComponents);
  }, []);
 
  return (
    <div className={`${styles.container__list}`}>
      <header className={`${styles["container__list-heading"]}`}>
          Danh sách mẫu CV xin việc tiếng Việt chuẩn 2022
      </header>
      <div className={`${styles.list__info}`}>
        {list.map((AnyComponent, index) => (
          <AnyComponent 
            key={index}
          />
        ))}
      </div>
      {/* <footer className={`${styles.container__footer}`}>
          <button className={`${styles["see-more"]}`}>Xem Thêm</button>
      </footer> */}
  </div>
  );
};