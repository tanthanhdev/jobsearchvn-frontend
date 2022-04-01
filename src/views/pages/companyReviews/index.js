import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrap } from 'components/wrap/Wrap';
// components
import { CompHeader } from './sections/CompHeader';
import { LeftSection } from './sections/LeftSection';
import { RightSection } from './sections/RightSection';
// services
// import authService from "services/auth.service";
import { get_public_employer_detail } from "slices/company-reviews"
// utils
import styles from './styles.module.css';

export const CompanyReviews = () => {
  // const isLoggedIn = authService.isLoggedIn()
  const { isError } = useSelector((state) => state.company_review);
  // const { message } = useSelector((state) => state.message);
  const [company, setCompany] = useState('');
  const dispatch = useDispatch();
  const params = useParams();
  const [showJobs, setShowJobs] = useState(false);
  const [showReviews, setShowReviews] = useState(true);

  useEffect(() => {

    let slug = params.slug
    dispatch(get_public_employer_detail({ slug }))
      .unwrap()
      .then((res) => {
        console.log(res);
        setCompany(res);
      })
      .catch(() => {
        console.log('employer not found or error')
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
            <div className={styles.sub_content}>
              <LeftSection
                company={company}
                showJobs={showJobs}
                setShowJobs={setShowJobs}
                showReviews={showReviews}
                setShowReviews={setShowReviews} />
              <RightSection
                company={company}
                setShowJobs={setShowJobs}
                setShowReviews={setShowReviews} />
            </div>
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
