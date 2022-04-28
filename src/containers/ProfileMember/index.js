import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MyProfile from "./MyProfile";
import ViewCv from "./ViewCv";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Wrap } from "components/wrap/Wrap";
import MyJob from "./MyJob";
import memberApi from "api/memberApi";
import axiosClient from "api/axiosClient";
import { setMemberSlice } from "./memberSlice";

ProfileMember.propTypes = {};

function ProfileMember(props) {
  const [option, setOption] = useState(2);
  const [isShowEditName, setisShowEditName] = useState(false);
  const [isShowEditGender, setisShowEditGender] = useState(false);
  const [isShowEditAddress, setisShowEditAddress] = useState(false);
  const [memberCurrent1, setMemberCurrent1] = useState({});
  const { user: currentUser } = useSelector((state) => state.auth);
  //chong rerender vo han
  const dispatch = useDispatch();
  useEffect(() => {
    memberApi.getMember().then((response) => {
      setMemberCurrent1(response);
    });
  }, [dispatch]);
  // dispatch(setMemberSlice(memberCurrent1))
  console.log("user: currentUser", currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const toggle = (index) => {
    setOption(index);
  };
  const handleChangeName = () => {
    setisShowEditName(!isShowEditName);
  };
  const handleChangeGender = () => {
    setisShowEditGender(!isShowEditGender);
  };
  const handleChangeAddress = () => {
    setisShowEditAddress(!isShowEditAddress);
  };

  console.log("=========================");
  // console.log("memberrrrrrrrrr", member);
  console.log("memberCurrent1", memberCurrent1);

  return (
    <>
      <Wrap>
        <div className="h-[100px]"></div>
        <div className="w-full">
          <div className="w-[50%] mx-auto h-[110px] border-2 border-solid border-neutral-100 rounded">
            <div className="flex relative justify-between ">
              <div className="ml-[14%]">
                {isShowEditName ? (
                  <div className="mt-[2px]">
                    <input
                      type="text"
                      className="border-1 p-[1px] mb-[1px]"
                      defaultValue={currentUser.first_name}
                    />
                    <input
                      type="text"
                      className="border-1 p-[1px]"
                      defaultValue={currentUser.last_name}
                    />
                  </div>
                ) : (
                  <h3>
                    {currentUser.first_name} {currentUser.last_name}
                  </h3>
                )}
                {/* <h3>Nguyen An</h3> */}

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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className=" flex">
                    {isShowEditAddress ? (
                      <input type="text" className="max-w-[100px] px-2" />
                    ) : (
                      <span className="mr-2">
                        {currentUser.address
                          ? currentUser.address
                          : "Chưa có thông tin (Sửa)"}
                      </span>
                    )}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-[4px] text-primary cursor-pointer mr-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      onClick={() => handleChangeAddress()}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
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
                  onClick={() => handleChangeName()}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="flex">
                    <span>Giới tính:</span>{" "}
                    {isShowEditGender ? (
                      <input type="text" className="max-w-[60px] px-2" />
                    ) : currentUser.gender ? (
                      currentUser.gender
                    ) : (
                      " Chưa có thông tin (Sửa)"
                    )}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-[4px] text-primary cursor-pointer ml-[6px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => handleChangeGender()}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
              <div className="top-[30%] -left-[8%] absolute w-[80px] h-[80px]">
                <img
                  className="object-contain rounded-full"
                  src="https://tophinhanh.com/wp-content/uploads/2021/12/hinh-avatar-cute-nhat-1-564x375.jpg"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
          <ul className="w-[60%] mx-auto my-[10px] pb-[16px] flex border-b-2 border-solid border-border">
            <li
              onClick={() => toggle(1)}
              className={
                option === 1
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer]"
              }
            >
              Xem CV
            </li>
            <li
              onClick={() => toggle(2)}
              className={
                option === 2
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Quản lý hồ sơ
            </li>
            <li
              onClick={() => toggle(3)}
              className={
                option === 3
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Thông báo việc làm
            </li>
            <li
              onClick={() => toggle(4)}
              className={
                option === 4
                  ? "mr-[16px] underline decoration-primary decoration-solid underline-offset-4 text-primary"
                  : "mr-[16px] cursor-pointer"
              }
            >
              Việc làm của tôi
            </li>
          </ul>
          {(option === 1 && (
            <ViewCv
              memberCurrent={memberCurrent1}
              currentUser={currentUser}
            ></ViewCv>
          )) ||
            (option === 2 && (
              <MyProfile
                memberCurrent={memberCurrent1}
                currentUser={currentUser}
              />
            )) ||
            (option === 3 && (
              <Notification
                memberCurrent={memberCurrent1}
                currentUser={currentUser}
              ></Notification>
            )) ||
            (option === 4 && (
              <MyJob
                memberCurrent={memberCurrent1}
                currentUser={currentUser}
              ></MyJob>
            ))}
        </div>
      </Wrap>
    </>
  );
}

export default ProfileMember;
