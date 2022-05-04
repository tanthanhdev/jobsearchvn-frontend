import { useState ,useEffect } from 'react';
import { Button } from 'primereact/button';
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

import styles from './style.module.css';

export const Skill = ({onHandleSkill, isPostForm, setIsPostForm}) => {
    const initialValues = {
        skills: [
            {
                name: "",
                description: "",
            },
        ],
    };
    // const [ name, setName ] = useState(initialValues.name);
    // const [ description, setDescription ] = useState(initialValues.description);

    useEffect(() => {
        if (isPostForm) {
            console.log('da duoc quyen submit form education', isPostForm);
            document.getElementById('submitFormSkill').click();
        }
    }, [isPostForm]);

    const validationSchema = Yup.object().shape({
        skills: Yup.array()
            .of(Yup.object().shape({
                name: Yup.string().required("This field is required!"),
                description: Yup.string().required("This field is required!"),
                // Rest of your amenities object properties
                })
            )
            .min(1, "Need at least a skill")
    });

    const handlePostCV = (formValue) => {
        console.log('skills: ', formValue);
        onHandleSkill(formValue); //Values to parent here
        setIsPostForm(false); //reset
    };

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handlePostCV}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
        >
            {({values}) => (
            <Form>
                <FieldArray name="skills">
                    {({ insert, remove, push }) => (
                        <>
                        {values.skills.length > 0 &&
                            values.skills.map((skill, index) => (
                            <>

                                <div className={`${styles.row}`} key={index}>
                                    <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>
                                        <Field
                                            name={`skills.${index}.name`}
                                            type="text"
                                            className={`${styles["cvo-profile-title"]}`}
                                            placeholder="Tên kỹ năng"
                                        />
                                        <ErrorMessage
                                            name={`skills.${index}.name`}
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                        </span></div>
                                    <div className={`${styles["cvo-skillgroup-skill-description"]}`}>

                                    <Field
                                            name={`skills.${index}.description`}
                                            type="text"
                                            component="textarea"
                                            rows={4}
                                            className={`${styles["cvo-profile-title"]}`}
                                            placeholder="Mô tả kỹ năng của bạn"
                                        />
                                        <ErrorMessage
                                            name={`skills.${index}.description`}
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    className="secondary"
                                    onClick={() => remove(index)}
                                    >
                                    X
                                </Button>
                            </>
                        ))}
                        {/* <Button
                            id="submitFormSkill"
                            hidden={true}
                            type="submit"
                            label="submit"
                        /> */}
                        {/* <ErrorMessage
                            name="skills"
                            component="div"
                            className="alert alert-danger"
                        /> */}
                        <Button
                            type="button"
                            className="secondary"
                            onClick={() => push({ name: '', description: '', })}
                            >
                            Thêm
                        </Button>
                        </>
                    )}
                </FieldArray>
                <Button type="submit" id="submitFormSkill" >Lưu</Button>
            </Form>
            )}
        </Formik>
    );
};

