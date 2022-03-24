import React, { useState, useEffect }from "react";  
import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// services
import authService from "services/auth.service";
// utils
import { icons } from 'utils/icons';
import styles from './style.module.css';

const Login = ({showModal, toggleShow, isLoggedIn, setIsLoggedIn, setIsShowLoginModel}) => {
    const [ message, setMessage ] = useState('');
    const [ isError, setIsError ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ dataLogin, setDataLogin ] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
    }, [message, isError, isSuccess, isLoading, dataLogin]);
  
    const initialValues = {
      email: "",
      password: "",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("This field is required!"),
        password: Yup.string()
          .test(
            "len",
            "The password must be between 8 and 20 characters.",
            (val) =>
              val &&
              val.toString().length >= 6 &&
              val.toString().length <= 20
          )
          .required("This field is required!"),
    });
    const handleLogin = (formValue) => {
        const { email, password } = formValue;
        setIsLoading(true);
        authService.login(email, password).then((response) => {
            console.log(response)
            setDataLogin(response);
            toggleShow();
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.is_active && !user.is_staff) {
                setIsLoggedIn(true);
                setIsShowLoginModel(true);
            } else {
                navigate('/');
                window.location.reload();
            }
            setIsLoading(false);
            setIsError(false);
            setIsSuccess(true);
        },
        (error) => {
            setIsLoading(false);
            setIsSuccess(false);
            setIsError(true);
            setMessage(error.response.data)
            console.log(error.response);
          }
    );
    };

    return (
        <>
        <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
            >
                <Form className={styles.form} id="login-form" >
                    <Modal.Header closeButton>
                        <Modal.Title>Đăng Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={styles["form-container"]}>
                            <div className={styles.container__header}>
                                <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                                <h1 className={styles["container__header-name"]}>Đăng nhập</h1>
                            </div>
                            <div className={styles.container__center}>
                                <div className={styles["container__center-input"]}>
                                <span className={styles["icon-email"]}>
                                    <img className={`${styles["container__center-icon--email"]}`} src={icons.envelope_solid} alt="icon"></img>
                                </span>
                                <Field name="email" type="email" className={styles["container__center-input--email"]} />
                                <ErrorMessage name="email" component="div" className="alert alert-danger"
                                />
                                {isError && message.email && (
                                    <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message.email ? message.email : ""}
                                    </div>
                                    </div>
                                )}
                                </div>
                                <div  className={styles["container__center-input"]}>
                                <span className={styles["icon-password"]}>
                                    <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid} alt="icon"></img>
                                </span>
                                <Field name="password" type="password" className={styles["container__center-input--password"]} />
                                <ErrorMessage name="password" component="div" className="alert alert-danger"
                                />
                                {isError && message.password && (
                                    <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message.password ? message.password : ""}
                                    </div>
                                    </div>
                                )}
                                </div>
                                <h2 className={styles["container__header-qmk"]}>
                                <Link to="/forgot-password" className={`${styles["forgot-password"]} ${styles["dec-none"]}`}>
                                    Quên mật khẩu?
                                </Link>
                                </h2>
                            </div>
                            <div className="container__footer">
                                <Button type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} disabled={isLoading}>
                                    {isLoading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Đăng Nhập</span>
                                </Button>
                                <div className={styles["container__footer-footer"]}>
                                    <p className={styles["container__footer-question"]}>
                                        Bạn chưa có tài khoản?
                                    </p>
                                    <Link to="/sign-up" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                                        Đăng ký!
                                    </Link>
                                </div>
                            </div>
                            </div>
                        {isError && message && (
                            <div className="form-group">
                            <div
                                className={isLoggedIn ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message.message}
                            </div>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
        </>
    );
};
export default Login;
