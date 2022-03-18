import React, { useState,useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import jobApi from 'api/jobApi';
Job.propTypes = {
  inputSearch:PropTypes.string,
};

function Job(props) {
  const {inputSearch}=props;
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    const fetchProducts=async ()=>{
        const topJobs= await jobApi.getAll();
        setJobs(topJobs)
        console.log("job",jobs);
    }
    fetchProducts();
  },[])
  // const dataSearch= jobs.filter(item=>{
  //   return Object.key(item).some(key=>item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  // })

// check jobList isActived
console.log("inputSearch",inputSearch);
const isActivejobs=jobs.filter((job,index)=>{
  return job.is_active===true;

});
  return (
    <div className="grid wide sub-content" style={{backgroundImage: 'url(./assets/img/Vector.png)'}}>
      <header className="sub-content__header">
        <h2>Việc Làm Hấp Dẫn</h2>
      </header>
      <div className="nav_sub-content roww nav_sub-primary">
        {isActivejobs.filter (value=>{
          if(inputSearch===''){
            return value;
          }
          else if(
            value.job_type.name.toLowerCase().includes(inputSearch.toLowerCase())
          ){
            return value;
          }
        }).map(companys =>(
          <a key={companys.id} className="nav_sub-content-link coll l-4 m-6 c-12">
          <img src={companys.employer.logo} alt={companys.employer.company_name} className="nav_sub-content-logo" />
          <div className="nav_sub-content-description">
            <header>
              <h3>{companys.employer.company_name}</h3>
            </header>
            <nav>
              <div className="nav_sub-content-pay">
                <i className="fas fa-dollar-sign" />
                <span>Lương: Trên {companys.salary} {companys.currency} </span>
              </div>
              <div className="nav_sub-content-location">
                <i className="fas fa-map-marker-alt" />
                <span>{companys.country.name}</span>
              </div>
              <span className="nav_sub-content-name">{companys.country.name}</span>
            </nav>
          </div>
            </a>
        )) }
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