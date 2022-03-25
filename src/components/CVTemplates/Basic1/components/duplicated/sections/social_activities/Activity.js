import { Button } from 'primereact/button';
import { Field, ErrorMessage, FieldArray } from "formik";
import styles from './style.module.css';

export const Activity = ({ values, errors, isSubmitting }) => {
    return (
        <FieldArray name="cv_cv_social_activities">
            {({ remove, push }) => (
                <>
                    <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                        <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                            <span className={`${styles["cvo-activity-blocktitle"]}`}>Hoạt động</span>
                        </div>
                        <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                            {values.cv_cv_social_activities.length > 0 &&
                                values.cv_cv_social_activities.map((_, index) => (
                                    <div className={`${styles.row}`} key={index}>
                                        <div className={`${styles["cvo-section-info"]}`}>
                                            <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                                <span className={`${styles["cvo-activity-organization"]}`}>
                                                    <Field
                                                        name={`cv_cv_social_activities.${index}.title`}
                                                        type="text"
                                                        className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                                        placeholder="Tiêu đề"
                                                    />
                                                    <ErrorMessage
                                                        name={`cv_cv_social_activities.${index}.title`}
                                                        component="div"
                                                        className="alert alert-danger"
                                                    />
                                                </span>
                                            </div>
                                            <div className={`${styles["cvo-activity-time"]}`}>
                                                <span className={`${styles["time-background"]}`}>
                                                    <span className={`${styles["cvo-activity-start"]}`}>
                                                        <Field
                                                            name={`cv_cv_social_activities.${index}.starting_date`}
                                                            type="text"
                                                            className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                                            placeholder="Bắt đầu"
                                                        />
                                                        <ErrorMessage
                                                            name={`cv_cv_social_activities.${index}.starting_date`}
                                                            component="div"
                                                            className="alert alert-danger"
                                                        />
                                                    </span>
                                                    - <span className={`${styles["cvo-activity-end"]}`}>
                                                        <Field
                                                            name={`cv_cv_social_activities.${index}.completion_date`}
                                                            type="text"
                                                            className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                                                            placeholder="Kết thúc"
                                                        />
                                                        <ErrorMessage
                                                            name={`cv_cv_social_activities.${index}.completion_date`}
                                                            component="div"
                                                            className="alert alert-danger"
                                                        />
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>
                                            <Field
                                                name={`cv_cv_social_activities.${index}.unit_name`}
                                                type="text"
                                                className={`${styles["cvo-profile-title"]}`}
                                                placeholder="Tên chính"
                                            />
                                            <ErrorMessage
                                                name={`cv_cv_social_activities.${index}.unit_name`}
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </span></div>
                                        <div className={`${styles["cvo-activity-details"]}`}>

                                            <Field
                                                name={`cv_cv_social_activities.${index}.description`}
                                                component="textarea"
                                                rows={6}
                                                type="text"
                                                className={`${styles["cvo-profile-title"]}`}
                                                placeholder="Mô tả kỹ năng của bạn"
                                            />
                                            <ErrorMessage
                                                name={`cv_cv_social_activities.${index}.description`}
                                                component="div"
                                                className="alert alert-danger"
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            className="p-button-sm"
                                            disabled={isSubmitting}
                                            onClick={() => remove(index)}
                                        >
                                            X
                                        </Button>
                                        {values.cv_cv_social_activities.length >= 1 && values.cv_cv_social_activities.length === (index + 1) ? (
                                            <Button
                                                type="button"
                                                className="p-button-sm ml-8"
                                                disabled={isSubmitting}
                                                onClick={() => push({
                                                    title: "",
                                                    unit_name: "",
                                                    description: "",
                                                    starting_date: "",
                                                    completion_date: ""
                                                })}
                                            >
                                                +
                                            </Button>
                                        ) : null}
                                    </div>
                                ))}
                            {values.cv_cv_social_activities.length === 0 ? (
                                <Button
                                    type="button"
                                    className="p-button-sm"
                                    disabled={isSubmitting}
                                    onClick={() => push({
                                        title: "",
                                        unit_name: "",
                                        description: "",
                                        starting_date: "",
                                        completion_date: ""
                                    })}
                                >
                                    +
                                </Button>
                            ) : null}
                        </div>
                        {typeof errors.cv_cv_social_activities === 'string' ? (
                            <div className="alert alert-danger" role="alert">
                                {errors.cv_cv_social_activities}
                            </div>
                        ) : null}
                    </div>
                </>
            )}
        </FieldArray>
    );
};

