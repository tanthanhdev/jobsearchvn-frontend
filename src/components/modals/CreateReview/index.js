import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import StarRatings from 'react-star-ratings';
// components
// services
// import authService from "services/auth.service";
// slices
import { create_review } from "slices/company-reviews";
// utils
// import { icons } from 'utils/icons';
import styles from './style.module.css';

const CreateReview = ({ pk, showModal, toggleShow, isLoggedIn, setIsReloadReview }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { isError, isLoading } = useSelector((state) => state.company_review);
  const { message } = useSelector((state) => state.message);
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();
  // const navigate = useNavigate()

  const initialValues = {
    employer_id: pk,
    title: "",
    content: "",
    point: 0,
  };

  useEffect(() => {
    console.log('isloggedin at duplicated: ', isLoggedIn);

    // if (isError) {
    //   toast.error(message)
    // }

    if (showModal && isLoggedIn && user && user.is_active && user.staff) {
      toast.error('Tài khoản công ty không thể tạo đánh giá', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }

  }, [dispatch]);

  var changeRating = (value) => {
    setRating(value);
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Vui lòng không để trống!"),
    content: Yup.string()
      .test('len', 'Tối thiểu 10 ký tự', val => val && val.toString().length >= 10)
      .required("Vui lòng không để trống!"),
    point: Yup.number()
      .max(5, "Bạn chỉ có thể bình chọn tối đa 5 sao!")
      .required("Vui lòng không để trống!"),
  });

  const handleCreateReview = (formValue) => {
    const { employer_id, title, content, point } = formValue;
    dispatch(create_review({
      employer_id, title, content, point
    }))
      .unwrap()
      .then((data) => {
        setIsReloadReview(true);
        setRating(0);
        toggleShow();
        toast.success("Tạo bài đánh giá công ty thành công!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch((e) => {
        if (e.code === 'token_not_valid') {
          toast.error('Phiên đăng nhập đã hết hạn hoặc không thành công!', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else {
          if (isError) {
            if (message) {
              toast.error(message, {
                position: toast.POSITION.BOTTOM_RIGHT
              })
            }
          } else {
            toast.error('Tạo bài đánh giá không thành công!', {
              position: toast.POSITION.BOTTOM_RIGHT
            })
          }
        }
      });
  };

  return (
    <>
      <div>
        <ToastContainer draggablePercent={60} limit={5} />
      </div>
      {isLoggedIn && user && user.is_active && !user.staff && (
        <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateReview}
            // onSubmit={async (values) => {
            //   await new Promise((r) => setTimeout(r, 500));
            //   alert(JSON.stringify(values, null, 2));
            // }}
          >
            {({ values, errors, isSubmitting, setFieldValue }) => (
              <Form className={styles["form"]} id="duplicateForm">
                <Modal.Header closeButton>
                  <Modal.Title>Đánh Giá Công Ty</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {/* <Field name="point" type="number" className={styles["input--point"]} placeholder="Nhập tiêu đề" /> */}
                  <h6>Bình chọn điểm</h6>
                  <StarRatings
                    rating={rating}
                    starRatedColor="yellow"
                    changeRating={(value) => {
                      changeRating(value);
                      setFieldValue("point", value);
                    }}
                    numberOfStars={5}
                    name='point'
                    className={styles["input--point"]}
                  />
                  <ErrorMessage name="point" component="div" className="alert alert-danger"
                  />
                  {isError && message.point && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.point ? message.point : ""}
                      </div>
                    </div>
                  )}
                  <Field name="title" type="text" className={styles["input--title"]} placeholder="Nhập tiêu đề" />
                  <ErrorMessage name="title" component="div" className="alert alert-danger"
                  />
                  {isError && message.title && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.title ? message.title : ""}
                      </div>
                    </div>
                  )}
                  <Field
                    component="textarea"
                    rows={6}
                    name="content" type="text"
                    className={styles["input--content"]}
                    placeholder="Nhập nội dung đánh giá" />
                  <ErrorMessage name="content" component="div" className="alert alert-danger"
                  />
                  {isError && message.content && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message.content ? message.content : ""}
                      </div>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  {/* onClick={toggleShow}  */}
                  <Button
                    disabled={isLoading} variant="primary" label="Gửi Đánh Giá" icon="pi pi-check" type="submit">
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};
export default CreateReview;
