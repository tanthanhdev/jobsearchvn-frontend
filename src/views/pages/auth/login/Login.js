import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";

import { login } from "slices/auth";
import { clearMessage } from "slices/message";
import { authActions } from "slices/auth"

import styles from './style.module.css';
import { icons } from 'utils/icons';

const Login = (props) => {
  const { isLoggedIn, message, isError, isSuccess, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

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

    dispatch(login({ email, password }))
      .unwrap()
      .then((res) => {
        dispatch(authActions.updateUser(res.user))
        props.history.push("/profile");
        // window.location.reload();
      })
      .catch(() => {
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form className={styles.form} id="login-form">
            <div className={styles["form-container"]}>
              <div className={styles.container__header}>
                <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                <h1 className={styles["container__header-name"]}>Đăng nhập</h1>
              </div>
              <div className={styles.container__center}>
                <div className={styles["container__center-input"]}>
                  <span className={styles["icon-email"]}>
                    <img className={`${styles["container__center-icon--email"]}`} src={icons.envelope_solid}></img>
                  </span>
                  <Field name="email" type="email" className={styles["container__center-input--email"]} />
                  <ErrorMessage name="email" component="div" className="alert alert-danger"
                  />
                  {message && (message ? Object.keys(message).length : 0) > 1 && message.email && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.email ? message.email : ""}
                      </div>
                    </div>
                  )}
                </div>
                <div  className={styles["container__center-input"]}>
                  <span className={styles["icon-password"]}>
                    <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid}></img>
                  </span>
                  <Field name="password" type="password" className={styles["container__center-input--password"]} />
                  <ErrorMessage name="password" component="div" className="alert alert-danger"
                  />
                  {message && (message ? Object.keys(message).length : 0) > 1 && message.password && (
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
                {message}
              </div>
            </div>
          )}
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
