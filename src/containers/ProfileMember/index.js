import React from "react";
import PropTypes from "prop-types";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import MyProfile from "./MyProfile";
import ViewCv from "./ViewCv";
import Notification from "./Notification";

ProfileMember.propTypes = {};

function ProfileMember(props) {
  return (
    <>
      <div className="h-[100px]">
        <Header></Header>
      </div>
      <div className="w-full">
        <div className="w-[50%] mx-auto h-[100px] border-2 border-solid border-neutral-100 rounded">
          <div className="flex relative justify-between ">
            <div className="ml-[14%]">
              <h3>Nguyen An</h3>
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
                <span>Đà Nẵng</span>
              </div>
            </div>
            <div className="mr-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-[4px] text-primary"
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
              <div className="flex mt-[30px]">
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span>Messenger</span>
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
          <li className="mr-[16px] underline decoration-primary decoration-solid underline-offset-4">
            Xem CV
          </li>
          <li className="mr-[16px]">Quản lý hồ sơ</li>
          <li className="mr-[16px]">Thông báo việc làm</li>
          <li className="mr-[16px]">Việc làm của tôi</li>
        </ul>
        {/* <ViewCv></ViewCv> */}
        <MyProfile />
        {/* <Notification></Notification> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default ProfileMember;
