import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jobApi from 'api/jobApi';

TopJobs.propTypes = {
  
};


function TopJobs(props) {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const fetchProducts=async ()=>{
        const topJobs= await jobApi.getAll();
        console.log(topJobs);
        setJobs(topJobs)
    }
    fetchProducts();
  },[])
  console.log("jobb",jobs); 
  // check jobList isActived
  const isActivejobs=jobs.filter((job,index)=>{
    return job.is_active===true;

  });

  console.log("isActivejobs",isActivejobs);

  return (
    
    <div className="grid wide content">
      
      <header className="content__header">
        <h1>Nhà tuyển dụng hàng đầu</h1>
      </header>
      <div className="nav_content roww">
        {/* 4 cột */}
        {isActivejobs.map(job =>(
          <a key={job.id} className="nav coll l-3 m-6 c-12 ">
          <div className="sub__nav">
            <img className="nav__img" src={job.employer.logo} alt={job.employer.company_name} />
            <span className="nav__description">{job.employer.description}</span>
            <footer className="nav__footer">
              <span className="nav_quantity">{job.tag.length} jobs</span>
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