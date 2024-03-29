import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import {
  AiOutlineHeart,
  AiFillHeart,
  // AiFillFacebook,
  // AiOutlineGoogle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  BsFillBagFill,
  BsBagXFill,
  BsCurrencyDollar,
  BsFillPersonFill,
} from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { SiGmail, SiZalo } from "react-icons/si";
// import { GiPositionMarker } from "react-icons/gi";
import classNames from "classnames";
import { useParams, Navigate } from "react-router-dom";
// import Map from "react-map-gl";
// services
import { get_public_employer_detail } from "slices/company-reviews"
import userService from "services/user.service";
import authService from "services/auth.service";
// Utils
import { icons as iconsUtil } from 'utils/icons';
// Css
import "./viewDetailPage.css";
// Components
import { CompHeader } from './sections/CompHeader';

export const ViewDetailPage = (props) => {
  const user = localStorage.getItem('user');
  const isLoggedIn = authService.isLoggedIn(); //dont remove
  const [jobView, setJobView] = useState(null);
  const [apply, setApply] = useState(null);
  const [isReload, setIsReload] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const [company, setCompany] = useState([]);
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    userService.getPublicJobDetail(params.slug).then((res) => {
      setJobView(res.data);
      setIsReload(false);
      // company
      dispatch(get_public_employer_detail({ slug: res.data.employer.slug }))
        .unwrap()
        .then((res) => {
          setCompany(res);
          setIsReload(false);
        })
        .catch(() => {});
    });
    userService.getApplyJobDetail(null, params.slug).then((res) => {
      setIsApply(true);
      setApply(res.data);
      setIsReload(false);
    });
    userService.getSaveJobDetail(null, params.slug).then(() => {
      setIsSave(true);
      setIsReload(false);
    });
  }, [isReload === true]);

  const tab = [
    {
      tabName: "Chi tiết",
    },
    {
      tabName: "Tổng quan công ty",
    },
  ];
  const icons = [
    { name: 'book', code: iconsUtil.flag_book },
    { name: 'person', code: iconsUtil.flag_person },
  ];

  const onSetTabActive = (index) => {
    setTabActive(index);
  };

  const handleSaveJob = () => {
    if (isSave) {
      userService.deleteSaveJobDetail(jobView?.id).then(() => {
        setIsReload(true);
        setIsSave(false);
      });
    } else {
      userService.createSaveJob(jobView?.id).then(() => {
        setIsReload(true);
        setIsSave(true);
      });
    }
  }

  return (
    <div style={{ backgroundColor: 'rgb(249 249 249)' }}>
      <Header></Header>
      <div className="container wrapper-job-detail" style={{paddingTop: '120px'}}>
        <CompHeader company={company} setIsReload={setIsReload} isReload={isReload}
          jobView={jobView}
          isApply={isApply}
          setIsApply={setIsApply}
          apply={apply}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        <div className="text-sm pt-[100px]">
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
                  {isLoggedIn && isSave && (
                    <div onClick={handleSaveJob}>
                      <AiFillHeart size={30} color="red" />
                      <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                        Đã lưu việc làm
                      </div>
                    </div>
                  )}
                  {isLoggedIn && !isSave && (
                    <div onClick={handleSaveJob}>
                      <AiOutlineHeart size={30} />
                      <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                        Lưu việc làm
                      </div>
                    </div>
                  )}
                  {!isLoggedIn && (
                    <a href={'/login?next=/' + jobView?.slug}>
                      <AiOutlineHeart size={30} />
                      <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                        Lưu việc làm
                      </div>
                    </a>
                  )}
                </div>
                <div className="relative mr-3 hover:text-orange-500 cursor-pointer group">
                  {/* <BsShare /> */}
                  <div style={{ display: 'flex' }}>
                    <TwitterShareButton
                      title={"Chia sẻ công việc từ jobsearchdtu.site"}
                      url={"https://www.jobsearchdtu.site/" + jobView?.slug}
                      hashtags={["jobsearchdtu.site", "job"]}
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={"https://www.jobsearchdtu.site/" + jobView?.slug}
                      quote={"Chia sẻ công việc từ jobsearchdtu.site"}
                      hashtag={"#jobsearchdtu.site"}
                      description={"job"}
                    >
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <a
                      target="_blank"
                      href={"https://www.linkedin.com/sharing/share-offsite/?url=https://www.jobsearchdtu.site/" + jobView?.slug}
                    >
                      <LinkedinIcon size={32} round={true} />
                    </a>
                    <div className="zalo-share-button" data-href={"https://www.jobsearchdtu.site/" + jobView?.slug} data-oaid="579745863508352884" data-layout="3" data-color="blue" data-customize="false"></div>
                  </div>
                  {/* <div className="bg-white w-40 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500">
                    <div className="flex items-center py-2">
                      <AiFillFacebook className="mr-2 text-lg" />
                      <GrLinkedinOption className="mr-2 text-lg" />
                      <SiGmail className="mr-2 text-lg" />
                      <SiZalo className="mr-2 text-lg" />
                      <AiOutlineGoogle className="mr-2 text-lg" />
                    </div>
                  </div> */}
                </div>
                {/* <div className="relative mr-3 hover:text-orange-500 cursor-pointer group">
                  <BsFlag />
                  <div className="bg-white w-24 hidden group-hover:flex rounded absolute -bottom-10 px-2 flex items-center justify-center text-xs border border-gray-500 py-2">
                    Báo Xấu
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-light-blue">
            {/* <div className="py-2 px-3 w-1/3">
              <div>
                <div className="flex items-center">
                  <GiPositionMarker className="mr-2" />
                  <div className="font-bold"> Địa điểm</div>
                </div>
                <a href="#" className="text-primary hover:underline ml-6">
                  {jobView?.employer.company_location}
                </a>
                <img
                  alt="asd asd"
                  className="w-3/4 mt-4"
                  src="https://static.careerbuilder.vn/themes/careerbuilder/img/icon-map.svg"
                />
              </div>
            </div>
            <Map
              initialViewState={{
                longitude: -100,
                latitude: 40,
                zoom: 3.5,
                width: "100wh",
                height: "100vh",
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              MapboxAccessToken="pk.eyJ1Ijoidm9uZ3V5ZW50aGFpYW4iLCJhIjoiY2wxbWJsemdyMGg3ZTNjb2JreWhkbjJ1eiJ9.zOqBFP6ZOGtP5cBgKv_AGQ"
            /> */}
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
                      {jobView?.job_type.name}
                    </a>
                  </div>
                </div>
                <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                  <BsBagXFill className="mr-2 mt-1 text-xs" />
                  <div>
                    <div className="font-bold">Hình thức</div>
                    <div className="text-gray-500 py-1">{jobView?.title}</div>
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
                      {jobView?.salary_type === "Lương" ? (
                        " " + jobView?.salary + jobView?.currency
                      ) : ""}
                      {jobView?.salary_type === "Lương khoảng" ? (
                        <span> {jobView?.salary_from} - {jobView?.salary_to} {jobView?.currency}</span>
                      ) : ""}
                      {jobView?.salary_type === "Thương lượng" ? (
                        <span> Thương lượng</span>
                      ) : ""}
                    </div>
                  </div>
                </div>
                <div className="flex pb-2 mb-2 border-b-2 border-gray-300">
                  <BsBagXFill className="mr-2 mt-1 text-xs" />
                  <div>
                    <div className="font-bold">Cấp bậc</div>
                    <div className="text-gray-500 py-1">{jobView?.level}</div>
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
        <h2>PHÚC LỢI</h2>
        <ul>
          {jobView?.job_benefits.map((item, index) => (
            <li key={index} className="flex w-[33%]">
              <img width="16" height="16" src={item.icon === 'person' ? icons[1].code : icons[0].code}></img>
              <span>{item.benefit}</span>
            </li>
          ))}
        </ul>
        <div>
          <h2>MÔ TẢ CÔNG VIỆC</h2>
          <div dangerouslySetInnerHTML={{
            __html: jobView?.description
          }}></div>
          <h2>YÊU CẦU CÔNG VIỆC</h2>
          <div dangerouslySetInnerHTML={{
            __html: jobView?.job_requirement
          }}></div>
          <h2>ĐỊA ĐIỂM LÀM VIỆC</h2>
          {jobView?.job_job_addresses.map((adr, index) => (
            <div index={index}>- {adr.address}</div>

          ))}
          <h2>Từ khoá:</h2>
          <ul className="flex flex-wrap">
            {jobView?.tag.map((item, index) => (
              <li className="bg-backgroundTag p-2 rounded-lg mb-2 mr-2" index={index}>
                #{item.name}
              </li>
            ))}
          </ul>
          {/* <div className="flex justify-between items-center border-solid border-buttonSubmitBackground border h-14">
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
            </div>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ViewDetailPage;