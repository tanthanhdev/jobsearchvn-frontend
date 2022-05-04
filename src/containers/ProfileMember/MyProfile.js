import React, { useState } from "react";
import PropTypes from "prop-types";

MyProfile.propTypes = {
  currentUser: PropTypes.object,
};

function MyProfile({ memberCurrent, setIsReload }) {
  const [isEdit, setIsEdit] = useState(false);

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
          onClick={() => {
            setIsEdit(true);
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      <p className="mb-[4px]">
        Địa chỉ:{" "}
        {memberCurrent.user?.address ? memberCurrent.user.address : "Chưa có thông tin!"}
      </p>
      <p className="mb-[4px]">
        Email: {memberCurrent.user?.email ? memberCurrent.user.email : "Chưa có thông tin!"}
      </p>
      <p className="mb-[4px]">
        Số diện thoại:{" "}
        {memberCurrent.user?.phone_number
          ? memberCurrent.user?.phone_number
          : "Chưa có thông tin!"}
      </p>
      <div className="flex">
        <p className="font-bold min-w-[200px]">Thành phố</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          defaultValue={
            memberCurrent.user?.city ? memberCurrent.user?.city : "Chưa có thông tin!"
          }
        />
      </div>

      <div className="flex">
        <p className="font-bold min-w-[200px]">Lương mong muốn</p>
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="number"
          defaultValue={
            memberCurrent?.salary
              ? memberCurrent?.salary
              : "Chưa có thông tin!"
          }
        />
        <input
          className="-mt-[14px] w-full p-0 pl-[20px] border-2 border-solid border-border "
          type="text"
          placeholder="VND hoặc USD"
          defaultValue={
            memberCurrent?.currency
              ? memberCurrent?.currency
              : "Chưa có thông tin!"
          }
        />
      </div>
      {/* <p className="font-bold">Loại công việc mong muốn</p>
      <div className="flex">
        <input className="mt-[6px]" type="radio" name="time" />
        <span>Toàn thời gian</span>
      </div>
      <div className="flex">
        <input className="mt-[6px]" type="radio" name="time" />
        <span>thực tập sinh</span>
      </div>
      <div className="flex">
        <input className="mt-[6px]" type="radio" name="time" />
        <span>Nhân viên</span>
      </div> */}
      {isEdit && (
        <div className="flex">
          <button className="bg-primary p-[10px] text-text mr-[20px] rounded-full" type="submit">
            Save
          </button>
          <button className="text-primary mr-[20px]" onClick={() => {
            setIsEdit(false);
          }}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
