import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Wrap } from 'components/wrap/Wrap';
// components
import { CompHeader } from './sections/CompHeader';
import { LeftSection } from './sections/LeftSection';
// services
import authService from "services/auth.service";
import { get_public_employer_detail } from "slices/company-reviews"
// utils
import styles from './styles.module.css';

export const CompanyReviews = () => {
  const isLoggedIn = authService.isLoggedIn()
  // const { message: mess } = useSelector((state) => state.message);
  const [ isError, setIsError ] = useState(false);
  const [ company, setCompany ] = useState('');
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {

    let slug = params.slug
    dispatch(get_public_employer_detail({ slug }))
      .unwrap()
      .then((res) => {
        console.log(res);
        setCompany(res);
        setIsError(false);
      })
      .catch(() => {
        console.log('employer not found or error')
        setIsError(true);
        console.log(isError)
        // return (
        //   <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>
        //     PAGE NOT FOUND <i style={{ color: 'red' }}>404</i>
        //   </h1>
        // )
    });
  }, [dispatch]);

  return (
    <Wrap>
      {!isError && company.status && (
        <div className={styles.container}>
          <div className={styles.content}>
            <CompHeader company={company} />
            <LeftSection company={company} />
            {/* <RightSection /> */}
          </div>
        </div>
      )}
      {isError && (
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>
              PAGE NOT FOUND <i style={{ color: 'red' }}>404</i>
            </h1>
          </div>
        </div>
      )}
    </Wrap>
  )  
};

export default CompanyReviews;
