import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
// components
import { Login } from "components/modals";
// services
import authService from "services/auth.service";
// utils
import { icons } from 'utils/icons';
import styles from './style.module.css';

const CreateReview = ({ showModal, toggleShow, isLoggedIn, setIsLoggedIn, slug }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { message, isError, isSuccess, isLoading, cv } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
  }, [showModal]);

  //   const initialValues = {
  //     title: "",
  //     target_major: "",
  //   };
  const [isShowLoginModel, setIsShowLoginModel] = useState(false);

  useEffect(() => {
    console.log('isloggedin at duplicated: ', isLoggedIn);
    if (isShowLoginModel) {
      toggleShow();
    }

    // if (isError) {
    //   toast.error(message)
    // }

    // if (isSuccess || cv) {
    //   // dispatch(authActions.reset())
    //   navigate('/');
    // }

    if (showModal && isLoggedIn && user && user.is_active && user.staff) {
      toast.error('Tài khoản công ty không thể tạo đánh giá', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }

  }, [isError, isSuccess, message, dispatch, isShowLoginModel])

  //   const validationSchema = Yup.object().shape({
  //     title: Yup.string().required("Vui lòng không để trống!"),
  //     target_major: Yup.string().required("Vui lòng không để trống!"),
  //   });

  //   const handleDuplicateCVTemplate = (formValue) => {
  //     const { title, target_major, cv_cv_educations, cv_cv_experiences,
  //       cv_cv_skills, cv_cv_social_activities, cv_cv_certificates } = formValue;
  //     dispatch(create_cv({
  //       title, target_major, cv_cv_educations, cv_cv_experiences,
  //       cv_cv_skills, cv_cv_social_activities, cv_cv_certificates, cv_template_id, cv_career, cv_design
  //     }))
  //       .unwrap()
  //       .then((data) => {
  //         console.log('submited duplicated file', data)
  //         toggleShow();
  //         toast.success("Chúc mừng bạn đã tạo thành công CV Mẫu!", {
  //           position: toast.POSITION.BOTTOM_RIGHT
  //         });
  //       })
  //       .catch((e) => {
  //         console.log(e)
  //         console.log(isError)
  //         if (e.code === 'token_not_valid') {
  //           toast.error('Phiên đăng nhập đã hết hạn hoặc không thanh công!', {
  //             position: toast.POSITION.BOTTOM_RIGHT
  //           });
  //         } else {
  //           if (isError) {
  //             if (message) {
  //               toast.error(message, {
  //                 position: toast.POSITION.BOTTOM_RIGHT
  //               })
  //             }
  //           } else {
  //             toast.error('Tạo CV không thành công!', {
  //               position: toast.POSITION.BOTTOM_RIGHT
  //             })
  //           }
  //         }
  //       });
  //   };

  return (
    <>
      <div>
        <ToastContainer draggablePercent={60} limit={5} />
      </div>
      {!isLoggedIn && (
        <Login showModal={showModal} toggleShow={toggleShow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          setIsShowLoginModel={setIsShowLoginModel} />
      )}
      {isLoggedIn && user && user.is_active && !user.staff && (
        <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
          <Formik
          // initialValues={initialValues}
          // validationSchema={validationSchema}
          // onSubmit={handleDuplicateCVTemplate}
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
                  <h3>create review</h3>
                </Modal.Body>
                <Modal.Footer>
                  {/* onClick={toggleShow}  */}
                  <Button
                    disabled={isLoading} variant="primary" label="Lưu CV" icon="pi pi-check" type="submit">
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
