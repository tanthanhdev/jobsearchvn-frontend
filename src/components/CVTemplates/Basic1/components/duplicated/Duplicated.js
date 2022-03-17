import { Navigate } from "react-router-dom";
import styles from './style.module.css';
import { icons } from 'utils/icons';

export const Duplicated = ({isLoggedIn, cv_design, cv_career}) => {
    console.log(isLoggedIn);
    console.log(cv_design);
    console.log(cv_career);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    } else {
        if (!JSON.parse(isLoggedIn).is_active) {
            return <Navigate to="/login" />;
        }
    }

    return (
        <div className={`${styles.filter}`}>
            <header className={`${styles.filter__heading}`}>
                Tìm mẫu CV phù hợp
            </header>
            <div className={`${styles.filter__list}`}>
                <span className={`${styles["filter__list-lable"]}`}>Tiếng việt</span>
                <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
            </div>
            <div className={`${styles.filter__list}`}>
                <span className={`${styles["filter__list-lable"]}`}>Tất cả ngành nghề</span>
                <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
            </div>
            <div className={`${styles.filter__list}`}>
                <span className={`${styles["filter__list-lable"]}`}>Tất cả loại thiết kế</span>
                <img className={`${styles["filter__list-icon"]}`} src={icons.angle_down_solid}/>
            </div>

            <div className={`${styles.filter__checkbox}`}>
                <div className={`${styles["filter__checkbox-list"]}`}>
                    <span className={`${styles["checkbox-check"]} ${styles["checkbox-check--checked"]}`}></span>
                    <span className={`${styles["checkbox-lable"]}`}>Mới nhất</span>
                </div>
                <div className={`${styles["filter__checkbox-list"]}`}>
                    <span className={`${styles["checkbox-check"]}`}></span>
                    <span className={`${styles["checkbox-lable"]}`}>Dùng nhiều nhất</span>
                </div>

            </div>
        </div>
    );
};
