import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import companyApi from 'api/companyApi';

TopCompanies.propTypes = {
  
};


function TopCompanies(props) {
  const [companies, setCompanies] = useState([])
  useEffect(()=>{
    const fetchProducts=async ()=>{
        const topCompanies= await companyApi.getAll();
        console.log(topCompanies);
        setCompanies(topCompanies)
    }
    fetchProducts();
  },[])
  console.log("companyb",companies); 
  // check companyList isActived
  const isActiveCompanies=companies.filter((company,index)=>{
    return company.user.is_active===true && company.user.is_staff===true;

  });

  console.log("isActiveCompanies", isActiveCompanies);

  return (
    
    <div className="grid wide content">
      
      <header className="content__header">
        <h2>Nhà tuyển dụng hàng đầu</h2>
      </header>
      <div className="nav_content roww">
        {/* 4 cột */}
        {isActiveCompanies.map(company =>(
          <a key={company.id} className="nav coll l-3 m-6 c-12 ">
          <div className="sub__nav">
            <img className="nav__img" src={company.logo} alt={company.company_name} />
            <span className="nav__description">{company.description}</span>
            <footer className="nav__footer">
              <span className="nav_quantity">{company.employer_job.length} jobs</span>
               -
              <span className="nav_location">{company.company_location}</span>
            </footer>
          </div>
        </a>
        ))}
      </div>
    </div>
  );
}

export default TopCompanies;