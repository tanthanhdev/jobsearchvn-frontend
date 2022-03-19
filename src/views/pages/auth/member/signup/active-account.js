import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link, useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";

import { resetPass } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";
import { activeAccount } from "slices/auth"

import styles from './style.module.css';
import { icons } from 'utils/icons';

const ActiveAccount = (props) => {
  const { isLoggedIn, message, isError, isSuccess, isLoading } = useSelector((state) => state.auth);
  const { message: mess } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  let params = useParams();

  useEffect(() => {
    // dispatch(clearMessage());

    const access_token = params.access_token
    dispatch(activeAccount({ access_token }))
      .unwrap()
      .then((res) => {
        dispatch(setMessage(res.message))
      })
      .catch(() => {
      });
  }, []);

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
              <div className="container__footer">
                <div className={styles["container__footer-footer"]}>
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
                <Link to="/login" className={`${styles["sign-up"]} ${styles["container__footer-link"]}`}>
                Đăng nhập!
                </Link>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ActiveAccount;
