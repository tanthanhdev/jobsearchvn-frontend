import React from "react";
import PropTypes from "prop-types";

Notification.propTypes = {};

function Notification(props) {
  return (
    <div className="container p-8 border border-solid">
      <div className="flex justify-between border-b">
        <h2>Thông báo việc làm</h2>
        <p className="flex">
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
          <span>Tạo thông báo</span>
        </p>
      </div>
      <table class="table">
        <thead>
          <tr className="flex flex-row">
            <th className="basis-2/4">Công nghệ thông tin</th>
            <th className="basis-1/4">Nhận</th>
            <th className="basis-1/4">Ngày tạo</th>
          </tr>
        </thead>
        <tbody className="flex flex-row">
          <tr className="basis-2/4">
            <td>Đà Nẵng - IT - Phần mềm - Thực tập sinh/Sinh viên - $123</td>
          </tr>
          <tr className="basis-1/4">
            <td>Hàng ngày</td>
          </tr>
          <tr className="basis-1/4">
            <td>2021-10-22 02:34:25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Notification;
