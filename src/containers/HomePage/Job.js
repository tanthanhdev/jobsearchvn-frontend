import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import jobApi from "api/jobApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setViewDetailPageSlice } from "./viewDetailPageSlice";
Job.propTypes = {};

function Job(props) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const topJobs = await jobApi.getAll();
      setJobs(topJobs);
    };
    fetchProducts();
  }, []);
  const isActivejobs = jobs.filter((job, index) => {
    return job.is_active === true;
  });
  const dispatch = useDispatch();
  console.log("isActivejobs", isActivejobs);
  let navigate = useNavigate();
  const handleNavigateToViewDetail = (id) => {
    const jobToViewDetail = jobs.filter((job, index) => {
      return job.id === id;
    });
    navigate(`/view-detail/${id}`);
    dispatch(setViewDetailPageSlice(jobToViewDetail[0]));
  };
  return (
    <>
      <div
        className="grid wide sub-content"
        style={{ backgroundImage: "url(./assets/img/Vector.png)" }}
      >
        <header className="sub-content__header">
          <h2>Việc Làm Hấp Dẫn</h2>
        </header>
        <div className="nav_sub-content roww nav_sub-primary">
          {jobs &&
            isActivejobs.map((items, index) => (
              <>
                <div
                  onClick={() => handleNavigateToViewDetail(items.id)}
                  key={index}
                  className="nav_sub-content-link coll l-4 m-6 c-12"
                >
                  <img
                    src={items.employer.logo}
                    alt={items.employer.company_name}
                    className="nav_sub-content-logo"
                  />
                  <div className="nav_sub-content-description">
                    <header>
                      <h3>{items.title.toUpperCase()}</h3>
                    </header>
                    <nav>
                      <div className="nav_sub-content-pay">
                        <i className="fas fa-dollar-sign" />
                        <span>
                          Lương: Trên {items.salary} {items.currency}{" "}
                        </span>
                      </div>
                      <div className="nav_sub-content-location">
                        <i className="fas fa-map-marker-alt" />
                        <span>{items.employer.company_location}</span>
                      </div>
                      <span className="nav_sub-content-name">
                        {items.employer.company_name}
                      </span>
                    </nav>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className="sub-content__btn-list">
          <ul>
            <li className="sub-content__btn-item-btn sub-content__btn-item-prev"></li>
            <div className="number__page"></div>
            <li className="sub-content__btn-item-btn sub-content__btn-item-next">
              &gt;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Job;
