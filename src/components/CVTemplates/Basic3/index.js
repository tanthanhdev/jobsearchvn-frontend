import styles from './style.module.css';
import { icons } from 'utils/icons';

const Basic3 = () => {
  return (
    <>
    <div className={`${styles.list__sample}`}>
      <div className={`${styles.CV}`}>
          <div className={`${styles["list__sample-img"]}`}></div>
          <a className={`${styles.list__btn}`}>
              <button className={`${styles["btn-using"]}`} >
                  Dùng mẫu này
              </button>
          </a>
      </div>
      
      <div className={`${styles.list__status}`}>
          <img className={`${styles["list__status-icon"]}`} src={icons.circle_solid}/>
          <span className={`${styles["list__status-lable"]}`} >Mới</span>
      </div>
      <div className={`${styles.list__style}`}>
          <div className={`${styles["list__style-item"]}`} >
              Chuyên nghiệp
          </div>
          <div className={`${styles["list__style-item"]}`} >
              Sáng tạo
          </div>
      </div>
      <h3 className={`${styles["list-name"]}`} >
          Mẫu CV 1
      </h3>
      <div className={`${styles.pagination}`}>
          <div className={`${styles["pagination-item pagination-item-selected"]}`} ></div>
          <div className={`${styles["pagination-item"]}`}></div>
          <div className={`${styles["pagination-item"]}`}></div>
      </div>
    </div>
  </>
  );
};
export default Basic3;
