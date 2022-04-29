import React, {  useEffect  } from "react";
import { Navigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";
// reducers
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "slices/message";
import { login, authActions } from "slices/auth";
// utils
import styles from './style.module.css';
import { icons } from 'utils/icons';

const Login = () => {
  const { isLoggedIn, isError, isLoading } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const search = useLocation().search;
  const next = new URLSearchParams(search).get('next');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(next)
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string()
      // .test(
      //   "len",
      //   "The password must be between 8 and 20 characters.",
      //   (val) =>
      //     val &&
      //     val.toString().length >= 6 &&
      //     val.toString().length <= 20
      // )
      .required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;

    dispatch(login({ email, password }))
      .unwrap()
      .then((res) => {
        dispatch(authActions.updateUser(res.user));
        if (next) {
          return <Navigate to={next} />;
        } else {
          return <Navigate to="/" />;
        }
      })
      .catch(() => {
      });
  };

  if (isLoggedIn) {
    if (next) {
      return <Navigate to={next} />;
    } else {
      return <Navigate to="/" />;
    }
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
                <a href="/" >
                  <img className={styles["container__header-logo"]} src={icons.logo} alt="logo"/>
                </a>
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
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
