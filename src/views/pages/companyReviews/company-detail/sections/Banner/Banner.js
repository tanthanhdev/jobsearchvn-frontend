import React from 'react';
import styles from './Banner.module.css';
import { icons } from 'utils/icons';

export const Banner = () => (
  <section className={styles.wrapper}>
    <div className={styles.slider}>
      <div className={styles.search}>
        <div className={styles["nav-search"]}>
          <div className={styles["search__input-text"]}>
            <img className={styles["nav-search__icon"]} src={icons.search_solid} alt="search_solid" ></img>
            <input className={styles.input__search} type="text" placeholder="Tìm kiếm việc làm, kỹ năng, tên công ty"/>
          </div>
          <div className={styles["search__input-location"]}>
            <img className={styles["nav-search__icon"]} src={icons.map_marker_alt_solid} alt="map_marker_alt_solid" ></img>
            {/* <i className={styles["nav-search__icon"]} className="fas fa-map-marker-alt"></i> */}
            <select id={styles.location} className={styles["search__select-location"]}>
              <option  value="Tất Cả Địa Điểm">Tất Cả Địa Điểm</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              <option value="Quảng Nam">Quảng Nam</option>
            </select>
          </div>
          <div className={styles.search__button}>
            <button><a href="#" className={`${styles["dec-none"]} ${styles.white}`} id={styles["find-jobs"]}><b>Tìm kiếm</b></a></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
