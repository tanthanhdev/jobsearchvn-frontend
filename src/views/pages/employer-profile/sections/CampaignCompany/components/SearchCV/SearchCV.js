import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Button } from 'primereact/button';
// import { ToastContainer, toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { Dropdown } from 'primereact/dropdown';
// import { AutoComplete } from "primereact/autocomplete";
// components
// services
// import PublicService from "services/public.service";
import CvService from "services/cv.service";
import UserService from "services/user.service";
// slices
import { search_cv } from "slices/company-profile";
// utils
import dateUtils from "utils/date";
import styles from './SearchCV.module.css';
import { icons } from 'utils/icons';

export const SearchCV = ({ slug }) => {
  const { isError, isLoading } = useSelector((state) => state.profileEmployer);
  const [CVs, setCVs] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const [campaign, setCampaign] = useState(null);
  const [display_priority, setDisplayPriority] = useState("");
  const [showMore, setShowMore] = useState(false);
  // modal toggle

  const dispatch = useDispatch()

  useEffect(() => {
    if (!CVs) {
      UserService.getCampaign(slug).then((res) => {
        // setCampaign(res.data);
        // console.log(res.data);
        CvService.searchCV(res.data.name).then((res) => { setCVs(res.data); });
        // console.log(CVs)
      });
    }
    // console.log(display_priority)
  }, [dispatch])

  const languages = [
    { name: '' },
    { name: 'Tiếng việt' },
    { name: 'Tiếng anh' },
  ];

  const onLanguageChange = (e) => {
    setSelectedLanguage(e.value);
  }


  const initialValues = {
    q: "",
    adr: "",
    gender: "", //0: Nữ, 1: Nam, 2: Khác (0: Female, 1: Male, 2: Other)
    edu_lv: "",
    edu_name: "",
    comp_worked: "",
    language: "",
  };

  // const handleSeenCV = (is_active, slug) => {
  //     let data = {
  //         "is_active": is_active ? false : true,
  //     }
  //     dispatch(seen_cv({ data, slug }))
  //         .unwrap()
  //         .then((res) => {
  //             setIsReload(true);
  //         })
  //         .catch(() => {
  //         });
  // }

  const handleSearchCV = (formData) => {
    const { q, adr, gender, edu_lv, edu_name, comp_worked, language } = formData;
    dispatch(search_cv({ q, adr, gender, edu_lv, edu_name, comp_worked, language, display_priority }))
      .unwrap()
      .then((res) => {
        if (!res) {
          setCVs(null);
        } else {
          setCVs(res);
        }
      })
      .catch(() => {
        // toast.error("Tìm kiếm thất bại!", {
        //     position: toast.POSITION.BOTTOM_RIGHT
        // });
      });
  }

  return (
    <main data-v-6d20d7c5="" className={`${styles['page-container']} ${styles['has-sub-breadcrumb']}`}>
      <div data-v-6d20d7c5="" className={`${styles['breadcrumb-box']}`}>
        <h6 className={`${styles['breadcrumb-title']} ${styles['d-flex']}`}>
          <span>Tìm CV ứng viên</span>
        </h6>
        <div data-v-6d20d7c5="" className={`${styles['ml-2']}`}>
          <div data-v-a803ee2a="" data-v-6d20d7c5="" id="ntVvJ" className={`${styles['well']} ${styles['campaign-select']}`}
            style={{ overflow: 'unset' }}></div>
          <div data-v-a803ee2a="" className={`${styles['slide1']}`}>
            <div data-v-1900aee5="" data-v-a803ee2a="" className={`${styles['recruitment-select']}`}>
              <div data-v-1900aee5="" id="OSrnfvZqfh" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                  <div className={`${styles['multiselect__selectt']}`}>

                  </div>
                  <div className={`${styles['multiselect__tags']}`}>
                    <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}>

                    </div>

                    <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}>
                    </div>
                    <input name="" type="text" placeholder="Chọn chiến dịch tuyển dụng"
                      className={`${styles['multiselect__input']}`}
                      style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                    <span className={`${styles['multiselect__single']}`}>sdfsdf</span>

                  </div>
                  <div className={`${styles['multiselect__content-wrapper']}`}
                    style={{ maxHeight: '300px', display: 'none' }}>
                    <ul className={`${styles['multiselect__content']}`} style={{ dispaly: 'inline-block' }}>

                      <li className={`${styles['multiselect__element']}`}>
                        <span data-select="" data-selected="" data-deselect=""
                          className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']} ${styles['multiselect__option--selected']}`}><span
                            data-v-a803ee2a=""
                            className={`${styles['badge']} ${styles['badge-secondary']} ${styles['font-weight-normal']}
                                                            ${styles['mr-1']} ${styles['small']} ${styles['rounded-pill']}`}
                            style={{ color: 'rgb(153, 153, 153)' }}>731437</span>
                          <span data-v-a803ee2a="" className={`${styles['text-dark']}`}
                            style={{ fontSize: '12px' }}>sdfsdf
                          </span>
                        </span>
                      </li>
                      <li className={`${styles['multiselect__element']}`}>
                        <span data-select="" data-selected="" data-deselect=""
                          className={`${styles['multiselect__option']}`}>
                          <span data-v-a803ee2a=""
                            className={`${styles['badge']} ${styles['badge-secondary']} ${styles['font-weight-normal']}
                                                            ${styles['mr-1']} ${styles['small']} ${styles['rounded-pill']}`}
                            style={{ color: 'rgb(153, 153, 153)' }}>731387
                          </span>
                          <span data-v-a803ee2a="" className={`${styles['text-dark']}`}
                            style={{ fontSize: '12px' }}>sdfsdf
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6d20d7c5="" className={`${styles['container-fluid']} ${styles['page-content']} ${styles['pl-3']} ${styles['pr-3']}`}>
        <div data-v-6d20d7c5="" className={`${styles['d-flex']}`}>
          <div data-v-6d20d7c5="" className={`${styles['filter-col']} ${styles['bg-white']} ${styles['shadow-sm']} ${styles['rounded']}`}>
            {/* Form filter cv here */}
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={handleSearchCV}
            // onSubmit={async (values) => {
            // 	await new Promise((r) => setTimeout(r, 500));
            // 	console.log(JSON.stringify(values, null, 2));
            // }}
            >
              {({ setFieldValue }) => (
                <Form className={styles["filter-container"]}>
                  <div data-v-0f06c0b3="" className={`${styles['filter-body']} ${styles['ps']} ${styles['ps--active-y']}`}>
                    <div data-v-0f06c0b3="" className={`${styles['p-2']} ${styles['border-bottom']}`}>
                      <div data-v-0f06c0b3="" className={`${styles['font-weight-bold']} ${styles['text-uppercase']}
                                        ${styles['mb-2']} ${styles['text-primary']}`}>
                        Tìm kiếm cơ bản
                      </div>
                      <div data-v-0f06c0b3="">
                        <div className={`${styles['form-group']}`}><label className={`${styles['font-weight-bold']}`}>Từ khóa cần tìm</label>
                          <div data-v-237e1ab2="">
                            <div data-v-237e1ab2="" className={`${styles['input-container']} ${styles['ml-auto']}`}>
                              <Field
                                name="q"
                                type="text"
                                placeholder="Nhập từ khóa"
                                className={`${styles['form-control']}`}
                              />
                              <ErrorMessage
                                name="q"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles['form-group']}`}>
                          <label className={`${styles['font-weight-bold']}`}>Địa điểm</label>
                          <div data-v-1900aee5="">
                            <div data-v-1900aee5="" id="zzEFICjwlK"
                              className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                              <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                                <div className={`${styles['multiselect__selectt']}`}>

                                </div>
                                <div className={`${styles['multiselect__tags']}`}>
                                  <Field
                                    name="adr"
                                    type="text"
                                    placeholder="Nhập địa điểm"
                                    className={`${styles['form-control']}`}
                                  />
                                  <ErrorMessage
                                    name="adr"
                                    component="div"
                                    className="alert alert-danger"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-0f06c0b3="" className={`${styles['p-2']}`}>
                      <div data-v-0f06c0b3="" className={`${styles['form-group']}`}>
                        <label>
                          <div className={`${styles['v-popover']}`}>
                            <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                              <div className={`${styles['d-flex']} ${styles['align-item-center']}`}><span
                                className={`${styles['font-weight-bold']}`}>Giới tính</span> <i
                                  className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`} style={{ marginTop: '4px' }}></i>
                              </div>
                            </div>
                          </div>
                        </label>
                        <div className={`${styles['d-flex']}`}>
                          <div className={`${styles['mr-3']}`}>
                            <label>
                              <Field type="radio" name="gender" value="" />
                              Tất cả
                            </label>
                          </div>
                          <div className={`${styles['mr-3']}`}>
                            <label>
                              <Field type="radio" name="gender" value="1" />
                              Nam
                            </label>
                          </div>
                          <div className={`${styles['mr-3']}`}>
                            <label>
                              <Field type="radio" name="gender" value="0" />
                              Nữ
                            </label>
                          </div>
                        </div>
                      </div>
                      <div data-v-0f06c0b3="" className={`${styles['form-group']}`}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                          <label className={`${styles['font-weight-bold']}`}>
                            Trình độ học vấn
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Đại học" />
                            Đại học
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Cao đẳng" />
                            Cao đẳng
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Trung cấp" />
                            Trung cấp
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Sau đại học (Thạc sỹ/Tiến sỹ)" />
                            Sau đại học (Thạc sỹ/Tiến sỹ)
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Trung tâm đào đạo" />
                            Trung tâm đào đạo
                          </label>
                          <label>
                            <Field type="checkbox" name="edu_lv" value="Du học" />
                            Du học
                          </label>
                        </div>
                      </div>
                      <div data-v-0f06c0b3="" className={`${styles['form-group']}`}>
                        <label className={`${styles['font-weight-bold']}`}>Trường	học</label>
                        <div data-v-1900aee5="">
                          <div data-v-1900aee5="" id="nZhMDqpoqK"
                            className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                            <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                              <Field
                                name="edu_name"
                                type="text"
                                placeholder="Nhập tên trường học"
                                className={`${styles['form-control']}`}
                              />
                              <ErrorMessage
                                name="edu_name"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-c70bf19a="" data-v-0f06c0b3="" className={`${styles['form-group']} ${styles['disabled']}`}>
                        <label data-v-c70bf19a="" className={`${styles['font-weight-bold']}`}>
                          <div data-v-c70bf19a="" className={`${styles['v-popover']}`}>
                            <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                              <div data-v-c70bf19a="" className={`${styles['d-flex']} ${styles['align-item-center']}`}>
                                <span
                                  data-v-c70bf19a="">Từng làm trong công ty</span><i
                                    data-v-c70bf19a="" className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`}
                                    style={{ marginTop: '4px' }}></i>
                              </div>
                              <Field
                                name="comp_worked"
                                type="text"
                                placeholder="Nhập tên công ty"
                                className={`${styles['form-control']}`}
                              />
                              <ErrorMessage
                                name="comp_worked"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div data-v-382a777c="" data-v-0f06c0b3="" className={`${styles['form-group']} ${styles['disabled']}`}>
                        <label data-v-382a777c="" className={`${styles['font-weight-bold']}`}>
                          <div data-v-382a777c="" className={`${styles['v-popover']}`}>
                            <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                              <div data-v-382a777c="" className={`${styles['d-flex']} ${styles['align-item-center']}`}>
                                <span data-v-382a777c="">Ngoại ngữ</span>
                                <i data-v-382a777c="" className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`}
                                  style={{ marginTop: '4px' }}></i>
                              </div>
                            </div>
                          </div>
                        </label>
                        {/* Select option here */}
                        <div data-v-1900aee5="" data-v-382a777c="">
                          <Dropdown
                            value={selectedLanguage}
                            options={languages}
                            onChange={(e) => {
                              onLanguageChange(e);
                              setFieldValue("language", e.value.name);
                            }}
                            optionLabel="name" placeholder="Chọn ngoại ngữ" />
                          <ErrorMessage
                            name="language"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-0f06c0b3="" className={`${styles['filter-footer']} ${styles['p-2']} ${styles['border-top']}`}>
                    <button data-v-0f06c0b3="" type="submit" disabled={isLoading}
                      className={`${styles['btn']} ${styles['min-width']} ${styles['btn-primary']}
                                    ${styles['text-uppercase']} ${styles['mb-2']} ${styles['btn-block']}`}
                      style={{ padding: '8px' }}>
                      {isLoading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}Tìm CV
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div data-v-6d20d7c5="" className={`${styles['content-col']}`}>
            <div data-v-6d20d7c5="" className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['bg-white']}
                            ${styles['shadow-sm']} ${styles['rounded']} ${styles['p-3']} ${styles['mb-3']}`}>
              <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                Ưu tiên hiển thị:
              </div>
              <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                <label className={styles['label-display-form']}>
                  <input type="radio" name="display_priority" defaultChecked={true}
                    value="latest" onChange={(e) => { setDisplayPriority(e.target.value) }} />
                  Mới cập nhật
                </label>
              </div>
              <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                <label className={styles['label-display-form']}>
                  <input type="radio" name="display_priority"
                    value="on_job" onChange={(e) => { setDisplayPriority(e.target.value) }} />
                  Đang tìm việc
                </label>
              </div>
              <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                <label className={styles['label-display-form']}>
                  <input type="radio" name="display_priority"
                    value="exp" onChange={(e) => { setDisplayPriority(e.target.value) }} />
                  Có kinh nghiệm
                </label>
              </div>
            </div>
            <div data-v-243d831c="" data-v-6d20d7c5="" className={`${styles['mb-3']}`}>
              <div data-v-243d831c="" className={`${styles['bg-white']} ${styles['rounded']}`}>
                <table data-v-243d831c=""
                  className={`${styles['table']} ${styles['mb-0']} ${styles['border-0']}
                                    ${styles['bg-white']} ${styles['shadow-sm']} ${styles['rounded']} ${styles['text-normal']}`}>
                  <thead data-v-243d831c="">
                    <tr data-v-243d831c="">
                      <th data-v-243d831c="" width="230px"
                        className={`${styles['font-weight-bolder']} ${styles['text-normal']} ${styles['text-uppercase']}`}>
                        <span data-v-6d20d7c5="" data-v-243d831c="">
                          Tìm thấy <span
                            data-v-6d20d7c5=""
                            data-v-243d831c=""
                            className={`${styles['text-primary']} ${styles['font-weight-bold']}`}>
                            {CVs && CVs.totals}
                          </span> ứng viên phù hợp
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody data-v-243d831c="">
                    {CVs && CVs.results.map((cv, index) => (
                      <tr data-v-243d831c="" key={index}>
                        <td data-v-243d831c="" className={`${styles['align-top']}`}>
                          <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mb-3']}`}>
                            <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['align-items-center']}`}>
                              <a data-v-2a31697a="" data-v-243d831c=""
                                href={"/cv/" + cv.slug}
                                target="_blank"
                                className={`${styles['rounded-circle']} ${styles['avatar']}`}
                                style={{
                                  width: '64px', height: '64px', flex: '0 0 64px',
                                  backgroundImage: 'url("' + (cv.member.avatar ? cv.member.avatar : icons.logo_default) + '")'
                                }}>
                              </a>
                              {/* <div data-v-243d831c="" className={`${styles['mt-2']}`}>
																		<span data-v-243d831c=""
																				className={`${styles['badge']} ${styles['small']} ${styles['badge-secondary']}
																				${styles['rounded-pill']} ${styles['px-2']} ${styles['font-weight-normal']}`}>Đã xem</span>
																</div> */}
                            </div>
                            <div data-v-243d831c="" className={`${styles['ml-2']}`} style={{ width: '200px' }}>
                              <div data-v-243d831c="" className={`${styles['ml-1']}`}>
                                <a data-v-243d831c=""
                                  href={"/cv/" + cv.slug}
                                  target="_blank"
                                  className={`${styles['font-weight-bold']} ${styles['text-primary-hover']}
                                                                        ${styles['text-capitalize']} ${styles['cv-fullname']}`}>
                                  {cv.member.user.first_name + " " + cv.member.user.last_name}
                                </a>
                                <div data-v-243d831c="" className={`${styles['mt-2']}`}>
                                  {cv.member.is_looking_for_a_job ? (
                                    <span data-v-243d831c=""
                                      className={`${styles['badge']} ${styles['badge-danger']} ${styles['font-weight-normal']}
                                                                            ${styles['small']} ${styles['rounded-pill']} ${styles['px-2']}`}>Đang tìm việc
                                    </span>
                                  ) : ""}
                                </div>
                                <div data-v-243d831c=""
                                  className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                  <div
                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                    <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                  </div>
                                  <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>
                                    {cv.title}
                                  </span>
                                </div>
                                <div data-v-243d831c=""
                                  className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                  <div
                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                    <i className={`${styles['far']} ${styles['fa-map-marker']}`}></i>
                                  </div>
                                  <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>{cv.member.user.address ? cv.member.user.address : "Chưa bổ sung"}</span>
                                </div>
                              </div>
                              <div data-v-243d831c=""
                                className={`${styles['p-1']} ${styles['rounded']} ${styles['mt-2']} ${styles['objective-text-block']}`}
                                style={{ width: '200px' }}>
                                <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                  <div
                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                    <i className={`${styles['far']} ${styles['fa-clock']}`}></i>
                                  </div>
                                  <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Cập nhật: {dateUtils.timeSince(new Date(cv.updated_at))}
                                  </span>
                                </div>

                                <div data-v-243d831c=""
                                  className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                  <div
                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                    <i className={`${styles['far']} ${styles['fa-eye']}`}></i>
                                  </div> <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>{cv.view} lượt xem</span>
                                </div>
                                {/* <div data-v-243d831c=""
																		className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
																		<div
																				className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
																				<i className={`${styles['far']} ${styles['fa-id-badge']}`}></i>
																		</div>
																		<span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt mở liên hệ </span>
																</div> */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td data-v-243d831c="" className={`${styles['align-top']}`}>
                          <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                            <strong data-v-243d831c="">Kinh nghiệm</strong>
                            {cv.cv_cv_experiences && cv.cv_cv_experiences.map((exp, index) => (
                              <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`} key={index}>
                                <div
                                  className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                  <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                </div>
                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>{exp.job_title} - {exp.company_name}
                                </span>
                              </div>
                            ))}
                            {/* <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...</div> */}
                          </div>
                          <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                            <strong data-v-243d831c="">Học vấn</strong>
                            {cv.cv_cv_educations && cv.cv_cv_educations.map((edu, index) => (
                              <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`} key={index}>
                                <div
                                  className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                  <i className={`${styles['far']} ${styles['fa-graduation-cap']}`}></i>
                                </div>
                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>{edu.university_name + "(" + edu.major + " - " + edu.degree_name + ")"} </span>
                              </div>
                            ))}
                          </div>
                          <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                            <strong data-v-243d831c="">Mục tiêu sự nghiệp</strong>
                            <p data-v-766cea3c="" className={`${styles['mb-0']}`}>{showMore ? cv.target_major : `${cv.target_major.substring(0, 100)}`}
                              <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}
                                onClick={() => setShowMore(!showMore)}>{showMore ? "Ít hơn" : "Xem thêm..."}</div></p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div data-v-6d20d7c5="" className={`${styles['d-flex']} ${styles['justify-content-center']}`}></div>
          </div>
        </div>
      </div>
    </main>
  );
};
