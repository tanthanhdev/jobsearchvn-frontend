import React, { useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { Login } from "components/modals";
import { CreateReview } from "components/modals";
// services
import authService from "services/auth.service";
import userService from "services/user.service";
// slices
import { followCompany } from "slices/company-reviews";
// utils
import styles from './CompHeader.module.css';
import { icons } from 'utils/icons';

export const CompHeader = ({company, setIsReload, isApply, setIsApply, apply, jobView, user, isLoggedIn}) => {
  const handleApplyJob = () => {
    if (isApply) {
      userService.deleteApplyJobDetail(jobView?.id).then(() => {
        setIsReload(true);
      });
      setIsApply(false);
    } else {
      userService.createApplyJob(jobView?.id).then(() => {
        setIsReload(true);
      });
      setIsApply(true);
    }
  }

  return (
    <div className={styles["header"]}>
      <div className={styles["header-left"]}>
        <img className={styles["company-logo"]} src={company.logo ? company.logo : icons.logo_default} alt="logo"/>
      </div>
      <div className={styles["header-center"]}>
        <div className={styles["header-center__name"]}>
          <span className={styles["company-name"]}>{company.company_name ? company.company_name : 'Chưa bổ xung'}</span>
          <span className={styles["company-address"]}>{company.company_location ? company.company_location : 'Chưa bổ xung'}</span>
          <div className={styles["company-specialization"]}>
            <span className={styles["company-specialization__left"]}>Outsourcing</span>
            <span className={styles["company-specialization__center"]}>{company.company_size ? company.company_size : 'Chưa bổ xung'}+</span>
            <span className={styles["company-specialization__right"]}>Vietnam</span>
          </div>
          {/* <div className={styles["work-schedule"]}>
            <span className={styles["work-schedule__left"]}>Monday - Friday</span>
            <span className={styles["work-schedule__right"]}>Extra salary for OT</span>
          </div> */}
        </div>
      </div>
      <div className={styles["header-right"]}>
        <button className={`${styles["btn"]} ${styles["btn-selected"]}`} disabled={isLoggedIn && user?.is_active && !user?.is_staff || (apply?.status && apply?.status != '0')}
          onClick={handleApplyJob}>
          {isLoggedIn && isApply && (
            'Đã nộp đơn ứng tuyển'
          )}
          {isLoggedIn && !isApply && (
            'Nộp đơn ứng tuyển'
          )}
          {!isLoggedIn && (
            <a href={'/login?next=/' + jobView?.slug}>Nộp đơn ứng tuyển</a>
          )}
        </button>
        {/* {user && user.is_active && !user.is_staff && (
          <>
            <button className={`${styles["btn"]} ${styles["btn-selected"]}`}  onClick={() => {
              toggleShow();
              setCheckLoggedIn(true);
              }} >Viết đánh giá</button>
            <button className={styles["btn"]} onClick={handleFollowCompany}>{isFollow ? (
              <span>Đã theo dõi</span>
            ) : (
              <span>Theo dõi</span>
            )}</button>
          </>
        )}
        {!isLoggedIn && (
          <>
            <button className={`${styles["btn"]} ${styles["btn-selected"]}`}  onClick={() => {
              toggleShow();
              setCheckLoggedIn(true);
              }} >Viết đánh giá</button>
            <button className={styles["btn"]} onClick={handleFollowCompany}>Theo dõi</button>
          </>
        )} */}
      </div>
      {/* modals */}
    </div>
  )
};
