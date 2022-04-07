import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";
// components
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
// slices
import { searchesJob } from "slices/searches";
// utils
import dateUtils from "utils/date";

const SearchPage = () => {
  const { isLoading } = useSelector((state) => state.searches);
  const [jobs, setJobs] = useState({});
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(searchesJob({ q: params.q, adr: params.adr }))
      .unwrap()
      .then((res) => {
        setJobs(res);
      })
      .catch(() => {});
    if (jobs["results"]) {
      console.log(jobs["results"]);
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="pt-[100px] grid" style={{ minHeight: "58vh" }}>
        <div className="grid wide">
          <h2 className="font-bold">
            {jobs["results"] ? jobs["results"].length : 0} Kết quả được tìm thấy
          </h2>
          <div className="roww">
            {jobs["results"] &&
              jobs["results"].map((job, index) => {
                return (
                  <a
                    className="coll cursor-pointer l-6 h-[260px] border rounded-2xl group"
                    key={index}
                    href={"/view-detail/" + job.id}
                    target="_blank"
                  >
                    <h2 className="font-bold text-base group-hover:text-red">
                      {job.title.toUpperCase()}
                    </h2>
                    <h3>{job.employer.company_name}</h3>
                    <h3 className="text-base">{job.country.name}</h3>
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
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[#68BA50]">
                        {job.salary
                          ? job.salary + " " + job.currency
                          : "Thương lượng"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        {job.tag &&
                          job.tag.map((tagItem, index) => (
                            <span
                              className="mr-2 border-border border-solid border text-[#6f6f6f] px-2"
                              key={index}
                            >
                              {tagItem.name}
                            </span>
                          ))}
                      </div>
                      <span className="text-[#6f6f6f]">
                        {dateUtils.timeSince(new Date(job.created_at))}
                      </span>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
