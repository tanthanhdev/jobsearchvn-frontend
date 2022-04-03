import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jobApi from 'api/jobApi';
import { icons } from 'utils/icons';

TopJobs.propTypes = {

};


function TopJobs(props) {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const topJobs = await jobApi.getAll();
      setJobs(topJobs)
    }
    fetchProducts();
  }, [])

  return (

    <div className="grid wide content">

      <header className="content__header">
        <h1>Nhà tuyển dụng hàng đầu</h1>
      </header>
      <div className="nav_content roww">
        {/* 4 cột */}
        {jobs && jobs.map((job, index) => (
          <a key={index} className="nav coll l-3 m-6 c-12 ">
            <div className="sub__nav">
              <img className="nav__img" src={job.employer.logo ? job.employer.logo : icons.logo_default} alt={job.employer.company_name} />
              <span className="nav__description">{job.employer.description}</span>
              <footer className="nav__footer">
                <span className="nav_quantity">{job.tag.length}jobs</span>
                -
                <span className="nav_location">{job.country.name}</span>
              </footer>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopJobs;