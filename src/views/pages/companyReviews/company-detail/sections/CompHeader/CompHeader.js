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

export const CompHeader = ({company, setIsReloadReview}) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  const [isShowLoginModel, setIsShowLoginModel] = useState(false);
  const [checkLoggedIn, setCheckLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const toggleShow = () => setShowModal(p => !p);
  const { isError, isSuccess, isLoading } = useSelector((state) => state.company_review);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLoading)
    if (isShowLoginModel) {
      toggleShow();
    }

    userService.getFollowOfCompanyDetail(company.pk)
      .then((res) => {
        console.log('follow company detail: ', res.data);
        if (res.status === 200) {
          setIsFollow(true);
        } else if (res.status === 404) {
          setIsFollow(false);
        }
      })
  }, [dispatch, isShowLoginModel]);

  const handleFollowCompany = () => {
    if (isFollow) {
      userService.deleteFollowOfCompanyDetail(company.pk)
      .then((res) => {
        console.log('follow deleted: ', res);
        setIsFollow(false);
      })
    } else {
      if (!isLoggedIn) {
        toggleShow()
        setCheckLoggedIn(true);
      } else {
        setCheckLoggedIn(false);
      }
      dispatch(followCompany({
        employer_id: company.pk
      }))
        .unwrap()
        .then(() => {
          console.log('followed');
          setIsFollow(true);
        })
        .catch(() => {
        });
    }
  };

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
        {user && user.is_active && !user.is_staff && (
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
        )}
      </div>
      {/* modals */}
      <CreateReview
        showModal={showModal}
        toggleShow={toggleShow}
        isLoggedIn = {isLoggedIn}
        pk = {company.pk}
        setIsReloadReview={setIsReloadReview}
      />
      {!isLoggedIn && checkLoggedIn && (
        <Login showModal={showModal} toggleShow={toggleShow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
        setIsShowLoginModel={setIsShowLoginModel} />
      )}
    </div>
  )
};
