import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
// components
import { Education } from './sections/educations';
import { Activity } from './sections/social_activities';
import { Skill } from './sections/skills';
import { Certificate } from './sections/certificates';
import { Experience } from './sections/experiences';
import { Login } from "components/modals";
// utils
import CvTemplateService from 'services/cv-template';
// import { icons } from 'utils/icons';
import { create_cv } from "slices/cv";
import styles from './style.module.css';

export const Duplicated = ({ showModal, toggleShow, isLoggedIn, setIsLoggedIn, CvTemplate }) => {
  const [ cv_career, setCv_career ] = useState([]);
  const [ cv_design, setCv_design ] = useState([]);
  const cv_template_id = CvTemplate.id;
  const user = JSON.parse(localStorage.getItem('user'));
  const { message, isError, isSuccess, isLoading, cv } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    if(showModal) {
      CvTemplateService.setViewCvTemplate(cv_template_id).then(data => {console.log(data);});
    }
    setCvCareer();
    setCvDesign();
  }, [showModal]);

  const setCvCareer = () => {
    let resArr = [...CvTemplate.cv_career];
    resArr = resArr.map(e => {
      return {
        id: e.id ? e.id : 0,
      };
    });
    setCv_career(resArr);
  };
  const setCvDesign = () => {
    let resArr = [...CvTemplate.cv_design];
    resArr = resArr.map(e => {
      return {
        id: e.id ? e.id : 0,
      };
    });
    setCv_design(resArr);
  };

  const initialValues = {
    title: "",
    target_major: "",
    cv_cv_educations: [
      {
        degree_name: "",
        major: "",
        university_name: "",
        gpa: null,
        starting_date: "",
        completion_date: ""
      }
    ],
    cv_cv_experiences: [
      {
        job_title: "",
        company_name: "",
        job_location: "",
        job_state: true,
        job_country: "",
        description: "",
        start_date: "",
        end_date: ""
      }
    ],
    cv_cv_skills: [
      {
        name: "",
        description: ""
      }
    ],
    cv_cv_social_activities: [
      {
        title: "",
        unit_name: "",
        description: "",
        starting_date: "",
        completion_date: ""
      }
    ],
    cv_cv_certificates: [
      {
        name: "",
        year: null
      }
    ]
  };
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

  }, [cv, isError, isSuccess, message, navigate, dispatch, isShowLoginModel])

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Vui lòng không để trống!"),
    target_major: Yup.string().required("Vui lòng không để trống!"),
    cv_cv_skills: Yup.array()
      .of(Yup.object().shape({
        name: Yup.string().required("Vui lòng không để trống!")
        .min(2, 'Tên chứa ít nhất 3 ký tự')
        .max(255, 'Tên chỉ chứa tối đa 255 ký tự'),
        description: Yup.string().max(10000, 'Mô tả chỉ chứa tối đa 10000 ký tự'),
        // Rest of your amenities object properties
        })
      )
      .min(1, "Cần ít nhất một kỹ năng").max(5, 'Bạn chỉ có thể cung cấp 5 kỹ năng'),
    cv_cv_certificates: Yup.array()
      .of(Yup.object().shape({
        year: Yup.number().min(0).max(9999),
        name: Yup.string().max(255, 'Tên chỉ chứa tối đa 255 ký tự'),
        })
      )
      .max(5, 'Bạn chỉ có thể tạo tối đa 5 mục kỹ năng'),
    cv_cv_educations: Yup.array()
        .of(Yup.object().shape({
          degree_name: Yup.string()
          .required("Tên bằng cấp không để trống!"),
          major: Yup.string()
          .required("Chuyên ngành không để trống!"),
          university_name: Yup.string()
          .required("Vui lòng không để trống!"),
          gpa: Yup.number()
          .required("GPA không để trống!")
          .min(0.0).max(4.0)
          .test(
            'is-decimal',
            'Thập phân không hợ lệ, chỉ chứa 1 số thập phân',
            value => (value + "").match(/^[1-9]\d?(?:\.\d{0,1})?$/),
          ),
          starting_date: Yup.date().default(() => {
            return new Date();
          })
          .required("Vui lòng không để trống!"),
          completion_date: Yup.date().default(() => {
            return new Date();
          })
          .min(
            Yup.ref('starting_date'),
            "Ngày hoàn thành không được trước ngày bắt đầu"
          ).required("Vui lòng không để trống!"), 
        }))
        .min(1, "Cần ít nhất một mục giáo dục")
        .max(5, 'Bạn chỉ có thể tạo tối đa 5 mục giáo dục'),
    cv_cv_experiences: Yup.array()
      .of(Yup.object().shape({
        job_title: Yup.string()
        .required("Vui lòng không để trống!"),
        company_name: Yup.string()
        .required("Vui lòng không để trống!"),
        job_location: Yup.string()
        .required("Vui lòng không để trống!"),
        job_country: Yup.string()
        .required("Vui lòng không để trống!"),
        description: Yup.string()
        .required("Vui lòng không để trống!"),
        start_date: Yup.date().default(() => {
          return new Date();
        })
        .required("Vui lòng không để trống!"),
        end_date: Yup.string()
        .required("Vui lòng không để trống!"), 
      }))
      .min(1, "Cần ít nhất một mục kinh nghiệm")
      .max(5, 'Bạn chỉ có thể tạo tối đa 5 mục kinh nghiệm'),
    cv_cv_social_activities: Yup.array()
      .of(Yup.object().shape({
        title: Yup.string()
            .required("Vui lòng không để trống!"),
        unit_name: Yup.string()
        .required("Vui lòng không để trống!"),
        description: Yup.string().max(10000, 'Mô tả chỉ chứa tối đa 10000 ký tự'),
        starting_date: Yup.date().default(() => {
            return new Date();
        })
        .required("Vui lòng không để trống!"),
        completion_date: Yup.date().default(() => {
            return new Date();
        })
        .min(
            Yup.ref('starting_date'),
            "Ngày hoàn thành không được trước ngày bắt đầu"
        )
        .required("Vui lòng không để trống!")        
      }))
      .max(5, 'Bạn chỉ có thể tạo tối đa 5 mục hoạt động'),
  });

  const handleDuplicateCVTemplate = (formValue) => {
    const { title, target_major, cv_cv_educations, cv_cv_experiences,
      cv_cv_skills, cv_cv_social_activities, cv_cv_certificates } = formValue;
    dispatch(create_cv({
      title, target_major, cv_cv_educations, cv_cv_experiences,
      cv_cv_skills, cv_cv_social_activities, cv_cv_certificates, cv_template_id, cv_career, cv_design
    }))
      .unwrap()
      .then((data) => {
        console.log('submited duplicated file', data)
        toggleShow();
        toast.success("Chúc mừng bạn đã tạo thành công CV Mẫu!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((e) => {
        console.log(e)
        console.log(isError)
        if (e.code === 'token_not_valid') {
          toast.error('Phiên đăng nhập đã hết hạn hoặc không thanh công!', {
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
            toast.error('Tạo CV không thành công!', {
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
      {!isLoggedIn ? (
        <Login showModal={showModal} toggleShow={toggleShow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          setIsShowLoginModel={setIsShowLoginModel} />
      ) : (
        <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleDuplicateCVTemplate}
            // onSubmit={async (values) => {
            //   await new Promise((r) => setTimeout(r, 500));
            //   alert(JSON.stringify(values, null, 2));
            // }}
          >
            {({ values, errors, isSubmitting, setFieldValue }) => (
              <Form className={styles["form"]} id="duplicateForm">
                <Modal.Header closeButton>
                  <Modal.Title>CV Template {CvTemplate.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <section className={`${styles.iframe} ${styles["cv-viewer"]}`}>
                    <div className={`${styles["cv-layout-viewer"]}`}>
                      <div className={`${styles["cvo-document-root"]}`}>
                        <div className={`${styles["cvo-document"]} ${styles["cvo-document"]}`}>
                          <div className={`${styles["cvo-page"]}`}>
                            <div className={`${styles["cvo-subpage"]}`}>
                              <div className={`${styles["cvo-body"]}`}>
                                <div className={`${styles["navigation"]}`}>
                                  <div className={`${styles["nav-header"]}`}>
                                    <div className={`${styles.action}`}>
                                      <span className={`${styles.toggle} ${styles.close}`}></span>
                                      <span className={`${styles.toggle} ${styles.hide}`}></span>
                                      <span className={`${styles.toggle} ${styles["full-screen"]}`}></span>
                                    </div>
                                    <div className={`${styles.tabs}`}>
                                      <div className={`${styles.tab} ${styles.prev}`}></div>
                                      <div className={`${styles.tab} ${styles.active} ${styles["text-primary"]}`}>
                                        <span>Curriculum Vitae</span>
                                        {/* <i className={`${styles.custommodal}`}"fa fa-times icon text-primary" aria-hidden="true" style="float: right;"></i> */}
                                      </div>
                                      <div className={`${styles.tab} ${styles.next}`}></div>
                                    </div>
                                    <div className={`${styles["add-tab"]} ${styles["text-primary"]}`}>
                                      {/* <i className={`${styles.custommodal}`}"fa fa-plus" aria-hidden="true"></i></div> */}
                                    </div>
                                    <div className={`${styles["nav-body"]}`}>
                                      <div className={`${styles.action}`}>
                                        <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                          {/* <i className={`${styles.custommodal}`}"fa fa-angle-left" aria-hidden="true"></i> */}
                                        </span>
                                        <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                          {/* <i className={`${styles.custommodal}`}"fa fa-angle-right" aria-hidden="true"></i> */}
                                        </span>
                                        <span className={`${styles.reload} ${styles["text-primary"]}`}>
                                          {/* <i className={`${styles.custommodal}`}"fa fa-repeat" aria-hidden="true"></i> */}
                                        </span>
                                      </div>
                                      <div className={`${styles.search} ${styles["bg-primary-trans"]}`}>
                                        <div className={`${styles["input-search"]}`}>
                                          <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                            {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                                          </span>
                                          <span className={`${styles.title}`}>
                                            Nhân viên kinh doanh
                                          </span>
                                        </div>
                                      </div>
                                      <div className={`${styles["action-right"]}`}>
                                        <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                          {/* <i className={`${styles.custommodal}`}"fa fa-microphone" aria-hidden="true"></i> */}
                                        </span>
                                        <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                          {/* <i className={`${styles.custommodal}`}"fa fa-ellipsis-v" aria-hidden="true"></i> */}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className={`${styles["p-16"]} ${styles["pb-0"]} ${styles["group-header"]}`}>
                                    <div className={`${styles["h-content"]}`}>
                                      <div className={`${styles["top-content"]}`}>
                                        <div className={`${styles["profile-item"]}  ${styles["cvo-profile-avatar-wraper"]}`}>
                                          <img className={`${styles["cvo-profile-avatar"]}`} src="https://www.topcv.vn/images/default-avatar.png" value="preview_avatar" alt="avatar" />
                                        </div>
                                        <div className={`${styles["cvo-profile-fullname-and-title"]}`}>
                                          <div className={`${styles["cvo-profile-fullname-wraper"]}`}>
                                            <span className={`${styles["text-primary"]} ${styles["cvo-profile-fullname"]}`}>{(user && (
                                              <>
                                                {(user.first_name && user.last_name) ? user.first_name + " " + user.last_name : "Nguyễn Văn A"}
                                              </>
                                            ))}</span>
                                          </div>
                                          <div className={`${styles["cvo-profile-title-wraper"]}`}>
                                            <Field
                                              name="title"
                                              type="text"
                                              className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                              placeholder="Tên chức vụ"
                                            />
                                            <ErrorMessage
                                              name="title"
                                              component="div"
                                              className="alert alert-danger"
                                            />
                                            {/* <span className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}>Nhân viên kinh doanh</span> */}
                                          </div>
                                          <div className={`${styles.information}`}>
                                            <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-dob-wraper"]}`} >
                                              {/* <i className={`${styles.custommodal}`}"fa fa-calendar-o" aria-hidden="true"></i> */}
                                              <span className={`${styles["cvo-profile-info-value"]}  ${styles["cvo-profile-dob"]}`}>
                                                {(user && (
                                                  <>
                                                    {user.birthday ? user.birthday : "19/05/1992"}
                                                  </>
                                                ))}
                                              </span>
                                            </div>
                                            <div className={`${styles["cvo-profile-info-row"]}`}>
                                              {/* <i className={`${styles.custommodal}`}"fa fa-phone" aria-hidden="true"></i> */}
                                              <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-phone"]}`} >{(user && (
                                                <>
                                                  {user.phone_number ? user.phone_number : "(024) 6680 5588"}
                                                </>
                                              ))}</span>
                                            </div>
                                            <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-email-wraper"]}`} >
                                              {/* <i className={`${styles.custommodal}`}"fa fa-envelope" aria-hidden="true"></i> */}
                                              <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-email"]}`}>{(user && (
                                                <>
                                                  {user.email ? user.email : "hotro@jobsearch.vn"}
                                                </>
                                              ))}</span>
                                            </div>
                                            <div className={`${styles["cvo-profile-info-row"]}`}>
                                              {/* <i className={`${styles.custommodal}`}"fa fa-globe" aria-hidden="true"></i> */}
                                              {/* <span><a href="https://fb.com/jobsearch.vn" target="_blank" className={`${styles["cvo-clickable-link"]} ${styles["cvo-profile-website"]}`} rel="noreferrer noopener">https://fb.com/jobsearch.vn</a></span> */}
                                            </div>
                                            <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-address-wraper"]}`}>
                                              {/* <i className={`${styles.custommodal}`}"fa fa-location-arrow" aria-hidden="true"></i> */}
                                              <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-address"]}`} >
                                                {(user && (
                                                  <>
                                                    {user.address ? user.adress : "Số 10, đường 10, TopCV"}
                                                  </>
                                                ))}
                                              </span>
                                            </div>
                                            <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-gender-wraper"]}`}>
                                              {/* <i className={`${styles.custommodal}`}"fa fa-user" aria-hidden="true"></i> */}
                                              <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-gender"]}`} >
                                                {(user && (
                                                  <>
                                                    {user.gender === 'female' ? "Nữ" :
                                                      user.gender === 'male' ? "Nam" :
                                                        user.gender === 'other' ? "Khác" : "Nam"}
                                                  </>
                                                ))}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`${styles["h-description"]}`}>
                                        <div className={`${styles["cvo-block"]} ${styles["cvo-objective"]}`}>
                                          <div className={`${styles["cvo-block-body"]}`}>
                                            <Field
                                              component="textarea"
                                              rows={6}
                                              cols={67}
                                              name="target_major"
                                              type="text"
                                              className={`${styles["cvo-objective-objective"]}`}
                                              placeholder="Mô tả công việc"
                                            />
                                            <ErrorMessage
                                              name="target_major"
                                              component="div"
                                              className="alert alert-danger"
                                            />
                                            {/* <div className={`${styles["cvo-objective-objective"]}`}>Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.</div> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* cvo block left */}
                                  <div className={`${styles["cvo-col-7"]}`}>
                                    <div className={`${styles["group-left"]}`}>
                                      <Education
                                        values={values}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                        setFieldValue={setFieldValue}
                                      />
                                      <Experience
                                        values={values}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                      />
                                       <Activity
                                        values={values}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                      />
                                    </div>
                                    {/* cvo block right */}
                                  </div>
                                  <div className={`${styles["cvo-col-5"]}`}>
                                    <div className={`${styles["group-right"]}`}>
                                      <div className={`${styles["cvo-block"]}  ${styles["cvo-skillgroup"]}`}>
                                        <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                          <span className={`${styles["cvo-skillgroup-blocktitle"]}`}>
                                            {/* <i className={`${styles.custommodal}`}"fa fa-pencil" aria-hidden="true"></i> */}
                                            Các kỹ năng
                                          </span>
                                        </div>
                                        <div className={`${styles["block-content"]}`}>
                                          <div className={`${styles["skill-table"]}`}>
                                            <Skill
                                              values={values}
                                              errors={errors}
                                              isSubmitting={isSubmitting}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Certificate
                                        values={values}
                                        errors={errors}
                                        isSubmitting={isSubmitting}
                                      />
                                      {/* <div className={`${styles["cvo-block"]} ${styles["cvo-interests"]}`}>
                                        <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}> */}
                                          {/* <i className={`${styles.custommodal}`}"fa fa-heart" aria-hidden="true"></i> */}
                                          {/* <span className={`${styles["cvo-interests-blocktitle"]}`}>Sở thích</span>
                                        </div>
                                        <div className={`${styles["block-content"]}`}>
                                          <div className={`${styles["cvo-block-body"]}`}>
                                            <span className={`${styles["cvo-interests-interests"]}`}>Đọc sách:<br /> - Mỗi tháng đọc 1 quyển sách về kinh doanh.<br />Đá bóng:<br /> - Tham gia hoạt động đá bóng của công ty hàng tuần</span>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className={styles.clear} ></div>
                                </div>
                                <div className={styles.clear} ></div>
                                <div className={`${styles["cv-watermark"]}`}>
                                  © jobsearchvn.vn
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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
