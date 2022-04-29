import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { Button } from "primereact/button";
import memberApi from "../../api/memberApi";
import { update_member } from "../../api/memberApi";
import authHeader from "services/auth-header";
import { useDispatch } from "react-redux";

ViewCv.propTypes = {
  currentUser: PropTypes.object,
  // object member login for update
  memberCurrent: PropTypes.object,
};

function ViewCv({ currentUser, memberCurrent, setIsReload }) {
  const [memberCurrent1, setMemberCurrent1] = useState({});
  const [isShowEditTitle, setIsShowEditTitle] = useState(false);
  const [isShowPosition, setIsShowPosition] = useState(false);
  const [isShowEducation, setIsShowEducation] = useState(false);
  const [isShowEditSkill, setIsShowEditSkill] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  // input
  const [inputSkill, setInputSkill] = useState();
  const handleShowEditTitle = () => {
    setIsShowEditTitle(!isShowEditTitle);
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
  const token = authHeader().Authorization;
  console.log("token", token);
  useEffect(() => {
    memberApi.getMember().then((response) => {
      setMemberCurrent1(response);
    });
  }, []);
  //button
  const onSaveSkills = () => {
    const newInputSkills = inputSkill.split(",");
    memberApi.update({
      ...memberCurrent1,
      resume: newInputSkills,
    });
    console.log("memberCurrent2", memberCurrent1);
  };
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
  const member_resume = () => {
    return memberCurrent.resume;
  };
  const member_certificate = () => {
    let temp = [];
    memberCurrent.member_certificates.map((certificate) => {
      temp.push({
        name: certificate.name,
        year: certificate.year,
      });
    });
    return temp;
  };
  console.log("memberCurrent", memberCurrent);
  const initialValues = {
    // avatar: memberCurrent ? memberCurrent.avatar : null,
    // birthday: memberCurrent ? memberCurrent.birthday : "",
    // memberCurrent: memberCurrent
    //   ? memberCurrent.memberCurrent
    //   : Moment(Date()).format("YYYY-MM-DD hh:mm:ss"),
    // currency: memberCurrent ? memberCurrent.currency : null,
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
    // member_educations: memberCurrent ? memberCurrent.member_educations : [],
    // member_experiences: memberCurrent ? memberCurrent.member_experiences : [],
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log("dataaaaaaaa", data);
    // , resume: data.resume
    dispatch(
      update_member({
        data: data,
      })
    )
      .unwrap()
      .then((res) => {
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
  };

  // const handleCreateJob = (formaData) => {
  //   console.log(formaData);
  // };

  useEffect(() => {
    console.log(memberCurrent);
  }, [memberCurrent]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
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
                <div className="flex ">
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
                </div>
              </div>
              <div className="flex justify-between">
                <h3>Nguyen An</h3>
              </div>
              <p className="font-bold">Tiêu đề</p>
              <p className="mb-[4px]">
                Địa chỉ:
                {currentUser.address
                  ? currentUser.address
                  : "Chưa có thông tin!"}
              </p>
              {isShowEditTitle ? (
                <input
                  type="text"
                  className="mb-2 max-w-[30%]"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Vui lòng nhập nhập đúng email"
                  required
                  placeholder="Email"
                />
              ) : (
                <p className="mb-[4px]">{currentUser?.email}</p>
              )}

              {isShowEditTitle ? (
                <input
                  type="number"
                  pattern="(\+84|0)\d{9,10}"
                  title="Nhập số điện thoại từ 10 đến 11 số"
                  required
                  className="mb-2 max-w-[30%]"
                  placeholder="Số điện thoại"
                />
              ) : (
                <p className="mb-[4px]">
                  Số điện thoại:{" "}
                  {currentUser?.phone_number
                    ? currentUser?.phone_number
                    : "Chưa có thông tin"}
                </p>
              )}

              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
                <input value="" placeholder="Kinh nghiệm làm việc" />
                <div className="flex">
                  {/* save title */}
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
              </div>
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
                  <svg
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
              {isShowPosition ? (
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
              )}

              <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
                <input value="" placeholder="Học vấn" />
                {/* chuc vu */}
                <div className="flex">
                  {isShowPosition ? (
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
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
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
              {isShowEducation ? (
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
              </div>
              <span class="font-bold">Kỹ năng</span>
              <div className="flex justify-between mt-4">
                {/* Skill form */}

                <FieldArray name="member_skills">
                  {({ remove, push }) => (
                    <div className="flex relative">
                      {values?.member_skills?.length > 0 &&
                        values?.member_skills?.map((_, index) => (
                          <div key={index ? index : null}>
                            <Field
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
                            <Field
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
                            <Button
                              type="button"
                              className="p-button-sm"
                              disabled={isSubmitting}
                              onClick={() => remove(index)}
                            >
                              Xóa
                            </Button>
                            {values.member_skills.length >= 1 &&
                            values.member_skills.length === index + 1 ? (
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
                      {values.member_skills.length === 0 ? (
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
                          +
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
              </div>

              {/* resume */}
              <div className="flex justify-between mt-4">
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
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ViewCv;
