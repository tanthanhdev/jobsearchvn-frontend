import React, { useEffect, useState } from 'react';
import imgLogo from '../../images/img job.jpg'
import { useDispatch, useSelector } from "react-redux";
import { get_employer_jobs, delete_employer_jobs } from "slices/company-profile";
import dateUtils from "utils/date"
import strUtils from "utils/string"

export const ManagerCompany = ({isActive}) => {
    const dispatch = useDispatch();
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetchJobs()
    }, [isActive])

    const fetchJobs = () => {
        dispatch(get_employer_jobs())
        .unwrap()
        .then((res) => {
            res = res.map(item => {
                let status
                if(item.end_time < new Date()) {
                    status = 3
                }else {
                    status = item.is_active ? 1 : 2
                }

                return  {...item, showDes: false, status}
            })
            setJobs(res)
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const handleShowDesc = (index) => {
        let arrJobs = jobs.map((item, i) => {
            if(index === i) return {...item, showDes: !item.showDes}
            return  {...item, showDes: false}
        })
        setJobs(arrJobs)
    }

    const handleDeleteJob = (slug) => {
        dispatch(delete_employer_jobs(slug))
        .unwrap()
        .then((res) => {
            fetchJobs()
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div class={`info-company ${isActive ? 'apply' : ''}`}>
            <div class="recruitment-manager">
                <div class="recruitment-manager__heading">
                    <div class="content__status">
                        <div class="content__status-lable red">Hết hạn</div>
                        <div class="content__status-lable yellow">Đang ẩn</div>
                        <div class="content__status-lable green">Đang hiển thị</div>
                    </div>
                    <div class="content__status-filter">
                        <i class="fas fa-filter"></i>
                    </div>                       
                </div>

                { jobs && jobs.length > 0 &&
                    jobs.map((item, index) => (
                        <div class="job-container" key={index}>
                            <div className="job">
                                <div class="job" style={{ border: 'none', width: '95%' }} onClick={() => handleShowDesc(index)}>
                                    <img class="job__img" src={imgLogo} alt=""/>
                                    <div class="job__name">
                                        <div class="job__name-top">{item.title}</div>
                                        <div class="job-wage">Thương lượng</div>
                                    </div>
                                    <div class="job__date">
                                        <div class="job-lable">Ngày hết hạn</div>
                                        <div class="job-number">{dateUtils.formatDate(item.end_time, 'DD/MM/YYYY')}</div>
                                    </div>
                                    <div class="job__view">
                                        <div class="job-lable">Số lần xem</div>
                                        <div class="job-number">{item.view_number}</div>
                                    </div>
                                    <div class="content__status-lable job-detail yellow">
                                        <button>Chi tiết công việc</button>
                                    </div>
                                    <div class={`content__status-lable job-detail ${(item.status === 1 ? 'green' : (item.status === 2 ? 'yellow' : 'red'))}`}><button>{strUtils.jobStatus(item.status)}</button></div>
                                </div>
                                <button onClick={() => handleDeleteJob(item.slug)}><i class="icon-del far fa-trash-alt"></i></button>
                            </div>
                            <div class={`job-discription ${item.showDes ? '' : 'd-none'}`}>
                                <div class="job-discription__heading">Mô tả công việc</div>
                                <div class="job-discription__content">{strUtils.sliceStr(item.description, 0 ,700)}</div>
                            </div>
                        </div>
                    ))
                }
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
