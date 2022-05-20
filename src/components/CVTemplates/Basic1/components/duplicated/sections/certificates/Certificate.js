import { Button } from 'primereact/button';
import { Field, ErrorMessage, FieldArray } from "formik";

import styles from './style.module.css';

export const Certificate = ({ values, errors, isSubmitting }) => {
  return (
    <FieldArray name="cv_cv_certificates">
      {({ remove, push }) => (
        <>
          <div className={`${styles["cvo-block"]} ${styles["cvo-award"]}`}>
            <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
              <span className={`${styles["cvo-award-blocktitle"]}`}>
                {/* <i className={`${styles.custommodal}`}"fa fa-gift" aria-hidden="true"></i> */}
                Giải thưởng
              </span>
            </div>
            <div className={`${styles["cvo-block-body"]} ${styles["award-table"]}`}>
              {values.cv_cv_certificates.length > 0 &&
                values.cv_cv_certificates.map((_, index) => (
                  <div className={`${styles.row}`} key={index}>
                    <div className={`${styles["cvo-award-wrapper"]}`}>
                      <span className={`${styles["cvo-award-time"]}`}>
                        <Field
                          name={`cv_cv_certificates.${index}.year`}
                          type="text"
                          className={`${styles["cvo-certificate-year"]}`}
                          placeholder="Năm đạt giải thưởng"
                        />
                        <ErrorMessage
                          name={`cv_cv_certificates.${index}.year`}
                          component="div"
                          className="alert alert-danger"
                        />
                      </span>
                    </div>
                    <div className={`${styles["cvo-award-title"]}`}>
                      <Field
                        name={`cv_cv_certificates.${index}.name`}
                        type="text"
                        className={`${styles["cvo-certificate-name"]}`}
                        placeholder="Tên giải thưởng"
                      />
                      <ErrorMessage
                        name={`cv_cv_certificates.${index}.name`}
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className={styles.clear}></div>
                    <Button
                      type="button"
                      className="p-button-sm"
                      disabled={isSubmitting}
                      onClick={() => remove(index)}
                    >
                      X
                    </Button>
                    {values.cv_cv_certificates.length >= 1 && values.cv_cv_certificates.length === (index + 1) ? (
                      <Button
                        type="button"
                        className="p-button-sm ml-8"
                        disabled={isSubmitting}
                        onClick={() => push({ name: '', year: '', })}
                      >
                        +
                      </Button>
                    ) : null}
                  </div>
                ))}
              {values.cv_cv_certificates.length === 0 ? (
                <Button
                  type="button"
                  className="p-button-sm"
                  disabled={isSubmitting}
                  onClick={() => push({ name: '', year: '', })}
                >
                  +
                </Button>
              ) : null}
            </div>
            {typeof errors.cv_cv_certificates === 'string' ? (
              <div className="alert alert-danger" role="alert">
                {errors.cv_cv_certificates}
              </div>
            ) : null}
          </div>
        </>
      )}
    </FieldArray>
  );
};

