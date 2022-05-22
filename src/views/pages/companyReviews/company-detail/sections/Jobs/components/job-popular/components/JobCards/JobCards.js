// import { FC } from 'react';
import styles from './JobCards.module.css';
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
const JobCards = ({ logo, title, salary, currency, country, company_name }) => {
  const company_avatar = logo
    ? `${process.env.REACT_APP_API_DOMAIN}${logo}`
    : icons.logo_default;
 
  return (
    <div>
      <a href="#" className={styles["nav_sub-content-link"]}>
        <img src={company_avatar} alt="logo" className={styles["nav_sub-content-logo"]}/>
        <div className={styles["nav_sub-content-description"]}>
          <h3>{title}</h3>
          <nav>
            <div className={styles["nav_sub-content-pay"]}>
              <i className="fas fa-dollar-sign"></i>
              <span>Lương: {`${salary} ${currency}`}</span>
            </div>
            <div className={styles["nav_sub-content-location"]}>
              <i className="fas fa-map-marker-alt"></i>
              <span>{country}</span>
            </div>
            <span className={styles["nav_sub-content-name"]}>{company_name}</span>
          </nav>
        </div>
      </a>
    </div>
  );
};
export default JobCards;
