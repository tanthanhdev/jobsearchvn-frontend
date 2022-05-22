import { Link } from 'react-router-dom';
import { icons } from 'utils/icons';
import styles from './BrandSection.module.css';

const BrandSection = () => (
  <div className={styles.brandContainer}>
    <Link to="/" className={styles.logo}>
      <img src={icons.logo} alt="logo" />
    </Link>
    {/* <Link to="/" className={styles.companyName}>
      JobSearchVN
    </Link> */}
  </div>
);

export default BrandSection;
