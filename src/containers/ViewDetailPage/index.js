import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import {
  AiOutlineHeart,
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  BsShare,
  BsFlag,
  BsFillBagFill,
  BsBagXFill,
  BsCurrencyDollar,
  BsFillPersonFill,
} from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail, SiZalo } from "react-icons/si";
import { GiPositionMarker } from "react-icons/gi";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import jobApi from "../../api/jobApi";
import { useSelector } from "react-redux";

ViewDetailPage.propTypes = {};
const tab = [
  {
    tabName: "Chi tiết",
  },
  {
    tabName: "Tổng quan công ty",
  },
];

const tabIcon = [<AiOutlineHeart />, <BsShare />, <BsFlag />];
function ViewDetailPage(props) {
  const [tabActive, setTabActive] = useState(0);
  const [dropdown, setDropdown] = useState(0);

  const onSetTabActive = (index) => {
    setTabActive(index);
  };

  const setShowDropdown = (index) => {
    setDropdown(index);
  };
  // viewDetail
  const [jobView, setJobView] = useState(null);
  let params = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      const jobList = await jobApi.getAll();
      let jobViewDetail = jobList.filter((job, index) => {
        return job.id === Number(params.id);
      });
      console.log("jobViewDetail", jobViewDetail);
      setJobView(jobViewDetail[0]);
    };
    fetchProducts();
  }, []);
  console.log("jobView", jobView);
  //dùng redux
  // const detailJob = useSelector((state) => state.viewDetailPageSlice);
  // console.log("jobview", detailJob);
  return (
    <>
      <Header></Header>
      <div className="w-3/4 text-sm pl-3 pt-[100px]">
        <div className="py-2 flex justify-between items-center border-b-2 border-gray-300 pb-1 mb-3">
          <div className="flex items-center">
            {tab.map((tabItem, index) => {
              const isActive = index === tabActive;
              return (
                <div
                  key={index}
                  className={classNames(
                    "mr-4 pseudo-tab relative cursor-pointer",
                    { "tab-active": isActive }
                  )}
                  onClick={() => onSetTabActive(index)}
                >
                  {tabItem.tabName}
                </div>
                /* <div key={index} className={`mr-4 pseudo-tab relative cursor-pointer ${isActive? 'tab-active' : false}`} onClick={()=>onSetTabActive(index)}>{tabItem.tabName}</div></> */
              );
            })}
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <div className="relative mr-3 hover:text-orange-500 cursor-pointer group">
                <AiOutlineHeart />
                <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                  Lưu việc làm
                </div>
              </div>
              <div className="relative mr-3 hover:text-orange-500 cursor-pointer group">
                <BsShare />
                <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500">
                  <div className="flex items-center py-2">
                    <AiFillFacebook className="mr-2 text-lg" />
                    <GrLinkedinOption className="mr-2 text-lg" />
                    <SiGmail className="mr-2 text-lg" />
                    <SiZalo className="mr-2 text-lg" />
                    <AiOutlineGoogle className="mr-2 text-lg" />
                  </div>
                </div>
              </div>
              <div className="relative mr-3 hover:text-orange-500 cursor-pointer group">
                <BsFlag />
                <div className="bg-white w-24 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                  Báo Xấu
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-light-blue">
          <div className="py-2 px-3 w-1/3">
            <div>
              <div className="flex items-center">
                <GiPositionMarker className="mr-2" />
                <div className="font-bold"> Địa điểm</div>
              </div>
              <a href="#" className="text-primary hover:underline ml-6">
                {jobView?.city.name}
              </a>
              <img
                alt="asd asd"
                className="w-3/4 mt-4"
                src="https://static.careerbuilder.vn/themes/careerbuilder/img/icon-map.svg"
              />
            </div>
          </div>
          <div className="py-2 px-3 w-1/3">
            <div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <AiOutlineClockCircle className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Ngày cập nhật</div>
                  <div className="text-gray-500 py-1">
                    {jobView?.updated_at.slice(0, 10)}
                  </div>
                </div>
              </div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsFillBagFill className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Ngành nghề</div>
                  <a href="#" className="text-primary hover:underline">
                    Kế toán , kiểm toán ,
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    tài chính và đầu tư ,{" "}
                  </a>
                  <a href="#" className="text-primary hover:underline">
                    Nghành khác
                  </a>
                </div>
              </div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsBagXFill className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Hình thức</div>
                  <div className="text-gray-500 py-1">Nhân viên chính thức</div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 px-3 w-1/3">
            <div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsCurrencyDollar className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Lương</div>
                  <div className="text-gray-500 py-1">
                    Trên{" "}
                    <span className="text-textTitle">
                      {jobView?.salary} {jobView?.currency}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsFillBagFill className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Kinh nghiệm</div>
                  <div className="text-primary">2 - 3 năm </div>
                </div>
              </div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsBagXFill className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Cấp bậc</div>
                  <div className="text-gray-500 py-1">Nhân viên</div>
                </div>
              </div>
              <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                <BsFillPersonFill className="mr-2 mt-1 text-xs" />
                <div>
                  <div className="font-bold">Hết hạn nộp</div>
                  <div className="text-gray-500 py-1">
                    {jobView?.end_time.slice(0, 10)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>PHÚC LỢI</h2>
        <ul className="flex flex-wrap">
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
          <li className="flex w-[33%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>Chế độ bảo hiểm</span>
          </li>
        </ul>
        <div>
          <h2>MÔ TẢ CÔNG VIỆC</h2>
          {jobView?.description.split("\r\n").map((value) => (
            <p>{value}</p>
          ))}

          <h2>YÊU CẦU CÔNG VIỆC</h2>
          <span className="block">
            - Tốt nghiệp Đại học, Cao đẳng Dược Có kinh nghiệm quản lý & mua
            hàng dược phẩm 2 năm
          </span>
          <span className="block">
            - Tốt nghiệp Đại học, Cao đẳng Dược Có kinh nghiệm quản lý & mua
            hàng dược phẩm 2 năm
          </span>
          <span className="block">
            - Tốt nghiệp Đại học, Cao đẳng Dược Có kinh nghiệm quản lý & mua
            hàng dược phẩm 2 năm
          </span>
          <span className="block">
            - Tốt nghiệp Đại học, Cao đẳng Dược Có kinh nghiệm quản lý & mua
            hàng dược phẩm 2 năm
          </span>
          <h2>THÔNG TIN KHÁC</h2>
          <span className="block">Bằng cấp: Đại học</span>
          <span className="block">Thời gian thử việc: Tối đa 2 tháng</span>
          <span className="block">
            Cơ hội huấn luyện: - Là thành viên của tập đoàn Thế Giới Di Động với
            môi trường làm việc chuyên nghiệp hàng đầu VN.
          </span>
          <span className="block">Bằng cấp: Đại học</span>
          <span className="block">Bằng cấp: Đại học</span>

          <h2>JOBS TAG</h2>
          <ul className="flex flex-wrap">
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Dược sĩ
            </li>
            <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2">
              Pharmacist
            </li>
          </ul>
          <div className="flex justify-between items-center border-solid border-buttonSubmitBackground border h-14">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <button className="bg-buttonSubmitBackground rounded-lg p-2">
                Nộp đơn ứng tuyển
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ViewDetailPage;
