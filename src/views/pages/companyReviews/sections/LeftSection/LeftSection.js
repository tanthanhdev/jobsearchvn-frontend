import React, { useState, useEffect } from "react";
// import { Button } from 'primereact/button';
// components
// import { CreateReview } from "components/modals";
// services
import authService from "services/auth.service";
// utils
import dateUtils from "utils/date"
import styles from './LeftSection.module.css';

export const LeftSection = (company) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  const [showModal, setShowModal] = useState(false);
  const toggleShow = () => setShowModal(p => !p);

  return (
    <div className={styles["content__left"]}>
      <div className={styles["form"]}>
        <div className={`${styles["page"]} ${styles["page-selected"]}`}>Công việc</div>
        <div className={styles["page"]}>10 Đánh giá</div>
      </div>
      <div className={styles["list-job"]}>
        <h3 className={styles["content__heading"]}>Công việc {company.company.company_name ? company.company.company_name : ''}</h3>
        {company && company.company.employer_job.map((item, index) => {
          return (
            <div className={styles["job__item"]} index={index}>
              <div className={styles["job"]}>
                <img className={styles["content__company-logo"]} src={company.company.logo} alt="logo"/>
                  <div className={styles["job__info"]}>
                    <span className={styles["job-name"]}>{item.title ? item.title : ''}</span>
                    <span className={styles["salary"]}>{item.salary ? item.salary : ''}</span>
                    <span className={styles["job-requirements"]}>
                      {item.tag && item.tag.map((tagItem, tagIndex) => {
                        return (
                          <span className={styles["job-requirements__language"]} key={tagIndex}>{tagItem.name ? tagItem.name : ''}</span>
                        )
                      })}
                    </span>
                  </div>
                  <div className={styles["place-time"]}>
                    <div className={styles["place"]}>{item.country.name ? item.country.name : ''}</div>
                    <div className={styles["time"]}>{dateUtils.timeSince(dateUtils.formatDate(item.created_at))}</div>
                  </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles["company-info"]}>
        <h2 className={styles["company-info__heading"]}>Tổng quan về {company.company.company_name ? company.company.company_name : ''}</h2>
        <div className={styles["company-info__description"]}>{company.company.description ? company.company.description : ''}</div>
        {/* <div className={styles["my-skill"]}>
          <h2 className={styles["my-skill__heading"]}>Kỹ năng chính của tôi</h2>
          <div className={styles["skill-list"]}>
            <span className={styles["my-skill__item"]}>C++</span>
            <span className={styles["my-skill__item"]}>C++</span>
            <span className={styles["my-skill__item"]}>C++</span>
            <span className={styles["my-skill__item"]}>C++</span>
          </div>
        </div> */}
        <div className={styles["question"]}>
          <h2 className={styles["question__heading"]}>Tại sao bạn sẽ thích làm việc ở đây</h2>
          <div className={styles["question__item"]}>
            <span className={styles["number"]}>1</span>
            <span className={styles["question__item-name"]}>Global Exposure</span>
          </div>
          <div className={styles["question__item"]}>
            <span className={styles["number"]}>2</span>
            <span className={styles["question__item-name"]}>Fast Track Career</span>
          </div>
          <div className={styles["question__item"]}>
            <span className={styles["number"]}>3</span>
            <span className={styles["question__item-name"]}>Diversified Jobs & Technologies</span>
          </div>
        </div>
        <div className={styles["branch"]}>
          <div className={styles["list-branch"]}>
            <h2 className={styles["branch__heading"]}>Địa chỉ công ty</h2>
            <div className={styles["brach__item"]}>
              <span className={styles["number"]}>1</span>
              <span className={styles["brach__item-name"]}>{company.company.company_location ? company.company.company_location : ''}</span>
            </div>
          </div>
          {/* <div className={styles["address"]}>
            <iframe className={styles["gg-map"]} src=""></iframe>
          </div> */}
        </div>
      </div>
    </div>
  )
};
