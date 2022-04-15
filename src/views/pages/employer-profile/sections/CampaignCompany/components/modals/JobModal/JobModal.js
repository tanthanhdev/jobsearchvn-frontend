import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Chips } from 'primereact/chips';
import { Editor } from 'primereact/editor';
import Moment from 'moment';
// components
// services
import userService from "services/user.service";
import jobService from "services/job.service";
import publicService from "services/public.service";
// slices
import { create_job } from "slices/company-profile";
import { update_job } from "slices/company-profile";
// utils
import { icons as iconsUtil } from 'utils/icons';
import styles from '../../PostJob/PostJob.module.css';
import styles2 from './JobModal.module.css';

export const JobModal = ({ job, campaign, slug, isEdit, setIsReload, showModal, toggleShow }) => {
  const { isError, isLoading } = useSelector((state) => state.profileEmployer);
  const user = JSON.parse(localStorage.getItem('user'));
  // const { message } = useSelector((state) => state.message);
  const [phoneNumber, setPhoneNumber] = useState(job ? job.phone_number : (user ? user.phone_number : ""));
  const [email, setEmail] = useState(job ? job.email : (user ? user.email : ""));
  const [fullName, setFullName] = useState(job ? job.full_name : (user ? user.first_name + " " + user.last_name : ""));
  const [jobTypes, setJobTypes] = useState([]);
  const [tags, setTags] = useState(job ? () => {
    let tagTemp = [];
    job.tag.map(tag => {
      tagTemp.push(tag.name);
    })
    return tagTemp;
  } : []);
  const [description, setDescription] = useState(job ? job.description : '');
  const [job_requirement, setJobRequirement] = useState(job ? job.job_requirement : '');
  // select or autocomplete
  const [filteredJobTypes, setFilteredJobTypes] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(job ? job.job_type : null);
  const [selectedCurrency, setSelectedCurrency] = useState(job ? job.currency : null);
  const [selectedLevel, setSelectedLevel] = useState(job ? job.level : null);
  const [selectedExperience, setSelectedExperience] = useState(job ? job.experience : null);
  const [selectedSalaryType, setSelectedSalaryType] = useState(job ? job.salary_type : null);
  const [selectedCity, setSelectedCity] = useState(job ? () => {
    let cityTemp = [];
    job.job_job_addresses.map((adr) => {
      cityTemp.push(adr.city.id);
    })
    return cityTemp;
  } :[]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(job ? job.country.id : null);
  const [countries, setCountries] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(job ? () => {
    let iconTemp = [];
    job.job_benefits.map(icon => {
      iconTemp.push(icon.icon);
    })
    return iconTemp;
  } : []);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    jobService.getJobTypes().then((res) => setJobTypes(res.data));
    publicService.getCities().then((res) => { setCities(res); });
    publicService.getCountries().then((res) => { setCountries(res.data); });
    if (job) {
      console.log(job);
    }
  }, [dispatch, showModal===true])


  const currencies = [
    { name: 'VND' },
    { name: 'Dolar' },
  ];

  const levels = [
    { name: 'Nhân viên' },
    { name: 'Trưởng phòng' },
  ];

  const experiences = [
    { name: "Chưa có kinh nghiệm" },
    { name: "1 năm kinh nghiệm" },
    { name: "Trên 1 năm kinh nghiệm" },
    { name: "Dưới 1 năm kinh nghiệm" },
    { name: "2 năm kinh nghiệm" },
    { name: "Trên 2 năm kinh nghiệm" },
    { name: "Dưới 2 năm kinh nghiệm" },
    { name: "3 năm kinh nghiệm" },
    { name: "Trên 3 năm kinh nghiệm" },
    { name: "Dưới 3 năm kinh nghiệm" },
    { name: "3 năm kinh nghiệm" },
    { name: "Trên 3 năm kinh nghiệm" },
    { name: "Dưới 3 năm kinh nghiệm" },
    { name: "4 năm kinh nghiệm" },
    { name: "Trên 4 năm kinh nghiệm" },
    { name: "Dưới 4 năm kinh nghiệm" },
    { name: "5 năm kinh nghiệm" },
    { name: "Trên 5 năm kinh nghiệm" },
    { name: "Dưới 5 năm kinh nghiệm" },
  ];

  const salaryTypes = [
    { name: 'Thương lượng' },
    { name: 'Lương' },
    { name: 'Lương khoảng' },
  ];

  const icons = [
    { name: 'book', code: iconsUtil.flag_book },
    { name: 'person', code: iconsUtil.flag_person },
  ];

  const onCurrencyChange = (e) => {
    setSelectedCurrency(e.value);
  }

  const onLevelChange = (e) => {
    setSelectedLevel(e.value);
  }

  const onExperienceChange = (e) => {
    setSelectedExperience(e.value);
  }

  const onSalaryTypeChange = (e) => {
    setSelectedSalaryType(e.value);
  }

  const onCityChange = (e, index) => {
    let cityValue = e.target.value;
    // 1. Make a shallow copy of the array
    let temp_state = [...selectedCity];
    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[index] };
    // 3. Update the property you're interested in
    temp_element = cityValue;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[index] = temp_element;
    setSelectedCity(temp_state);
  }

  const onIconChange = (e, index) => {
    let iconValue = e.target.value;
    // 1. Make a shallow copy of the array
    let temp_state = [...selectedIcon];
    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[index] };
    // 3. Update the property you're interested in
    temp_element = iconValue;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[index] = temp_element;
    setSelectedIcon(temp_state);
  }

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  }

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  }
  const header = renderHeader();

  const searchJobType = (event) => {
    setTimeout(() => {
      let _filteredJobTypes;
      if (!event.query.trim().length) {
        _filteredJobTypes = [...jobTypes];
      } else {
        _filteredJobTypes = jobTypes.filter((jobTypes) => {
          return jobTypes.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
      setFilteredJobTypes(_filteredJobTypes);
    }, 250);
  };

  const iconOptionTemplate = (option) => {
    return (
      <div className={styles['icon-item']}>
        <img alt={option.name} src={option.code} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`${styles['flag']} ${styles[`flag-${option.code.toLowerCase()}`]}`} />
        <div>{option.name}</div>
      </div>
    );
  }

  const initialValues = {
    title: job ? job.title : "",
    level: job ? job.level : "",
    experience: job ? job.experience : "",
    full_name: fullName,
    phone_number: phoneNumber,
    email: email,
    hirer_number: job ? job.hirer_number : "",
    description: job ? job.description : "",
    job_requirement: job ? job.job_requirement : "",
    salary_type: job ? job.salary_type : "",
    salary: job ? job.salary : 0,
    salary_from: job ? job.salary_from : 0,
    salary_to: job ? job.salary_to : 0,
    currency: job ? job.currency : "", //VND, Dolar
    web_link: job ? job.web_link : "",
    start_time: job ? job.start_time : Moment(Date()).format('YYYY-MM-DD hh:mm:ss'), //ex: 2022-03-07 02:01:22.189603
    end_time: job ? Moment(job.end_time).format("yyyy-MM-DDTHH:mm") : "", //ex: 2022-03-17 02:01:22.189603
    job_type_id: job ? job.job_type_id : "",
    country_id: job ? job.country_id : "",
    tag: job ? job.tag : [],
    job_job_addresses: job ? job.job_job_addresses : [
      {
        address: "",
        city_id: ""
      }
    ],
    job_benefits: job ? job.job_benefits : [
      {
        benefit: "",
        icon: ""
      }
    ],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Vui lòng không để trống!"),
    job_type_id: Yup.string().required("Vui lòng không để trống!"),
    country_id: Yup.string().required("Vui lòng không để trống!"),
    full_name: Yup.string().required("Vui lòng không để trống!"),
    phone_number: Yup.string().required("Vui lòng không để trống!"),
    email: Yup.string().email("Nhập sai định dạng email")
      .required("Vui lòng không để trống!"),
    level: Yup.string().required("Vui lòng không để trống!"),
    experience: Yup.string().required("Vui lòng không để trống!"),
    hirer_number: Yup.number().required("Vui lòng không để trống!").min(0).max(9999999),
    description: Yup.string().required("Vui lòng không để trống!")
      .max(100000, 'Mô tả chỉ chứa tối đa 100000 ký tự'),
    job_requirement: Yup.string().required("Vui lòng không để trống!")
      .max(100000, 'Yêu cầu công việc chỉ chứa tối đa 100000 ký tự'),
    salary_type: Yup.string().required("Vui lòng không để trống!"),
    salary: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "Lương",
        then: Yup.number().required("Vui lòng không để trống!").min(0),
      }),
    salary_from: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "Lương khoảng",
        then: Yup.number().required("Vui lòng không để trống!").min(0),
      }),
    salary_to: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "Lương khoảng",
        then: Yup.number().required("Vui lòng không để trống!").min(0),
      }),
    currency: Yup.string().required("Vui lòng không để trống!"),
    web_link: Yup.string().required("Vui lòng không để trống!"),
    start_time: Yup.date().default(() => {
      return new Date();
    }),
    end_time: Yup.date()
      .required("Vui lòng không để trống!")
      .min(
        Yup.ref('start_time'),
        "Ngày kết thúc không được trước ngày bắt đầu"
      ),
    tag: Yup.array()
      .max(10, 'Bạn chỉ có thể cung cấp 5 thẻ'),
    job_job_addresses: Yup.array()
      .of(Yup.object().shape({
        address: Yup.string().required("Địa chỉ vui lòng không để trống!")
          .max(255, 'Địa chỉ được chứa tối đa 255 ký tự'),
        city_id: Yup.string().required("Tỉnh/Thành phố vui lòng không để trống!"),
      }))
      .min(1, "Cần ít nhất một địa chỉ").max(5, 'Bạn chỉ có thể cung cấp 5 địa chỉ'),
    job_benefits: Yup.array()
      .of(Yup.object().shape({
        benefit: Yup.string().required("Vui lòng không để trống!")
          .max(255, 'Lơi ích được chứa tối đa 255 ký tự'),
        icon: Yup.string().required("Vui lòng không để trống!"),
      }))
      .min(1, "Cần ít nhất một lợi ích").max(5, 'Bạn chỉ có thể cung cấp 5 lợi ích'),
  });

  const handleUpdateJob = (formValue) => {
    dispatch(update_job({ data: formValue, slug }))
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast.success("Chúc mừng bạn cập nhật thành công công việc", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setIsReload(true);
      })
      .catch(() => {
      });
  };

  return (
    <>
      <div>
        <ToastContainer draggablePercent={60} limit={5} />
      </div>
      <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles2["custom-modal"]}`}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdateJob}
        // onSubmit={async (values) => {
        //   await new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
        // }}
        >
          {({ values, errors, isSubmitting, setFieldValue }) => (
            <Form className={styles["form"]} id="duplicateForm">
              <Modal.Header closeButton>
                <Modal.Title>Công việc: {job.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
                  ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`}>
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`}><i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-pen']}
                  ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`}></i>
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`}>Tiêu đề tin tuyển dụng</h6>
                  </div>
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`}>
                    <div data-v-17683809="" data-v-75adf416="">
                      <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`}>
                        <Field
                          disabled={isEdit ? false : true}
                          name="title"
                          type="text"
                          data-v-17683809="" id="SpqWouaUHy"
                          className={`${styles['form-control']} ${styles['input-underline']} ${styles['form-control-lg']}`}
                          placeholder={"VD: " + campaign.name}
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>
                    </div>
                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
                  ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-folder']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`}></i >
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Ngành nghề & Lĩnh vực</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']} ${styles['row']}`}>
                    <div data-v-75adf416="" className={`${styles['col']} ${styles['form-group']}`} >
                      <div data-v-1900aee5="" data-v-75adf416="">
                        <div data-v-1900aee5="" id="ZVSOOKZSPD" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                          <div data-v-1900aee5="" tabIndex="-1" className={`${styles['multiselect']} ${styles['w-100']}`}>
                            <AutoComplete
                              disabled={isEdit ? false : true}
                              value={selectedJobType}
                              suggestions={filteredJobTypes}
                              completeMethod={searchJobType}
                              field="name"
                              name="job_type_id"
                              onChange={(e) => {
                                setSelectedJobType(e.value);
                                setFieldValue("job_type_id", e.value.id);
                              }}
                              className={`${styles['w-100']}`}
                              placeholder="Lựa chọn tối đa 1 ngành nghề chính cho tin tuyển dụng này"
                            />
                            <ErrorMessage
                              name="job_type_id"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div >
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
        ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-info']} ${styles['bg-muted']}
          ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Thông tin chung</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <p data-v-75adf416="" className={`${styles['text-secondary-dark']}`} >
                      Một số thông tin đã được điền sẵn dựa trên thông tin của chiến dịch
                      tuyển dụng mà bạn đã tạo trước đó
                    </p >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >
                          Số lượng tuyển
                        </label >
                        <Field
                          disabled={isEdit ? false : true}
                          name="hirer_number"
                          type="text"
                          className={`${styles['form-control']}`}
                          placeholder="Nhập số lượng"
                        />
                        <ErrorMessage
                          name="hirer_number"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Cấp bậc</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            disabled={isEdit ? false : true}
                            value={selectedLevel}
                            options={levels}
                            onChange={(e) => {
                              onLevelChange(e);
                              setFieldValue("level", e.value.name);
                            }}
                            appendTo={document.body}
                            optionValue="name"
                            optionLabel="name" placeholder="--Chọn cấp bậc--" />
                          <ErrorMessage
                            name="level"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div >
                      </div >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Kinh nghiệm</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            disabled={isEdit ? false : true}
                            value={selectedExperience}
                            options={experiences}
                            onChange={(e) => {
                              onExperienceChange(e);
                              setFieldValue("experience", e.value.name);
                            }}
                            optionValue="name"
                            optionLabel="name" placeholder="--Chọn kinh nghiệm--" />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div>
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Mức lương</label >
                      <div data-v-75adf416="" className={`${styles['row']}`} >
                        <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                          <label data-v-75adf416="">Loại tiền tệ</label>
                          <div data-v-1900aee5="" data-v-75adf416="">
                            <div data-v-1900aee5="" id="UmCemECaOA" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                              <Dropdown
                                disabled={isEdit ? false : true}
                                value={selectedCurrency}
                                options={currencies}
                                onChange={(e) => {
                                  onCurrencyChange(e);
                                  setFieldValue("currency", e.value.name);
                                }}
                                optionValue="name"
                                optionLabel="name" placeholder="--Chọn loại tiền tệ--" />
                              <ErrorMessage
                                name="currency"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div >
                          </div >
                        </div >
                        <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                          <label data-v-75adf416="">Lương</label>
                          <div data-v-1900aee5="" data-v-75adf416="" style={{ marginBottom: '12px' }}>
                            <div data-v-1900aee5="" id="UmCemECaOA" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                              <Dropdown
                                disabled={isEdit ? false : true}
                                value={selectedSalaryType}
                                options={salaryTypes}
                                onChange={(e) => {
                                  onSalaryTypeChange(e);
                                  setFieldValue("salary_type", e.value.name);
                                }}
                                optionValue="name"
                                optionLabel="name" placeholder="--Chọn loại lương--" />
                              <ErrorMessage
                                name="salary_type"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                          {selectedSalaryType && selectedSalaryType === "Lương" && (
                            <>
                              <Field
                                disabled={isEdit ? false : true}
                                name="salary"
                                type="number"
                                className={`${styles['form-control']}`}
                                placeholder="--Lương--"
                              />
                              <ErrorMessage
                                name="salary"
                                component="div"
                                className="alert alert-danger"
                              />
                            </>
                          )}
                          {selectedSalaryType && selectedSalaryType === "Lương khoảng" && (
                            <div style={{ display: 'flex' }}>
                              <div>
                                <Field
                                  disabled={isEdit ? false : true}
                                  name="salary_from"
                                  type="number"
                                  className={`${styles['form-control']}`}
                                  placeholder="Từ"
                                />
                                <ErrorMessage
                                  name="salary_from"
                                  component="div"
                                  className="alert alert-danger"
                                />
                              </div>
                              <div>
                                <Field
                                  disabled={isEdit ? false : true}
                                  name="salary_to"
                                  type="number"
                                  className={`${styles['form-control']}`}
                                  placeholder="Đến"
                                />
                                <ErrorMessage
                                  name="salary_to"
                                  component="div"
                                  className="alert alert-danger"
                                />
                              </div>
                            </div>
                          )}
                        </div >
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Khu vực làm việc</label >
                      <div className={`${styles['my-custom-select']} ${styles['position-relative']}`} >
                        <Dropdown
                          disabled={isEdit ? false : true}
                          value={selectedCountry}
                          options={countries}
                          onChange={(e) => {
                            onCountryChange(e);
                            setFieldValue("country_id", e.value.id);
                          }}
                          optionValue="id"
                          optionLabel="name" placeholder="Chọn Quốc Gia" />
                        <ErrorMessage
                          name="country_id"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div >
                      <FieldArray name="job_job_addresses">
                        {({ remove, push }) => (
                          <div data-v-f0015b7a="" className={`${styles['bg-light']} ${styles['border']} ${styles['job-location-box']} ${styles['mb-3']}`}>
                            {values.job_job_addresses.length > 0 &&
                              values.job_job_addresses.map((_, index) => (
                                <div key={index}>
                                  <div
                                    data-v-f0015b7a=""
                                    className={`${styles['p-4']} ${styles['location-box']} ${styles['d-flex']}
                                            ${styles['justify-content-between']} ${styles['align-items-center']} ${styles['border-bottom']}`}>
                                    <div data-v-f0015b7a="" className={`${styles['d-flex']} ${styles['w-100']} ${styles['row']}`}>
                                      <div data-v-f0015b7a="" className={`${styles['location-title']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['col-md-3']}`}
                                        style={{ paddingLeft: '0px' }}>
                                        <i data-v-f0015b7a="" className={`${styles['fa-solid']} ${styles['fa-location-dot']} ${styles['mr-2']}`}></i>
                                        <span data-v-f0015b7a="">Khu vực {index + 1}:</span></div >
                                      <div data-v-f0015b7a="" className={`${styles['location-box']} ${styles['col-md-3']}`} >
                                        <div data-v-1900aee5="" id="WIoWjAicWj"
                                          className={`${styles['my-custom-select']} ${styles['position-relative']}`} >
                                          <Dropdown
                                            disabled={isEdit ? false : true}
                                            value={selectedCity[index]}
                                            options={cities}
                                            onChange={(e) => {
                                              onCityChange(e, index);
                                              setFieldValue(`job_job_addresses.${index}.city_id`, e.value.id);
                                            }}
                                            optionValue="id"
                                            optionLabel="name" placeholder="Chọn Tỉnh / Thành phố" />
                                          <ErrorMessage
                                            name={`job_job_addresses.${index}.city_id`}
                                            component="div"
                                            className="alert alert-danger"
                                          />
                                        </div >
                                      </div >
                                    </div >
                                  </div >
                                  <div data-v-f0015b7a="" className={`${styles['address-box']} ${styles['p-4']}`} >
                                    <div data-v-f0015b7a=""
                                      className={`${styles['address-item']} ${styles['d-flex']} ${styles['justify-content-between']}
                                            ${styles['align-items-center']}`} >
                                      <div className={`${styles['row']} ${styles['address-item-input']}`} >
                                        <div data-v-17683809=""
                                          className={`${styles['col']} ${styles['address-item-working-address']}`} >
                                          <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`} >
                                            <Field
                                              disabled={isEdit ? false : true}
                                              name={`job_job_addresses.${index}.address`}
                                              type="text"
                                              className={`${styles['form-control']}`}
                                              placeholder="Nhập địa điểm làm việc cụ thể"
                                            />
                                            <ErrorMessage
                                              name={`job_job_addresses.${index}.address`}
                                              component="div"
                                              className="alert alert-danger"
                                            />
                                          </div >
                                        </div >
                                      </div >
                                    </div >
                                  </div >
                                  {isEdit && (
                                  <Button
                                    type="button"
                                    className="p-button-sm"
                                    disabled={isSubmitting}
                                    onClick={() => remove(index)}
                                  >
                                    Xóa
                                  </Button>
                                  )}
                                  {values.job_job_addresses.length >= 1 && values.job_job_addresses.length === (index + 1) && isEdit ? (
                                    <Button
                                      type="button"
                                      className="p-button-sm ml-8"
                                      disabled={isSubmitting}
                                      onClick={() => push({
                                        address: "",
                                        city_id: "",
                                      })}
                                    >
                                      Thêm địa chỉ mới
                                    </Button>
                                  ) : null}
                                </div>
                              ))}
                            {values.job_job_addresses.length === 0 && isEdit ? (
                              <Button
                                type="button"
                                className="p-button-sm"
                                disabled={isSubmitting}
                                onClick={() => push({
                                  address: "",
                                  city_id: "",
                                })}
                              >
                                +
                              </Button>
                            ) : null}
                            {typeof errors.job_job_addresses === 'string' ? (
                              <div className="alert alert-danger" role="alert">
                                {errors.job_job_addresses}
                              </div>
                            ) : null}
                          </div>
                        )}
                      </FieldArray>
                    </div >
                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
        ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-align-left']} ${styles['bg-muted']}
          ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Nội dung tuyển dụng chi tiết</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <div data-v-75adf416="" className={`${styles['form-group']} ${styles['mb-4']}`} >
                      <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Mô tả công việc</label >
                      </div >
                      <Editor
                        disabled={isEdit ? false : true}
                        headerTemplate={header}
                        style={{ height: '200px' }}
                        value={description}
                        onTextChange={
                          (e) => {
                            setDescription(e.htmlValue);
                            setFieldValue('description', e.htmlValue);
                          }
                        }
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div >
                    <div data-v-75adf416="" className={`${styles['form-group']} ${styles['mb-4']}`} >
                      <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Yêu cầu ứng viên</label >
                      </div >
                      <Editor
                        disabled={isEdit ? false : true}
                        headerTemplate={header}
                        style={{ height: '200px' }}
                        value={job_requirement}
                        onTextChange={
                          (e) => {
                            setJobRequirement(e.htmlValue);
                            setFieldValue('job_requirement', e.htmlValue);
                          }
                        }
                      />
                      <ErrorMessage
                        name="job_requirement"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div >
                    <div data-v-75adf416="" className={`${styles['form-group']}`} >
                      <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Kỹ năng liên quan</label >
                      </div >
                      {/* <!-- Dùng multiple select --> */}
                      {isEdit ? (
                        <>
                          <Chips
                            disabled={isEdit ? false : true}
                            value={tags}
                            onChange={(e) => {
                              let tagsCustom = [];
                              e.value.map(val => {
                                tagsCustom.push({
                                  name: val
                                });
                              })
                              setTags(e.value);
                              setFieldValue(`tag`, tagsCustom);
                            }}
                            className={`${styles['w-100']} ${styles['d-block']}`}
                            placeholder="Nhập thông tin kỹ năng liên quan đến công việc. VD: Photoshop, Microsoft Word"
                          />
                          <ErrorMessage
                            name="tag"
                            component="div"
                            className="alert alert-danger"
                          />
                        </>
                      ) : (
                        <>
                        {job && job.tag.map((tag, index) => (
                          <span key={index} style={{color: 'blue',
                            backgroundColor: '#ffc107',
                            padding: '4px',
                            marginRight: '4px',
                            borderRadius: '4px',}}>#{tag.name} </span>
                        ))}
                        </>
                      )}
                    </div >
                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
                  ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-briefcase']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Quyền lợi của ứng viên</h6 >
                  </div >
                  {/* Benefits job */}
                  <FieldArray name="job_benefits">
                    {({ remove, push }) => (
                      <div data-v-f0015b7a="" className={`${styles['border']} ${styles['job-location-box']} ${styles['mb-3']} ${styles['pl-40-reset']}`}>
                        {values.job_benefits.length > 0 &&
                          values.job_benefits.map((_, index) => (
                            <div key={index} className={`${styles['mb-3']}`}>
                              <div className={styles['d-flex']} style={{ marginBottom: '8px' }}>
                                <div>
                                  <Dropdown
                                    disabled={isEdit ? false : true}
                                    value={selectedIcon[index]}
                                    options={icons}
                                    itemTemplate={iconOptionTemplate}
                                    onChange={(e) => {
                                      onIconChange(e, index);
                                      setFieldValue(`job_benefits.${index}.icon`, e.value.name);
                                    }}
                                    optionValue="name"
                                    optionLabel="name" placeholder="Chọn Icon" />
                                  <ErrorMessage
                                    name={`job_benefits.${index}.icon`}
                                    component="div"
                                    className="alert alert-danger"
                                  />
                                </div>
                                <div className={styles['w-100']}>
                                  <Field
                                    disabled={isEdit ? false : true}
                                    name={`job_benefits.${index}.benefit`}
                                    type="text"
                                    className={`${styles['w-100']} ${styles['form-control']} ${styles['input_benefit']}`}
                                    placeholder="Nhập quyền lợi của ứng viên"
                                  />
                                  <ErrorMessage
                                    name={`job_benefits.${index}.benefit`}
                                    component="div"
                                    className="alert alert-danger"
                                  />
                                </div>
                              </div>
                              {isEdit && (
                              <Button
                                type="button"
                                className="p-button-sm"
                                disabled={isSubmitting}
                                onClick={() => remove(index)}
                              >
                                Xóa
                              </Button>
                              )}
                              {values.job_benefits.length >= 1 && values.job_benefits.length === (index + 1) && isEdit ? (
                                <Button
                                  type="button"
                                  className="p-button-sm ml-8"
                                  disabled={isSubmitting}
                                  onClick={() => push({
                                    benefit: "",
                                    icon: "",
                                  })}
                                >
                                  Thêm địa chỉ mới
                                </Button>
                              ) : null}
                            </div>
                          ))}
                        {values.job_benefits.length === 0 && isEdit ? (
                          <Button
                            type="button"
                            className="p-button-sm"
                            disabled={isSubmitting}
                            onClick={() => push({
                              benefit: "",
                              icon: "",
                            })}
                          >
                            +
                          </Button>
                        ) : null}
                        {typeof errors.job_benefits === 'string' ? (
                          <div className="alert alert-danger" role="alert">
                            {errors.job_benefits}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </FieldArray>
                  {/* Benefits job end */}
                </div >
                <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
        ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
                  <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                    className={`${styles['fas']} ${styles['fa-briefcase']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Thông tin nhận CV</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                        <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Hạn chót nhận CV</label >
                          <Field
                            disabled={isEdit ? false : true}
                            name="end_time"
                            type="datetime-local"
                            className={`${styles['form-control']}`}
                          />
                          <ErrorMessage
                            name="end_time"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div >
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                        <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >Liên kết công ty</label >
                          <Field
                            disabled={isEdit ? false : true}
                            name="web_link"
                            type="text"
                            className={`${styles['form-control']} ${styles['input-underline']} ${styles['form-control-lg']}`}
                            placeholder="VD: domain.com"
                          />
                          <ErrorMessage
                            name="web_link"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div >
                      </div >
                    </div >

                    <div data-v-75adf416=""><label data-v-75adf416=""
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`}>Thông tin người nhận CV</label>
                      <div data-v-75adf416="" className={`${styles['row']}`} >
                        <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                          <div data-v-75adf416="" className={`${styles['form-group']}`} >
                            <label data-v-75adf416="">Họ và tên</label>
                            <div data-v-17683809="" data-v-75adf416="">
                              <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`}>
                                <Field
                                  disabled={isEdit ? false : true}
                                  name="full_name"
                                  type="text"
                                  value={fullName}
                                  onChange={(e) => {
                                    setFullName(e.target.value)
                                    setFieldValue('full_name', e.target.value)
                                  }}
                                  className={`${styles['form-control']}`}
                                  placeholder="Nhập tên người nhận CV"
                                />
                                <ErrorMessage
                                  name="full_name"
                                  component="div"
                                  className="alert alert-danger"
                                />
                              </div>
                            </div >
                          </div >
                        </div >
                        <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                          <div data-v-75adf416="" className={`${styles['form-group']}`} >
                            <label data-v-75adf416="">Số điện thoại</label>
                            <div data-v-e1812212="" data-v-75adf416="" className={`${styles['mask-input']}`} >
                              <Field
                                disabled={isEdit ? false : true}
                                name="phone_number"
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => {
                                  setPhoneNumber(e.target.value)
                                  setFieldValue('phone_number', e.target.value)
                                }}
                                className={`${styles['form-control']}`}
                                placeholder="Nhập số điện thoại người nhận CV"
                              />
                              <ErrorMessage
                                name="phone_number"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div >
                          </div >
                        </div >
                        <div data-v-75adf416="" className={`${styles['col-md-6']}`} >
                          <div data-v-75adf416="" className={`${styles['form-group']}`} >
                            <label
                              data-v-75adf416="">Email</label>
                            <Field
                              disabled={isEdit ? false : true}
                              name="email"
                              type="text"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value)
                                setFieldValue('email', e.target.value)
                              }}
                              className={`${styles['form-control']}`}
                              placeholder="Nhập email nhận CV"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div >
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
              </Modal.Body>
              <Modal.Footer>
                {isEdit && (
                  <Button
                    disabled={isLoading} variant="primary" label="Lưu" icon="pi pi-check" type="submit">
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
