import React, { useEffect, useState } from 'react';
import avajob from '../../images/avatar jobseeker.png'
import { useDispatch, useSelector } from "react-redux";
import { getAllCvs, deleteSaveCv } from "slices/company-profile";
import dateUtils from "utils/date"

export const SaveProfileCompany = ({isActive}) => {

    const [saveCvs, setSaveCvs] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetchCvs()
    }, [])

    const fetchCvs = () => {
        dispatch(getAllCvs())
        .unwrap()
        .then((res) => {
            // console.log(res);
            setSaveCvs(res)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleDeleteCv = (cv_id) => {
        dispatch(deleteSaveCv(cv_id))
        .unwrap()
        .then((res) => {
            console.log(res);
            setSaveCvs(res)

        })
        .catch((err) => {
            console.log(err);
            fetchCvs()
        });
    }

    return (
        <div class={`info-company ${isActive ? 'apply' : ''}`}>
            <div class="recruitment-manager">
                <div class="recruitment-manager__heading">
                    <div class="content__status">
                        <div class="content__status-item">
                            <span class="item-text">Ngoại tuyến</span>
                            <i class="item-icon fas fa-circle"></i>
                        </div>
                        <div class="content__status-item online">
                            <span class="item-text online">Trực tuyến</span>
                            <i class="item-icon online fas fa-circle"></i>
                        </div>
                    </div>
                    <div class="content__status-filter">
                        <i class="fas fa-filter"></i>
                    </div>                       
                </div>
                { saveCvs && saveCvs.map((item) => (
                    <div class="profile-jobseeker">
                        <div class="tab-job">
                            <img class="tab-job__img" src={item.employer.logo ? item.employer.logo : avajob} alt=""/>
                            <div class="tab-job__name">
                                <div class="tab-job__name-top">{item.cv.title}</div>
                                <div class="tab-job__name-bottom">
                                    <div class="language">{item.cv.target_major}</div>
                                    {/* <div class="language">C#</div> */}
                                </div>
                            </div>
                            <div class="date-joining">
                                <div class="date-joining-lable">Ngày gia nhập</div>
                                <div class="date-joining-number">{dateUtils.formatDate(item.created_at, 'DD/mm/yyyy')}</div>
                            </div>
                            <div class="date-joining">
                                <div class="date-joining-lable">Số lượt xem</div>
                                <div class="date-joining-number">{item.cv.view}</div>
                            </div>
                            <div class="title">Hồ sơ ứng tuyển</div>
                            <div class="status job-detail">
                                <div class="content__status-item status">
                                    <span class={`item-text ${item.cv.status === "1" ? 'online' : ''}`}>{item.cv.status === "1" ? 'Trực tuyến' : 'Ngoại tuyến'}</span>
                                    <i class={`item-icon fas fa-circle  ${item.cv.status === "1" ? 'online' : ''}`}></i>
                                </div>
                            </div>
                            <button onClick={() => handleDeleteCv(item.id)}><i class="icon-del far fa-trash-alt"></i></button>
                        </div>
                    </div>
                ))}
                <div class="page">
                    <div class="page__item">
                        <i class="page__icon fas fa-angle-left"></i>
                    </div>
                    <div class="page__item selected">1</div>
                    <div class="page__item">2</div>
                    <div class="page__item">
                        <i class="page__icon fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};
