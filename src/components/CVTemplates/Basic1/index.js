import React, { useState, useEffect } from "react";

import { Duplicated } from "./components/duplicated/Duplicated";

import styles from './style.module.css';
import { icons } from 'utils/icons';

const Basic1 = () => {
    const isLoggedIn = localStorage.getItem('user');
    const [showModal, setShowModal] = useState(false);

    const handleDuplicate = () => {
        setShowModal(true);
    };
    
    return (
        <>
        <div className={`${styles.list__sample}`}>
            <div className={`${styles.CV}`}>
                <div className={`${styles["list__sample-img"]}`}></div>
                <a className={`${styles.list__btn}`}>
                    <button className={`${styles["btn-using"]}`} onClick={handleDuplicate}>
                        Dùng mẫu này
                    </button>
                </a>
            </div>
            
            <div className={`${styles.list__status}`}>
                <img className={`${styles["list__status-icon"]}`} src={icons.circle_solid}/>
                <span className={`${styles["list__status-lable"]}`} >Mới</span>
            </div>
            <div className={`${styles.list__style}`}>
                <div className={`${styles["list__style-item"]}`} >
                    Chuyên nghiệp
                </div>
                <div className={`${styles["list__style-item"]}`} >
                    Sáng tạo
                </div>
            </div>
            <h3 className={`${styles["list-name"]}`} >
                Mẫu CV 1
            </h3>
            <div className={`${styles.pagination}`}>
                <div className={`${styles["pagination-item pagination-item-selected"]}`} ></div>
                <div className={`${styles["pagination-item"]}`}></div>
                <div className={`${styles["pagination-item"]}`}></div>
            </div>
        </div>
        {/* Show modal */}
        <div className={styles.cv_modal}>
            {showModal 
            ? <Duplicated 
                isLoggedIn = {isLoggedIn}
                cv_design = {[
                    {"id": 1},
                    {"id": 2}
                ]}
                cv_career = {[
                    {"id": 1},
                    {"id": 2}
                ]}
            />
            : null}
        </div>
        </>
    );
};
export default Basic1;
