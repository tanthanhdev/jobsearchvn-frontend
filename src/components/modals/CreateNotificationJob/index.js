import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// services
// import authService from "services/auth.service";
import userService from "services/user.service";
import jobService from "services/job.service";
// utils
// import { icons } from 'utils/icons';
import styles from './style.module.css';

const CreateNotificationJob = ({ showModal, toggleShow, setIsReload }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [jobTypes, setJobTypes] = useState([]);
    // select or autocomplete
    const [filteredJobTypes, setFilteredJobTypes] = useState(null);
    const [selectedJobType, setSelectedJobType] = useState(null);
    // const navigate = useNavigate();

    useEffect(() => {
        jobService.getJobTypes().then((res) => setJobTypes(res.data));
    }, [isLoading === true]);
    const levels = [
        { name: 'Nhân viên' },
        { name: 'Quản lý' },
    ];
    const onLevelChange = (e) => {
        setSelectedLevel(e.value);
    }
    const searchJobType = (event) => {
        setTimeout(() => {
            let _filteredJobTypes;
            if (!event.query.trim().length) {
                _filteredJobTypes = [...jobTypes];
            } else {
                _filteredJobTypes = jobTypes.filter((jobTypes) => {
                    return jobTypes.name
                        .toLowerCase()
                        .startsWith(event.query.toLowerCase());
                });
            }
            setFilteredJobTypes(_filteredJobTypes);
        }, 250);
    };

    const initialValues = {
        job_name: "",
        level: "",
        district: "",
        major: "",
        salary: "",
        currency: "USD",
        cron_job: "daily",
    };
    const validationSchema = Yup.object().shape({
        job_name: Yup.string().required("Vui lòng không để trống!")
            .max(255, 'Tên công việc chỉ chứa tối đa 255 ký tự'),
        level: Yup.string().required("Vui lòng không để trống!")
            .max(255, 'Trình độ chỉ chứa tối đa 255 ký tự'),
        major: Yup.string().required("Vui lòng không để trống!")
            .max(255, 'Chuyên ngành chỉ chứa tối đa 255 ký tự'),
        salary: Yup.number().required("Vui lòng không để trống!"),
    });
    const handleRegisterNotificationJob = (formValue, { resetForm }) => {
        // const { email, password } = formValue;
        // console.log(formValue);
        setIsLoading(true);
        userService.createRegisterNotificationsJob(formValue).then(() => {
            setIsLoading(false);
            setIsReload(true);
            toggleShow();
        }).catch(() => {
            setIsLoading(false);
        })
        resetForm();
        setSelectedLevel(null);
        setSelectedJobType(null);
    };

    return (
        <>
            <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegisterNotificationJob}
                >
                    {({ setFieldValue }) => (
                        <Form className={styles.form} id="login-form" >
                            {/* <Modal.Header closeButton>
                        <Modal.Title>Đăng Nhập</Modal.Title>
                    </Modal.Header> */}
                            <Modal.Body>
                                <div className={styles["form-container"]}>
                                    <div className={styles.container__header}>
                                        <h1 className={styles["container__header-name"]}>Tạo thông báo việc làm</h1>
                                    </div>
                                    <div className={styles.container__center}>
                                        <div className={styles["container__center-input"]}>
                                            <p>Tên việc làm<span style={{ color: 'red' }}>*</span></p>
                                            <Field name="job_name" type="text" className={styles["container__center-input--email"]} />
                                            <ErrorMessage name="job_name" component="div" className="alert alert-danger"
                                            />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <p>Trình độ<span style={{ color: 'red' }}>*</span></p>
                                            <Dropdown
                                                value={selectedLevel}
                                                options={levels}
                                                onChange={(e) => {
                                                    onLevelChange(e);
                                                    setFieldValue("level", e.value.name);
                                                }}
                                                optionLabel="name" placeholder="--Chọn trình độ--" />
                                            <ErrorMessage name="level" component="div" className="alert alert-danger" />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <p>Khu vực</p>
                                            <Field name="district" placeholder="Nhập khu vực" type="text" className={styles["container__center-input--email"]} />
                                            <ErrorMessage name="district" component="div" className="alert alert-danger"
                                            />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <p>Ngành nghề<span style={{ color: 'red' }}>*</span></p>
                                            <AutoComplete
                                                value={selectedJobType}
                                                suggestions={filteredJobTypes}
                                                completeMethod={searchJobType}
                                                field="name"
                                                name="major"
                                                dropdown
                                                onChange={(e) => {
                                                    setSelectedJobType(e.value);
                                                    setFieldValue("major", e.value.name ? e.value.name : "");
                                                }}
                                                className={`${styles['w-100']}`}
                                                placeholder="Vui lòng chọn"
                                            />
                                            <ErrorMessage name="major" component="div" className="alert alert-danger" />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <p>Mức lương<span style={{ color: 'red' }}>*</span></p>
                                            <Field name="salary" type="number" className={styles["container__center-input--email"]} />
                                            <ErrorMessage name="salary" component="div" className="alert alert-danger"
                                            />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <label>
                                                <Field name="currency" type="radio" value="USD" /> USD
                                            </label>
                                            <label>
                                                <Field name="currency" type="radio" value="VND" /> VND
                                            </label>
                                            <ErrorMessage name="currency" component="div" className="alert alert-danger"
                                            />
                                        </div>
                                        <div className={styles["container__center-input"]}>
                                            <p>Nhận thông báo</p>
                                            <label>
                                                <Field name="cron_job" type="radio" value="daily" /> Hàng ngày
                                            </label>
                                            <label>
                                                <Field name="cron_job" type="radio" value="weekly" /> Hàng tuần
                                            </label>
                                            <ErrorMessage name="cron_job" component="div" className="alert alert-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="container__footer">
                                        <Button type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} disabled={isLoading}>
                                            {isLoading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                            <span>Lưu</span>
                                        </Button>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    );
};
export default CreateNotificationJob;
