import { Button } from 'primereact/button';
import { Field, ErrorMessage, FieldArray } from "formik";
import styles from './style.module.css';

export const Experience = ({ values, errors, isSubmitting }) => {
  return (
    <FieldArray name="cv_cv_experiences">
      {({ remove, push }) => (
        <>

          <div className={`${styles["cvo-block"]} ${styles["cvo-experience"]}`}>
            <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
              <span className={`${styles["cvo-experience-blocktitle"]}`}>
                {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                Kinh nghiệm làm việc
              </span>
            </div>
            <div className={`${styles["cvo-block-body"]} ${styles["experience-table"]}`}>
              {values.cv_cv_experiences.length > 0 &&
                values.cv_cv_experiences.map((_, index) => (
                  <div className={`${styles.row}`} key={index}>
                    <div className={`${styles["cvo-section-info"]}`}>
                      <div className={`${styles["cvo-experience-company-wraper"]}`}>
                        <span className={`${styles["cvo-experience-company"]}`}>
                          <Field
                            name={`cv_cv_experiences.${index}.company_name`}
                            type="text"
                            className={`${styles["cvo-experience-company_name"]}`}
                            placeholder="Tên công ty"
                          />
                          <ErrorMessage
                            name={`cv_cv_experiences.${index}.company_name`}
                            component="div"
                            className="alert alert-danger"
                          />
                        </span>
                      </div>
                      <div className={`${styles["cvo-experience-time"]}`}>
                        YYYY-DD-MM
                        <span className={`${styles["time-background"]}`}>
                          <span className={`${styles["cvo-experience-start"]}`}>
                            <Field
                              name={`cv_cv_experiences.${index}.start_date`}
                              type="text"
                              className={`${styles["cvo-experience-start_date"]}`}
                              placeholder="Bắt đầu"
                            />
                            <ErrorMessage
                              name={`cv_cv_experiences.${index}.start_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </span>
                          -
                          <span className={`${styles["cvo-experience-end"]}`}>
                            <Field
                              name={`cv_cv_experiences.${index}.end_date`}
                              type="text"
                              className={`${styles["cvo-experience-end_date"]}`}
                              placeholder="Kết thúc"
                            />
                            <ErrorMessage
                              name={`cv_cv_experiences.${index}.end_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </span>
                          
                        </span>
                      </div>
                    </div>
                    <span className={`${styles["cvo-experience-position"]}`}>
                      <Field
                        name={`cv_cv_experiences.${index}.job_location`}
                        type="text"
                        className={`${styles["cvo-experience-job_location"]}`}
                        placeholder="Địa chỉ công ty"
                      />
                      <ErrorMessage
                        name={`cv_cv_experiences.${index}.job_location`}
                        component="div"
                        className="alert alert-danger"
                      />
                    </span>
                    (<span className={`${styles["cvo-experience-position"]}`}>
                      <Field
                        name={`cv_cv_experiences.${index}.job_country`}
                        type="text"
                        className={`${styles["cvo-experience-job_country"]}`}
                        placeholder="Quốc gia"
                      />
                      <ErrorMessage
                        name={`cv_cv_experiences.${index}.job_country`}
                        component="div"
                        className="alert alert-danger"
                      />
                    </span>)
                    <div className={`${styles["cvo-experience-wrapper"]}`}>
                      <span className={`${styles["cvo-experience-position"]}`}>
                        <Field
                          name={`cv_cv_experiences.${index}.job_title`}
                          type="text"
                          className={`${styles["cvo-experience-job_title"]}`}
                          placeholder="Tên công việc"
                        />
                        <ErrorMessage
                          name={`cv_cv_experiences.${index}.job_title`}
                          component="div"
                          className="alert alert-danger"
                        />
                      </span>
                    </div>
                    <div className={`${styles["cvo-experience-details"]}`}>
                      <Field
                        component="textarea"
                        rows={4}
                        name={`cv_cv_experiences.${index}.description`}
                        type="text"
                        className={`${styles["cvo-experience-description"]}`}
                        placeholder="Mô tả công việc"
                      />
                      <ErrorMessage
                        name={`cv_cv_experiences.${index}.description`}
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
                    {values.cv_cv_experiences.length >= 1 && values.cv_cv_experiences.length === (index + 1) ? (
                      <Button
                        type="button"
                        className="p-button-sm ml-8"
                        disabled={isSubmitting}
                        onClick={() => push({
                          job_title: "",
                          company_name: "",
                          job_location: "",
                          job_country: "",
                          description: "",
                          start_date: "",
                          end_date: ""
                        })}
                      >
                        +
                      </Button>
                    ) : null}

                  </div>

                ))}
              {values.cv_cv_experiences.length === 0 ? (
                <Button
                  type="button"
                  className="p-button-sm"
                  disabled={isSubmitting}
                  onClick={() => push({
                    job_title: "",
                    company_name: "",
                    job_location: "",
                    job_country: "",
                    description: "",
                    start_date: "",
                    end_date: ""
                  })}
                >
                  +
                </Button>
              ) : null}
            </div>

            {typeof errors.cv_cv_experiences === 'string' ? (
              <div className="alert alert-danger" role="alert">
                {errors.cv_cv_experiences}
              </div>
            ) : null}


          </div>

        </>
      )}
    </FieldArray>
  )
};

