import React, { useState } from "react";
import PropTypes from "prop-types";

MyJob.propTypes = {
  currentUser: PropTypes.object,
};

function MyJob({ currentUser }) {
  const [toggleJob, setToggleJob] = useState(1);
  return (
    <div className="container min-h-[400px] border">
      <h2 className="pb-4 font-bold border-b">Việc làm của tôi</h2>
      <div className="flex">
        <p
          onClick={() => setToggleJob(1)}
          className={`${
            toggleJob === 1
              ? "text-primary underline border-r px-[8px] cursor-pointer"
              : "border-r px-[8px] cursor-pointer"
          } `}
        >
          Việc đã lưu
        </p>

        <p
          onClick={() => setToggleJob(2)}
          className={`${
            toggleJob === 2
              ? "text-primary underline px-[8px] text-borderListSearch cursor-pointer"
              : "px-[8px] text-borderListSearch cursor-pointer"
          }`}
        >
          Việc đã ứng tuyển
        </p>
      </div>
      <table class="table-auto">
        {currentUser?.my_Job ? (
          <tbody className="w-full">
            <tr className="w-full">
              <td className="w-[20%]">
                <img
                  src="data:image/png;base64,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"
                  alt="ewew"
                  className="w-[80px] h-[80px]"
                />
              </td>
              <td className="w-[40%]">
                <div className="block">
                  <span className="block">SoftWare engineer fresher</span>
                  <span className="block">Thương lượng</span>
                </div>
              </td>
              <td className="w-[20%]">
                <div className="block">
                  <span className="block">Ngày hết hạn</span>
                  <span className="block">2021</span>
                </div>
              </td>
              <td className="w-[20%]">
                <span className="cursor-pointer text-primari">Ứng tuyển</span>
              </td>
              <td className="w-[20%]">
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        ) : (
          <h1
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "red",
            }}
          >
            Hiện tại chưa có công việc nào đã lưu{" "}
          </h1>
        )}
      </table>
    </div>
  );
}

export default MyJob;
