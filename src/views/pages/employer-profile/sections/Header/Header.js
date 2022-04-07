import React, { useEffect, useState } from 'react';
import './Header.css';
import avaCompany from '../../images/avatar company.jpg'
// reducers
import { useDispatch, useSelector } from "react-redux";
import { get_employer_detail } from "slices/company-profile";

export const Header = ({activeIndex, changeTab, handleEdit}) => {
    const { isSuccess } = useSelector((state) => state.profileEmployer);
    const dispatch = useDispatch();

    const [company, setCompany] = useState(null)

    useEffect(() => {
        dispatch(get_employer_detail())
        .unwrap()
        .then((res) => {
            let { user, ...companyDetail} = res
            // console.log(companyDetail);
            setCompany(companyDetail)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const handleChangeTab = (index) => {
        // console.log(index);
        changeTab(index)
    }

    return (
        <>
            {
                isSuccess && company ? 
                <div class="header_employ">
                    <div class="header__item">
                        <div class="item__top">
                            <h3 class="company-name">{company.company_name ?? ''}</h3>
                            <div>
                                <button  style={{ marginRight: '15px' }}><i class="item__top-icon far fa-comment-alt"></i></button>
                                <button onClick={handleEdit}><i class="item__top-icon fas fa-pen"></i></button>
                            </div>
                        </div>
                        <div class="item__bottom">
                            <i class="fas fa-map-marker-alt item__bottom-icon"></i>
                            <span class="item__bottom-address">{company.company_location}</span>
                            <span class="item__bottom--title">Message</span>
                        </div>
                        <img class="item__avatar" src={company.logo ? company.logo : avaCompany} alt="avatar company"/>
                    </div>
                    <div class="header__navbar">
                        <span class={`header__navbar-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleChangeTab(0)}>Hồ sơ công ty</span>
                        <span class={`header__navbar-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() =>  handleChangeTab(1)}>Quản lý tuyển dụng</span>
                        <span class={`header__navbar-item ${activeIndex === 2 ? 'active' : ''}`} onClick={ () => handleChangeTab(2)}>Thông báo ứng tuyển</span>
                        <span class={`header__navbar-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleChangeTab(3)}>Hồ sơ đã lưu</span>
                        <span class={`header__navbar-item ${activeIndex === 4 ? 'active' : ''}`} onClick={ () => handleChangeTab(4)}>Đăng tuyển công việc</span>
                        <i class="header__navbar-icon far fa-plus-square"></i>
                        <div class="line"></div>
                    </div>
                </div>
                : <p>Loading ...</p>
            }
        </>
    )
};
