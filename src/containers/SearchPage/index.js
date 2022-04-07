import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import jobApi from "../../api/jobApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

SearchPage.propTypes = {};

function SearchPage(props) {
  const searchNormalSlice = useSelector((state) => state.searchNormalSlice);
  const searchLocationSlice = useSelector((state) => state.searchLocationSlice);
  console.log("searchLocationSlice", searchLocationSlice);
  console.log("searchNormalSlice", searchNormalSlice);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const jobList = await jobApi.getAll();
      const isActivejobs = jobList.filter((job, index) => {
        return job.is_active === true;
      });
      setJobs(isActivejobs);
      console.log(isActivejobs, "isActivejobs");
    };
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const onViewDetailJob = (idJob) => {
    navigate(`/view-detail/${idJob}`);
  };
  return (
    <>
      <Header />
      <div className="pt-[100px] grid">
        <div className="grid wide">
          <h2 className="font-bold"> Kết quả được tìm thấy</h2>
          <div className="roww">
            {jobs
              ?.filter((value) => {
                if (
                  searchNormalSlice.trim() === "" &&
                  searchLocationSlice.trim() === ""
                ) {
                  return value;
                } else if (
                  searchNormalSlice !== "" &&
                  searchLocationSlice === ""
                ) {
                  return value.title
                    .toLowerCase()
                    .includes(searchNormalSlice.trim().toLowerCase());
                } else if (
                  searchNormalSlice === "" &&
                  searchLocationSlice !== ""
                ) {
                  return (
                    // value.employer.company_location
                    //   .toLowerCase()
                    //   .includes(searchNormalSlice.trim().toLowerCase()) ||
                    value.employer.company_location
                      .toLowerCase()
                      .includes(
                        searchLocationSlice.employer.company_location
                          .trim()
                          .toLowerCase()
                      )
                  );
                } else if (
                  searchNormalSlice !== "" &&
                  searchLocationSlice !== ""
                ) {
                  return (
                    value.title
                      .toLowerCase()
                      .includes(searchNormalSlice.trim().toLowerCase()) &&
                    value.employer.company_location
                      .toLowerCase()
                      .includes(
                        searchLocationSlice.employer.company_location
                          .trim()
                          .toLowerCase()
                      )
                  );
                }
              })
              .map((job) => {
                return (
                  <div
                    onClick={() => onViewDetailJob(job.id)}
                    className="coll cursor-pointer l-6 h-[260px] border rounded-2xl group"
                  >
                    <h2 className="font-bold text-base group-hover:text-red">
                      {job.title.toUpperCase()}
                    </h2>
                    <h3>{job.employer.company_name}</h3>
                    <h3 className="text-base">
                      {job.employer.company_location}
                    </h3>
                    <ul className="max-h-[80px] overflow-y-auto">
                      {job.description.split("\r\n").map((value) => (
                        <li className="text-[#6F6F6F]">{value}</li>
                      ))}
                    </ul>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#68BA50] h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[#68BA50]">500 - 1500 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="mr-2 border-border border-solid border text-[#6f6f6f] px-2">
                          c#
                        </span>
                        <span className="mr-2 border-border border-solid border text-[#6f6f6f] px-2">
                          .NET
                        </span>
                      </div>
                      <span className="text-[#6f6f6f]">1 ngày trước</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
