import React, { useState, useEffect } from "react";
// import { Button } from 'primereact/button';
import StarRatings from 'react-star-ratings';
// components
// services
import authService from "services/auth.service";
// utils
import dateUtils from "utils/date"
import styles from './RightSection.module.css';

export const RightSection = (company) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());
    const [showModal, setShowModal] = useState(false);
    const toggleShow = () => setShowModal(p => !p);
    const [rating, setRating] = useState();

    const changeRating = (newRating, name) => {
        setRating(newRating);
    }


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
                        rating={3.5}
                        starDimension="32px"
                        starSpacing="4px"
                        starRatedColor="blue"
                    />
                </div>
                <h2 className={styles["evaluate__heading"]}>Đánh giá hàng đầu</h2>
                <div className={styles["evaluation-criteria"]}>
                    <h3 className={styles["evaluate__heading-supplement"]}>Môi trường rất tốt cho sinh viên mới ra trường</h3>
                    <div className={styles["rating-2"]}>
                        <i className={styles["rating__icon-like"]}></i>
                        <i className={styles["rating__icon-like"]}></i>
                        <i className={styles["rating__icon--half-like"]}></i>
                        <i className={`${styles["rating__icon-dislike"]} ${styles['rating__icon']} `}></i>
                        <i className={styles["rating__icon-dislike"]}></i>
                        <div className={styles["rating__point-2"]}>3.5</div>
                    </div>
                    <div className={styles["evaluate__content"]}>
                        Công ty khá rộng và thoải mái. Anh chị ở công ty giúp đỡ người mới rất nhiều.
                        Đặc biệt là các bạn sinh viên đi thực tập hoặc vừa ra trường.
                        Nếu là sinh viên mới ra trường hoặc những bạn ít kinh nghiệm thì FSoft luôn là một trong những lựa chọn hàn...
                    </div>
                </div>
                <div className={styles["evaluation-criteria"]}>
                    <h3 className={styles["evaluate__heading-supplement"]}>Môi trường rất tốt cho sinh viên mới ra trường</h3>
                    <div className={styles["rating-2"]}>
                        <i className={styles["rating__icon-like"]}></i>
                        <i className={styles["rating__icon-like"]}></i>
                        <i className={styles["rating__icon--half-like"]}></i>
                        <i className={`${styles["rating__icon-dislike"]} ${styles['rating__icon']} `}></i>
                        <i className={styles["rating__icon-dislike"]}></i>
                        <div className={styles["rating__point-2"]}>3.5</div>
                    </div>
                    <div className={styles["evaluate__content"]}>
                        Công ty khá rộng và thoải mái. Anh chị ở công ty giúp đỡ người mới rất nhiều.
                        Đặc biệt là các bạn sinh viên đi thực tập hoặc vừa ra trường.
                        Nếu là sinh viên mới ra trường hoặc những bạn ít kinh nghiệm thì FSoft luôn là một trong những lựa chọn hàn...
                    </div>
                </div>
            </div>
            <button className={`${styles["btn"]} ${styles["evaluate-view"]}`}>Xem đánh giá</button>
        </div>
    )
};
