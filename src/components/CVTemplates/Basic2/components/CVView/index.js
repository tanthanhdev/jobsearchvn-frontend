import React, { useEffect } from "react";
import { Modal } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

import CvTemplateService from 'services/cv-template';

import styles from './style.module.css';
// import { icons } from 'utils/icons';

export const CVView = ({ showModal, toggleShow, CvTemplate }) => {
  useEffect(() => {
    if (showModal) {
      CvTemplateService.setViewCvTemplate(CvTemplate.id).then(data => { console.log(data); });
    }
  }, [showModal]);

  return (
    <Modal show={showModal} onHide={toggleShow} dialogClassName={`${styles["custom-modal"]}`} >

      <Modal.Header closeButton>
        <Modal.Title>CV Template Basic 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section id="cv-viewer" className="iframe">
          <div id="cv-layout-viewer">
            <div id="cvo-document-root">
              <div id="cvo-document" className="cvo-document">
                <div className="cvo-page">
                  <div className="cvo-subpage">
                    <div id="cvo-body">

                      <div id="cvo-main">

                        <div id="group-header">

                          <div id="cvo-profile" className="cvo-block">
                            <table className="profile-table">
                              <tbody>
                                <tr>
                                  <td className="avatar-wraper" rowSpan="9">
                                    <img id="cvo-profile-avatar"
                                      src="https://www.topcv.vn/images/default-avatar.png"
                                      value="preview_avatar" alt="avatar"/>
                                  </td>
                                  <td>
                                    <span id="cvo-profile-fullname">Nguyễn Văn A</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span id="cvo-profile-title">Nhân viên kinh doanh</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Ngày sinh: </span>
                                    <span className="profile-field"
                                      id="cvo-profile-dob">19/05/1992</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Giới tính: </span>
                                    <span className="profile-field"
                                      id="cvo-profile-gender">Nam</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Điện thoại: </span>
                                    <span className="profile-field" id="cvo-profile-phone">(024)
                                      6680 5588</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Email: </span>
                                    <span className="profile-field"
                                      id="cvo-profile-email">hotro@topcv.vn</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Địa chỉ: </span>
                                    <span className="profile-field" id="cvo-profile-address">Số 10,
                                      đường 10, TopCV</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="profile-label">Website: </span>
                                    <span className="profile-field" id="cvo-profile-website"><a
                                      href="https://fb.com/topcv.vn" target="_blank"
                                      className="cvo-clickable-link"
                                      rel="noreferrer noopener">https://fb.com/topcv.vn</a></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>


                        <div id="group-content">
                          <div id="cvo-objective" className="cvo-block">
                            <h3 className="cvo-block-title"><span id="cvo-objective-blocktitle">Mục tiêu
                              nghề nghiệp</span></h3>
                            <div className="cvo-block-body">
                              <div id="cvo-objective-objective">Áp dụng những kinh nghiệm về kỹ năng
                                bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên
                                bán hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó
                                giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng.
                              </div>
                            </div>
                          </div>
                          <div id="cvo-education" className="cvo-block">
                            <h3 className="cvo-block-title"><span id="cvo-education-blocktitle">Học
                              vấn</span></h3>
                            <div id="education-table">
                              <div className="row ">
                                <div className="cvo-education-time col-time">
                                  <span className="cvo-education-start start">10/2010</span>
                                  -
                                  <span className="cvo-education-end end">05/2014</span>
                                </div>
                                <div className="school">
                                  <span className="cvo-education-school">Đại học TOPCV</span>
                                  <span className="cvo-education-title">Quản trị Doanh nghiệp</span>
                                  <span className="cvo-education-details">Tốt nghiệp loại Giỏi, điểm
                                    trung bình 8.0</span>
                                </div>
                                <div style={{clear: 'both'}}></div>
                              </div>
                            </div>
                          </div>
                          <div id="cvo-experience" className="cvo-block">
                            <h3 className="cvo-block-title"><span id="cvo-experience-blocktitle">Kinh nghiệm
                              làm việc</span></h3>
                            <div id="experience-table">
                              <div className="row ">
                                <div className="cvo-experience-time col-time">
                                  <span className="cvo-experience-start start">03/2015</span>
                                  -
                                  <span className="cvo-experience-end end">Hiện tại</span>
                                </div>
                                <div className="company">
                                  <span className="cvo-experience-company">Công ty TOPCV</span>
                                  <span className="cvo-experience-position">Nhân viên bán hàng</span>
                                  <div className="cvo-experience-details">- Hỗ trợ viết bài quảng cáo
                                    sản phẩm qua kênh facebook, các forum,...<br/>- Giới thiệu,
                                      tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng
                                      qua điện thoại và email.</div>
                                </div>
                                <div style={{clear: 'both'}}></div>
                              </div>
                              <div className="row ">
                                <div className="cvo-experience-time col-time">
                                  <span className="cvo-experience-start start">06/2014</span>
                                  -
                                  <span className="cvo-experience-end end">02/2015</span>
                                </div>
                                <div className="company">
                                  <span className="cvo-experience-company">Cửa hàng TOPCV</span>
                                  <span className="cvo-experience-position">Nhân viên bán hàng</span>
                                  <div className="cvo-experience-details">- Bán hàng trực tiếp tại cửa
                                    hàng cho người nước ngoài và người Việt.<br/>- Quảng bá sản
                                      phẩm thông qua các ấn phẩm truyền thông: banner, poster, tờ
                                      rơi...<br/>- Lập báo cáo sản lượng bán ra hàng ngày.</div>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                              </div>
                            </div>
                            <div id="cvo-activity" className="cvo-block">
                              <h3 className="cvo-block-title"><span id="cvo-activity-blocktitle">Hoạt
                                động</span></h3>
                              <div id="activity-table">
                                <div className="row ">
                                  <div className="cvo-activity-time col-time">
                                    <span className="cvo-activity-start start">10/2013</span>
                                    -
                                    <span className="cvo-activity-end end">08/2014</span>
                                  </div>
                                  <div className="organization">
                                    <span className="cvo-activity-organization">Nhóm tình nguyện
                                      TOPCV</span>
                                    <span className="cvo-activity-position">Tình nguyện viên</span>
                                    <div className="cvo-activity-details">Tập hợp các món quà và phân
                                      phát tới người vô gia cư.<br/>- Chia sẻ, động viên họ vượt
                                        qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.
                                    </div>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                              </div>
                            </div>
                            <div id="cvo-certification" className="cvo-block">
                              <h3 className="cvo-block-title"><span id="cvo-certification-blocktitle">Chứng
                                chỉ</span></h3>
                              <div id="certification-table">
                                <div className="row ">
                                  <div className="cvo-certification-time-wraper col-time">
                                    <span className="cvo-certification-time">2013</span>
                                  </div>
                                  <div className="details">
                                    <span className="cvo-certification-title">Giải nhất Tài năng
                                      TOPCV</span>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                              </div>
                            </div>
                            <div id="cvo-award" className="cvo-block">
                              <h3 className="cvo-block-title"><span id="cvo-award-blocktitle">Giải
                                thưởng</span></h3>
                              <div id="award-table">
                                <div className="row ">
                                  <div className="cvo-award-time-wraper col-time">
                                    <span className="cvo-award-time">2014</span>
                                  </div>
                                  <div className="details">
                                    <span className="cvo-award-title">Nhân viên xuất sắc năm công ty
                                      TOPCV</span>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                              </div>
                            </div>
                            <div id="cvo-skillgroup" className="cvo-block">
                              <h3 className="cvo-block-title"><span id="cvo-skillgroup-blocktitle">Các kỹ
                                năng</span></h3>
                              <div id="skill-table">
                                <div className="row">
                                  <div>
                                    <span className="cvo-skillgroup-area">Tin học văn phòng TOPCV</span>
                                  </div>
                                  <div>
                                    <span className="cvo-skillgroup-skill-description">- Sử dụng thành
                                      thạo các công cụ Word, Excel, Power Point</span>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                                <div className="row">
                                  <div>
                                    <span className="cvo-skillgroup-area">Tiếng Anh</span>
                                  </div>
                                  <div>
                                    <span className="cvo-skillgroup-skill-description">- Khả năng giao
                                      tiếp Tiếng Anh trôi chảy</span>
                                  </div>
                                  <div style={{clear: 'both'}}></div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div style={{clear: 'both'}}></div>
                      </div>
                      <div id="cv-watermark">
                        © jobsearchdtu.site
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
