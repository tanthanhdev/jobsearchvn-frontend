import React, { useEffect, useState } from 'react';
// import { Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";
import { saveEmployerProfile } from 'slices/company-profile';
import { FileUploader } from "react-drag-drop-files";
// slices
import { get_employer_detail } from 'slices/company-profile';

export const InfoCompany = ({ isActive, isEdit, setIsEdit }) => {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const [isReload, setIsReload] = useState(null);
    const [profile, setProfile] = useState(null);
    const [initialValuesState, setInitialValuesState] = useState({
        company_name: "",
        phone_number: "",
        company_location: "",
        company_size: "",
        description: "",
    });
    const { isSuccess, isLoading } = useSelector((state) => state.profileEmployer);
    const dispatch = useDispatch();
    const initialValues = {
        company_name: profile ? profile.company_name : "",
        phone_number: profile ? profile.user.phone_number : "",
        company_location: profile ? profile.company_location : "",
        company_size: profile ? profile.company_size : "",
        description: profile ? profile.description : "",
    }
    const validationSchema = Yup.object().shape({
        // company_name: Yup.string().required("This field is required!"),
        // phone_number: Yup.string().required("This field is required!"),
        // company_location: Yup.string().required("This field is required!"),
        // company_size: Yup.string().required("This field is required!"),
        // description: Yup.string().required("This field is required!"),
        // logo: Yup.string().required("This field is required!"),
    });
    const handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        setInitialValuesState(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [name]: value   //
        }))
    }

    useEffect(() => {
        dispatch(get_employer_detail())
            .unwrap()
            .then((data) => {
                setProfile(data);
            })
            .catch((err) => {
                console.log(err);
            });
        setIsReload(false);
        setIsEdit(false);
    }, [isReload === true])

    const handleChange = (file) => {
        setFile(file);
    };

    const handleSaveProfile = (formValue) => {
        let formData = new FormData();
        if (file) {
            formData.append("logo", file);
        }
        formData.append("company_name", formValue.company_name);
        formData.append("phone_number", formValue.phone_number);
        formData.append("company_location", formValue.company_location);
        formData.append("company_size", formValue.company_size);
        formData.append("description", formValue.description);
        //call api save profile employer
        dispatch(saveEmployerProfile(formData))
            .unwrap()
            .then(() => {
                setIsReload(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {profile && isSuccess &&
                <div className={`info-company ${isActive ? 'apply' : ''}`}>
                    <div className="content">
                        <div className="content__left">
                            <div className="content__left-info">
                                <div className="left-heading">C??ng ty t??i ch??nh {profile.company_name}</div>
                                <div>Th??ng tin chung</div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSaveProfile}
                                >
                                    {({ setFieldValue }) => (

                                        <Form id="employer-form">
                                            <div className="left__item">
                                                <div className="left__item-lable">T??n c??ng ty</div>
                                                <div className="item__info">
                                                    {isEdit ?
                                                        <>
                                                            <Field name="company_name" type="text" onChange={(e) => {
                                                                handleInputChange(e);
                                                                setFieldValue("company_name", e.target.value);
                                                            }} />
                                                            <ErrorMessage name="company_name" component="div" classNameName="alert alert-danger"
                                                            />
                                                        </> :
                                                        // <input type="text" value={profile.company_name}/> : 
                                                        <>
                                                            <div className="item__info-lable">{profile.company_name}</div>
                                                            <i className="item__info-icon fas fa-pen"></i>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            <div className="left__item">
                                                <div className="left__item-lable">??i???n tho???i</div>
                                                <div className="item__info">
                                                    {isEdit ?
                                                        <>
                                                            <Field name="phone_number" type="text" onChange={(e) => {
                                                                handleInputChange(e);
                                                                setFieldValue("phone_number", e.target.value);
                                                            }} />
                                                            <ErrorMessage name="phone_number" component="div" classNameName="alert alert-danger"
                                                            />
                                                        </> :
                                                        <>
                                                            <div className="item__info-lable">{profile.user.phone_number}</div>
                                                            <i className="item__info-icon fas fa-pen"></i>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            <div className="left__item">
                                                <div className="left__item-lable">?????a ch??? c??ng ty</div>
                                                <div className="item__info">
                                                    {isEdit ?
                                                        <>
                                                            <Field name="company_location" type="text" onChange={(e) => {
                                                                handleInputChange(e);
                                                                setFieldValue("company_location", e.target.value);
                                                            }} />
                                                            <ErrorMessage name="company_location" component="div" classNameName="alert alert-danger"
                                                            />
                                                        </> :
                                                        <>
                                                            <div className="item__info-lable">{profile.company_location}</div>
                                                            <i className="item__info-icon fas fa-pen"></i>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            <div className="left__item">
                                                <div className="left__item-lable">S??? l?????ng nh??n vi??n</div>
                                                <div className="item__info">
                                                    {isEdit ?
                                                        <>
                                                            <Field name="company_size" type="text" onChange={(e) => {
                                                                handleInputChange(e);
                                                                setFieldValue("company_size", e.target.value);
                                                            }} />
                                                            <ErrorMessage name="company_size" component="div" classNameName="alert alert-danger"
                                                            />
                                                        </> :
                                                        <>
                                                            <div className="item__info-lable">{profile.company_size}</div>
                                                            <i className="item__info-icon fas fa-pen"></i>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            {/* <div className="left__item">
                                        <div className="left__item-lable">Ng??nh ngh???</div>
                                        <div className="item__info">
                                            <div className="item__info--branch">
                                                <div className="item__info--branch-lable">IT-Ph???n m???m</div>
                                                <div className="item__info--branch-del">X</div>
                                            </div>
                                            <i className="item__info-icon fas fa-pen"></i>
                                        </div>
                                    </div> */}

                                            <div className="left__item">
                                                <div className="left__item-lable">S?? l?????c v??? c??ng ty</div>
                                                {isEdit ?
                                                    <>
                                                        <Field name="description" type="text" onChange={(e) => {
                                                            handleInputChange(e);
                                                            setFieldValue("description", e.target.value);
                                                        }} />
                                                        <ErrorMessage name="description" component="div" classNameName="alert alert-danger"
                                                        />
                                                    </> :
                                                    // <textarea name="" id="" cols="30" rows="5">{profile.description}</textarea> : 
                                                    <>
                                                        <div className="left__item-content">{profile.description}</div>
                                                    </>
                                                }

                                            </div>

                                            <div className="left__item">
                                                <div className="left__item-lable">Logo c??ng ty</div>
                                                {/* <div className="left__item-content img_choose">K??o v?? th??? h??nh ???nh ??? ????y ho???c ch???n file</div> */}
                                                <FileUploader handleChange={(e) => {
                                                    handleChange(e);
                                                    // setFieldValue("logo", e.target.file);
                                                }} name="file" types={fileTypes} />
                                            </div>
                                            <Button type="submit" disabled={isLoading}>
                                                {isLoading && (
                                                    <span classNameName="spinner-border spinner-border-sm"></span>
                                                )}
                                                <span>L??u</span>
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>
                                {/* <div className="left__item">
                                <div className="left__item-lable">H??nh ???nh c??ng ty</div>
                                <div className="left__item-content img_choose">K??o v?? th??? h??nh ???nh ??? ????y</div>
                            </div> */}
                            </div>
                        </div>
                        <div className="content__right">
                            <div className="content__right-heading">C??i ?????t ch??? ????? c??ng ty</div>
                            <div className="regime">
                                <label>
                                    <input type="radio" value="C??ng khai" checked={profile.status} onChange={() => {
                                        let formData = new FormData();
                                        formData.append("status", true);
                                        dispatch(saveEmployerProfile(formData))
                                            .unwrap()
                                            .then(() => {
                                                setIsReload(true);
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }} />
                                    C??ng khai
                                </label>
                            </div>
                            <div className="regime">
                                <label>
                                    <input type="radio" value="Ri??ng t??" checked={!profile.status} onChange={() => {
                                        let formData = new FormData();
                                        formData.append("status", false);
                                        dispatch(saveEmployerProfile(formData))
                                            .unwrap()
                                            .then(() => {
                                                setIsReload(true);
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }} />
                                    Ri??ng t??
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};
