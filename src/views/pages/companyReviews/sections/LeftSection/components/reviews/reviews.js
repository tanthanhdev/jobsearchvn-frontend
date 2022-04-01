import React, { useState, useEffect } from "react";
// import { Button } from 'primereact/button';\
import StarRatings from 'react-star-ratings';
// components
// import { CreateReview } from "components/modals";
// services
// import authService from "services/auth.service";
// utils
import dateUtils from "utils/date"
import styles from './reviews.module.css';

export const Reviews = (company) => {
    // const user = JSON.parse(localStorage.getItem('user'));
    // const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
    // const [showModal, setShowModal] = useState(false);
    // const toggleShow = () => setShowModal(p => !p);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (company.company.employer_reviews.length > 0) {
            let ratingFinal = 0;
            company.company.employer_reviews.map(review => {
                if (review.point && review.status) {
                    ratingFinal += review.point;
                }
            });
            setRating(ratingFinal / company.company.employer_reviews.length)
        }
    }, []);

    return (
        <>
            <div className={`${styles["rating"]} ${styles["evaluate-rating"]}`}>
                <StarRatings
                    className={styles["rating__point"]}
                    rating={rating}
                    starDimension="32px"
                    starSpacing="4px"
                    starRatedColor="yellow"
                />
            </div>
            <div className={styles["total-rating"]}>{company.company.employer_reviews.length} Đánh giá</div>
            {company.company.employer_reviews && company.company.employer_reviews.map((review, index) => {
                return (
                    <div className={styles["evaluation-criteria"]} key={index}>
                        <h3 className={styles["evaluate__heading-supplement"]}>{review.title}</h3>
                        <h3 className={styles["evaluate__heading-supplement"]}>{dateUtils.formatDate(review.created_at, "DD/MM/YYYY HH:mm")}</h3>
                        <div className={styles["rating-2"]}>
                            <StarRatings
                                className={styles["rating__point-2"]}
                                rating={review.point}
                                starDimension="32px"
                                starSpacing="4px"
                                starRatedColor="yellow"
                            />
                        </div>
                        <div className={styles["evaluate__content"]}>
                            {review.content}
                        </div>
                    </div>
                )
            })}
        </>
    )
};
