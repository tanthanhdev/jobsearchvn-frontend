import { useState ,useEffect } from 'react';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from './style.module.css';

export const Activity = ({onHandleActivity, isPostForm, setIsPostForm}) => {
    const initialValues = {
        title: "Nhóm tình nguyện DTU",
        unit_name: "Tình nguyện viên",
        description: "Tập hợp các món quà và phân phát tới người vô gia cư. \n - Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.",
        starting_date: "2016-03-02",
        completion_date: "2018-03-02",
    };
    const [ title, setTitle ] = useState(initialValues.title);
    const [ unit_name, setUnit_name ] = useState(initialValues.unit_name);
    const [ description, setDescription ] = useState(initialValues.description);
    const [ starting_date, setStarting_date ] = useState(initialValues.starting_date);
    const [ completion_date, setCompletion_date ] = useState(initialValues.completion_date);

    useEffect(() => {
        if (isPostForm) {
            console.log('da duoc quyen submit form education', isPostForm);
            document.getElementById('submitFormActivity').click();
        }
    }, [isPostForm]);

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field is required!"),
        unit_name: Yup.string()
        .required("This field is required!"),
        description: Yup.string()
        .required("This field is required!"),
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
        console.log('activity: ', formValue);
        onHandleActivity(formValue); //Values to parent here
        setIsPostForm(false); //reset
    };

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handlePostCV}
        >
            {({setFieldValue}) => (
            <Form>
                <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                    <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                        {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                        <span className={`${styles["cvo-activity-blocktitle"]}`}>Hoạt động</span>
                    </div>
                    <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                        <div className={`${styles.row}`}>
                            <div className={`${styles["cvo-section-info"]}`}>
                                <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                    <span className={`${styles["cvo-activity-organization"]}`}>
                                    <Field
                                        name="title"
                                        type="text"
                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                        placeholder=""
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
                                    </span>
                                </div>
                                <div className={`${styles["cvo-activity-time"]}`}>
                                    <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-activity-start"]}`}>
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
                                        />
                                        </span>
                                        - <span className={`${styles["cvo-activity-end"]}`}>
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
                            <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>
                                <Field
                                    name="unit_name"
                                    type="text"
                                    className={`${styles["cvo-profile-title"]}`}
                                    placeholder=""
                                    value={unit_name}
                                    onChange={e =>
                                        {setFieldValue("unit_name", e.target.value);
                                        setUnit_name(e.target.value);}
                                    }
                                />
                                <ErrorMessage
                                    name="unit_name"
                                    component="div"
                                    className="alert alert-danger"
                                />
                                </span></div>
                            <div className={`${styles["cvo-activity-details"]}`}>

                            <Field
                                    name="description"
                                    component="textarea"
                                    rows={6}
                                    type="text"
                                    className={`${styles["cvo-profile-title"]}`}
                                    placeholder=""
                                    value={description}
                                    onChange={e =>
                                        {setFieldValue("description", e.target.value);
                                        setDescription(e.target.value);}
                                    }
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    id="submitFormActivity"
                    hidden={true}
                    type="submit"
                    label="submit"
                />
            </Form>
            )}
        </Formik>
    );
};

