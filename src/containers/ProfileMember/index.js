import React from "react";
import PropTypes from "prop-types";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import MyProfile from "./MyProfile";

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
        {/* <div className="w-[64%] mx-auto p-[20px] rounded border-2 border-solid border-border relative">
          <div className="absolute -right-[20%]">
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
                  className="mt-[0.8%]"
                  type="radio"
                  value="Male"
                  name="gender"
                />
                <p>Công khai</p>
              </div>
              <div className="flex">
                <input
                  className="mt-[0.8%]"
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          <p className="font-bold">Tiêu đề</p>
          <p className="mb-[4px]">Đà Nẵng</p>
          <p className="mb-[4px]">Anvo8222@gmail.com</p>
          <p className="mb-[4px]">0387367435</p>
          <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
            <input value="" placeholder="Kinh nghiệm làm việc" />
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
          <div className="flex justify-between mt-4">
            <p className="font-bold">Chức vụ</p>
            <div className="flex">
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
          <p>Tên công ty - Đà Nẵng</p>
          <p>Tháng 2 năm 2018 đến tháng 3 năm 2036</p>
          <div className="flex pb-[12px] justify-between flex border-b-2 border-solid border-border">
            <input value="" placeholder="Học vấn" />
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
          <p className="font-bold">Cử nhân Khoa Học Máy Tính</p>
          <p>Tên trường học - Đà Nẵng</p>
          <p>Tháng 2 năm 2016 đến tháng 5 năm 2026</p>
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
          <div className="flex justify-between mt-4">
            <p className="">Tên kỹ năng</p>
            <div className="flex">
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
          <div className="flex justify-between mt-4">
            <p className="">Ngôn ngữ lập trình: Java</p>
            <div className="flex">
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
        </div> */}
        <MyProfile />
      </div>

      <Footer></Footer>
    </>
  );
}

export default ProfileMember;
