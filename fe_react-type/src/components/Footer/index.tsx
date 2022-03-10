import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <footer className="footer">
<div className="footer__content grid wide">
                <div className="roww">
                    <div className="footer__list coll l-2-4 m-6">
                        <p className="footer__list-name">JobSearchVN</p>
                        <ul>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Về JobSearchVN</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Về Liên hệ</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Câu hỏi thường gặp</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Thỏa thuận sử dụng</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Quy định bảo mật</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__list coll l-2-4 m-6">
                        <p className="footer__list-name">Dành cho nhà tuyển dụng</p>
                        <ul>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Đăng tuyển dụng</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Tìm kiếm hồ sơ</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Liên hệ dịch vụ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__list coll l-2-4 m-6">
                        <p className="footer__list-name">Việc làm theo khu vực</p>
                        <ul>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Hồ Chí Minh</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Hải Phòng</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Hà Nội</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Đà Nẵng</a>
                            </li>
                            <li className="footer__item" >
                                <a className="footer__item-link" style={{color: 'var(--primary-color)'}} href="">Xem thêm</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__list coll l-2-4 m-6">
                        <p className="footer__list-name">Việc làm theo nghề</p>
                        <ul>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">IT-Phần mềm</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Kế toán</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Ngân hàng</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" href="">Xây dựng</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__item-link" style={{color: 'var(--primary-color)'}} href="">Xem thêm</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__list coll l-2-4 m-6">
                        <img src="./assets/img/logo-jobsearchvn.png" alt=""/>
                    </div>
                    <div className="footer__footer grid wide">
                <div className="footer__footer-info">
                    <div className="footer__footer-info-sub">
                        <h2>Copyright Công ty cổ phần JobSearchVN Việt Nam</h2>
                        <h2>Cẩm Lệ, TP Đà Nẵng, Việt Nam</h2>
                    </div>
                </div>
                <div className="footer__footer-contact">
                    <div className="footer__footer-contact--left">
                        <img src="./assets/img/logo-jobsearchvn.png" alt="logo"/>
                        <h2>JobSearchVN</h2>
                    </div>
                    <div className="footer__footer-contact--right">
                        <p>Liên hệ mạng xã hội</p>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
                </div>
            
            </div>
    </footer>
  )
}

export default Footer