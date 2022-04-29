import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import PropTypes from "prop-types";
import jobApi from "api/jobApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { setViewDetailPageSlice } from "./viewDetailPageSlice";
import { icons } from "utils/icons";
Job.propTypes = {};

function Job(props) {
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const topJobs = await jobApi.getAll();
      setJobs(topJobs);
    };
    fetchProducts();
  }, []);

  const handleNavigateToViewDetail = (slug) => {
    // const jobToViewDetail = jobs.filter((job) => {
    //   return job.id === id;
    // });
    navigate(`/${slug}`);
    // dispatch(setViewDetailPageSlice(jobToViewDetail[0]));
  };
  return (
    <div
      className="grid wide sub-content"
      style={{ backgroundImage: "url(./assets/img/Vector.png)" }}
    >

      <header className="sub-content__header">
        <h2>Việc Làm Hấp Dẫn</h2>
      </header>
      <Slider {...settings}>
        {jobs && jobs.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleNavigateToViewDetail(item.slug)}
              className="nav_sub-content-link"
            >
              <img
                src={item.employer.logo ? item.employer.logo : icons.logo_default}
                alt={item.employer.company_name}
                className="nav_sub-content-logo"
              />
              <div className="nav_sub-content-description">
                <header>
                  <h3>{item.title.toUpperCase()}</h3>
                </header>
                <nav>
                  <div className="nav_sub-content-pay">
                    <i className="fas fa-dollar-sign" />
                    <span>
                      Lương: 
                      {item.salary_type === "Lương" ? (
                        " " + item.salary + item.currency
                      ) : ""}
                      {item.salary_type === "Lương khoảng" ? (
                        <span> {item.salary_from} - {item.salary_to} {item.currency}</span>
                      ) : ""}
                      {item.salary_type === "Thương lượng" ? (
                        <span> Thương lượng</span>
                      ) : ""}
                    </span>
                  </div>
                  <div className="nav_sub-content-location">
                    <i className="fas fa-map-marker-alt" />
                    <span>{item.employer.company_location}</span>
                  </div>
                  <span className="nav_sub-content-name">
                    {item.employer.company_name}
                  </span>
                </nav>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Job;