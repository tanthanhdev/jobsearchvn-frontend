import { useState ,useEffect } from 'react';

import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from './style.module.css';

export const Education = ({onHandleEducation, isPostForm, setIsPostForm}) => {
    const initialValues = {
        degree_name: "Bằng cấp Cử Nhân",
        major: "Quản trị doanh nghiệp",
        university_name: "Đại học Duy Tân",
        gpa: "3.0",
        starting_date: "2016-03-02",
        completion_date: "2018-03-02",
    };
    const [ university_name, setUniversity_name ] = useState(initialValues.university_name);
    const [ degree_name, setDegree_name ] = useState(initialValues.degree_name);
    const [ major, setMajor ] = useState(initialValues.major);
    const [ gpa, setGpa ] = useState(initialValues.gpa);
    const [ starting_date, setStarting_date ] = useState(initialValues.starting_date);
    const [ completion_date, setCompletion_date ] = useState(initialValues.completion_date);
    const [ gpaText, setGpaText] = useState('');

    useEffect(() => {
        setGpaText(gpa >= 3.6 ? "Xuất sắc" : gpa >= 3.2 ? "Giỏi" : gpa >= 2.5 ? "Khá" : gpa >= 2 ? "Trung bình" : "Yếu/Kém");
        if (isPostForm) {
            console.log('da duoc quyen submit form education', isPostForm);
            document.getElementById('submitFormEducation').click();
        }
    }, [isPostForm]);

    const validationSchema = Yup.object().shape({
        degree_name: Yup.string()
            .required("This field is required!"),
        major: Yup.string()
        .required("This field is required!"),
        university_name: Yup.string()
        .required("This field is required!"),
        gpa: Yup.number()
        .required("This field is required!")
        .min(0.0).max(4.0)
        .test(
            'is-decimal',
            'invalid decimal, contains only 1 decimal',
            value => (value + "").match(/^[1-9]\d?(?:\.\d{0,1})?$/),
        ),
        starting_date: Yup.date().default(() => {
            return new Date();
        })
        .required("This field is required!"),
        completion_date: Yup.date().default(() => {
            return new Date();
        })
        .min(
            Yup.ref('starting_date'),
            "Completion date can't be before starting date"
        )
        .required("This field is required!"),
    });

    const handlePostCV = (formValue) => {
        console.log('education: ', formValue);
        onHandleEducation(formValue); //Values to parent here
        setIsPostForm(false); //reset
    };

    const onChangeGPA = e => {
        setGpa(e.target.value);
        let gpaValue = e.target.value;
        setGpaText(gpaValue >= 3.6 ? "Xuất sắc" : gpaValue >= 3.2 ? "Giỏi" : gpaValue >= 2.5 ? "Khá" : gpaValue >= 2 ? "Trung bình" : "Yếu/Kém");
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePostCV}
        >
            {({setFieldValue}) => (
            <Form>
                <div className={`${styles["cvo-block"]} ${styles["cvo-education"]}`}>
                    <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                        <span className={`${styles["cvo-education-blocktitle"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-graduation-cap" aria-hidden="true"></i> */}
                            Học vấn
                        </span>
                    </div>
                    <div className={`${styles["cvo-block-body"]} ${styles["education-table"]}`}>
                        <div className={`${styles.row}`}>
                            <div className={`${styles["cvo-section-info"]}`}>
                                <div className={`${styles["cvo-education-school-wraper"]}`}>
                                    <span className={`${styles["cvo-education-school"]}`}>
                                    <Field
                                        name="university_name"
                                        type="text"
                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                        placeholder=""
                                        value={university_name}
                                        onChange={e =>
                                            {setFieldValue("university_name", e.target.value);
                                            setUniversity_name(e.target.value);}
                                        }
                                    />
                                    <ErrorMessage
                                        name="university_name"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    </span>
                                </div>
                            <div className={`${styles["cvo-education-time"]}`}>
                                <span className={`${styles["time-background"]}`}>
                                    <span className={`${styles["cvo-education-start"]}`}>
                                    <Field
                                        name="starting_date"
                                        type="text"
                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                        placeholder=""
                                        value={starting_date}
                                        onChange={e =>
                                            {setFieldValue("starting_date", e.target.value);
                                            setStarting_date(e.target.value);}
                                        }
                                    />
                                    <ErrorMessage
                                        name="starting_date"
                                        component="div"
                                        className="alert alert-danger"
                                    /></span>
                                    - <span className={`${styles["cvo-education-end"]}`}>
                                    <Field
                                        name="completion_date"
                                        type="text"
                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                        placeholder=""
                                        value={completion_date}
                                        onChange={e =>
                                            {setFieldValue("completion_date", e.target.value);
                                            setCompletion_date(e.target.value);}
                                        }
                                    />
                                    <ErrorMessage
                                        name="completion_date"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    </span>
                                </span>
                            </div>
                        </div>
                            <div className={`${styles["cvo-education-wrapper"]}`}>
                                <span className={`${styles["cvo-education-title"]}`}>
                                    <Field
                                        name="major"
                                        type="text"
                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                        placeholder=""
                                        value={major}
                                        onChange={e =>
                                            {setFieldValue("major", e.target.value);
                                            setMajor(e.target.value);}
                                        }
                                    />
                                    <ErrorMessage
                                        name="major"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    (
                                    <Field
                                    name="degree_name"
                                    type="text"
                                    className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                    placeholder=""
                                    value={degree_name}
                                    onChange={e =>
                                        {setFieldValue("degree_name", e.target.value);
                                        setDegree_name(e.target.value);}
                                    }
                                    />
                                    <ErrorMessage
                                        name="degree_name"
                                        component="div"
                                        className="alert alert-danger"
                                    />
                                    )
                                </span>
                            </div>
                            <div className={`${styles["cvo-education-details"]}`}>
                                Tốt nghiệp loại {gpaText}, điểm trung bình 
                                <Field
                                    name="gpa"
                                    type="text"
                                    className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                    placeholder=""
                                    value={gpa}
                                    onChange={e =>
                                        {setFieldValue("gpa", e.target.value);
                                        onChangeGPA(e);}
                                    }
                                />
                                <ErrorMessage
                                    name="gpa"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    id="submitFormEducation"
                    hidden={true}
                    type="submit"
                    label="submit"
                />
            </Form>
            )}
        </Formik>
    );
};

