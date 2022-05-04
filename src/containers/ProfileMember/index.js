import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
// import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// Components
// import MyProfile from "./MyProfile";
import ViewCv from "./ViewCv";
import Notification from "./Notification";
import { Wrap } from "components/wrap/Wrap";
import MyJob from "./MyJob";
import memberApi from "api/memberApi";
import CVTempManage from "./components/CVTempManage/CVTempManage";
// import axiosClient from "api/axiosClient";
// import { setMemberSlice } from "./memberSlice";
// services
import userService from "services/user.service";
import { icons } from "utils/icons";
import { update_member } from "../../api/memberApi";

// ProfileMember.propTypes = {};

function ProfileMember() {
  let params = useParams();
  const [option, setOption] = useState(() => {
    if (params.tab === 'cvs') {
      return 0;
    }
    return 1;
  });
  const [isReload, setIsReload] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [memberCurrent1, setMemberCurrent1] = useState({});
  const [cvs, setCVS] = useState(null);
  const [page, setPage] = useState(null);
  const [saveJobs, setSaveJobs] = useState(null);
  const [applyJobs, setApplyJobs] = useState(null);
  const { user: currentUser } = useSelector((state) => state.auth);
  //chong rerender vo han
  const dispatch = useDispatch();
  useEffect(() => {
    memberApi.getMember().then((response) => {
      setMemberCurrent1(response);
    });
    // get all cvs
    userService.getCVs(page).then((res) => {
      setCVS(res.data);
      setIsReload(false);
    });
    // get save jobs and apply jobs
    userService.getSaveJob().then((res) => {
      setSaveJobs(res.data);
      setIsReload(false);
    }).catch((err) => {
      if (err.response.status === 404) {
        setSaveJobs(null);
        setIsReload(false);
      }
    });
    userService.getApplyJob().then((res) => {
      setApplyJobs(res.data);
      setIsReload(false);
    }).catch((err) => {
      if (err.response.status === 404) {
        setApplyJobs(null);
        setIsReload(false);
      }
    });
  }, [dispatch, isReload === true]);
  // dispatch(setMemberSlice(memberCurrent1))
  // console.log("user: currentUser", currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const toggle = (index) => {
    setOption(index);
  };

  // console.log("=========================");
  // console.log("memberrrrrrrrrr", member);
  // console.log("memberCurrent1", memberCurrent1);


  const initialValues = {
    // user
    address: memberCurrent1 && memberCurrent1.user ? memberCurrent1.user.address : null,
    phone_number: memberCurrent1 && memberCurrent1.user ? memberCurrent1.user.phone_number : null,
    first_name: memberCurrent1 && memberCurrent1.user ? memberCurrent1.user.first_name : null,
    last_name: memberCurrent1 && memberCurrent1.user ? memberCurrent1.user.last_name : null,
    gender: memberCurrent1 && memberCurrent1.user ? memberCurrent1.user.gender : null,
    // member
    avatar: memberCurrent1 && memberCurrent1.user ? memberCurrent1.avatar : null,
  };

  const onSubmit = (data, { resetForm }) => {
    console.log("data formik", data);
    let formData = new FormData();
    if (typeof (data.avatar) === 'object') {
      formData.append("avatar", data.avatar);
    }
    formData.append("address", data.address);
    formData.append("phone_number", data.phone_number);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("gender", data.gender);
    dispatch(
      update_member(formData)
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

  return (
    <>
      <Wrap>
        <div className="h-[100px]"></div>
        <div className="w-full">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
          // onSubmit={async (values) => {
          //   await new Promise((r) => setTimeout(r, 500));
          //   console.log(JSON.stringify(values, null, 2));
          //   update_member(values);
          // }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                {memberCurrent1 && (
                  <div className="w-[50%] mx-auto h-[110px] border-2 border-solid border-neutral-100 rounded">
                    <div className="flex relative justify-between ">
                      <div className="ml-[14%]">
                        {isEdit ? (
                          <div className="mt-[2px]">
                            <Field
                              name="first_name"
                              type="text"
                              className="border-1 p-[1px] mb-[1px]"
                            />
                            <Field
                              name="last_name"
                              type="text"
                              className="border-1 p-[1px]"
                            />
                          </div>
                        ) : (
                          <h3>
                            {memberCurrent1.user ? memberCurrent1.user.first_name : ''}
                            {' '}
                            {memberCurrent1.user ? memberCurrent1.user.last_name : ''}
                          </h3>
                        )}
                        <div className="flex mt-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className=" flex">
                            {isEdit ? (
                              <Field name="address" type="text" className="max-w-[100px] px-2" />
                            ) : (
                              <span className="mr-2">
                                {memberCurrent1.user
                                  ? memberCurrent1.user.address
                                  : "[Chưa bổ xung]"}
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="mr-[20px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mt-[4px] text-primary cursor-pointer ml-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          onClick={() => { setIsEdit(!isEdit) }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                        <div className="flex mt-[30px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="flex">
                            <span>Giới tính: </span>
                            {isEdit ? (
                              <>
                                <label>
                                  Nam
                                  <Field name="gender" type="radio" value="1" className="max-w-[60px] px-2" />
                                </label>
                                <label>
                                  Nữ
                                  <Field name="gender" type="radio" value="0" className="max-w-[60px] px-2" />
                                </label>
                                <label>
                                  Khác
                                  <Field name="gender" type="radio" value="2" className="max-w-[60px] px-2" />
                                </label>
                              </>
                            ) : memberCurrent1.user && memberCurrent1.user.gender === '1' ? (
                              'Nam'
                            ) : memberCurrent1.user && memberCurrent1.user.gender === '0' ? (
                              'Nữ'
                            ) : (
                              'Khác'
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="top-[30%] -left-[8%] absolute w-[80px] h-[80px]">
                        {isEdit && (
                          <input
                            id="avatar" name="avatar" type="file" onChange={(event) => {
                              setFieldValue("avatar", event.currentTarget.files[0]);
                            }} className="form-control" />
                        )}
                        <img
                          className="object-contain rounded-full"
                          src={memberCurrent1.avatar ? memberCurrent1.avatar : icons.logo_default}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    {isEdit ? (
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
                )}
              </Form>
            )}
          </Formik>

          <ul className="w-[60%] mx-auto my-[10px] pb-[16px] flex border-b-2 border-solid border-border">
            <li
              onClick={() => {
                toggle(0);
                window.history.pushState('', '', '/profile-member/cvs');
              }}
              className={
                option === 0
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer]"
              }
            >
              CV Mẫu
            </li>
            <li
              onClick={() => {
                toggle(1);
                window.history.pushState('', '', '/profile-member');
              }}
              className={
                option === 1
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer]"
              }
            >
              CV Hồ Sơ
            </li>
            {/* <li
              onClick={() => {
                toggle(2);
                window.history.pushState('', '', '/profile-member');
              }}
              className={
                option === 2
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Quản lý hồ sơ
            </li> */}
            <li
              onClick={() => {
                toggle(3);
                window.history.pushState('', '', '/profile-member');
              }}
              className={
                option === 3
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Thông báo việc làm
            </li>
            <li
              onClick={() => {
                toggle(4);
                window.history.pushState('', '', '/profile-member');
              }}
              className={
                option === 4
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Việc làm của tôi
            </li>
          </ul>
          {(option === 1 && memberCurrent1 && memberCurrent1.user && (
            <ViewCv
              memberCurrent={memberCurrent1}
              setIsReload={setIsReload}
            ></ViewCv>
          )) ||
            // (option === 2 && (
            //   <MyProfile
            //     setIsReload={setIsReload}
            //     memberCurrent={memberCurrent1}
            //   />
            // )) ||
            (option === 3 && (
              <Notification
                memberCurrent={memberCurrent1}
                currentUser={currentUser}
              ></Notification>
            )) ||
            (option === 4 && (
              <MyJob
                saveJobs={saveJobs}
                applyJobs={applyJobs}
                setIsReload={setIsReload}
              ></MyJob>
            )) ||
            (option === 0 && cvs && (
              <CVTempManage
                cvs={cvs}
                setIsReload={setIsReload}
                setPage={setPage}
              ></CVTempManage>
            ))}
        </div>
      </Wrap>
      <div>
        <ToastContainer draggablePercent={60} limit={5} />
      </div>
    </>
  );
}

export default ProfileMember;
