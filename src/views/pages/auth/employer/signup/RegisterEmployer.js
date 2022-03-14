import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "slices/auth";
import { clearMessage } from "slices/message";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .test(
        "len",
        "The First name must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    last_name: Yup.string()
    .test(
      "len",
      "The Last name must be between 3 and 20 characters.",
      (val) =>
        val &&
        val.toString().length >= 3 &&
        val.toString().length <= 20
    )
    .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
      confirm_password: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const handleRegister = (formValue) => {
    const { first_name, last_name, email, password } = formValue;
    
    setSuccessful(false);
    setLoading(true);

    dispatch(register({ first_name, last_name, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
        setLoading(false);
      });
  };

  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <Field name="first_name" type="text" className="form-control" />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="alert alert-danger"
                  />
                  {!successful && (message ? Object.keys(message).length : 0) > 1 && message.first_name &&(
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.first_name ? message.first_name : ""}
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <Field name="last_name" type="text" className="form-control" />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="alert alert-danger"
                  />
                  {!successful && (message ? Object.keys(message).length : 0) > 1 && message.last_name &&(
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.last_name ? message.last_name : ""}
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                  {!successful && (message ? Object.keys(message).length : 0) > 1 && message.email &&(
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.email ? message.email : ""}
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                  {!successful && (message ? Object.keys(message).length : 0) > 1 && message.password &&(
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.password ? message.password : ""}
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Confirm Password</label>
                  <Field
                    name="confirm_password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="alert alert-danger"
                  />
                  {!successful && (message ? Object.keys(message).length : 0) > 1 && message.confirm_password &&(
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.confirm_password ? message.confirm_password : ""}
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Sign Up</span>
                  </button>
                  {/* <button type="submit" className="btn btn-primary btn-block">Sign Up</button> */}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {(message ? Object.keys(message).length : 0) === 1 && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
