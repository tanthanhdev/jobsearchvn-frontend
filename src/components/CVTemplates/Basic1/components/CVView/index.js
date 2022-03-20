import React from "react";
import { Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import styles from './style.module.css';
import { icons } from 'utils/icons';

export const CVView = ({ showModal, toggleShow }) => {
  return (
    <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`}>

      <Modal.Header closeButton>
        <Modal.Title>CV Template Basic 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                              <span>Curriculum Vitae</span>
                              {/* <i className={`${styles.custommodal}`}"fa fa-times icon text-primary" aria-hidden="true" style="float: right;"></i> */}
                            </div>
                            <div className={`${styles.tab} ${styles.next}`}></div>
                          </div>
                          <div className={`${styles["add-tab"]} ${styles["text-primary"]}`}>
                            {/* <i className={`${styles.custommodal}`}"fa fa-plus" aria-hidden="true"></i></div> */}
                          </div>
                          <div className={`${styles["nav-body"]}`}>
                            <div className={`${styles.action}`}>
                              <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-angle-left" aria-hidden="true"></i> */}
                              </span>
                              <span className={`${styles.prev} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-angle-right" aria-hidden="true"></i> */}
                              </span>
                              <span className={`${styles.reload} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-repeat" aria-hidden="true"></i> */}
                              </span>
                            </div>
                            <div className={`${styles.search} ${styles["bg-primary-trans"]}`}>
                              <div className={`${styles["input-search"]}`}>
                                <span className={`${styles.icon} ${styles["text-primary"]}`}>
                                  {/* <i className={`${styles.custommodal}`}"fa fa-briefcase" aria-hidden="true"></i> */}
                                </span>
                                <span className={`${styles.title}`}>
                                  Nhân viên kinh doanh
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
                                <img className={`${styles["cvo-profile-avatar"]}`} src="https://www.topcv.vn/images/default-avatar.png" value="preview_avatar" alt="avatar" />
                              </div>
                              <div className={`${styles["cvo-profile-fullname-and-title"]}`}>
                                <div className={`${styles["cvo-profile-fullname-wraper"]}`}>
                                  <span className={`${styles["text-primary"]} ${styles["cvo-profile-fullname"]}`}>Nguyễn Văn A</span>
                                </div>
                                <div className={`${styles["cvo-profile-title-wraper"]}`}>
                                  <span className={`${styles["text-primary"]} ${styles["cvo-profile-title"]}`}>Nhân viên kinh doanh</span>
                                </div>
                                <div className={`${styles.information}`}>
                                  <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-dob-wraper"]}`} >
                                    19/05/1992
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-phone" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-phone"]}`} >(024) 6680 5588</span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]} ${styles["cvo-profile-email-wraper"]}`} >
                                    {/* <i className={`${styles.custommodal}`}"fa fa-envelope" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-email"]}`}>hotro@jobsearch.vn</span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-globe" aria-hidden="true"></i> */}
                                    {/* <span><a href="https://fb.com/jobsearch.vn" target="_blank" className={`${styles["cvo-clickable-link"]} ${styles["cvo-profile-website"]}`} rel="noreferrer noopener">https://fb.com/jobsearch.vn</a></span> */}
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-address-wraper"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-location-arrow" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-address"]}`} >
                                      Số 10, đường 10, TopCV
                                    </span>
                                  </div>
                                  <div className={`${styles["cvo-profile-info-row"]}  ${styles["cvo-profile-gender-wraper"]}`}>
                                    {/* <i className={`${styles.custommodal}`}"fa fa-user" aria-hidden="true"></i> */}
                                    <span className={`${styles["cvo-profile-info-value"]} ${styles["cvo-profile-gender"]}`} >
                                      Nam
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles["h-description"]}`}>
                              <div className={`${styles["cvo-block"]} ${styles["cvo-objective"]}`}>
                                <div className={`${styles["cvo-block-body"]}`}>
                                  <div className={`${styles["cvo-objective-objective"]}`}>Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.</div>
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
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-education-school-wraper"]}`}>
                                      <span className={`${styles["cvo-education-school"]}`}>
                                        Đại học Duy Tân
                                      </span>
                                    </div>
                                    <div className={`${styles["cvo-education-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-education-start"]}`}>
                                          2016-03-02</span>
                                        - <span className={`${styles["cvo-education-end"]}`}>
                                          2018-03-02
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-education-wrapper"]}`}><span className={`${styles["cvo-education-title"]}`}>
                                    Quản trị doanh nghiệp
                                    (Bằng cấp Cử Nhân)
                                  </span></div>
                                  <div className={`${styles["cvo-education-details"]}`}>
                                    Tốt nghiệp loại Khá, điểm trung bình 3.1</div>
                                </div>
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
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                      <span className={`${styles["cvo-experience-company"]}`}>Công ty TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-experience-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-experience-start"]}`}>03/2015</span>
                                        -
                                        <span className={`${styles["cvo-experience-end"]}`}>Hiện tại</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nhân viên bán hàng</span></div>
                                  <div className={`${styles["cvo-experience-details"]}`}>- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...<br />- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.</div>
                                </div>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-experience-company-wraper"]}`}>
                                      <span className={`${styles["cvo-experience-company"]}`}>Cửa hàng TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-experience-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-experience-start"]}`}>06/2014</span>
                                        -
                                        <span className={`${styles["cvo-experience-end"]}`}>02/2015</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-experience-wrapper"]}`}><span className={`${styles["cvo-experience-position"]}`}>Nhân viên bán hàng</span></div>
                                  <div className={`${styles["cvo-experience-details"]}`}>- Bán hàng trực tiếp tại cửa hàng cho người nước ngoài và người Việt.<br />- Quảng bá sản phẩm thông qua các ấn phẩm truyền thông: banner, poster, tờ rơi...<br />- Lập báo cáo sản lượng bán ra hàng ngày.</div>
                                </div>
                              </div>
                            </div>
                            <div className={`${styles["cvo-block"]} ${styles["cvo-activity"]}`}>
                              <div className={`${styles["cvo-block-header"]} ${styles["text-primary"]}`}>
                                {/* <i className={`${styles.custommodal}`}"fa fa-star" aria-hidden="true"></i> */}
                                <span className={`${styles["cvo-activity-blocktitle"]}`}>Hoạt động</span>
                              </div>
                              <div className={`${styles["cvo-block-body"]} ${styles["activity-table"]}`}>
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-section-info"]}`}>
                                    <div className={`${styles["cvo-activity-organization-wraper"]}`}>
                                      <span className={`${styles["cvo-activity-organization"]}`}>Nhóm tình nguyện TOPCV</span>
                                    </div>
                                    <div className={`${styles["cvo-activity-time"]}`}>
                                      <span className={`${styles["time-background"]}`}>
                                        <span className={`${styles["cvo-activity-start"]}`}>10/2013</span>
                                        - <span className={`${styles["cvo-activity-end"]}`}>08/2014</span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className={`${styles["cvo-activity-wrapper"]}`}><span className={`${styles["cvo-activity-position"]}`}>Tình nguyện viên</span></div>
                                  <div className={`${styles["cvo-activity-details"]}`}>Tập hợp các món quà và phân phát tới người vô gia cư.<br />- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.</div>
                                </div>
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

                                  <div className={`${styles.row}`}>
                                    <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Tin học văn phòng TOPCV</span></div>
                                    <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- Sử dụng thành thạo các công cụ Word, Excel, Power Point</div>
                                  </div>


                                  <div className={`${styles.row}`}>
                                    <div className={`${styles["cvo-skill-group-wrapper"]}`}><span className={`${styles["cvo-skillgroup-area"]}`}>Tiếng Anh</span></div>
                                    <div className={`${styles["cvo-skillgroup-skill-description"]}`}>- Khả năng giao tiếp Tiếng Anh trôi chảy</div>
                                  </div>

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
                                <div className={`${styles.row}`}>
                                  <div className={`${styles["cvo-award-wrapper"]}`}><span className={`${styles["cvo-award-time"]}`}>2014</span></div>
                                  <div className={`${styles["cvo-award-title"]}`}>Nhân viên xuất sắc năm công ty TOPCV</div>
                                  <div className={styles.clear}></div>
                                </div>
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
                        © jobsearchvn.vn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </Modal.Body>
      <Modal.Footer>
        {/* onClick={toggleShow}  */}
        <Button onClick={toggleShow}>Thoát</Button>
      </Modal.Footer>

    </Modal>
  );
};
