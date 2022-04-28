import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import companyApi from "api/companyApi";
// utils
import {icons} from 'utils/icons'

TopCompanies.propTypes = {};

function TopCompanies(props) {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const topCompanies = await companyApi.getAll();
      setCompanies(topCompanies.results); //Không cần lọc employer active nữa vì backend đã xử lý rồi
    };
    fetchProducts();
  }, []);

  return (
    <>
      <header className="content__header">
        <h2>Nhà tuyển dụng hàng đầu</h2>
      </header>
      <div className="grid wide content">
        <div className="nav_content roww">
          {/* 4 cột */}
          {companies && companies.map((company, index) => (
            <a key={index} className="nav coll l-3 m-6 c-12 " href={"/companies/" + company.slug}>
              <div className="sub__nav">
                <img
                  className="nav__img"
                  src={company.logo ? company.logo : icons.logo_default}
                  alt={company.company_name}
                />
                <span className="nav__description">{company.description}</span>
                <footer className="nav__footer">
                  <span className="nav_quantity">
                    {company.employer_job.length} jobs
                  </span>
                  -
                  <span className="nav_location">{company.company_location}</span>
                </footer>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopCompanies;
