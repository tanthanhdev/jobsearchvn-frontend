import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";

import { resetPass } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";
// import { authActions } from "slices/auth"

import styles from './style.module.css';
import { icons } from 'utils/icons';

const ResetPassword = () => {
  const { isLoggedIn, message, isError, isLoading } = useSelector((state) => state.auth);
  const { message: mess } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  let params = useParams();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
    confirm_password: ""
  };

  const validationSchema = Yup.object().shape({
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
    confirm_password: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const handleResetPass = (formValue) => {
    const { password, confirm_password } = formValue;
    const access_token = params.access_token
    dispatch(resetPass({ password, confirm_password, access_token }))
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
          onSubmit={handleResetPass}
        >
          <Form className={styles.form} id="login-form">
            <div className={styles["form-container"]}>
              <div className={styles.container__header}>
                <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                <h1 className={styles["container__header-name"]}>Đăng nhập</h1>
              </div>
              <div className={styles.container__center}>
                <div  className={styles["container__center-input"]}>
                  <span className={styles["icon-password"]}>
                    <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid} alt="img"></img>
                  </span>
                  <Field name="password" type="password" placeHolder="Mật khẩu mới" className={styles["container__center-input--password"]} />
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
                <div  className={styles["container__center-input"]}>
                  <span className={styles["icon-password"]}>
                    <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid} alt="img"></img>
                  </span>
                  <Field name="confirm_password"
                    type="password" placeHolder="Nhập lại mật khẩu mới" className={styles["container__center-input--password"]} />
                  <ErrorMessage name="confirm_password"
                    component="div" className="alert alert-danger"
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
                  <span>Thay đổi</span>
                </Button>
                <div className={styles["container__footer-footer"]}>
                  <p className={styles["container__footer-question"]}>
                    Bạn nhớ lại?
                  </p>
                  <Link to="/login" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                    Đăng nhập!
                  </Link>
                </div>
              </div>
            </div>
          {isError && message && typeof(message) === "string" && (
            <div className="form-group">
              <div
                className={isLoggedIn ? "alert alert-success" : "alert alert-danger"}
                role="alert"
              >
                {message}
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

export default ResetPassword;
