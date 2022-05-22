import { useState, useEffect } from 'react';
// import { fetchTopEmployersFx } from 'store/Employer.store';
// import { Button } from 'primereact/button';
import EmployerCards from './components/EmployerCards/EmployerCards';
// import styles from './TopEmployers.module.css';
import UserService from "services/user.service";

export const TopEmployers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    UserService.getPublicEmployer().then((response) => {
        let resArr = [...response.data];
        resArr = resArr.map(e => {
          return {
            company_name: e.company_name ? e.company_name : null,
            company_location: e.company_location ? e.company_location : null,
            number_jobs: e.employer_job ? e.employer_job.length : 0,
            logo: e.logo ? e.logo : null,
            slug: e.slug ? e.slug : null,
          };
        });
        console.log(resArr)
        setList(resArr);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }, []);

  return (
    list && list.map((item) => (
      <EmployerCards
        logo={item.logo}
        company_name={item.company_name}
        number_jobs={item.number_jobs}
        company_location={item.company_location}
        key={item.slug}
      />
    ))
  );
};
