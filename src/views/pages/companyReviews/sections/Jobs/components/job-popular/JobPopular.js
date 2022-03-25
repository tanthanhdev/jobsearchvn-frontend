import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { fetchJobPopularFx } from 'store/Employer.store';
// import { TCategory } from 'types';
// import { Button } from 'primereact/button';
import JobCards from './components/JobCards/JobCards';

import styles from './JobPopular.module.css';

export const JobPopular = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchJobPopularFx('').then(response => {
        let resArr = [...response];
        resArr = resArr.map(e => {
          return {
            logo: e.employer.logo ? e.employer.logo : null,
            title: e.title ? e.title : null,
            salary: e.salary ? e.salary : "Thương lượng",
            currency: e.currency ? e.currency : null,
            country: e.country.name ? e.country.name : null,
            company_name: e.company_name ? e.company_name : null,
            slug: e.slug ? e.slug : null,
            id: e.id ? e.id : null,
          };
        });
        setList(resArr);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={styles["nav_sub-content"]}>
      <Slider {...settings}>
        {list.map((item) => (
          <JobCards
            logo={item.logo}
            title={item.title}
            salary={item.salary}
            currency={item.currency}
            country={item.country}
            company_name={item.company_name}
            key={item.id}
          />
        ))}
      </Slider>
    </div>
  );
};
