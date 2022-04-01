import React from "react";
// import { Button } from 'primereact/button';
// components
// import { CreateReview } from "components/modals";
import { Jobs } from "./components/jobs";
import { Reviews } from "./components/reviews";
// services
// import authService from "services/auth.service";
// utils
// import dateUtils from "utils/date"
import styles from './LeftSection.module.css';

export const LeftSection = ({company, showJobs, setShowJobs, showReviews, setShowReviews}) => {
  // const user = JSON.parse(localStorage.getItem('user'));
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
  // const [showModal, setShowModal] = useState(false);
  // const toggleShow = () => setShowModal(p => !p);
console.log(company)
  var toggleShowJob = () => {
    setShowReviews(false);
    setShowJobs(true);
  }

  var toggleShowReview = () => {
    setShowReviews(true);
    setShowJobs(false);
  }

  return (
    <div className={styles["content__left"]}>
      <div className={styles["form"]}>
        <div
          className={showJobs ? `${styles["page"]} ${styles["page-selected"]}` : styles["page"]}
          onClick={toggleShowJob}>Công việc
        </div>
        <div
          className={showReviews ? `${styles["page"]} ${styles["page-selected"]}` : styles["page"]}
          onClick={toggleShowReview}>{company.employer_reviews.length} Đánh giá
        </div>
      </div>
      {showJobs ? (
        <Jobs company={company} />
      ) : null
      }
      {showReviews ? (
        <Reviews company={company} />
      ) : null
      }
    </div>
  )
};
