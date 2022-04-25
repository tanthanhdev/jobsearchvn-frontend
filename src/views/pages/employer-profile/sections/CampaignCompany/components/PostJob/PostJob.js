import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { AutoComplete } from "primereact/autocomplete";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Chips } from 'primereact/chips';
import { Editor } from 'primereact/editor';
import Moment from 'moment';
// components
// services
import userService from 'services/user.service';
import jobService from "services/job.service";
import PublicService from "services/public.service";
// slices
import { create_job } from "slices/company-profile";
// utils
import { icons as iconsUtil } from 'utils/icons';
import styles from './PostJob.module.css';

export const PostJob = ({ slug }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { isError, isSuccess, isLoading } = useSelector((state) => state.profileEmployer);
  // const { message } = useSelector((state) => state.message);
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phone_number : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [fullName, setFullName] = useState(user ? user.first_name + " " + user.last_name : "");
  const [campaign, setCampaign] = useState({});
  const [jobTypes, setJobTypes] = useState([]);
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState('');
  const [job_requirement, setJobRequirement] = useState('');
  // select or autocomplete
  const [filteredJobTypes, setFilteredJobTypes] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedSalaryType, setSelectedSalaryType] = useState(null);
  const [selectedCity, setSelectedCity] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    jobService.getJobTypes().then((res) => setJobTypes(res.data));
    userService.getCampaign(slug).then((res) => { setCampaign(res.data); });
    PublicService.getCities().then((res) => { setCities(res); });
    PublicService.getCountries().then((res) => { setCountries(res.data); });
  }, [dispatch])

  const currencies = [
    { name: 'VND' },
    { name: 'USD' },
  ];

  const levels = [
    { name: 'Nhân viên' },
    { name: 'Quản lý' },
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
    title: "",
    level: "",
    experience: "",
    full_name: fullName,
    phone_number: phoneNumber,
    email: email,
    hirer_number: "",
    description: "",
    job_requirement: "",
    salary_type: "",
    salary: 0,
    salary_from: 0,
    salary_to: 0,
    currency: "", //VND, Dolar
    web_link: "",
    start_time: Moment(Date()).format('YYYY-MM-DD hh:mm:ss'), //ex: 2022-03-07 02:01:22.189603
    end_time: "", //ex: 2022-03-17 02:01:22.189603
    job_type_id: "",
    country_id: "",
    tag: [],
    job_job_addresses: [
      {
        address: "",
        city_id: ""
      }
    ],
    job_benefits: [
      {
        benefit: "",
        icon: ""
      }
    ],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Vui lòng không để trống!"),
    job_type_id: Yup.string().required("Vui lòng không để trống hoặc không hợp lệ! (Gợi ý: Tìm kiếm lĩnh vực tồn tại.)"),
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

  const handleCreateJob = (formValue) => {
    dispatch(create_job({ data: formValue, campaign_id: campaign.id }))
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast.success("Chúc mừng bạn đã tạo thành công công việc", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setTimeout(() => {
          navigate('/employer/profile');
        }, 1000);
      })
      .catch(() => {
      });
  };

  return (
    <main data-v-ddcb31ba="" className={`${styles['page-container']} ${styles['has-sub-breadcrumb']}`}>
      <div>
        <ToastContainer draggablePercent={60} limit={5} />
      </div>
      <div data-v-ddcb31ba="" className={`${styles['breadcrumb-box']}`}>
        <h4 style={{ margin: '0px', marginRight: '8px' }}><b>Đăng tin tuyển dụng:</b></h4>
        <span>Chiến dịch {campaign.name}</span>
      </div>
      <div data-v-ddcb31ba="" className={`${styles['container-fluid']} ${styles['page-content']}`}>
        <h3 data-v-ddcb31ba="" className={`${styles['page-title']} ${styles['mb-4']}`}>Thông tin đăng tuyển chi tiết</h3>
        <div data-v-75adf416="" data-v-ddcb31ba="">
          <div data-v-75adf416="" className={`${styles['bg-white']} ${styles['border-left']} ${styles['border-primary']} ${styles['p-3']}
            ${styles['mb-4']} ${styles['rounded']} ${styles['shadow-sm']}`}
            style={{ borderLeftWidth: '3px!important', }}><span data-v-75adf416="">
              Tin tuyển dụng của bạn sẽ được kiểm duyệt trước khi chính thức hiển thị với các ứng viên tiềm năng.
            </span>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleCreateJob}
          // onSubmit={async (values) => {
          //   await new Promise((r) => setTimeout(r, 500));
          //   console.log(JSON.stringify(values, null, 2));
          // }}
          >
            {({ values, errors, isSubmitting, setFieldValue }) => (
              <Form className={styles["form"]} id="duplicateForm">
                {/* <form data-v-75adf416=""> */}
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
                        {/* <input data-v-17683809="" id="SpqWouaUHy" type="text"
                          placeholder="VD: sdfsdf" autoComplete="off"
                          className={`${styles['form-control']} ${styles['input-underline']} ${styles['form-control-lg']}`} /> */}
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
                              value={selectedJobType}
                              suggestions={filteredJobTypes}
                              completeMethod={searchJobType}
                              field="name"
                              name="job_type_id"
                              dropdown
                              onChange={(e) => {
                                setSelectedJobType(e.value);
                                setFieldValue("job_type_id", e.value.id ? e.value.id : "");
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
                      {/* <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                        className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Loại công việc</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <div data-v-1900aee5="" id="ynZTUBdscf"
                            className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                            <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                              <div className={`${styles['multiselect__select']}`}></div>
                              <div className={`${styles['multiselect__tags']}`} >
                                <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                                <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                                <span className={`${styles['multiselect__placeholder']}`} >
                                  --Chọn loại công việc--
                                </span >
                              </div >
                              <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                style={{ maxHeight: '300px', display: 'none', }}>
                                <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Toàn
                                      thời gian</span></span >

                                  </li >
                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']}`} > <span>Bán thời
                                      gian</span></span >

                                  </li >
                                </ul >
                              </div >
                            </div >
                          </div >

                        </div >
                      </div > */}

                    </div >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      {/* <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                        className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Giới tính</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <div data-v-1900aee5="" id="zymiawZuIN"
                            className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                            <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                              <div className={`${styles['multiselect__select']}`}></div>
                              <div className={`${styles['multiselect__tags']}`} >
                                <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                                <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                                <span className={`${styles['multiselect__placeholder']}`} >
                                  --Chọn giới tính--
                                </span >
                              </div >
                              <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                style={{ maxHeight: '300px', display: 'none', }}>
                                <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Nữ</span></span >

                                  </li >
                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']}`} > <span>Nam</span></span >

                                  </li >
                                </ul >
                              </div >
                            </div >
                          </div >

                        </div >
                      </div > */}
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Cấp bậc</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            value={selectedLevel}
                            options={levels}
                            onChange={(e) => {
                              onLevelChange(e);
                              setFieldValue("level", e.value.name);
                            }}
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
                            value={selectedExperience}
                            options={experiences}
                            onChange={(e) => {
                              onExperienceChange(e);
                              setFieldValue("experience", e.value.name);
                            }}
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
                                value={selectedCurrency}
                                options={currencies}
                                onChange={(e) => {
                                  onCurrencyChange(e);
                                  setFieldValue("currency", e.value.name);
                                }}
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
                                value={selectedSalaryType}
                                options={salaryTypes}
                                onChange={(e) => {
                                  onSalaryTypeChange(e);
                                  setFieldValue("salary_type", e.value.name);
                                }}
                                optionLabel="name" placeholder="--Chọn loại lương--" />
                              <ErrorMessage
                                name="salary_type"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                          {selectedSalaryType && selectedSalaryType.name === "Lương" && (
                            <>
                              <Field
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
                          {selectedSalaryType && selectedSalaryType.name === "Lương khoảng" && (
                            <div style={{ display: 'flex' }}>
                              <div>
                                <Field
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
                          value={selectedCountry}
                          options={countries}
                          onChange={(e) => {
                            onCountryChange(e);
                            setFieldValue("country_id", e.value.id);
                          }}
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
                                            value={selectedCity[index]}
                                            options={cities}
                                            onChange={(e) => {
                                              onCityChange(e, index);
                                              setFieldValue(`job_job_addresses.${index}.city_id`, e.value.id);
                                            }}
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
                                  <Button
                                    type="button"
                                    className="p-button-sm"
                                    disabled={isSubmitting}
                                    onClick={() => remove(index)}
                                  >
                                    Xóa
                                  </Button>
                                  {values.job_job_addresses.length >= 1 && values.job_job_addresses.length === (index + 1) ? (
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
                            {values.job_job_addresses.length === 0 ? (
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
                      <Chips
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
                                    value={selectedIcon[index]}
                                    options={icons}
                                    itemTemplate={iconOptionTemplate}
                                    onChange={(e) => {
                                      onIconChange(e, index);
                                      setFieldValue(`job_benefits.${index}.icon`, e.value.name);
                                    }}
                                    optionLabel="name" placeholder="Chọn Icon" />
                                  <ErrorMessage
                                    name={`job_benefits.${index}.icon`}
                                    component="div"
                                    className="alert alert-danger"
                                  />
                                </div>
                                <div className={styles['w-100']}>
                                  <Field
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
                              <Button
                                type="button"
                                className="p-button-sm"
                                disabled={isSubmitting}
                                onClick={() => remove(index)}
                              >
                                Xóa
                              </Button>
                              {values.job_benefits.length >= 1 && values.job_benefits.length === (index + 1) ? (
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
                        {values.job_benefits.length === 0 ? (
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
                      <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                        <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Hạn chót nhận CV</label >
                          <Field
                            name="end_time"
                            type="datetime-local"
                            className={`${styles['form-control']}`}
                            placeholder="dd/mm/yyyy"
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
                <div data-v-75adf416="" className={`${styles['d-flex']}`} >
                  <Button label="Hủy" style={{ marginRight: '12px' }} onClick={() => {
                    if (window.confirm('Bạn có chắc muốn hủy bản tạo công việc này?')) {
                      navigate(-1); 
                    }
                  }}></Button >
                  <Button
                    disabled={isLoading} label="Lưu" type="submit"
                    className={`${styles['btn']} ${styles['min-width']} ${styles['btn']} ${styles['btn-primary']} ${styles['shadow-sm']}
                    ${styles['btn-lg']}`}>
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                  </Button >
                </div >
                {/* </form > */}
              </Form>
            )}
          </Formik>
        </div >
      </div >
    </main >
  );
};
