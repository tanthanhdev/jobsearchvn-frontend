import { useState } from 'react';
import { Button } from 'primereact/button';
import { Field, ErrorMessage, FieldArray } from "formik";

import styles from './style.module.css';

export const Education = ({ values, errors, isSubmitting, setFieldValue }) => {
  const [gpaText, setGpaText] = useState([]);

  const onChangeGPA = (e, index) => {
    let gpaValue = e.target.value;
    if (gpaText.length > index) {
      // 1. Make a shallow copy of the array
      let temp_state = [...gpaText];
      // 2. Make a shallow copy of the element you want to mutate
      let temp_element = { ...temp_state[index] };
      // 3. Update the property you're interested in
      temp_element = gpaValue >= 3.6 ? "Xuất sắc" : gpaValue >= 3.2 ? "Giỏi" : gpaValue >= 2.5 ? "Khá" : gpaValue >= 2 ? "Trung bình" : "Yếu/Kém";
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      temp_state[index] = temp_element;
      setGpaText(temp_state);
    } else {
      setGpaText(oldArray => [...oldArray, gpaValue >= 3.6 ? "Xuất sắc" : gpaValue >= 3.2 ? "Giỏi" : gpaValue >= 2.5 ? "Khá" : gpaValue >= 2 ? "Trung bình" : "Yếu/Kém"])
    }
  }

  return (
    <FieldArray name="cv_cv_educations">
      {({ remove, push }) => (
        <>
          <div className={`${styles["cvo-block"]} ${styles["cvo-education"]}`}>
            <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
              <span className={`${styles["cvo-education-blocktitle"]}`}>
                {/* <i className={`${styles.custommodal}`}"fa fa-graduation-cap" aria-hidden="true"></i> */}
                Học vấn
              </span>
            </div>
            <div className={`${styles["cvo-block-body"]} ${styles["education-table"]}`}>
              {values.cv_cv_educations.length > 0 &&
                values.cv_cv_educations.map((_, index) => (
                  <div className={`${styles.row}`} key={index}>
                    <div className={`${styles["cvo-section-info"]}`}>
                      <div className={`${styles["cvo-education-school-wraper"]}`}>
                        <span className={`${styles["cvo-education-school"]}`}>
                          <Field
                            name={`cv_cv_educations.${index}.university_name`}
                            type="text"
                            className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                            placeholder="Tên trường đại học"
                          />
                          <ErrorMessage
                            name={`cv_cv_educations.${index}.university_name`}
                            component="div"
                            className="alert alert-danger"
                          />
                        </span>
                      </div>
                      <div className={`${styles["cvo-education-time"]}`}>
                        <span className={`${styles["time-background"]}`}>
                          <span className={`${styles["cvo-education-start"]}`}>
                            <Field
                              name={`cv_cv_educations.${index}.starting_date`}
                              type="text"
                              className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                              placeholder="Bắt đầu"
                            />
                            <ErrorMessage
                              name={`cv_cv_educations.${index}.starting_date`}
                              component="div"
                              className="alert alert-danger"
                            /></span>
                          - <span className={`${styles["cvo-education-end"]}`}>
                            <Field
                              name={`cv_cv_educations.${index}.completion_date`}
                              type="text"
                              className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                              placeholder="Kết thúc"
                            />
                            <ErrorMessage
                              name={`cv_cv_educations.${index}.completion_date`}
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
                          name={`cv_cv_educations.${index}.major`}
                          type="text"
                          className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                          placeholder="Tên chuyên ngành học"
                        />
                        (
                        <Field
                          name={`cv_cv_educations.${index}.degree_name`}
                          type="text"
                          className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}
                          placeholder="Tên bằng cấp"
                        />
                        )
                      </span>
                      <ErrorMessage
                        name={`cv_cv_educations.${index}.major`}
                        component="div"
                        className="alert alert-danger"
                      />
                      <ErrorMessage
                        name={`cv_cv_educations.${index}.degree_name`}
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className={`${styles["cvo-education-details"]}`}>
                      Tốt nghiệp loại {gpaText[index]}, điểm trung bình
                      <Field
                        name={`cv_cv_educations.${index}.gpa`}
                        type="text"
                        className={`${styles["text-primary"]} ${styles["cvo-educations-gpa"]}`}
                        placeholder=""
                        onChange={e => {
                          setFieldValue(`cv_cv_educations.${index}.gpa`, e.target.value);
                          onChangeGPA(e, index);
                        }}
                      />
                    </div>
                    <ErrorMessage
                      name={`cv_cv_educations.${index}.gpa`}
                      component="div"
                      className="alert alert-danger"
                    />
                    <Button
                      type="button"
                      className="p-button-sm"
                      disabled={isSubmitting}
                      onClick={() => remove(index)}
                    >
                      X
                    </Button>
                    {values.cv_cv_educations.length >= 1 && values.cv_cv_educations.length === (index + 1) ? (
                      <Button
                        type="button"
                        className="p-button-sm ml-8"
                        disabled={isSubmitting}
                        onClick={() => push({
                          degree_name: "",
                          major: "",
                          university_name: "",
                          gpa: "",
                          starting_date: "",
                          completion_date: ""
                        })}
                      >
                        +
                      </Button>
                    ) : null}
                  </div>
                ))}
              {values.cv_cv_educations.length === 0 ? (
                <Button
                  type="button"
                  className="p-button-sm"
                  disabled={isSubmitting}
                  onClick={() => push({
                    degree_name: "",
                    major: "",
                    university_name: "",
                    gpa: "",
                    starting_date: "",
                    completion_date: ""
                  })}
                >
                  +
                </Button>
              ) : null}
            </div>

            {typeof errors.cv_cv_educations === 'string' ? (
              <div className="alert alert-danger" role="alert">
                {errors.cv_cv_educations}
              </div>
            ) : null}
          </div>

        </>
      )}
    </FieldArray>
  );
};

