import React, { useState, useEffect, useRef }from "react";  
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

import { Education } from './sections/educations';

import { icons } from 'utils/icons';
import { create_cv } from "slices/cv";
import styles from './style.module.css';

export const Duplicated = ({showModal, toggleShow, isLoggedIn, cv_design, cv_career}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { message, isError, isSuccess, isLoading, cv } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const formRef = useRef();

    const initialValues = {
        title : 'Nhân viên kinh doanh',
        target_major : 'Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.',
    };
    
    const [ title, setTitle ] = useState(initialValues.title);
    const [ target_major, setTarget_major ] = useState(initialValues.target_major);
    const [ cv_cv_educations, setCv_cv_educations ] = useState([]);
    const [ cv_cv_experiences, setCv_cv_experiences ] = useState([]);
    const [ cv_cv_skills, setCv_cv_skills ] = useState([]);
    const [ cv_cv_social_activities, setCv_cv_social_activities ] = useState([]);
    const [ cv_cv_certificates, setCv_cv_certificates ] = useState([]);
    const [ isPostForm, setIsPostForm ] = useState(false);
  
  
    useEffect(() => {
        // if (isError) {
            //   toast.error(message)
        // }
    
        if (isSuccess || cv) {
            // dispatch(authActions.reset())
            navigate('/');
        }

        if (cv_cv_educations.length) {
            console.log('cv_cv_educations: ', cv_cv_educations);
            dispatch(create_cv({ cv_career, cv_design, title, target_major, cv_cv_educations, cv_cv_experiences,
                cv_cv_skills, cv_cv_social_activities, cv_cv_certificates }))
                .unwrap()
                .then(() => {
            })
            .catch(() => {
                console.log(isError)
            });
        }
    }, [cv, isError, isSuccess, message, navigate, dispatch,
        cv_cv_educations, cv_cv_experiences, cv_cv_skills, cv_cv_social_activities])
  
    const validationSchema = Yup.object().shape({
        title: Yup.string()
        .required("This field is required!"),
        target_major: Yup.string()
        .required("This field is required!")
    });

    const handleDuplicateCVTemplate = () => {
        console.log('submited duplicated file')
        setIsPostForm(true);
    };

    const onHandleEducation = data => {
        setCv_cv_educations([data]);
    }

    const submitButton = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
            if (formRef.current.isValid) {
            }
        }
    }

    if (!isLoggedIn) {
        if (showModal){
            return <Navigate to="/login" />;
        }
    } else {
        if (!JSON.parse(isLoggedIn).is_active) {
            return <Navigate to="/login" />;
        }
    }
  

    return (
        <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>
           
                    <Modal.Header closeButton>
                        <Modal.Title>CV Template Basic 1</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <section  className={`${styles.iframe} ${styles["cv-viewer"]}`}>
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
                                                        <Formik
                                                            initialValues={initialValues}
                                                            validationSchema={validationSchema}
                                                            onSubmit={handleDuplicateCVTemplate}
                                                            innerRef={formRef}
                                                            >
                                                            {({setFieldValue}) => (
                                                                <Form className={styles["form"]} id="duplicateForm">
                                                                    <div  className={`${styles["p-16"]} ${styles["pb-0"]} ${styles["group-header"]}`}>
                                                                        <div className={`${styles["h-content"]}`}>
                                                                            <div className={`${styles["top-content"]}`}>
                                                                                <div className={`${styles["profile-item"]}  ${styles["cvo-profile-avatar-wraper"]}`}>
                                                                                    <img className={`${styles["cvo-profile-avatar"]}`} src="https://www.topcv.vn/images/default-avatar.png" value="preview_avatar" alt="avatar"/>
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
                                                                                        <input
                                                                                            name="title"
                                                                                            type="text"
                                                                                            className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                                                                            value={title}
                                                                                            onChange={e =>
                                                                                                {setFieldValue("title", e.target.value);
                                                                                                setTitle(e.target.value);}
                                                                                            }
                                                                                        />
                                                                                        <ErrorMessage
                                                                                            name="title"
                                                                                            component="div"
                                                                                            className="alert alert-danger"
                                                                                        />
                                                                                        {/* <span ${styles["cvo-profile-title"]}`} className={`${styles["text-primary"]}`}>Nhân viên kinh doanh</span> */}
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
                                                                                            value={target_major}
                                                                                            onChange={e =>
                                                                                                {setFieldValue("target_major", e.target.value);
                                                                                                setTarget_major(e.target.value);}
                                                                                            }
                                                                                        />
                                                                                        <ErrorMessage
                                                                                            name="target_major"
                                                                                            component="div"
                                                                                            className="alert alert-danger"
                                                                                        />
                                                                                        {/* <div ${styles["cvo-objective-objective"]}`}>Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.</div> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Form>
                                                            )}
                                                        </Formik>   
                                                        {/* cvo block left */}
                                                        <div className={`${styles["cvo-col-7"]}`}>
                                                            <div className={`${styles["group-left"]}`}>
                                                                {/* Educations */}
                                                                <Education
                                                                    onHandleEducation={onHandleEducation}
                                                                    isPostForm={isPostForm}
                                                                    setIsPostForm={setIsPostForm}
                                                                />
                                                                <div className={`${styles["cvo-block"]} ${styles["cvo-experience"]}`}>
                                                                    <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                                                        <span className={`${styles["cvo-experience-blocktitle"]}`}>
                                                                            {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                                                                            Kinh nghiệm làm việc
                                                                        </span>
                                                                    </div>
                                                                    <div className={`${styles["cvo-block-body"]} ${styles["experience-table"]}`}>
                                                                        <div className={`${styles.row}`}>
                                                                            <div className={`${styles["cvo-section-info"]}`}>
                                                                                <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                                                                    <span className={`${styles["cvo-experience-company"]}`}>Công ty TOPCV</span>
                                                                                </div>
                                                                                <div className={`${styles["cvo-experience-time"]}`}>
                                                                                    <span className={`${styles["time-background"]}`}>
                                                                                        <span className={`${styles["cvo-experience-start"]}`}>03/2015</span>
                                                                                        -
                                                                                        <span className={`${styles["cvo-experience-end"]}`}>Hiện tại</span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nhân viên bán hàng</span></div>
                                                                            <div className={`${styles["cvo-experience-details"]}`}>- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...<br />- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.</div>
                                                                        </div>
                                                                        <div className={`${styles.row}`}>
                                                                            <div className={`${styles["cvo-section-info"]}`}>
                                                                                <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                                                                    <span className={`${styles["cvo-experience-company"]}`}>Cửa hàng TOPCV</span>
                                                                                </div>
                                                                            <div className={`${styles["cvo-experience-time"]}`}>
                                                                                <span className={`${styles["time-background"]}`}>
                                                                                    <span className={`${styles["cvo-experience-start"]}`}>06/2014</span>
                                                                                    -
                                                                                    <span className={`${styles["cvo-experience-end"]}`}>02/2015</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nhân viên bán hàng</span></div>
                                                                        <div className={`${styles["cvo-experience-details"]}`}>- Bán hàng trực tiếp tại cửa hàng cho người nước ngoài và người Việt.<br />- Quảng bá sản phẩm thông qua các ấn phẩm truyền thông: banner, poster, tờ rơi...<br />- Lập báo cáo sản lượng bán ra hàng ngày.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                                                                <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                                                    {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                                                                    <span className={`${styles["cvo-activity-blocktitle"]}`}>Hoạt động</span>
                                                                </div>
                                                                <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                                                                    <div className={`${styles.row}`}>
                                                                        <div className={`${styles["cvo-section-info"]}`}>
                                                                            <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                                                                <span className={`${styles["cvo-activity-organization"]}`}>Nhóm tình nguyện TOPCV</span>
                                                                            </div>
                                                                            <div className={`${styles["cvo-activity-time"]}`}>
                                                                                <span className={`${styles["time-background"]}`}>
                                                                                    <span className={`${styles["cvo-activity-start"]}`}>10/2013</span>
                                                                                    - <span className={`${styles["cvo-activity-end"]}`}>08/2014</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>Tình nguyện viên</span></div>
                                                                        <div className={`${styles["cvo-activity-details"]}`}>Tập hợp các món quà và phân phát tới người vô gia cư.<br />- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.</div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                                    
                                                                        <div className={`${styles.row}`}>
                                                                            <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Tin học văn phòng TOPCV</span></div>
                                                                            <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- Sử dụng thành thạo các công cụ Word, Excel, Power Point</div>
                                                                        </div>
                                                    
                                                    
                                                                        <div className={`${styles.row}`}>
                                                                            <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Tiếng Anh</span></div>
                                                                            <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- Khả năng giao tiếp Tiếng Anh trôi chảy</div>
                                                                        </div>
                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles["cvo-block"]} ${styles["cvo-award"]}`}>
                                                                <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                                                    <span className={`${styles["cvo-award-blocktitle"]}`}>
                                                                        {/* <i className={`${styles.custommodal}`}"fa fa-gift" aria-hidden="true"></i> */}
                                                                        Giải thưởng
                                                                    </span>
                                                                </div>
                                                                <div className={`${styles["cvo-block-body"]} ${styles["award-table"]}`}>
                                                                    <div className={`${styles.row}`}>
                                                                        <div className={`${styles["cvo-award-wrapper"]}`}><span className={`${styles["cvo-award-time"]}`}>2014</span></div>
                                                                        <div className={`${styles["cvo-award-title"]}`}>Nhân viên xuất sắc năm công ty TOPCV</div>
                                                                        <div className={styles.clear}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                <div className={`${styles["cvo-block"]} ${styles["cvo-interests"]}`}>
                                                                    <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                                                        {/* <i className={`${styles.custommodal}`}"fa fa-heart" aria-hidden="true"></i> */}
                                                                        <span className={`${styles["cvo-interests-blocktitle"]}`}>Sở thích</span>
                                                                    </div>
                                                                    <div className={`${styles["block-content"]}`}>
                                                                        <div className={`${styles["cvo-block-body"]}`}>
                                                                            <span className={`${styles["cvo-interests-interests"]}`}>Đọc sách:<br /> - Mỗi tháng đọc 1 quyển sách về kinh doanh.<br />Đá bóng:<br /> - Tham gia hoạt động đá bóng của công ty hàng tuần</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                    {/* disabled={isLoading} */}
                        <Button
                            onClick={() => submitButton()}
                            disabled={isLoading} variant="primary" label="Lưu CV" icon="pi pi-check" type="submit" id="duplicateForm"> 
                            {isLoading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                        </Button>
                    </Modal.Footer>
              
        </Modal>
    );
};
