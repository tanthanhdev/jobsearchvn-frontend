import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css';
import { icons } from 'utils/icons';
import { register } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";

const Register = () => {
    const { isError, isSuccess, isLoading } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    //   const { message: mess } = useSelector((state) => state.message);
    // const navigate = useNavigate()


    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    };

    useEffect(() => {
        // if (isError) {
        //   toast.error(message)
        // }
        dispatch(clearMessage());
        // if (isSuccess || user) {
        //   // dispatch(authActions.reset())
        //   navigate('/');
        // }
        console.log('isLoading: ', isLoading);
        console.log('isError: ', isError);
        console.log('isSuccess: ', isSuccess);
        console.log('message: ', message);
    }, [dispatch])

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .test(
                "len",
                "The First name must be between 1 and 20 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 1 &&
                    val.toString().length <= 20
            )
            .required("This field is required!"),
        last_name: Yup.string()
            .test(
                "len",
                "The Last name must be between 1 and 20 characters.",
                (val) =>
                    val &&
                    val.toString().length >= 1 &&
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
        console.log({ first_name, last_name, email, password });
        dispatch(register({ first_name, last_name, email, password }))
            .unwrap()
            .then((res) => {
                console.log(111, res);
                // dispatch(setMessage(res.payload.message))
            })
            .catch(() => {
                if (message) {
                    console.log(message);
                }
                console.log('iserror: ' + isError)
            });
    };

    return (
        <div className={styles["main"]}>
            <div className={styles["header"]}>
                <div className={styles["header_left"]}>
                    <img src={icons.logo} alt="icon" className={styles["header__icon"]} />
                    <span className={styles["header_name"]}>
                        <h1>JOB SEARCH VN </h1>
                    </span>
                </div>
            </div>

            <div className={styles["container"]}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                >
                    <Form className={styles["form"]}>
                        <div>
                            <div className={styles["form-container"]}>
                                <div className={styles["container__header"]}>
                                    <a href="/" >
                                        <img className={styles["container__header-logo"]} src={icons.logo} alt="logo" />
                                    </a>
                                    <h1 className={styles["container__header-name"]}>Đăng Ký Thành Viên</h1>
                                </div>
                                <div className={styles["container__center"]}>
                                    <div className={styles["container__center-input"]}>
                                        <div className={`${styles["container__center-input-boxname"]} flex flex-dec-column`}>
                                            <Field
                                                name="first_name"
                                                type="text"
                                                className={styles["container__center-input--email-one"]}
                                                placeholder="Tên"
                                            />
                                            <ErrorMessage
                                                name="first_name"
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                            {isError && message.first_name && (
                                                <div className="form-group">
                                                    <div className="alert alert-danger" role="alert">
                                                        {message.first_name ? message.first_name : ""}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className={`${styles["container__center-input-boxname-one"]} flex flex-dec-column`}>
                                            <Field
                                                name="last_name"
                                                type="text"
                                                className={styles["container__center-input--email-two"]}
                                                placeholder="Họ"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="last_name"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                        {isError && message.last_name && (
                                            <div className="form-group">
                                                <div className="alert alert-danger" role="alert">
                                                    {message.last_name ? message.last_name : ""}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`${styles["container__center-input"]} flex-dec-column`}>
                                        <span className={styles["icon-email"]}>
                                            <img className={`${styles["container__center-icon--email"]}`} src={icons.envelope_solid} alt="icon" />
                                        </span>
                                        <Field
                                            name="email"
                                            type="email"
                                            className={styles["container__center-input--email"]}
                                            placeholder="Nhập email"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    {isError && message.email && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message.email ? message.email : ""}
                                            </div>
                                        </div>
                                    )}
                                    <div className={`${styles["container__center-input"]} flex-dec-column`}>
                                        <span className={styles["icon-password"]}>
                                            <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid} alt="icon" ></img>
                                        </span>
                                        <Field
                                            name="password"
                                            type="password"
                                            className={styles["container__center-input--password"]}
                                            placeholder="Nhập mật khẩu"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    {isError && message.password && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message.password ? message.password : ""}
                                            </div>
                                        </div>
                                    )}
                                    <div className={`${styles["container__center-input"]} flex-dec-column`}>
                                        <span className={styles["icon-password-2"]}>
                                            <img className={`${styles["container__center-icon--password"]}`} src={icons.key_solid} alt="icon" ></img>
                                        </span>
                                        <Field
                                            name="confirm_password"
                                            type="password"
                                            className={styles["container__center-input--password"]}
                                            placeholder="Nhập lại mật khẩu"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="confirm_password"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    {isError && message.confirm_password && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message.confirm_password ? message.confirm_password : ""}
                                            </div>
                                        </div>
                                    )}
                                    <Field
                                        name="group"
                                        type="text"
                                        value="member"
                                        className="hide"
                                    />
                                    {message && typeof(message) === "string" && (
                                        <div className="form-group">
                                            <div
                                                className={isSuccess ? "alert alert-success" : "alert alert-danger"}
                                                role="alert"
                                            >
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className={styles["container__footer"]}>
                                    <button type="submit" className={`${styles["container__footer-login"]}`} disabled={isLoading}>
                                        {isLoading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Tiếp Tục
                                            {/* <i className={styles["header_name"]}"fas fa-redo-alt fa-spin" aria-hidden="true"></i> */}
                                        </span>
                                    </button>
                                    <div className={styles["container__footer-footer"]}>
                                        <p className={styles["container__footer-question"]}>
                                            Bạn đã có tài khoản?
                                        </p>
                                        <a href="/login" className={styles["container__footer-link"]}>Đăng nhập!</a>
                                    </div>
                                    <div className={styles["container__footer-box"]}>
                                        <p>Nếu bạn đang có nhu cầu tuyển dụng, vui lòng đăng ký <a href="/sign-up/employer">Tại đây</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Register;
