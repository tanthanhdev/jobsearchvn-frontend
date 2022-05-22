import { Button } from 'primereact/button';
import { Field, ErrorMessage, FieldArray } from "formik";

import styles from './style.module.css';

export const Skill = ({values, errors, isSubmitting}) => {
  return (
    <FieldArray name="cv_cv_skills">
      {({ remove, push }) => (
        <>
          {values.cv_cv_skills.length > 0 &&
            values.cv_cv_skills.map((_, index) => (
              <div className={`${styles["cvo-skill-block"]}`} key={index}>
                <div >
                  <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>
                    <Field
                      name={`cv_cv_skills.${index}.name`}
                      type="text"
                      className={`${styles["cvo-skill-name"]}`}
                      placeholder="Tên kỹ năng"
                    />
                    <ErrorMessage
                      name={`cv_cv_skills.${index}.name`}
                      component="div"
                      className="alert alert-danger"
                    />
                  </span></div>
                  <div className={`${styles["cvo-skillgroup-skill-description"]}`}>

                    <Field
                      name={`cv_cv_skills.${index}.description`}
                      type="text"
                      component="textarea"
                      rows={4}
                      className={`${styles["cvo-skill-description"]}`}
                      placeholder="Mô tả kỹ năng của bạn"
                    />
                    <ErrorMessage
                      name={`cv_cv_skills.${index}.description`}
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  className="p-button-sm"
                  disabled={isSubmitting}
                  onClick={() => remove(index)}
                >
                  X
                </Button>
                {values.cv_cv_skills.length >= 1 && values.cv_cv_skills.length === (index + 1) ? (
                  <Button
                    type="button"
                    className="p-button-sm ml-8"
                    disabled={isSubmitting}
                    onClick={() => push({ name: '', description: '', })}
                  >
                    +
                  </Button>
                ) : null}
              </div>
            ))}
          {values.cv_cv_skills.length === 0 ? (
            <Button
              type="button"
              className="p-button-sm"
              disabled={isSubmitting}
              onClick={() => push({ name: '', description: '', })}
            >
              +
            </Button>
          ) : null}
          {typeof errors.cv_cv_skills === 'string' ? (
            <div className="alert alert-danger" role="alert">
              {errors.cv_cv_skills}
            </div>
          ) : null}
        </>
      )}
    </FieldArray>
  );
};

