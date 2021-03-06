import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
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
// import userService from "services/user.service";
import jobService from "services/job.service";
import publicService from "services/public.service";
import { clearMessage } from "slices/message";
// slices
import { update_job } from "slices/company-profile";
// utils
import { icons as iconsUtil } from 'utils/icons';
import styles from '../../PostJob/PostJob.module.css';
import styles2 from './JobModal.module.css';

export const JobModal = ({ job, campaign, slug, isEdit, setIsReload, showModal, toggleShow }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { isError, isLoading } = useSelector((state) => state.profileEmployer);
  const { message } = useSelector((state) => state.message);
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
    job.job_benefits.map(be => {
      iconTemp.push(be.icon);
    })
    return iconTemp;
  } : []);
  const job_addresses = () => {
    let temp = [];
    job.job_job_addresses.map((address) => {
      temp.push({
        address: address.address,
        city_id: address.city.id,
      })
    })
    return temp;
  };
  const job_benefits = () => {
    let temp = [];
    job.job_benefits.map((be) => {
      temp.push({
        benefit: be.benefit,
        icon: be.icon,
      })
    })
    return temp;
  }
  const job_tags = () => {
    let temp = [];
    job.tag.map(tag => {
      temp.push({
        name: tag.name
      });
    })
    return temp;
  }

  // const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    jobService.getJobTypes().then((res) => setJobTypes(res.data));
    publicService.getCities().then((res) => { setCities(res); });
    publicService.getCountries().then((res) => { setCountries(res.data); });
    dispatch(clearMessage());
  }, [dispatch, showModal===true])


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
    tag: job ? job_tags() : [],
    job_job_addresses: job ? job_addresses() : [
      {
        address: "",
        city_id: ""
      }
    ],
    job_benefits: job ? job_benefits() : [
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
        then: Yup.number().required("Vui l??ng kh??ng ????? tr???ng!")
        .min(
          Yup.ref('salary_from'),
          "Lu??ng t???i ??a kh??ng ???????c nh??? h??n l????ng kh???i ??i???m"
        ),
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

  const handleUpdateJob = (formValue) => {
    dispatch(update_job({ data: formValue, slug }))
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast.success("Ch??c m???ng b???n c???p nh???t th??nh c??ng c??ng vi???c", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setIsReload(true);
      })
      .catch(() => {
        toast.error(message.message, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles2["custom-modal"]}`}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdateJob}
        // onSubmit={async (values) => {
        //   console.log(values);
        //   // await new Promise((r) => setTimeout(r, 500));
        //   // alert(JSON.stringify(values, null, 2));
        // }}
        >
          {({ values, errors, isSubmitting, setFieldValue }) => (
            <Form className={styles["form"]} id="duplicateForm">
              <Modal.Header closeButton>
                <Modal.Title>C??ng vi???c: {job.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Ng??nh ngh??? & L??nh v???c</h6 >
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
                          disabled={isEdit ? false : true}
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
                    </div >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > C???p b???c</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            disabled={isEdit ? false : true}
                            value={selectedLevel}
                            options={levels}
                            onChange={(e) => {
                              onLevelChange(e);
                              setFieldValue("level", e.value);
                            }}
                            appendTo={document.body}
                            optionValue="name"
                            optionLabel="name" placeholder="--Ch???n c???p b???c--" />
                          <ErrorMessage
                            name="level"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div >
                      </div >
                      <div data-v-75adf416="" className={`${styles['col-md-4']} ${styles['form-group']}`} >
                        <label data-v-75adf416="" className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >Kinh nghi???m</label >
                        <div data-v-1900aee5="" data-v-75adf416="">
                          <Dropdown
                            disabled={isEdit ? false : true}
                            value={selectedExperience}
                            options={experiences}
                            onChange={(e) => {
                              onExperienceChange(e);
                              setFieldValue("experience", e.value);
                            }}
                            optionValue="name"
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
                                disabled={isEdit ? false : true}
                                value={selectedCurrency}
                                options={currencies}
                                onChange={(e) => {
                                  onCurrencyChange(e);
                                  setFieldValue("currency", e.value);
                                }}
                                optionValue="name"
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
                                disabled={isEdit ? false : true}
                                value={selectedSalaryType}
                                options={salaryTypes}
                                onChange={(e) => {
                                  onSalaryTypeChange(e);
                                  setFieldValue("salary_type", e.value);
                                }}
                                optionValue="name"
                                optionLabel="name" placeholder="--Ch???n lo???i l????ng--" />
                              <ErrorMessage
                                name="salary_type"
                                component="div"
                                className="alert alert-danger"
                              />
                            </div>
                          </div>
                          {selectedSalaryType && selectedSalaryType === "L????ng" && (
                            <>
                              <Field
                                disabled={isEdit ? false : true}
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
                          {selectedSalaryType && selectedSalaryType === "L????ng kho???ng" && (
                            <div style={{ display: 'flex' }}>
                              <div>
                                <Field
                                  disabled={isEdit ? false : true}
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
                                  disabled={isEdit ? false : true}
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
                          disabled={isEdit ? false : true}
                          value={selectedCountry}
                          options={countries}
                          onChange={(e) => {
                            onCountryChange(e);
                            setFieldValue("country_id", e.value);
                          }}
                          optionValue="id"
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
                                            disabled={isEdit ? false : true}
                                            value={selectedCity[index]}
                                            options={cities}
                                            onChange={(e) => {
                                              onCityChange(e, index);
                                              setFieldValue(`job_job_addresses.${index}.city_id`, e.value);
                                            }}
                                            optionValue="id"
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
                                              disabled={isEdit ? false : true}
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
                                  {isEdit && (
                                  <Button
                                    type="button"
                                    className="p-button-sm"
                                    disabled={isSubmitting}
                                    onClick={() => remove(index)}
                                  >
                                    X??a
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
                                      Th??m ?????a ch??? m???i
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
                                Th??m ?????a ch??? m???i
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
                      {!isEdit ? (
                        <div dangerouslySetInnerHTML={{
                          __html: description
                        }}></div>
                      ) : (
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
                      )}
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
                      {!isEdit ? (
                        <div dangerouslySetInnerHTML={{
                          __html: job_requirement
                        }}></div>
                      ) : (
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
                      )}
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
                            placeholder="Nh???p th??ng tin k??? n??ng li??n quan ?????n c??ng vi???c. VD: Photoshop, Microsoft Word"
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
                                    disabled={isEdit ? false : true}
                                    value={selectedIcon[index]}
                                    options={icons}
                                    itemTemplate={iconOptionTemplate}
                                    onChange={(e) => {
                                      onIconChange(e, index);
                                      setFieldValue(`job_benefits.${index}.icon`, e.value);
                                    }}
                                    optionValue="name"
                                    optionLabel="name" placeholder="Ch???n Icon" />
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
                                    placeholder="Nh???p quy???n l???i c???a ???ng vi??n"
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
                                X??a
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
                                  Th??m ?????a ch??? m???i
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
                    <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Th??ng tin nh???n CV</h6 >
                  </div >
                  <div data-v-75adf416="" className={`${styles['pl-40-reset']}`} >
                    <div data-v-75adf416="" className={`${styles['row']}`} >
                      <div data-v-75adf416="" className={`${styles['col-md-4']}`} >
                        <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > H???n ch??t nh???n CV</label >
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
                          className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} >Li??n k???t c??ng ty</label >
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
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`}>Th??ng tin ng?????i nh???n CV</label>
                      <div data-v-75adf416="" className={`${styles['row']}`} >
                        <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                          <div data-v-75adf416="" className={`${styles['form-group']}`} >
                            <label data-v-75adf416="">H??? v?? t??n</label>
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
                                disabled={isEdit ? false : true}
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
                              disabled={isEdit ? false : true}
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
              </Modal.Body>
              <Modal.Footer>
                {isEdit && (
                  <Button
                    disabled={isLoading} variant="primary" label="L??u" icon="pi pi-check" type="submit">
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
