import React, { useState } from "react";

import { Duplicated } from "./components/duplicated/Duplicated";
import { CVView } from "./components/CVView";

import authService from "services/auth.service";

import styles from "./style.module.css";
import { icons } from "utils/icons";

const Basic1 = (CvTemplate) => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const toggleShow = () => setShowModal((p) => !p);
  const toggleShow2 = () => setShowModal2((p) => !p);

  return (
    <>
      <div className={`${styles.list__sample}`}>
        <div className={`${styles.CV}`}>
          <div className={`${styles["list__sample-img"]}`}></div>
          <a className={`${styles.list__btn}`}>
            <button
              className={`${styles["btn-using"]} ${styles["btn-using-view"]}`}
              onClick={toggleShow2}
            >
              Bản xem trước
            </button>
            <button
              className={`${styles["btn-using"]} ${styles["btn-using-duplicate"]}`}
              onClick={toggleShow}
            >
              Dùng mẫu này
            </button>
          </a>
        </div>

        <div className={`${styles.list__status}`}>
          <img
            className={`${styles["list__status-icon"]}`}
            src={icons.circle_solid}
          />
          <span className={`${styles["list__status-lable"]}`}>Mới</span>
        </div>
        <div className={`${styles.list__style}`}>
          {CvTemplate &&
            CvTemplate.CvTemplate.cv_design.map((item, index) => {
              return (
                <div className={`${styles["list__style-item"]}`} key={index}>
                  {item.name}
                </div>
              );
            })}
        </div>
        <h3 className={`${styles["list-name"]}`}>
          Mẫu CV {CvTemplate.CvTemplate.title_template}
        </h3>
        <h3 className={`${styles["list-name"]}`}>
          Lượt xem: {CvTemplate.CvTemplate.view}
        </h3>
        <div className={`${styles.pagination}`}>
          <div
            className={`${styles["pagination-item pagination-item-selected"]}`}
          ></div>
          <div className={`${styles["pagination-item"]}`}></div>
          <div className={`${styles["pagination-item"]}`}></div>
        </div>
      </div>
      {/* Show modal */}
      <>
        <Duplicated
          showModal={showModal}
          toggleShow={toggleShow}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          CvTemplate={CvTemplate.CvTemplate}
        />
        <CVView
          showModal={showModal2}
          toggleShow={toggleShow2}
          CvTemplate={CvTemplate.CvTemplate}
        />
      </>
    </>
  );
};
export default Basic1;
