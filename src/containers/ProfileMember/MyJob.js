import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import utilsDate from "utils/date";
import userService from "services/user.service";

MyJob.propTypes = {
  currentUser: PropTypes.object,
};

function MyJob({ saveJobs, applyJobs, setIsReload }) {
  const [toggleJob, setToggleJob] = useState(1);
  return (
    <div className="container min-h-[400px] border">
      <h2 className="pb-4 font-bold border-b">Việc làm của tôi</h2>
      <div className="flex">
        <p
          onClick={() => setToggleJob(1)}
          className={`${toggleJob === 1
            ? "text-primary underline border-r px-[8px] cursor-pointer"
            : "border-r px-[8px] cursor-pointer"
            } `}
        >
          Việc đã lưu
        </p>

        <p
          onClick={() => setToggleJob(2)}
          className={`${toggleJob === 2
            ? "text-primary underline px-[8px] text-borderListSearch cursor-pointer"
            : "px-[8px] text-borderListSearch cursor-pointer"
            }`}
        >
          Việc đã ứng tuyển
        </p>
      </div>
      <table class="table-auto w-full">
        {saveJobs && toggleJob === 1 ? (
          <tbody className="w-full">
            {saveJobs.map((item, index) => (
              <tr className="w-full" key={index}>
                <td className="w-[20%]">
                  <img
                    src={item.member.avatar}
                    alt="ewew"
                    className="w-[80px] h-[80px]"
                  />
                </td>
                <td className="w-[30%]">
                  <div className="block">
                    <span className="block">{item.job.title}</span>
                    <span className="block">
                      Lương:
                      {item.job.salary_type === "Lương" ? (
                        " " + item.job.salary + item.job.currency
                      ) : ""}
                      {item.job.salary_type === "Lương khoảng" ? (
                        <span> {item.job.salary_from} - {item.job.salary_to} {item.job.currency}</span>
                      ) : ""}
                      {item.job.salary_type === "Thương lượng" ? (
                        <span> Thương lượng</span>
                      ) : ""}
                    </span>
                  </div>
                </td>
                <td className="w-[20%]">
                  <div className="block">
                    <span className="block">Ngày hết hạn</span>
                    <span className="block">{utilsDate.formatDate(item.job.end_time, 'DD/MM/YYYY')}</span>
                  </div>
                </td>
                <td className="w-[10%]">
                  <div className="block">
                    <span className="block">Ngày tạo</span>
                    <span className="block">{utilsDate.formatDate(item.created_at, 'DD/MM/YYYY')}</span>
                  </div>
                </td>
                <td className="w-[20%]">
                  <a href={'/' + item.job.slug} target="_blank" className="cursor-pointer text-primari">Xem chi tiết</a>
                </td>
                <td className="w-[20%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => {
                      userService.deleteSaveJobDetail(item.job.id).then(() => {
                        setIsReload(true);
                      })
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        ) : !saveJobs && toggleJob === 1 ? (
          <h1
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "red",
            }}
          >
            Hiện tại chưa có công việc nào đã lưu{" "}
          </h1>
        ) : null}
        {applyJobs && toggleJob === 2 ? (
          <tbody className="w-full">
            {applyJobs.map((item, index) => (
              <tr className="w-full" key={index} style={{textAlign: 'center'}}>
                <td className="w-[20%]">
                  <img
                    src={item.member.avatar}
                    alt="ewew"
                    className="w-[80px] h-[80px]"
                  />
                </td>
                <td className="w-[30%]">
                  <div className="block">
                    <span className="block">{item.job.title}</span>
                    <span className="block">
                      Lương:
                      {item.job.salary_type === "Lương" ? (
                        " " + item.job.salary + item.job.currency
                      ) : ""}
                      {item.job.salary_type === "Lương khoảng" ? (
                        <span> {item.job.salary_from} - {item.job.salary_to} {item.job.currency}</span>
                      ) : ""}
                      {item.job.salary_type === "Thương lượng" ? (
                        <span> Thương lượng</span>
                      ) : ""}
                    </span>
                  </div>
                </td>
                <td className="w-[10%]">
                  <div className="block">
                    <span className="block">Ngày hết hạn</span>
                    <span className="block">{utilsDate.formatDate(item.job.end_time, 'DD/MM/YYYY')}</span>
                  </div>
                </td>
                <td className="w-[10%]">
                  <div className="block">
                    <span className="block">Ngày tạo</span>
                    <span className="block">{utilsDate.formatDate(item.created_at, 'DD/MM/YYYY')}</span>
                  </div>
                </td>
                <td className="w-[10%]">
                  <div className="block">
                    <span className="block">Tình trạng</span>
                    <span className="block" style={{
                      fontWeight: 'bold',
                      backgroundColor: '#ff9200',
                      borderRadius: '4px',
                      textAlign: 'center',
                      color: item.status === '1' ? 'red' : 'white'
                    }}>
                      {item.status === '1' ? 'Không đạt'
                        : item.status === '2' ? 'Ứng viên từ chối'
                          : item.status === '3' ? 'Đã tuyển' : 'Đang duyệt'}
                    </span>
                  </div>
                </td>
                <td className="w-[10%]">
                  <a href={'/' + item.job.slug} target="_blank" className="cursor-pointer text-primari">Xem chi tiết</a>
                </td>
                <td className="w-[10%]" style={{margin: '0 auto'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    onClick={() => {
                      userService.deleteApplyJobDetail(item.id).then(() => {
                        setIsReload(true);
                      })
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        ) : !applyJobs && toggleJob === 2 ? (
          <h1
            style={{
              textAlign: "center",
              textDecoration: "underline",
              color: "red",
            }}
          >
            Hiện tại chưa có công việc nào đã ứng tuyển{" "}
          </h1>
        ) : null}
      </table>
    </div>
  );
}

export default MyJob;
