import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import userService from "services/user.service";
import { CreateNotificationJob } from "components/modals";

Notification.propTypes = {
  currentUser: PropTypes.object,
};

function Notification() {
  const [registerNotificationJob, setRegisterNotificationJob] = useState(null);
  const [isReload, setIsReload] = useState(false);
  const toggleShow = () => setShowModal((p) => !p);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // get save jobs and apply jobs
    userService.getRegisterNotificationJob().then((res) => {
      setRegisterNotificationJob(res.data);
      setIsReload(false);
    }).catch((err) => {
      if (err.response.status === 404) {
        setRegisterNotificationJob(null);
        setIsReload(false);
      }
    });
  }, [isReload === true]);

  const handleDeleteRegistration = (id) => {
    userService.deleteRegisterNotificationJobDetail(id).then(() => {
      setIsReload(true);
    }).catch(() => { });
  }

  return (
    <div className="container p-8 border border-solid">
      <div className="flex justify-between border-b">
        <h2>Thông báo việc làm</h2>
        <p className="flex" onClick={() => {
          if (registerNotificationJob?.length >= 5) {
            toast.error("Bạn chỉ được phép đăng ký tối đa 5 thông báo", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toggleShow();
          }
        }} style={{ cursor: 'pointer' }}>
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
          <span >Tạo thông báo</span>
        </p>
      </div>
      {registerNotificationJob ? (
        <table class="table">
          <thead>
            <tr>
              <th >Công nghệ thông tin</th>
              <th >Nhận</th>
              <th >Ngày tạo</th>
              <th >Trạng thái</th>
              <th >Hành động</th>
            </tr>
          </thead>
          <tbody>
            {registerNotificationJob.map((item, index) => (
              <tr key={index}>
                <td>{item.district} - {item.job_name} - {item.level} - {item.currency === 'USD' ? '$' + item.salary : item.salary + ' VND'}</td>
                <td>{item.cron_job === 'daily' ? 'Hàng ngày' : item.cron_job === 'weekly' ? 'Hàng tuần' : 'Không xác định'}</td>
                <td>{item.created_at}</td>
                <td>
                  {/* <label data-v-13db6a09="" className="switch mr-1">
                    <input
                      type="checkbox" custom-checked={item.status ? "true" : "false"} defaultChecked={item.status}
                      onClick={() => { handleStatus(item.status, item.slug) }} />
                    <span className='slider round'></span>
                  </label> */}
                  {item.status ? 'Đang bật' : 'Đã tắt'}
                </td>
                <td><button style={{ color: 'red' }} onClick={() => { handleDeleteRegistration(item.id) }}>Xóa</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          HIỆN TẠI CHƯA CÓ THÔNG BÁO NÀO <i style={{ color: "red" }}></i>
        </h1>
      )}
      <CreateNotificationJob
        showModal={showModal}
        toggleShow={toggleShow}
        setIsReload={setIsReload}
      />
    </div>
  );
}

export default Notification;
