// import { FC } from 'react';
import styles from './Filter.module.css';
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
export const Filter = ({}) => {
  return (
    <div className={`${styles.filter}`}>
        <header className={`${styles.filter__heading}`}>
            Tìm mẫu CV phù hợp
        </header>
        <div className={`${styles.filter__list}`}>
            <span className={`${styles["filter__list-lable"]}`}>Tiếng việt</span>
            <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
        </div>
        <div className={`${styles.filter__list}`}>
            <span className={`${styles["filter__list-lable"]}`}>Tất cả ngành nghề</span>
            <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
        </div>
        <div className={`${styles.filter__list}`}>
            <span className={`${styles["filter__list-lable"]}`}>Tất cả loại thiết kế</span>
            <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
        </div>

        <div className={`${styles.filter__checkbox}`}>
            <div className={`${styles["filter__checkbox-list"]}`}>
                <span className={`${styles["checkbox-check"]} ${styles["checkbox-check--checked"]}`}></span>
                <span className={`${styles["checkbox-lable"]}`}>Mới nhất</span>
            </div>
            <div className={`${styles["filter__checkbox-list"]}`}>
                <span className={`${styles["checkbox-check"]}`}></span>
                <span className={`${styles["checkbox-lable"]}`}>Dùng nhiều nhất</span>
            </div>

        </div>
    </div>

    // <div>
    //   <a href="#" className={styles["nav_sub-content-link"]}>
    //     <img src={company_avatar} alt="logo" className={styles["nav_sub-content-logo"]}/>
    //     <div className={styles["nav_sub-content-description"]}>
    //       <h3>{title}</h3>
    //       <nav>
    //         <div className={styles["nav_sub-content-pay"]}>
    //           <i className="fas fa-dollar-sign"></i>
    //           <span>Lương: {`${salary} ${currency}`}</span>
    //         </div>
    //         <div className={styles["nav_sub-content-location"]}>
    //           <i className="fas fa-map-marker-alt"></i>
    //           <span>{country}</span>
    //         </div>
    //         <span className={styles["nav_sub-content-name"]}>{company_name}</span>
    //       </nav>
    //     </div>
    //   </a>
    // </div>
  );
};
