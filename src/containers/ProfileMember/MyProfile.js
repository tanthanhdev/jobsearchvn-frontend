import React from "react";
import PropTypes from "prop-types";

MyProfile.propTypes = {};

function MyProfile(props) {
  return (
    <div className="w-[64%] mx-auto p-[20px] rounded border-2 border-solid border-border relative">
      <div className="flex justify-between">
        <h3>Thông tin liên lạc</h3>
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
      <p className="mb-[4px]">Đà Nẵng</p>
      <p className="mb-[4px]">Anvo8222@gmail.com</p>
      <p className="mb-[4px]">0387367435</p>
      <p className="font-bold">Địa chỉ</p>
      <div className="flex">
        <p className="font-bold min-w-[200px]">Địa chỉ đường phố</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          defaultValue="Cẩm Lệ, Đà Nẵng, Việt Nam"
        />
      </div>
      <div className="flex">
        <p className="font-bold min-w-[200px]">Thành phố</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          defaultValue="Đà Nẵng"
        />
      </div>
      <div className="flex">
        <p className="font-bold min-w-[200px]">Mã bưu điện</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          defaultValue="55000"
        />
      </div>

      <p className="font-bold min-w-[200px]">Công việc mong muốn</p>
      <div className="flex">
        <p className="font-bold min-w-[200px]">Chức vụ mong muốn</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          defaultValue="Web developer"
        />
      </div>
      <p className="font-bold">Loại công việc mong muốn</p>
      <div className="flex">
        <input className="mt-[6px]" type="checkbox" />
        <span>Toàn thời gian</span>
      </div>
      <div className="flex">
        <input className="mt-[6px]" type="checkbox" />
        <span>thực tập sinh</span>
      </div>
      <div className="flex">
        <input className="mt-[6px]" type="checkbox" />
        <span>Nhân viên</span>
      </div>
      <p className="font-bold">Mức lương mong muốn</p>
      <div className="flex">
        <input type="text" defaultValue="1500000" />
      </div>
      <div className="flex">
        <button className="bg-primary p-[10px] text-text mr-[20px] rounded-full">
          Save
        </button>
        <button className="text-primary mr-[20px]">Cancel</button>
      </div>
    </div>
  );
}

export default MyProfile;
