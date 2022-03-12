import styles from './EmployerCards.module.css';
import { icons } from 'utils/icons';

const EmployerCards = ({ logo, company_name, number_jobs, company_location }) => {
  const company_avatar = logo
    // ? `${process.env.REACT_APP_API_DOMAIN}${logo}`
    ? logo : icons.logo_default;
  
  return (
    <a href="#" className={`${styles.nav} col l-3 m-6 c-12`}>
        <div className={styles.sub__nav}>
          <img className={`${styles.nav__img} ${styles.logo}`} src={company_avatar} alt="company logo"/>
          <span className={styles.nav__description}>{company_name}</span>
          <footer className={styles.nav__footer}>
            <span className={styles.nav_quantity}>{number_jobs} jobs</span>
            -
            <span className={styles.nav_location}>{company_location}</span>
          </footer>
        </div>
    </a>
  );
};
export default EmployerCards;
