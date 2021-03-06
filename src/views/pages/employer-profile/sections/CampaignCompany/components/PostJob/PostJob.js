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
    { name: 'Nh??n vi??n' },
    { name: 'Qu???n l??' },
  ];

  const experiences = [
    { name: "Ch??a c?? kinh nghi???m" },
    { name: "1 n??m kinh nghi???m" },
    { name: "Tr??n 1 n??m kinh nghi???m" },
    { name: "D?????i 1 n??m kinh nghi???m" },
    { name: "2 n??m kinh nghi???m" },
    { name: "Tr??n 2 n??m kinh nghi???m" },
    { name: "D?????i 2 n??m kinh nghi???m" },
    { name: "3 n??m kinh nghi???m" },
    { name: "Tr??n 3 n??m kinh nghi???m" },
    { name: "D?????i 3 n??m kinh nghi???m" },
    { name: "3 n??m kinh nghi???m" },
    { name: "Tr??n 3 n??m kinh nghi???m" },
    { name: "D?????i 3 n??m kinh nghi???m" },
    { name: "4 n??m kinh nghi???m" },
    { name: "Tr??n 4 n??m kinh nghi???m" },
    { name: "D?????i 4 n??m kinh nghi???m" },
    { name: "5 n??m kinh nghi???m" },
    { name: "Tr??n 5 n??m kinh nghi???m" },
    { name: "D?????i 5 n??m kinh nghi???m" },
  ];

  const salaryTypes = [
    { name: 'Th????ng l?????ng' },
    { name: 'L????ng' },
    { name: 'L????ng kho???ng' },
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
    title: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    job_type_id: Yup.string().required("Vui l??ng kh??ng ????? tr???ng ho???c kh??ng h???p l???! (G???i ??: T??m ki???m l??nh v???c t???n t???i.)"),
    country_id: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    full_name: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    phone_number: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    email: Yup.string().email("Nh???p sai ?????nh d???ng email")
      .required("Vui l??ng kh??ng ????? tr???ng!"),
    level: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    experience: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    hirer_number: Yup.number().required("Vui l??ng kh??ng ????? tr???ng!").min(0).max(9999999),
    description: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!")
      .max(100000, 'M?? t??? ch??? ch???a t???i ??a 100000 k?? t???'),
    job_requirement: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!")
      .max(100000, 'Y??u c???u c??ng vi???c ch??? ch???a t???i ??a 100000 k?? t???'),
    salary_type: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    salary: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "L????ng",
        then: Yup.number().required("Vui l??ng kh??ng ????? tr???ng!").min(0),
      }),
    salary_from: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "L????ng kho???ng",
        then: Yup.number().required("Vui l??ng kh??ng ????? tr???ng!").min(0),
      }),
    salary_to: Yup.number()
      .when("salary_type", {
        is: (salary_type) => salary_type === "L????ng kho???ng",
        then: Yup.number().required("Vui l??ng kh??ng ????? tr???ng!").min(0),
      }),
    currency: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    web_link: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
    start_time: Yup.date().default(() => {
      return new Date();
    }),
    end_time: Yup.date()
      .required("Vui l??ng kh??ng ????? tr???ng!")
      .min(
        Yup.ref('start_time'),
        "Ng??y k???t th??c kh??ng ???????c tr?????c ng??y b???t ?????u"
      ),
    tag: Yup.array()
      .max(10, 'B???n ch??? c?? th??? cung c???p 5 th???'),
    job_job_addresses: Yup.array()
      .of(Yup.object().shape({
        address: Yup.string().required("?????a ch??? vui l??ng kh??ng ????? tr???ng!")
          .max(255, '?????a ch??? ???????c ch???a t???i ??a 255 k?? t???'),
        city_id: Yup.string().required("T???nh/Th??nh ph??? vui l??ng kh??ng ????? tr???ng!"),
      }))
      .min(1, "C???n ??t nh???t m???t ?????a ch???").max(5, 'B???n ch??? c?? th??? cung c???p 5 ?????a ch???'),
    job_benefits: Yup.array()
      .of(Yup.object().shape({
        benefit: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!")
          .max(255, 'L??i ??ch ???????c ch???a t???i ??a 255 k?? t???'),
        icon: Yup.string().required("Vui l??ng kh??ng ????? tr???ng!"),
      }))
      .min(1, "C???n ??t nh???t m???t l???i ??ch").max(5, 'B???n ch??? c?? th??? cung c???p 5 l???i ??ch'),
  });

  const handleCreateJob = (formValue) => {
    dispatch(create_job({ data: formValue, campaign_id: campaign.id }))
      .unwrap()
      .then(() => {
        // console.log(res);
        toast.success("Ch??c m???ng b???n ???? t???o th??nh c??ng c??ng vi???c", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setTimeout(() => {
          navigate("../employer/campaigns/" + slug, { replace: true });
          window.location.reload();
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
        <h4 style={{ margin: '0px', marginRight: '8px' }}><b>????ng tin tuy???n d???ng:</b></h4>
        <span>Chi???n d???ch {campaign.name}</span>
      </div>
      <div data-v-ddcb31ba="" className={`${styles['container-fluid']} ${styles['page-content']}`}>
        <h3 data-v-ddcb31ba="" className={`${styles['page-title']} ${styles['mb-4']}`}>Th??ng tin ????ng tuy???n chi ti???t</h3>
        <div data-v-75adf416="" data-v-ddcb31ba="">
          <div data-v-75adf416="" className={`${styles['bg-white']} ${styles['border-left']} ${styles['border-primary']} ${styles['p-3']}
            ${styles['mb-4']} ${styles['rounded']} ${styles['shadow-sm']}`}
            style={{ borderLeftWidth: '3px!important', }}><span data-v-75adf416="">
              Tin tuy???n d???ng c???a b???n s??? ???????c ki???m duy???t tr?????c khi ch??nh th???c hi???n th??? v???i c??c ???ng vi??n ti???m n??ng.
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`}>Ti??u ????? tin tuy???n d???ng</h6>
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Ng??nh ngh??? & L??nh v???c</h6 >
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
                              placeholder="L???a ch???n t???i ??a 1 ng??nh ngh??? ch??nh cho tin tuy???n d???ng n??y"
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Th??ng tin chung</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <p data-v-75adf416="" className={`${styles['text-secondary-dark']}`} >
                      M???t s??? th??ng tin ???? ???????c ??i???n s???n d???a tr??n th??ng tin c???a chi???n d???ch
                      tuy???n d???ng m?? b???n ???? t???o tr?????c ????
                    </p >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >
                          S??? l?????ng tuy???n
                        </label >
                        <Field
                          name="hirer_number"
                          type="text"
                          className={`${styles['form-control']}`}
                          placeholder="Nh???p s??? l?????ng"
                        />
                        <ErrorMessage
                          name="hirer_number"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div >
                      {/* <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                        className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Lo???i c??ng vi???c</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <div data-v-1900aee5="" id="ynZTUBdscf"
                            className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                            <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                              <div className={`${styles['multiselect__select']}`}></div>
                              <div className={`${styles['multiselect__tags']}`} >
                                <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                                <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                                <span className={`${styles['multiselect__placeholder']}`} >
                                  --Ch???n lo???i c??ng vi???c--
                                </span >
                              </div >
                              <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                style={{ maxHeight: '300px', display: 'none', }}>
                                <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>To??n
                                      th???i gian</span></span >

                                  </li >
                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']}`} > <span>B??n th???i
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
                        className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Gi???i t??nh</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <div data-v-1900aee5="" id="zymiawZuIN"
                            className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                            <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                              <div className={`${styles['multiselect__select']}`}></div>
                              <div className={`${styles['multiselect__tags']}`} >
                                <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                                <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                                <span className={`${styles['multiselect__placeholder']}`} >
                                  --Ch???n gi???i t??nh--
                                </span >
                              </div >
                              <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                style={{ maxHeight: '300px', display: 'none', }}>
                                <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                  <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                    data-selected="" data-deselect=""
                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>N???</span></span >

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
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > C???p b???c</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            value={selectedLevel}
                            options={levels}
                            onChange={(e) => {
                              onLevelChange(e);
                              setFieldValue("level", e.value.name);
                            }}
                            optionLabel="name" placeholder="--Ch???n c???p b???c--" />
                          <ErrorMessage
                            name="level"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div >
                      </div >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Kinh nghi???m</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            value={selectedExperience}
                            options={experiences}
                            onChange={(e) => {
                              onExperienceChange(e);
                              setFieldValue("experience", e.value.name);
                            }}
                            optionLabel="name" placeholder="--Ch???n kinh nghi???m--" />
                          <ErrorMessage
                            name="experience"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div>
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > M???c l????ng</label >
                      <div data-v-75adf416="" className={`${styles['row']}`} >
                        <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                          <label data-v-75adf416="">Lo???i ti???n t???</label>
                          <div data-v-1900aee5="" data-v-75adf416="">
                            <div data-v-1900aee5="" id="UmCemECaOA" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                              <Dropdown
                                value={selectedCurrency}
                                options={currencies}
                                onChange={(e) => {
                                  onCurrencyChange(e);
                                  setFieldValue("currency", e.value.name);
                                }}
                                optionLabel="name" placeholder="--Ch???n lo???i ti???n t???--" />
                              <ErrorMessage
                                name="currency"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div >
                          </div >
                        </div >
                        <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                          <label data-v-75adf416="">L????ng</label>
                          <div data-v-1900aee5="" data-v-75adf416="" style={{ marginBottom: '12px' }}>
                            <div data-v-1900aee5="" id="UmCemECaOA" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                              <Dropdown
                                value={selectedSalaryType}
                                options={salaryTypes}
                                onChange={(e) => {
                                  onSalaryTypeChange(e);
                                  setFieldValue("salary_type", e.value.name);
                                }}
                                optionLabel="name" placeholder="--Ch???n lo???i l????ng--" />
                              <ErrorMessage
                                name="salary_type"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                          {selectedSalaryType && selectedSalaryType.name === "L????ng" && (
                            <>
                              <Field
                                name="salary"
                                type="number"
                                className={`${styles['form-control']}`}
                                placeholder="--L????ng--"
                              />
                              <ErrorMessage
                                name="salary"
                                component="div"
                                className="alert alert-danger"
                              />
                            </>
                          )}
                          {selectedSalaryType && selectedSalaryType.name === "L????ng kho???ng" && (
                            <div style={{ display: 'flex' }}>
                              <div>
                                <Field
                                  name="salary_from"
                                  type="number"
                                  className={`${styles['form-control']}`}
                                  placeholder="T???"
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
                                  placeholder="?????n"
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
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Khu v???c l??m vi???c</label >
                      <div className={`${styles['my-custom-select']} ${styles['position-relative']}`} >
                        <Dropdown
                          value={selectedCountry}
                          options={countries}
                          onChange={(e) => {
                            onCountryChange(e);
                            setFieldValue("country_id", e.value.id);
                          }}
                          optionLabel="name" placeholder="Ch???n Qu???c Gia" />
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
                                        <span data-v-f0015b7a="">Khu v???c {index + 1}:</span></div >
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
                                            optionLabel="name" placeholder="Ch???n T???nh / Th??nh ph???" />
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
                                              placeholder="Nh???p ?????a ??i???m l??m vi???c c??? th???"
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
                                    X??a
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
                                      Th??m ?????a ch??? m???i
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > N???i dung tuy???n d???ng chi ti???t</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <div data-v-75adf416="" className={`${styles['form-group']} ${styles['mb-4']}`} >
                      <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > M?? t??? c??ng vi???c</label >
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
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Y??u c???u ???ng vi??n</label >
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
                        className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > K??? n??ng li??n quan</label >
                      </div >
                      {/* <!-- D??ng multiple select --> */}
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
                        placeholder="Nh???p th??ng tin k??? n??ng li??n quan ?????n c??ng vi???c. VD: Photoshop, Microsoft Word"
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Quy???n l???i c???a ???ng vi??n</h6 >
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
                                    optionLabel="name" placeholder="Ch???n Icon" />
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
                                    placeholder="Nh???p quy???n l???i c???a ???ng vi??n"
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
                                X??a
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
                                  Th??m ?????a ch??? m???i
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Th??ng tin nh???n CV</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                        <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > H???n ch??t nh???n CV</label >
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
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >Li??n k???t c??ng ty</label >
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
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`}>Th??ng tin ng?????i nh???n CV</label>
                      <div data-v-75adf416="" className={`${styles['row']}`} >
                        <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                          <div data-v-75adf416="" className={`${styles['form-group']}`} >
                            <label data-v-75adf416="">H??? v?? t??n</label>
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
                                  placeholder="Nh???p t??n ng?????i nh???n CV"
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
                            <label data-v-75adf416="">S??? ??i???n tho???i</label>
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
                                placeholder="Nh???p s??? ??i???n tho???i ng?????i nh???n CV"
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
                              placeholder="Nh???p email nh???n CV"
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
                  <div style={{
                    marginRight: '12px',
                    color: '#fff',
                    backgroundColor: '#00b14f',
                    borderColor: '#00b14f',
                    cursor: 'pointer',
                    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                  }} onClick={() => {
                    if (window.confirm('B???n c?? ch???c mu???n h???y b???n t???o c??ng vi???c n??y?')) {
                      navigate("../employer/campaigns", { replace: true });
                      window.location.reload();
                    }
                  }}>H???y</div >
                  <Button
                    disabled={isLoading} label="L??u" type="submit"
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
