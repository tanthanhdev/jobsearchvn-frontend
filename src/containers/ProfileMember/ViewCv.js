import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { Dropdown } from 'primereact/dropdown';
// import Moment from "react-moment";
import * as Yup from "yup";
import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Button } from "primereact/button";
// import publicService from "services/public.service";
// import memberApi from "../../api/memberApi";
import { update_member } from "../../api/memberApi";
// import authHeader from "services/auth-header";
import { useDispatch } from "react-redux";

ViewCv.propTypes = {
  currentUser: PropTypes.object,
  // object member login for update
  memberCurrent: PropTypes.object,
};

function ViewCv({ memberCurrent, setIsReload }) {
  // const [memberCurrent1, setMemberCurrent1] = useState({});
  const [isShowEditProfile, setIsShowEditProfile] = useState(false);
  const [isShowPosition, setIsShowPosition] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowEditSkill, setIsShowEditSkill] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [countries, setCountries] = useState([]);

  // const onCountryChange = (e) => {
  //   setSelectedCountry(e.value);
  // }
  // const [infoUser, setInfoUser] = useState({});
  // input
  // const [inputSkill, setInputSkill] = useState();
  const handleShowEditProfile = () => {
    setIsShowEditProfile(!isShowEditProfile);
  };
  const handleShowEditPosition = () => {
    setIsShowPosition(!isShowPosition);
  };
  const handleShowEditEducation = () => {
    setIsShowEducation(!isShowEducation);
  };
  const handleShowEditSkill = () => {
    setIsShowEditSkill(!isShowEditSkill);
  };
  // const token = authHeader().Authorization;
  // console.log("token", token);
  useEffect(() => {
    console.log("memberCurrent", memberCurrent);
    // memberApi.getMember().then((response) => {
    //   setMemberCurrent1(response);
    // });
    // publicService.getCountries().then((res) => { setCountries(res.data); });
  }, []);


  //button
  // const onSaveSkills = () => {
  //   const newInputSkills = inputSkill.split(",");
  //   memberApi.update({
  //     ...memberCurrent1,
  //     resume: newInputSkills,
  //   });
  //   console.log("memberCurrent2", memberCurrent1);
  // };
  const member_skill = () => {
    let temp = [];
    memberCurrent.member_skills.map((skill) => {
      temp.push({
        name: skill.name,
        description: skill.description,
      });
    });
    return temp;
  };
  const member_edu = () => {
    let temp = [];
    memberCurrent.member_educations.map((edu) => {
      temp.push({
        degree_name: edu.degree_name,
        major: edu.major,
        university_name: edu.university_name,
        gpa: edu.gpa,
        starting_date: edu.starting_date,
        completion_date: edu.completion_date,
      });
    });
    return temp;
  };
  const member_exp = () => {
    let temp = [];
    memberCurrent.member_experiences.map((exp) => {
      temp.push({
        job_title: exp.job_title,
        company_name: exp.company_name,
        job_location: exp.job_location,
        job_state: exp.job_state,
        job_country: exp.job_country,
        description: exp.description,
        start_date: exp.start_date,
        end_date: exp.description,
      });
    });
    return temp;
  };
  const member_resume = () => {
    return memberCurrent.resume;
  };
  // const member_certificate = () => {
  //   let temp = [];
  //   memberCurrent.member_certificates.map((certificate) => {
  //     temp.push({
  //       name: certificate.name,
  //       year: certificate.year,
  //     });
  //   });
  //   return temp;
  // };
  const initialValues = {
    // user
    address: memberCurrent ? memberCurrent.user.address : null,
    phone_number: memberCurrent ? memberCurrent.user.phone_number : null,
    // member
    salary: memberCurrent ? memberCurrent.salary : null,
    currency: memberCurrent ? memberCurrent.currency : null,
    // birthday: memberCurrent ? memberCurrent.birthday : "",
    // memberCurrent: memberCurrent
    //   ? memberCurrent.memberCurrent
    //   : Moment(Date()).format("YYYY-MM-DD hh:mm:ss"),
    // is_looking_for_a_job: memberCurrent
    //   ? memberCurrent.is_looking_for_a_job
    //   : false,
    // member_certificates: memberCurrent
    //   ? member_certificate()
    //   : [
    //       {
    //         name: "",
    //         yean: null,
    //       },
    //     ],
    member_educations: memberCurrent ? member_edu()
      : [
        {
          degree_name: null,
          major: null,
          university_name: null,
          gpa: null,
          starting_date: null,
          completion_date: null,
        },
      ],
    member_experiences: memberCurrent ? member_exp()
      : [
        {
          job_title: null,
          company_name: null,
          job_location: null,
          job_state: null,
          job_country: null,
          description: null,
          start_date: null,
          end_date: null,
        },
      ],
    member_skills: memberCurrent
      ? member_skill()
      : [
        {
          name: "",
          description: "",
        },
      ],
    // member_social_activities: memberCurrent
    //   ? memberCurrent.member_social_activities
    //   : [],

    resume: memberCurrent ? member_resume() : null,

    // salary: memberCurrent ? memberCurrent.salary : null,
    // updated_at: memberCurrent
    //   ? memberCurrent.updated_at
    //   : Moment(Date()).format("YYYY-MM-DD hh:mm:ss"),

    // user: memberCurrent
    //   ? memberCurrent.user
    //   : {
    //       // address: "",
    //       city: "",
    //       date_joined: "",
    //       // email: "",
    //       // email_verified: true,
    //       expired: "",
    //       first_name: "",
    //       gender: "",
    //       groups: [],
    //       last_name: "",
    //       phone_number: "",
    //       updated_at: Moment(Date()).format("YYYY-MM-DD hh:mm:ss"),
    //       user_permissions: [],
    //       // username: "",
    //     },
  };

  const validationSchema = Yup.object().shape({
    member_experiences: Yup.array()
      .of(Yup.object().shape({
        job_title: Yup.string().required("Tên vị trí vui lòng không để trống!")
          .max(255, 'Tên vị trí được chứa tối đa 255 ký tự'),
        company_name: Yup.string().required("Tên công ty vui lòng không để trống!")
          .max(255, 'Tên công ty được chứa tối đa 255 ký tự'),
        job_location: Yup.string().required("Địa chỉ công việc vui lòng không để trống!")
          .max(255, 'Địa chỉ công việc được chứa tối đa 255 ký tự'),
        job_state: Yup.boolean().required("Tình trạng công việc vui lòng không để trống!"),
        // job_country: Yup.string().required("Quốc gia vui lòng không để trống!")
        //   .max(255, 'Quốc gia được chứa tối đa 255 ký tự'),
        description: Yup.string().required("Mô tả vui lòng không để trống!")
          .max(1000, 'Mô tả được chứa tối đa 1000 ký tự'),
        start_date: Yup.date().default(() => {
          return new Date();
        }),
        end_date: Yup.string()
          .required("Vui lòng không để trống!"),
      }))
      .max(5, 'Bạn chỉ có thể cung cấp 5 kinh nghiệm'),
    member_educations: Yup.array()
      .of(Yup.object().shape({
        university_name: Yup.string().required("Tên trường vui lòng không để trống!")
          .max(255, 'Tên trường được chứa tối đa 255 ký tự'),
        degree_name: Yup.string().required("Tên bằng cấp vui lòng không để trống!")
          .max(255, 'Tên bằng cấp được chứa tối đa 255 ký tự'),
        major: Yup.string().required("Chuyên ngành vui lòng không để trống!")
          .max(255, 'Chuyên ngành được chứa tối đa 255 ký tự'),
        gpa: Yup.number().required("Vui lòng không để trống!").min(0).max(4),
        starting_date: Yup.date().default(() => {
          return new Date();
        }),
        completion_date: Yup.date()
          .required("Vui lòng không để trống!")
          .min(
            Yup.ref('starting_date'),
            "Ngày kết thúc không được trước ngày bắt đầu"
          ),
      }))
      .max(5, 'Bạn chỉ có thể cung cấp 5 học vấn'),
    member_skills: Yup.array()
      .of(Yup.object().shape({
        name: Yup.string().required("Vui lòng không để trống!")
          .max(255, 'Tên kỹ năng được chứa tối đa 255 ký tự'),
      }))
      .max(10, 'Bạn chỉ có thể cung cấp 5 kỹ năng'),
  });

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({
  //   criteriaMode: "all",
  // });
  const dispatch = useDispatch();
  const onSubmit = (data, { resetForm }) => {
    console.log("data formik", data);
    // let formData = new FormData();
    // formData.append("address", data.address);
    // formData.append("currency", data.currency);
    // formData.append("phone_number", data.phone_number);
    // formData.append("resume", data.resume);
    // formData.append("salary", data.salary);
    // formData.append("member_educations", JSON.stringify(data.member_educations));
    // formData.append("member_experiences", JSON.stringify(data.member_experiences));
    // formData.append("member_skills", JSON.stringify(data.member_skills));
    dispatch(
      update_member(data)
    )
      .unwrap()
      .then(() => {
        toast.success("Chúc mừng bạn cập nhật thành công thông tin", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setIsReload(true);
      })
      .catch((error) => {
        console.log("lỗi", error);
        toast.error("Lỗi", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
    resetForm();
  };

  // const handleCreateJob = (formaData) => {
  //   console.log(formaData);
  // };

  // useEffect(() => {
  //   console.log(memberCurrent);
  // }, [memberCurrent]);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      // onSubmit={async (values) => {
      //   await new Promise((r) => setTimeout(r, 500));
      //   console.log(JSON.stringify(values, null, 2));
      //   update_member(values);
      // }}
      >
        {({ values, errors, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="w-[64%] mx-auto p-[20px] rounded border-2 border-solid border-border relative">
              <div className="absolute right-[0]">
                {/* <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <p className="text-primary">Tải bản mẫu CV</p>
                </div>
                <div className="block">
                  <p>Cài đặt bảo mật cho CV</p>
                  <div className="flex">
                    <input
                      className="mt-[7px] mr-[2px]"
                      type="radio"
                      value="Male"
                      name="gender"
                    />
                    <p>Công khai</p>
                  </div>
                  <div className="flex">
                    <input
                      className="mt-[7px] mr-[2px]"
                      type="radio"
                      value="Female"
                      name="gender"
                    />
                    <p>Riêng tư</p>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-between">
                <h3>{memberCurrent.user.first_name + " " + memberCurrent.user.last_name}</h3>
              </div>
              <div className="flex justify-between mt-4">
                {isShowEditProfile ? (
                  <>
                    <Field
                      disabled={!isShowEditProfile}
                      name='resume'
                      type="text"
                      className="font-bold"
                      placeholder="Giới thiệu về bản thân"
                    />
                    <ErrorMessage
                      name='resume'
                      component="div"
                      className="alert alert-danger"
                    />
                  </>
                ) : (
                  <p className="font-bold">{memberCurrent.resume}</p>
                )}

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => handleShowEditProfile()}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              {isShowEditProfile ? (
                <Field
                  disabled={!isShowEditProfile}
                  type="text"
                  name="address"
                  title="Nhập địa chỉ"
                  className="mb-2 max-w-[30%]"
                  placeholder="Địa chỉ"
                />
              ) : (
                <p className="mb-[4px]">
                  Địa chỉ:{" "}
                  {memberCurrent.user.address
                    ? memberCurrent.user.address
                    : " [Chưa bổ xung]"}
                </p>
              )}

              <p className="mb-[4px]">{memberCurrent?.user.email}</p>
              {isShowEditProfile ? (
                <Field
                  disabled={!isShowEditProfile}
                  type="text"
                  name="phone_number"
                  pattern="(\+84|0)\d{9,10}"
                  title="Nhập số điện thoại từ 10 đến 11 số"
                  className="mb-2 max-w-[30%]"
                  placeholder="Số điện thoại"
                />
              ) : (
                <p className="mb-[4px]">
                  Số điện thoại:{" "}
                  {memberCurrent.user.phone_number
                    ? memberCurrent.user.phone_number
                    : " [Chưa bổ xung]"}
                </p>
              )}
              <div className="flex">
                {isShowEditProfile ? (
                  <>
                    <p className="font-bold" style={{width: '100%'}}>Lương mong muốn: </p>
                    <Field
                      className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
                      type="number"
                      name="salary"
                    />
                    <Field
                      className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
                      type="text"
                      placeholder="VND hoặc USD"
                      name="currency"
                    />
                  </>
                ) : (
                  <>
                    <p className="font-bold">Lương mong muốn: </p>
                    <p className="mb-[4px]">
                      {memberCurrent.salary
                        ? memberCurrent.salary + ' ' + memberCurrent.currency
                        : " [Chưa bổ xung]"}
                    </p>
                  </>
                )}

              </div>
              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border mt-3">
                <div className="flex">
                  {isShowEditProfile ? (
                    <button
                      type="submit"
                      // onClick={() => onSaveSkills()}
                      className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                </div>
              </div>
              {/* <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
                <input value="" placeholder="Kinh nghiệm làm việc" />
                <div className="flex">
                  {isShowEditTitle ? (
                    <span className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] cursor-pointer px-[14px]">
                      Save
                    </span>
                  ) : (
                    false
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => handleShowEditTitle()}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div> */}
              {/* Chức vụ - kinh nghiệm */}
              <div className="flex justify-between mt-4">
                <p className="font-bold">Chức vụ</p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => handleShowEditPosition()}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <FieldArray name="member_experiences">
                {({ remove, push }) => (
                  <div className="">
                    {values?.member_experiences?.length > 0 &&
                      values?.member_experiences?.map((_, index) => (
                        <div key={index}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Tên vị trí</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.job_title`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Tên vị trí"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.job_title`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Công ty</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.company_name`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Công ty"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.company_name`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Địa chỉ</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.job_location`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Địa chỉ"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.job_location`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Tình trạng công việc</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.job_state`}
                              type="checkbox"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Địa chỉ"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.job_state`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          {/* <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Quốc gia</span>
                            <Dropdown
                              disabled={isShowPosition ? false : true}
                              value={selectedCountry}
                              options={countries}
                              onChange={(e) => {
                                onCountryChange(e);
                                setFieldValue(`member_experiences.${index}.job_country`, e.value);
                              }}
                              optionValue="id"
                              optionLabel="name" placeholder="Chọn Quốc Gia" />
                            <ErrorMessage
                              name={`member_experiences.${index}.job_country`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div> */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Mô tả</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.description`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Mô tả"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.description`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Ngày bắt đầu</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.start_date`}
                              type="date"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="bắt đầu"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.start_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Ngày kết thúc</span>
                            <Field
                              disabled={!isShowPosition}
                              name={`member_experiences.${index}.end_date`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="kết thúc"
                            />
                            <ErrorMessage
                              name={`member_experiences.${index}.end_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          {isShowPosition && (
                            <Button
                              type="button"
                              className="p-button-sm"
                              disabled={isSubmitting}
                              onClick={() => remove(index)}
                            >
                              Xóa
                            </Button>
                          )}
                          {values.member_experiences.length >= 1 &&
                            values.member_experiences.length === index + 1 && isShowPosition ? (
                            <Button
                              type="button"
                              className="p-button-sm ml-8"
                              disabled={isSubmitting}
                              onClick={() =>
                                push({
                                  job_title: '',
                                  company_name: '',
                                  job_location: '',
                                  job_state: '',
                                  job_country: '',
                                  description: '',
                                  start_date: '',
                                  end_date: '',
                                })
                              }
                            >
                              Thêm học vấn
                            </Button>
                          ) : null}
                        </div>
                      ))}
                    {values.member_experiences.length === 0 && isShowPosition ? (
                      <Button
                        type="button"
                        className="p-button-sm"
                        disabled={isSubmitting}
                        onClick={() =>
                          push({
                            job_title: '',
                            company_name: '',
                            job_location: '',
                            job_state: '',
                            job_country: '',
                            description: '',
                            start_date: '',
                            end_date: '',
                          })
                        }
                      >
                        Thêm học vấn
                      </Button>
                    ) : null}
                    {typeof errors.member_experiences === "string" ? (
                      <div className="alert alert-danger" role="alert">
                        {errors.member_experiences}
                      </div>
                    ) : null}
                  </div>
                )}
              </FieldArray>


              {/* {isShowPosition ? (
                <input className="block px-1 py-[1px] mb-[2px]" />
              ) : (
                <p>
                  Vị trí ứng tuyển:{" "}
                  {currentUser?.specialized
                    ? currentUser?.specialized
                    : "Chưa có thông tin!"}
                </p>
              )}
              {isShowPosition ? (
                <input className="block px-1 py-[1px] mb-[2px]" />
              ) : (
                <p>
                  Thời gian:{" "}
                  {currentUser?.time
                    ? currentUser?.time
                    : " Chưa có thông tin!"}
                </p>
              )} */}

              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border mt-3">
                {/* chuc vu */}
                <div className="flex">
                  {isShowPosition ? (
                    <button
                      type="submit"
                      // onClick={() => onSaveSkills()}
                      className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                </div>
              </div>
              {/* Hoc van */}
              <div className="flex justify-between mt-4">
                <p className="font-bold">Học vấn</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  onClick={() => handleShowEditEducation()}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <FieldArray name="member_educations">
                {({ remove, push }) => (
                  <div className="">
                    {values?.member_educations?.length > 0 &&
                      values?.member_educations?.map((_, index) => (
                        <div key={index ? index : null}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Tên trường</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.university_name`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Tên trường"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.university_name`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Tên bằng cấp</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.degree_name`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Tên bằng cấp"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.degree_name`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Chuyên ngành</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.major`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Chuyên ngành"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.major`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Điểm GPA</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.gpa`}
                              type="number"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="thang điểm 4"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.gpa`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Ngày bắt đầu</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.starting_date`}
                              type="date"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="bắt đầu"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.starting_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <span>Ngày hoàn thành</span>
                            <Field
                              disabled={!isShowEducation}
                              name={`member_educations.${index}.completion_date`}
                              type="date"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="hoàn thành"
                            />
                            <ErrorMessage
                              name={`member_educations.${index}.completion_date`}
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          {isShowEducation && (
                            <Button
                              type="button"
                              className="p-button-sm"
                              disabled={isSubmitting}
                              onClick={() => remove(index)}
                            >
                              Xóa
                            </Button>
                          )}
                          {values.member_educations.length >= 1 &&
                            values.member_educations.length === index + 1 && isShowEducation ? (
                            <Button
                              type="button"
                              className="p-button-sm ml-8"
                              disabled={isSubmitting}
                              onClick={() =>
                                push({
                                  degree_name: '',
                                  major: '',
                                  university_name: '',
                                  gpa: '',
                                  starting_date: '',
                                  completion_date: '',
                                })
                              }
                            >
                              Thêm học vấn
                            </Button>
                          ) : null}
                        </div>
                      ))}
                    {values.member_educations.length === 0 && isShowEducation ? (
                      <Button
                        type="button"
                        className="p-button-sm"
                        disabled={isSubmitting}
                        onClick={() =>
                          push({
                            degree_name: '',
                            major: '',
                            university_name: '',
                            gpa: '',
                            starting_date: '',
                            completion_date: '',
                          })
                        }
                      >
                        Thêm học vấn
                      </Button>
                    ) : null}
                    {typeof errors.member_educations === "string" ? (
                      <div className="alert alert-danger" role="alert">
                        {errors.member_educations}
                      </div>
                    ) : null}
                  </div>
                )}
              </FieldArray>

              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  {/* button edit skill */}
                  {isShowEducation ? (
                    <button
                      type="submit"
                      // onClick={() => onSaveSkills()}
                      className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border"></div>

              {/* {isShowEducation ? (
                <input
                  type="text"
                  placeholder="input"
                  className="px-1 mb-[14px] max-w-[20%]"
                />
              ) : (
                <p>
                  Tên trường học :{" "}
                  {currentUser?.school_name
                    ? currentUser?.school_name
                    : " Chưa có thông tin!"}
                </p>
              )}
              {isShowEducation ? (
                <input
                  type="text"
                  placeholder="input text"
                  className="px-1 mb-[14px] max-w-[20%]"
                />
              ) : (
                <p>
                  Thời gian:{" "}
                  {currentUser?.time_School
                    ? currentUser?.time_School
                    : "Chưa có thông tin!"}
                </p>
              )}

              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
                <input value="" placeholder="Kỹ năng" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div> */}
              {/* Ky nang */}
              <div className="flex justify-between mt-4">
                <span class="font-bold">Kỹ năng</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  onClick={() => handleShowEditSkill()}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-4">
                {/* Skill form */}
                <FieldArray name="member_skills">
                  {({ remove, push }) => (
                    <div className="">
                      {values?.member_skills?.length > 0 &&
                        values?.member_skills?.map((_, index) => (
                          <div key={index ? index : null}>
                            <label>Tên</label>
                            <Field
                              disabled={!isShowEditSkill}
                              name={`member_skills.${index}.name`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Nhập kỹ năng"
                            />
                            <ErrorMessage
                              name={`member_skills.${index}.name`}
                              component="div"
                              className="alert alert-danger"
                            />
                            <label>Mô tả</label>
                            <Field
                              disabled={!isShowEditSkill}
                              name={`member_skills.${index}.description`}
                              type="text"
                              className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                              placeholder="Nhập mô tả kỹ năng"
                            />
                            <ErrorMessage
                              name={`member_skills.${index}.description`}
                              component="div"
                              className="alert alert-danger"
                            />
                            {isShowEditSkill && (
                              <Button
                                type="button"
                                className="p-button-sm"
                                disabled={isSubmitting}
                                onClick={() => remove(index)}
                              >
                                Xóa
                              </Button>
                            )}
                            {values.member_skills.length >= 1 &&
                              values.member_skills.length === index + 1 && isShowEditSkill ? (
                              <Button
                                type="button"
                                className="p-button-sm ml-8"
                                disabled={isSubmitting}
                                onClick={() =>
                                  push({
                                    name: "",
                                    description: "",
                                  })
                                }
                              >
                                Thêm kỹ năng
                              </Button>
                            ) : null}
                          </div>
                        ))}
                      {values.member_skills.length === 0 && isShowEditSkill ? (
                        <Button
                          type="button"
                          className="p-button-sm"
                          disabled={isSubmitting}
                          onClick={() =>
                            push({
                              name: "",
                              description: "",
                            })
                          }
                        >
                          Thêm kỹ năng
                        </Button>
                      ) : null}
                      {typeof errors.member_skills === "string" ? (
                        <div className="alert alert-danger" role="alert">
                          {errors.member_skills}
                        </div>
                      ) : null}
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  {/* button edit skill */}
                  {isShowEditSkill ? (
                    <button
                      type="submit"
                      // onClick={() => onSaveSkills()}
                      className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                </div>
              </div>

              {/* resume */}
              {/* <div className="flex justify-between mt-4">
                <FieldArray name="resume">
                  <div className="flex relative">
                    <div>
                      <Field
                        name={`resume`}
                        type="text"
                        className="border my-2 border-solid border-slate-400 focus:outline-none py-2 px-4 w-full rounded"
                        placeholder="Thông tin"
                      />
                      <ErrorMessage
                        name={`resume`}
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                  </div>
                </FieldArray>
              </div> */}

              {/* <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  {isShowEditSkill ? (
                    <button
                      type="submit"
                      // onClick={() => onSaveSkills()}
                      className="bg-primary hover:bg-hover-btn rounded-xl mr-2 text-[#fff] py-1 cursor-pointer px-[14px]"
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                  <svg
                    onClick={() => handleShowEditSkill()}
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ViewCv;
