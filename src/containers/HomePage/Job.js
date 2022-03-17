import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import jobApi from 'api/jobApi';
Job.propTypes = {
  
};

function Job(props) {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const fetchProducts=async ()=>{
        const topJobs= await jobApi.getAll();
        setJobs(topJobs)
    }
    fetchProducts();
  },[])
  console.log("jobb",jobs); 


  return (
    <div className="grid wide sub-content" style={{backgroundImage: 'url(./assets/img/Vector.png)'}}>
      <header className="sub-content__header">
        <h2>Việc Làm Hấp Dẫn</h2>
      </header>
      <div className="nav_sub-content roww nav_sub-primary">
        {jobs.map(companys =>(
          <>
            {companys.tag.map((job,index) =>(
              <a key={index} className="nav_sub-content-link coll l-4 m-6 c-12">
          <img src={companys.employer.logo} alt={companys.employer.company_name} className="nav_sub-content-logo" />
          <div className="nav_sub-content-description">
            <header>
              <h3>{job.name.toUpperCase()}</h3>
            </header>
            <nav>
              <div className="nav_sub-content-pay">
                <i className="fas fa-dollar-sign" />
                <span>Lương: Trên {companys.salary} {companys.currency} </span>
              </div>
              <div className="nav_sub-content-location">
                <i className="fas fa-map-marker-alt" />
                <span>{companys.employer.company_location}</span>
              </div>
              <span className="nav_sub-content-name">{companys.employer.company_name}</span>
            </nav>
          </div>
        </a>
            ))}
          </>
        ))}
        
      </div>
      <div className="sub-content__btn-list">
        <ul>
          <li className="sub-content__btn-item-btn sub-content__btn-item-prev">
          </li>
          <div className="number__page">
          </div>
          <li className="sub-content__btn-item-btn sub-content__btn-item-next">
            &gt;
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Job;