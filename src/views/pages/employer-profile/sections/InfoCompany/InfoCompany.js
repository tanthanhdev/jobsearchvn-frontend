import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

import { Navigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from 'primereact/button';
import * as Yup from "yup";

import { FileUploader } from "react-drag-drop-files";

export const InfoCompany = ({isActive, isEdit}) => {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const { profile, isError, isSuccess, isLoading } = useSelector((state) => state.profileEmployer);
    // console.log(profile);
    const [initialValues, setInitialValues] = useState({
        company_name: "",
        phone_number: "",
        company_location: "",
        company_size: "",
        description: "",
        company_logo: null,
      });
    
      const validationSchema = Yup.object().shape({
        // company_name: Yup.string().required("This field is required!"),
        // phone_number: Yup.string().required("This field is required!"),
        // company_location: Yup.string().required("This field is required!"),
        // company_size: Yup.string().required("This field is required!"),
        // description: Yup.string().required("This field is required!"),
        // company_logo: Yup.string().required("This field is required!"),
      });

      useEffect(() => {
        if(profile) {
            setInitialValues({
                company_name: profile.company_name,
                phone_number: profile.user.phone_number,
                company_location: profile.company_location,
                company_size: profile.company_size,
                description: profile.description,
            })
        }
      }, [profile])

      const handleChange = (file) => {
        setFile(file);
      };

      const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInitialValues(prevState => ({
            ...prevState,    // keep all other key-value pairs
            [name]: value   //
        }))
      }
    
      const handleSaveProfile = (formValue) => {
        console.log(initialValues);
        //call api save profile employer
        // dispatch(login({ email, password }))
        //   .unwrap()
        //   .then((res) => { 
        //     dispatch(authActions.updateUser(res.user))
        //   })
        //   .catch(() => {
        //   });
      };
    
    return (
        <>
            { profile && isSuccess && 
            <div class={`info-company ${isActive ? 'apply' : ''}`}>
                <div class="content">
                    <div class="content__left">
                        <div class="content__left-info">
                            <div class="left-heading">Công ty tài chính Fecredit</div>
                            <div>Thông tin chung</div>
                            <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSaveProfile}
                            >
                            <Form id="employer-form">
                                <div class="left__item">
                                    <div class="left__item-lable">Tên công ty</div>
                                    <div class="item__info">
                                        {isEdit ? 
                                            <>
                                                <Field name="company_name" type="text" onChange={handleInputChange} value={initialValues.company_name}/>
                                                <ErrorMessage name="company_name" component="div" className="alert alert-danger"
                                                />
                                            </> :
                                            // <input type="text" value={profile.company_name}/> : 
                                            <>
                                                <div class="item__info-lable">{profile.company_name}</div>
                                                <i class="item__info-icon fas fa-pen"></i>
                                            </>
                                        }
                                    </div>
                                </div>
                                
                                <div class="left__item">
                                    <div class="left__item-lable">Điện thoại</div>
                                    <div class="item__info">
                                        {isEdit ? 
                                            <>
                                                <Field name="phone_number" type="text" onChange={handleInputChange} value={initialValues.phone_number}/>
                                                <ErrorMessage name="phone_number" component="div" className="alert alert-danger"
                                                />
                                            </> :
                                            <>
                                                <div class="item__info-lable">{profile.user.phone_number}</div>
                                                <i class="item__info-icon fas fa-pen"></i>
                                            </>
                                        }
                                    </div>
                                </div>
                    
                                <div class="left__item">
                                    <div class="left__item-lable">Địa chỉ công ty</div>
                                    <div class="item__info">
                                        {isEdit ? 
                                            <>
                                                <Field name="company_location" type="text" onChange={handleInputChange} value={initialValues.company_location}/>
                                                <ErrorMessage name="company_location" component="div" className="alert alert-danger"
                                                />
                                            </> :
                                            <>
                                                <div class="item__info-lable">{profile.company_location}</div>
                                                <i class="item__info-icon fas fa-pen"></i>
                                            </>
                                        }
                                    </div>
                                </div>

                                <div class="left__item">
                                    <div class="left__item-lable">Số lượng nhân viên</div>
                                    <div class="item__info">
                                        {isEdit ? 
                                            <>
                                                <Field name="company_size" type="text" onChange={handleInputChange} value={initialValues.company_size}/>
                                                <ErrorMessage name="company_size" component="div" className="alert alert-danger"
                                                />
                                            </> :
                                            <>
                                                <div class="item__info-lable">{profile.company_size}</div>
                                                <i class="item__info-icon fas fa-pen"></i>
                                            </>
                                        }
                                    </div>
                                </div>
                    
                                {/* <div class="left__item">
                                    <div class="left__item-lable">Ngành nghề</div>
                                    <div class="item__info">
                                        <div class="item__info--branch">
                                            <div class="item__info--branch-lable">IT-Phần mềm</div>
                                            <div class="item__info--branch-del">X</div>
                                        </div>
                                        <i class="item__info-icon fas fa-pen"></i>
                                    </div>
                                </div> */}

                                <div class="left__item">
                                    <div class="left__item-lable">Sơ lược về công ty</div>
                                    {isEdit ? 
                                        <>
                                            <Field name="description" type="text" onChange={handleInputChange} value={initialValues.description}/>
                                            <ErrorMessage name="description" component="div" className="alert alert-danger"
                                            />
                                        </> :
                                        // <textarea name="" id="" cols="30" rows="5">{profile.description}</textarea> : 
                                        <>
                                            <div class="left__item-content">{profile.description}</div>
                                        </>
                                    }
                                    
                                </div>

                                <div class="left__item">
                                    <div class="left__item-lable">Logo công ty</div>
                                    {/* <div class="left__item-content img_choose">Kéo và thả hình ảnh ở đây hoặc chọn file</div> */}
                                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                </div>
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Lưu</span>
                                </Button>
                            </Form>
                            </Formik>
                    
                            {/* <div class="left__item">
                                <div class="left__item-lable">Hình ảnh công ty</div>
                                <div class="left__item-content img_choose">Kéo và thả hình ảnh ở đây</div>
                            </div> */}
                        </div>
                    </div>
                    <div class="content__right">
                        <div class="content__right-heading">Cài đặt chế độ công ty</div>
                        <div class="regime">
                            <input type="radio" value="Công khai" />
                            Công khai
                        </div>
                        <div class="regime">
                            <input type="radio" value="Riêng tư" />
                            Riêng tư
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
};
