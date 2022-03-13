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
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { messageError } = useSelector((state) => state.message);

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
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then((res) => {
        dispatch(authActions.updateUser(res.user))
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        console.log(messageError)
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  // return (
  //   <div className="col-md-12 login-form">
  //     <div className="card card-container">
  //       <img
  //         src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
  //         alt="profile-img"
  //         className="profile-img-card"
  //       />
  //       <Formik
  //         initialValues={initialValues}
  //         validationSchema={validationSchema}
  //         onSubmit={handleLogin}
  //       >
  //         <Form>
  //           <div className="form-group">
  //             <label htmlFor="email">email</label>
  //             <Field name="email" type="text" className="form-control" />
  //             <ErrorMessage
  //               name="email"
  //               component="div"
  //               className="alert alert-danger"
  //             />
  //               <div className="form-group">
  //                 <div className="alert alert-danger" role="alert">
  //                   {messageError.email ? messageError.email : ""}
  //                 </div>
  //               </div>
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="password">Password</label>
  //             <Field name="password" type="password" className="form-control" />
  //             <ErrorMessage
  //               name="password"
  //               component="div"
  //               className="alert alert-danger"
  //             />
  //               <div className="form-group">
  //                 <div className="alert alert-danger" role="alert">
  //                   {messageError.password ? messageError.password : ""}
  //                 </div>
  //               </div>
  //           </div>

  //           <div className="form-group">
  //             <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
  //               {loading && (
  //                 <span className="spinner-border spinner-border-sm"></span>
  //               )}
  //               <span>Login</span>
  //             </button>
  //           </div>
  //         </Form>
  //       </Formik>
  //     </div>

  //     {messageError && (
  //       <div className="form-group">
  //         <div className="alert alert-danger" role="alert">
  //           {messageError}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

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
                {messageError && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {messageError.email ? messageError.email : ""}
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
                {messageError && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {messageError.password ? messageError.password : ""}
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
              <Button type="submit" className={`${styles["container__footer-login"]} ${styles.login}`} disabled={loading}>
               {loading && (
                <span className="spinner-border spinner-border-sm"></span>
                )}
                 <span>Đăng Nhập</span>
              </Button>
              <div className={styles["container__footer-footer"]}>
                <p className={styles["container__footer-question"]}>
                  Bạn chưa có tài khoản?
                </p>
                <Link to="/signup" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                  Đăng ký!
                </Link>
              </div>
            </div>
          </div>
        </Form>
        </Formik>
        {messageError && (
          <div className="form-group">
            <div
              className={isLoggedIn ? "alert alert-success" : "alert alert-danger"}
              role="alert"
            >
              {messageError}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
