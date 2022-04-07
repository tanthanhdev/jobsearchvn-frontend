import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete } from 'primereact/autocomplete';
import { Wrap } from 'components/wrap/Wrap';
// components
// services
// import authService from "services/auth.service";
import { get_all_public_employer } from "slices/company-reviews"
// utils
import styles from './styles.module.css';

export const SearchCompanyReviews = () => {
    // const isLoggedIn = authService.isLoggedIn()
    const { isError } = useSelector((state) => state.company_review);
    // const { message } = useSelector((state) => state.message);
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [filteredCompanies, setFilteredCompanies] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_all_public_employer({}))
            .unwrap()
            .then((res) => {
                console.log(res);
                setCompanies(res);
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



    const searchCompany = (event) => {
        setTimeout(() => {
            let _filteredCompanies;
            if (!event.query.trim().length) {
                _filteredCompanies = [...companies.results];
            }
            else {
                _filteredCompanies = companies.results.filter((company) => {
                    return company.company_name ? company.company_name.toLowerCase().startsWith(event.query.toLowerCase()) : null;
                });
            }

            setFilteredCompanies(_filteredCompanies);
        }, 250);
    }

    return (
        <Wrap>
            <div id={styles['container']}>
                <div className={styles["hidden-xs"]} data-action="click->scroll-top#scrollToTop" data-controller="scroll-top" id={styles['scrolltop']}>
                    <div className={styles["top-arrow"]}></div>
                </div>
                <div className={styles["company-reviews-index"]}>
                    <div className={styles["company-reviews-index__header panel"]}>
                        <div className={styles["content"]}>
                            <h1 className={styles["content__title"]}>
                                Đã có 16,495 bài đánh giá trên hệ thống JobSearchVN
                            </h1>
                            <h2 className={styles["content__slogan"]}>
                                Mọi người đang nói gì về công ty của bạn? Tìm nó ngay tại đây!
                            </h2>
                            <div className={`${styles["search-form-wrapper"]} ${styles["search-form-wrapper--ghost-button"]}`}>
                                <div className={`${styles["search-form__keyword-section"]} ${styles["dropdown"]}`}>
                                    <AutoComplete
                                    id={styles['search_companies_form']} className={styles["search-form"]}
                                    value={selectedCompany}
                                    suggestions={filteredCompanies}
                                    completeMethod={searchCompany}
                                    field="company_name"
                                    maxlength={5}
                                    onChange={(e) => setSelectedCompany(e.value)} />
                                    <div className={`${styles["search-form__action-section"]} `}>
                                        <input type="submit" name="commit" value="See Reviews" className={`${styles["search-form__action"]} `}
                                            data-disable-with="See Reviews" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["company-reviews-index__content"]} `}>
                        <div className={`${styles["panel"]} ${styles["company-list"]}`}>
                            <div className={`${styles["featured-companies"]} ${styles["featured-companies--with-reviews"]}`}
                                data-controller="popular-companies">
                                <h2 className={`${styles["title"]} `}>Danh Sách Công Ty</h2>
                                <div className={`${styles["companies"]} `} data-popular-companies-target="body">
                                    <a className={`${styles["featured-company"]} `} target="_blank" data-controller="utm-tracking"
                                        href="/companies/jobsearchvn">
                                        <div className={`${styles["company__banner"]} `}>
                                            <img alt="KMS Technology Headline Photo" data-controller="lazyload"
                                                data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUZIRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0bb1ef1a1a2efe808e227d5e291ee06751f167e0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKR0FXa0JvQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cdd50bdc4b315fce1925283d37f51f41105d8ae8/Techcon.jpg"
                                                height="160" width="326" className={`${styles["lazyloaded"]} `}
                                                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUZIRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0bb1ef1a1a2efe808e227d5e291ee06751f167e0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKR0FXa0JvQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cdd50bdc4b315fce1925283d37f51f41105d8ae8/Techcon.jpg"
                                            />
                                        </div>
                                        <div className={`${styles["company__info"]} `}>
                                            <header className={`${styles["company__header"]} `}>
                                                <div className={`${styles["company__logo"]} `}>
                                                    <img alt="KMS Technology Vietnam Small Logo" data-controller="lazyload"
                                                        data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNE1uREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--97db4f0be292da42408f8c8ba126cbf20b1626a8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/kms-technology-logo.png"
                                                        height="62" width="64" className={`${styles["lazyloaded"]} `}
                                                        src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNE1uREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--97db4f0be292da42408f8c8ba126cbf20b1626a8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--d55b6722f71e82d147ad94b8445be27797820f9f/kms-technology-logo.png"
                                                    />
                                                </div>
                                                <h3 className={`${styles["company__name"]} `}>KMS Technology</h3>
                                                <div className={`${styles["company__star"]} `}>
                                                    <img width="21"
                                                        src="https://itviec.com/assets/rating-star-white-7e936fe21658ee9a7bf982b9ec56935cc7e20ffb6565217982c371d50c919653.svg"
                                                    />
                                                    <span className={`${styles["company__star-rate"]} `}>4.0</span>
                                                </div>
                                            </header>
                                            <div className={`${styles["company__desc"]} `}>Agile, Innovative &amp; Excellent Global Technology
                                                Company with deep roots ...</div>
                                            <footer className={`${styles["company__footer"]} `}>
                                                <span className={`${styles["company__footer-city"]} `} data-popular-companies-target="city">Ho Chi
                                                    Minh</span>
                                                <span className={`${styles["company__footer-jobs"]} `}>
                                                    19 jobs
                                                </span>
                                                <span className={`${styles["company__footer-reviews"]} `}>
                                                    207 reviews
                                                </span>
                                            </footer>
                                        </div>
                                        <div className={`${styles["company__rated"]} `}>
                                            <div className={`${styles["highly-rated"]} `}>
                                                <svg width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 60.36">
                                                    <rect x="1" y="1" width="55" height="58.36" fill="#fff" stroke="#2e2a2b"
                                                        stroke-miterlimit="10" stroke-width="2"></rect>
                                                    <rect x="9.85" y="12.82" width="9.61" height="9.61" fill="#d1d3d4"
                                                        stroke="#2e2a2b" stroke-miterlimit="10" stroke-width="2"></rect>
                                                    <rect x="37.67" y="12.82" width="9.61" height="9.61" fill="#d1d3d4"
                                                        stroke="#2e2a2b" stroke-miterlimit="10" stroke-width="2"></rect>
                                                    <rect x="9.85" y="28.46" width="9.61" height="9.61" fill="#d1d3d4"
                                                        stroke="#2e2a2b" stroke-miterlimit="10" stroke-width="2"></rect>
                                                    <rect x="37.67" y="28.46" width="9.61" height="9.61" fill="#d1d3d4"
                                                        stroke="#2e2a2b" stroke-miterlimit="10" stroke-width="2"></rect>
                                                    <path
                                                        d="M430.76,326.62v-8.24c0-3.1-1.67-5.65-3.72-5.65H416.25c-2.05,0-3.72,2.55-3.72,5.65v8.24Z"
                                                        transform="translate(-392.81 -267.5)" fill="#d1d3d4" stroke="#2e2a2b"
                                                        stroke-miterlimit="10" stroke-width="2"></path>
                                                </svg>
                                                <div className={`${styles["highly-rated-field"]} `}>
                                                    Best about
                                                    Office &amp; workspace
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className={`${styles["show-more text-center"]} `}>
                                    <a className={`${styles["d-inline-flex"]} `} data-action="popular-companies#showMore"
                                        data-popular-companies-target="showMoreText">
                                        <span>See more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles["clearfix"]} `}></div>
            </div>
        </Wrap>
    )
};

export default SearchCompanyReviews;
