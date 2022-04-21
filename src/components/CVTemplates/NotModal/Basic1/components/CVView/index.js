import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

// import CvTemplateService from 'services/cv-template';

import styles from './style.module.css';
import { icons } from 'utils/icons';

export const CVView = ({ Cv }) => {
  useEffect(() => {
    console.log(Cv)
  }, []);

  return (
    <section className={`${styles.iframe} ${styles["cv-viewer"]}`}>
      <div className={`${styles["cv-layout-viewer"]}`}>
        <div className={`${styles["cvo-document-root"]}`}>
          <div className={`${styles["cvo-document"]} ${styles["cvo-document"]}`}>
            <div className={`${styles["cvo-page"]}`}>
              <div className={`${styles["cvo-subpage"]}`}>
                <div className={`${styles["cvo-body"]}`}>
                  <div className={`${styles["navigation"]}`}>
                    <div className={`${styles["nav-header"]}`}>
                      <div className={`${styles.action}`}>
                        <span className={`${styles.toggle} ${styles.close}`}></span>
                        <span className={`${styles.toggle} ${styles.hide}`}></span>
                        <span className={`${styles.toggle} ${styles["full-screen"]}`}></span>
                      </div>
                      <div className={`${styles.tabs}`}>
                        <div className={`${styles.tab} ${styles.prev}`}></div>
                        <div className={`${styles.tab} ${styles.active} ${styles["text-primary"]}`}>
                          <span>Sơ yếu lý lịch</span>
                          {/* <i className={`${styles.custommodal}`}"fa fa-times icon text-primary" aria-hidden="true" style="float: right;"></i> */}
                        </div>
                        <div className={`${styles.tab} ${styles.next}`}></div>
                      </div>
                      <div className={`${styles["add-tab"]} ${styles["text-primary"]}`}>
                        {/* <i className={`${styles.custommodal}`}"fa fa-plus" aria-hidden="true"></i></div> */}
                      </div>
                      <div className={`${styles["nav-body"]} ${styles['d-flex']}`}>
                        <div className={`${styles.search} ${styles["bg-primary-trans"]}`}>
                          <div className={`${styles["input-search"]}`}>
                            <span className={`${styles.title}`}>
                              {Cv.title}
                            </span>
                          </div>
                        </div>
                        <div className={`${styles["action-right"]}`}>
                          <span className={`${styles.icon} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-microphone" aria-hidden="true"></i> */}
                          </span>
                          <span className={`${styles.icon} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-ellipsis-v" aria-hidden="true"></i> */}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles["p-16"]} ${styles["pb-0"]} ${styles["group-header"]}`}>
                      <div className={`${styles["h-content"]}`}>
                        <div className={`${styles["top-content"]}`}>
                          <div className={`${styles["profile-item"]}  ${styles["cvo-profile-avatar-wraper"]}`}>
                            <img className={`${styles["cvo-profile-avatar"]}`} src={Cv.member.user.avatar ? Cv.member.user.avatar : icons.logo_default} value="preview_avatar" alt="avatar" />
                          </div>
                          <div className={`${styles["cvo-profile-fullname-and-title"]}`}>
                            <div className={`${styles["cvo-profile-fullname-wraper"]}`}>
                              <span className={`${styles["text-primary"]} ${styles["cvo-profile-fullname"]}`}>{Cv.member.user.first_name + " " + Cv.member.user.last_name}</span>
                            </div>
                            <div className={`${styles["cvo-profile-title-wraper"]}`}>
                              <span className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}>{Cv.title}</span>
                            </div>
                            <div className={`${styles.information}`}>
                              <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-dob-wraper"]}`} >
                                {Cv.member.birthday}
                              </div>
                              <div className={`${styles["cvo-profile-info-row"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-phone" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-phone"]}`} >{Cv.member.user.phone_number}</span>
                              </div>
                              <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-email-wraper"]}`} >
                                {/* <i className={`${styles.custommodal}`}"fa fa-envelope" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-email"]}`}>{Cv.member.user.email}</span>
                              </div>
                              <div className={`${styles["cvo-profile-info-row"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-globe" aria-hidden="true"></i> */}
                                {/* <span><a href="https://fb.com/jobsearch.vn" target="_blank" className={`${styles["cvo-clickable-link"]} ${styles["cvo-profile-website"]}`} rel="noreferrer noopener">https://fb.com/jobsearch.vn</a></span> */}
                              </div>
                              <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-address-wraper"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-location-arrow" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-address"]}`} >
                                  {Cv.member.user.address}
                                </span>
                              </div>
                              <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-gender-wraper"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-user" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-gender"]}`} >
                                  {Cv.member.user.gender === 0 ? "Nữ" : Cv.member.user.gender === 1 ? "Nam" : Cv.member.user.gender === 2 ? "Khác" : ""}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles["h-description"]}`}>
                          <div className={`${styles["cvo-block"]} ${styles["cvo-objective"]}`}>
                            <div className={`${styles["cvo-block-body"]}`}>
                              <div className={`${styles["cvo-objective-objective"]}`}>{Cv.target_major}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* cvo block left */}
                    <div className={`${styles["cvo-col-7"]}`}>
                      <div className={`${styles["group-left"]}`}>
                        <div className={`${styles["cvo-block"]} ${styles["cvo-education"]}`}>
                          <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            <span className={`${styles["cvo-education-blocktitle"]}`}>
                              {/* <i className={`${styles.custommodal}`}"fa fa-graduation-cap" aria-hidden="true"></i> */}
                              Học vấn
                            </span>
                          </div>
                          <div className={`${styles["cvo-block-body"]} ${styles["education-table"]}`}>
                            {Cv.cv_cv_educations.map((edu, index) => (
                              <div className={`${styles.row}`} key={index}>
                                <div className={`${styles["cvo-section-info"]}`}>
                                  <div className={`${styles["cvo-education-school-wraper"]}`}>
                                    <span className={`${styles["cvo-education-school"]}`}>
                                      {edu.university_name}
                                    </span>
                                  </div>
                                  <div className={`${styles["cvo-education-time"]}`}>
                                    <span className={`${styles["time-background"]}`}>
                                      <span className={`${styles["cvo-education-start"]}`}>{edu.starting_date} </span>
                                      - <span className={`${styles["cvo-education-end"]}`}>{edu.completion_date}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className={`${styles["cvo-education-wrapper"]}`}><span className={`${styles["cvo-education-title"]}`}>
                                  {edu.major}
                                  ({edu.degree_name})
                                </span></div>
                                <div className={`${styles["cvo-education-details"]}`}>
                                  Tốt nghiệp loại {edu.gpa >= 3.6 ? "Xuất sắc" : edu.gpa >= 3.2 ? "Giỏi" : edu.gpa >= 2.5 ? "Khá" : edu.gpa >= 2 ? "Trung bình" : "Yếu/Kém"}, điểm trung bình {edu.gpa}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`${styles["cvo-block"]} ${styles["cvo-experience"]}`}>
                          <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            <span className={`${styles["cvo-experience-blocktitle"]}`}>
                              {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                              Kinh nghiệm làm việc
                            </span>
                          </div>
                          <div className={`${styles["cvo-block-body"]} ${styles["experience-table"]}`}>
                            {Cv.cv_cv_experiences.map((exp, index) => (
                              <div className={`${styles.row}`} key={index}>
                                <div className={`${styles["cvo-section-info"]}`}>
                                  <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                    <span className={`${styles["cvo-experience-company"]}`}>{exp.company_name}</span>
                                  </div>
                                  <div className={`${styles["cvo-experience-time"]}`}>
                                    <span className={`${styles["time-background"]}`}>
                                      <span className={`${styles["cvo-experience-start"]}`}>{exp.start_date}</span>
                                      -
                                      <span className={`${styles["cvo-experience-end"]}`}>{exp.end_date}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>{exp.job_title}</span></div>
                                <div className={`${styles["cvo-experience-details"]}`}>{exp.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                          <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                            <span className={`${styles["cvo-activity-blocktitle"]}`}>Hoạt động</span>
                          </div>
                          <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                            {Cv.cv_cv_social_activities.map((act, index) => (
                              <div className={`${styles.row}`} key={index}>
                                <div className={`${styles["cvo-section-info"]}`}>
                                  <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                    <span className={`${styles["cvo-activity-organization"]}`}>{act.title}</span>
                                  </div>
                                  <div className={`${styles["cvo-activity-time"]}`}>
                                    <span className={`${styles["time-background"]}`}>
                                      <span className={`${styles["cvo-activity-start"]}`}>{act.starting_date}</span>
                                      - <span className={`${styles["cvo-activity-end"]}`}>{act.completion_date}</span>
                                    </span>
                                  </div>
                                </div>
                                <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>{act.unit_name}</span></div>
                                <div className={`${styles["cvo-activity-details"]}`}>{act.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* cvo block right */}
                    </div>
                    <div className={`${styles["cvo-col-5"]}`}>
                      <div className={`${styles["group-right"]}`}>

                        <div className={`${styles["cvo-block"]}  ${styles["cvo-skillgroup"]}`}>
                          <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            <span className={`${styles["cvo-skillgroup-blocktitle"]}`}>
                              {/* <i className={`${styles.custommodal}`}"fa fa-pencil" aria-hidden="true"></i> */}
                              Các kỹ năng
                            </span>
                          </div>
                          <div className={`${styles["block-content"]}`}>
                            <div className={`${styles["skill-table"]}`}>
                              {Cv.cv_cv_skills.map((skill, index) => (
                                <div className={`${styles.row}`} key={index}>
                                  <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>{skill.name}</span></div>
                                  <div className={`${styles["cvo-skillgroup-skill-description"]}`}>{skill.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={`${styles["cvo-block"]} ${styles["cvo-award"]}`}>
                          <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                            <span className={`${styles["cvo-award-blocktitle"]}`}>
                              {/* <i className={`${styles.custommodal}`}"fa fa-gift" aria-hidden="true"></i> */}
                              Giải thưởng
                            </span>
                          </div>
                          <div className={`${styles["cvo-block-body"]} ${styles["award-table"]}`}>
                            {Cv.cv_cv_certificates.map((cert, index) => (
                              <div className={`${styles.row}`} key={index}>
                                <div className={`${styles["cvo-award-wrapper"]}`}><span className={`${styles["cvo-award-time"]}`}>{cert.year}</span></div>
                                <div className={`${styles["cvo-award-title"]}`}>{cert.name}</div>
                                <div className={styles.clear}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* <div className={`${styles["cvo-block"]} ${styles["cvo-interests"]}`}>
                                  <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                      <i className={`${styles.custommodal}`}"fa fa-heart" aria-hidden="true"></i>
                                      <span className={`${styles["cvo-interests-blocktitle"]}`}>Sở thích</span>
                                  </div>
                                  <div className={`${styles["block-content"]}`}>
                                      <div className={`${styles["cvo-block-body"]}`}>
                                          <span className={`${styles["cvo-interests-interests"]}`}>Đọc sách:<br /> - Mỗi tháng đọc 1 quyển sách về kinh doanh.<br />Đá bóng:<br /> - Tham gia hoạt động đá bóng của công ty hàng tuần</span>
                                      </div>
                                  </div>
                              </div> */}
                      </div>
                    </div>
                    <div className={styles.clear} ></div>
                  </div>
                  <div className={styles.clear} ></div>
                  <div className={`${styles["cv-watermark"]}`}>
                    © jobsearchdtu.site
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
