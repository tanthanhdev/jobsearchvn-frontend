import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";

import { forgotPass } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";
// import { authActions } from "slices/auth"

import styles from './style.module.css';
import { icons } from 'utils/icons';

const ForgotPassword = (props) => {
  const { isLoggedIn, message, isError,isLoading } = useSelector((state) => state.auth);
  const { message: mess } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
  });

  const handleForgotPass = (formValue) => {
    const { email } = formValue;

    dispatch(forgotPass({ email }))
      .unwrap()
      .then((res) => {
        dispatch(setMessage(res.message))
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
          onSubmit={handleForgotPass}
        >
          <Form className={styles.form} id="login-form">
            <div className={styles["form-container"]}>
              <div className={styles.container__header}>
                <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                <h1 className={styles["container__header-name"]}>Quên mật khẩu</h1>
              </div>
              <div className={styles.container__center}>
                <div className={styles["container__center-input"]}>
                  <span className={styles["icon-email"]}>
                    <img className={`${styles["container__center-icon--email"]}`} src={icons.envelope_solid} alt="img"></img>
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
              </div>
              <div className="container__footer">
                <Button type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} disabled={isLoading}>
                {isLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Tiếp tục</span>
                </Button>
                <div className={styles["container__footer-footer"]}>
                  <p className={styles["container__footer-question"]}>
                    Bạn đã nhớ lại?
                  </p>
                  <Link to="/login" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                    Đăng nhập!
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
          {
              mess && (
                <div className="form-group">
                <div
                  className="alert alert-success"
                  role="alert"
                >
                  {mess}
                </div>
              </div>
              )
          }
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ForgotPassword;
