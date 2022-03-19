import React, { useState, useEffect } from "react";

import { Duplicated } from "./components/duplicated/Duplicated";
import { CVView } from "./components/CVView";

import styles from './style.module.css';
import { icons } from 'utils/icons';

const Basic1 = () => {
    const isLoggedIn = localStorage.getItem('user');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const toggleShow = () => setShowModal(p => !p);
    const toggleShow2 = () => setShowModal2(p => !p);

    return (
        <>
        <div className={`${styles.list__sample}`}>
            <div className={`${styles.CV}`}>
                <div className={`${styles["list__sample-img"]}`}></div>
                <a className={`${styles.list__btn}`}>
                    <button className={`${styles["btn-using"]} ${styles["btn-using-view"]}`} onClick={toggleShow2}>
                        Bản xem trước
                    </button>
                    <button className={`${styles["btn-using"]} ${styles["btn-using-duplicate"]}`} onClick={toggleShow}>
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
            <>
                <Duplicated 
                    showModal={showModal}
                    toggleShow={toggleShow}
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
                <CVView 
                    showModal={showModal2}
                    toggleShow={toggleShow2}
                />
            </>
        </>
    );
};
export default Basic1;
