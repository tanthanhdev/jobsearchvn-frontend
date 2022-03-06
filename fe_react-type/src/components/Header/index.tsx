import React from 'react'
import './style.css'
const Header = () => {
  return (
    <header className="header">
        <React.Fragment>
            <div className="header__right">
                <img src="./assets/img/logo-jobsearchvn.png" alt="icon" className="header__icon"/>
                <ul className="header__list header__right__list">
                    <li className="header__right__item">
                        <a href="#" className="header__link header__right__item-link">Tìm việc làm</a>
                    </li>
                    <li className="header__right__item">
                        <a href="#" className="header__link header__right__item-link">Đánh giá công ty</a>
                    </li>
                    <li className="header__right__item">
                        <a href="#" className="header__link header__right__item-link">Blog</a>
                    </li>
                </ul>
            </div>
            
            <div className="header__left">

                <ul className="header__list header__left__list">
                    <li className="header__left__item">
                        <a href="#" className="header__link header__left__item-link">
                            <i className="header__left-icon header__comment far fa-comment-alt"></i>
                        </a>
                    </li>
                    <li className="header__left__item header__left__item-notify">
                        {/* <!-- thong bao --> */}
                        <a href="#" className="header__link header__left__item-link">
                            <i className="header__left-icon fas fa-bell"></i>
                        </a>
                        <div className="header__notifi">
                            <header className="header__notifi-header">
                                <h3>Thông báo mới nhận</h3>
                            </header>
                            <ul className="header__notify-list">
                                <li className="header__notify-item header__notify-item-viewed">
                                    <a href="#" className="header__notify-link">
                                        Chào mừng bạn đến Job Search VN. Đăng nhập ngay để xem việc làm phù hợp với bạn, nhà tuyển dụng đã xem hồ sơ của bạn và cập nhật nhiều hơn nữa ...
                                    </a>
                                </li>
                                <li className="header__notify-item">
                                    <a href="#" className="header__notify-link">ảo ma ca na đa</a>
                                </li>
                                <li className="header__notify-item header__notify-item-viewed">
                                   <a href="#" className="header__notify-link">Tôi không sao kê đâu</a>
                                </li> 
                            </ul>
                           <footer className="header__notify-footer">
                               <a href="" className="header__notify-link header__notify-footer-btn">Xem tất cả</a>
                           </footer>

                        </div>
                    </li>
                    <li className="header__left__item">
                        <a href="#" className="header__link header__left__item-link">
                            Đăng nhập
                        </a>
                    </li>
                    
                    <li className="header__left__item">
                        <a href="#" className="header__link header__left__item-link">
                            Nhà tuyển dụng/Đăng tuyển
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    </header>
  )
}

Header.propTypes = {}

export default Header