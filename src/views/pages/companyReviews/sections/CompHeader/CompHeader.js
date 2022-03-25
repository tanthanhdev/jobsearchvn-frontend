import React, { useState, useEffect }from "react";  
// import { CustomCarousel } from 'molecules';
// import { Button } from 'primereact/button';
// components
import { CreateReview } from "components/modals";
// services
import authService from "services/auth.service";
// utils
import styles from './CompHeader.module.css';

export const CompHeader = (company) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  const [showModal, setShowModal] = useState(false);
  const toggleShow = () => setShowModal(p => !p);
  
  console.log(company.company);
  return (
    <div className={styles["header"]}>
      <div className={styles["header-left"]}>
        <img className={styles["company-logo"]} src={company.company.logo} alt="logo"/>
      </div>
      <div className={styles["header-center"]}>
        <div className={styles["header-center__name"]}>
          <span className={styles["company-name"]}>{company.company.company_name ? company.company.company_name : 'Chưa bổ xung'}</span>
          <span className={styles["company-address"]}>{company.company.company_location ? company.company.company_location : 'Chưa bổ xung'}</span>
          <div className={styles["company-specialization"]}>
            <span className={styles["company-specialization__left"]}>Outsourcing</span>
            <span className={styles["company-specialization__center"]}>{company.company.company_size ? company.company.company_size : 'Chưa bổ xung'}+</span>
            <span className={styles["company-specialization__right"]}>Vietnam</span>
          </div>
          {/* <div className={styles["work-schedule"]}>
            <span className={styles["work-schedule__left"]}>Monday - Friday</span>
            <span className={styles["work-schedule__right"]}>Extra salary for OT</span>
          </div> */}
        </div>
      </div>
      <div className={styles["header-right"]}>
        {user && user.is_active && !user.is_staff && (
          <>
            <button className={`${styles["btn"]} ${styles["btn-selected"]}`}  onClick={toggleShow} >Viết đánh giá</button>
            <button className={styles["btn"]}>Theo dõi</button>
          </>
        )}
        {!isLoggedIn && (
          <>
            <button className={`${styles["btn"]} ${styles["btn-selected"]}`}  onClick={toggleShow} >Viết đánh giá</button>
            <button className={styles["btn"]}>Theo dõi</button>
          </>
        )}
      </div>
      {/* modals */}
      <CreateReview
        showModal={showModal}
        toggleShow={toggleShow}
        isLoggedIn = {isLoggedIn}
        setIsLoggedIn = {setIsLoggedIn}
        slug = {company.company.slug}
      />
    </div>
  )
};
