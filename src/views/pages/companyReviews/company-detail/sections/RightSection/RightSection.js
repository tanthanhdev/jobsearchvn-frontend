import React, { useState, useEffect } from "react";
// import { Button } from 'primereact/button';
import StarRatings from 'react-star-ratings';
// components
// services
// import authService from "services/auth.service";
// utils
// import dateUtils from "utils/date"
import styles from './RightSection.module.css';

export const RightSection = ({ company, setShowJobs, setShowReviews, isReloadReview }) => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (company.employer_reviews.length > 0) {
            let ratingFinal = 0;
            company.employer_reviews.map(review => {
                if (review.point && review.status) {
                    ratingFinal += review.point;
                }
            });
            setRating(ratingFinal / company.employer_reviews.length)
        }
    }, [isReloadReview===true]);

    return (
        <div className={styles["content__right"]}>
            <div className={styles["evaluate"]}>
                <h2 className={styles["evaluate__heading"]}>Điểm đánh giá</h2>
                <div className={styles["rating"]}>
                    <i className={styles["rating__icon-like"]}></i>
                    <i className={styles["rating__icon-like"]}></i>
                    <i className={styles["rating__icon--half-like"]}></i>
                    <i className={`${styles["rating__icon-dislike"]} ${styles['rating__icon']} `}></i>
                    <i className={styles["rating__icon-dislike"]}></i>
                    <StarRatings
                        className={styles["rating__point"]}
                        rating={rating}
                        starDimension="32px"
                        starSpacing="4px"
                        starRatedColor="black"
                    />
                </div>
                <h2 className={styles["evaluate__heading"]}>Đánh giá hàng đầu</h2>
                {company.employer_reviews && company.employer_reviews.map((review, index) => {
                    return (
                        <div className={styles["evaluation-criteria"]} key={index}>
                            <h3 className={styles["evaluate__heading-supplement"]}>{review.title ? review.title : ""}</h3>
                            <div className={styles["rating-2"]}>
                                <StarRatings
                                    className={styles["rating__point-2"]}
                                    rating={review.point ? review.point : 0}
                                    starDimension="32px"
                                    starSpacing="4px"
                                    starRatedColor="black"
                                />
                            </div>
                            <div className={styles["evaluate__content"]}>
                                {review.content ? review.content : ''}
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className={`${styles["btn"]} ${styles["evaluate-view"]}`} onClick={() => {
                setShowJobs(false);
                setShowReviews(true);
            }}>Xem đánh giá</button>
        </div>
    )
};
