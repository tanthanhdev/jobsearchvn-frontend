import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BrandSection from "./components/BrandSection/BrandSection";
import { icons } from "utils/icons";
import { logout } from "slices/auth";
import EventBus from "common/EventBus";
import styles from "./Header.module.css";
import "./Header.css";
export const Header = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <section
      className={`${styles.header} ${styles.gnav}`}
      id={styles["gnav-main-container"]}
    >
      <div className={styles.header__right}>
        <BrandSection />
        <ul className={`${styles.header__list} ${styles.header__right__list}`}>
          <li className={styles.header__right__item}>
            <Link
              to="#"
              className={`${styles.header__link} ${styles.header__right__item_link}`}
            >
              Tìm việc làm
            </Link>
          </li>
          <li className={styles.header__right__item}>
            <Link
              to="/companies"
              className={`${styles.header__link} ${styles.header__right__item_link}`}
            >
              Đánh giá công ty
            </Link>
          </li>
          <li className={styles.header__right__item}>
            <Link
              to="/blogs"
              className={`${styles.header__link} ${styles.header__right__item_link}`}
            >
              Blog
            </Link>
          </li>
          <li className={styles.header__right__item}>
            <Link
              to="/cv-template"
              className={`${styles.header__link} ${styles.header__right__item_link}`}
            >
              Mẫu CV
            </Link>
          </li>
        </ul>
      </div>

      <div className="header__left">
        <ul className={`${styles.header__list} ${styles.header__left__list}`}>
          <li className={styles.header__left__item}>
            {/* Message */}
            <div className={styles.flex}>
              <img
                className={`${styles.header__left_icon} ${styles.header__comment}`}
                src={icons.comment_alt_regular}
                alt="comment_alt_regular"
              ></img>
              <Link
                to="#"
                className={`${styles.header__link} ${styles.header__left__item_link}`}
              ></Link>
            </div>
          </li>
          <li
            className={`${styles.header__left__item} ${styles.header__left__item_notify}`}
          >
            {/* Thong bao */}
            <div className={styles.flex}>
              <img
                className={`${styles.header__left_icon}`}
                src={icons.bell_regular}
                alt="bell_regular"
              />
              <Link
                to="#"
                className={`${styles.header__link} ${styles.header__left__item_link}`}
              ></Link>
            </div>
            <div className={styles.header__notifi}>
              <header className={styles.header__notifi_header}>
                <h3>Thông báo mới nhận</h3>
              </header>
              <ul className={styles["header__notify-list"]}>
                <li
                  className={`${styles["header__notify-item"]} ${styles["header__notify-item-viewed"]}`}
                >
                  <a href="#" className={styles["header__notify-link"]}>
                    Chào mừng bạn đến Job Search VN. Đăng nhập ngay để xem việc
                    làm phù hợp với bạn, nhà tuyển dụng đã xem hồ sơ của bạn và
                    cập nhật nhiều hơn nữa ...
                  </a>
                </li>
              </ul>
              <footer className={styles["header__notify-footer"]}>
                <Link
                  to="#"
                  className={`${styles["header__notify-link"]} ${styles["header__notify-footer-btn"]}`}
                >
                  Xem tất cả
                </Link>
              </footer>
            </div>
          </li>
          {currentUser ? (
            <>
              <li
                className={`${styles.header__left__item} ${styles["header-login"]}`}
              >
                <Link
                  to={
                    currentUser.is_staff
                      ? "/employer/profile"
                      : "/profile-member"
                  }
                  className={`${styles["header__link"]} ${styles["header__left__item-link"]}`}
                >
                  {currentUser.first_name + " " + currentUser.last_name}
                </Link>
              </li>
              <li
                class
                Name={`${styles.header__left__item} ${styles["header-post-job"]}`}
              >
                <Link
                  to="/"
                  onClick={logOut}
                  className={`${styles["header__link"]} ${styles["header__left__item-link"]}`}
                >
                  Đăng xuất
                </Link>
              </li>
            </>
          ) : (
            <>
              <li
                className={`${styles.header__left__item} ${styles["header-login"]}`}
              >
                <Link
                  to={"/login"}
                  className={`${styles["header__link"]} ${styles["header__left__item-link"]}`}
                >
                  Đăng nhập
                </Link>
              </li>
              <li
                className={`${styles.header__left__item} ${styles["header-login"]}`}
              >
                <Link
                  to={"/sign-up"}
                  className={`${styles["header__link"]} ${styles["header__left__item-link"]}`}
                >
                  Đăng ký
                </Link>
              </li>
              <li
                className={`${styles.header__left__item} ${styles["header-post-job"]}`}
              >
                <Link
                  to={"/sign-up/employer"}
                  className={`${styles["header__link"]} ${styles["header__left__item-link"]}`}
                >
                  Nhà tuyển dụng/Đăng tuyển
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* <div className={styles.container}>
        <div className={styles.topHeader}>
          <BrandSection />
          <NavButtons isLogined={isLogined} />
          <BurgerButton
            setOpenedMenu={setOpenedMenu}
            isLogined={isLogined}
            openedMenu={openedMenu}
          />
        </div>
        {openedMenu && <BurgerMenu setOpenedMenu={setOpenedMenu} isLoggined={isLogined} />}
      </div> */}
    </section>
  );
};
