import styles from './Footer.module.css';
import { icons } from 'utils/icons';

export const Footer = () => (
  <section className={styles.wrapper}>
    <div className={`${styles.footer__content} ${styles.grid} ${styles.wide}`}>
      <div className={styles.row}>
        <div className={`${styles.footer__list} ${styles.col} ${styles["l-2-4"]} ${styles["m-6"]}`}>
          <p className={styles["footer__list-name"]}>JobSearchVN</p>
          <ul>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Về JobSearchVN</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Về Liên hệ</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Câu hỏi thường gặp</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Thỏa thuận sử dụng</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Quy định bảo mật</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__list} ${styles.col} ${styles["l-2-4"]} ${styles["m-6"]}`}>
          <p className={styles["footer__list-name"]}>Dành cho nhà tuyển dụng</p>
          <ul>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Đăng tuyển dụng</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Tìm kiếm hồ sơ</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Liên hệ dịch vụ</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__list} ${styles.col} ${styles["l-2-4"]} ${styles["m-6"]}`}>
          <p className={styles["footer__list-name"]}>Việc làm theo khu vực</p>
          <ul>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Hồ Chí Minh</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Hải Phòng</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Hà Nội</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Đà Nẵng</a>
            </li>
            <li className={styles.footer__item} >
              <a className={styles["footer__item-link"]} style={{color: 'var(--primary-color)'}} href="#">Xem thêm</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__list} ${styles.col} ${styles["l-2-4"]} ${styles["m-6"]}`}>
          <p className={styles["footer__list-name"]}>Việc làm theo nghề</p>
          <ul>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">IT-Phần mềm</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Kế toán</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Ngân hàng</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} href="#">Xây dựng</a>
            </li>
            <li className={styles.footer__item}>
              <a className={styles["footer__item-link"]} style={{color: 'var(--primary-color)'}} href="#">Xem thêm</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footer__list} ${styles.col} ${styles["l-2-4"]} ${styles["m-6"]}`}>
          <img src={icons.logo} alt=""/>
        </div>
        <div className={`${styles.footer__footer} ${styles.grid} ${styles.wide}`}>
          <div className={styles["footer__footer-info"]}>
            <div className={styles["footer__footer-info-sub"]}>
              <h4>Copyright Công ty cổ phần JobSearchVN Việt Nam</h4>
              <h4>Cẩm Lệ, TP Đà Nẵng, Việt Nam</h4>
            </div>
          </div>
          <div className={styles["footer__footer-contact"]}>
            <div className={styles["footer__footer-contact--left"]}>
              <img src={icons.logo} alt="logo"/>
              <h4>JobSearchVN</h4>
            </div>
            <div className={styles["footer__footer-contact--right"]}>
              <p>Liên hệ mạng xã hội</p>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
