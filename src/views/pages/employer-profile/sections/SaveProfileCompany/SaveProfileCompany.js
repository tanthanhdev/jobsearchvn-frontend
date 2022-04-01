import React from 'react';
import avajob from '../../images/avatar jobseeker.png'
export const SaveProfileCompany = ({isActive}) => (
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
            <div class="profile-jobseeker">
                <div class="tab-job">
                    <img class="tab-job__img" src={avajob} alt=""/>
                    <div class="tab-job__name">
                        <div class="tab-job__name-top">Tên hồ sơ</div>
                        <div class="tab-job__name-bottom">
                            <div class="language">C#</div>
                            <div class="language">C#</div>
                        </div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Ngày gia nhập</div>
                        <div class="date-joining-number">3/11/2021</div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Số lượt xem</div>
                        <div class="date-joining-number">123</div>
                    </div>
                    <div class="title">Hồ sơ ứng tuyển</div>
                    <div class="status job-detail">
                        <div class="content__status-item status">
                            <span class="item-text">Ngoại tuyến</span>
                            <i class="item-icon fas fa-circle"></i>
                        </div>
                    </div>
                    <i class="icon-del far fa-trash-alt"></i>
                </div>
            </div>
            <div class="profile-jobseeker">
                <div class="tab-job">
                    <img class="tab-job__img" src={avajob} alt=""/>
                    <div class="tab-job__name">
                        <div class="tab-job__name-top">Tên hồ sơ</div>
                        <div class="tab-job__name-bottom">
                            <div class="language">C#</div>
                            <div class="language">C#</div>
                        </div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Ngày gia nhập</div>
                        <div class="date-joining-number">3/11/2021</div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Số lượt xem</div>
                        <div class="date-joining-number">123</div>
                    </div>
                    <div class="title">Hồ sơ ứng tuyển</div>
                    <div class="status job-detail">
                        <div class="content__status-item status">
                            <span class="item-text">Ngoại tuyến</span>
                            <i class="item-icon fas fa-circle"></i>
                        </div>
                    </div>
                    <i class="icon-del far fa-trash-alt"></i>
                </div>
            </div>
            <div class="profile-jobseeker">
                <div class="tab-job">
                    <img class="tab-job__img" src={avajob} alt=""/>
                    <div class="tab-job__name">
                        <div class="tab-job__name-top">Tên hồ sơ</div>
                        <div class="tab-job__name-bottom">
                            <div class="language">C#</div>
                            <div class="language">C#</div>
                        </div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Ngày gia nhập</div>
                        <div class="date-joining-number">3/11/2021</div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Số lượt xem</div>
                        <div class="date-joining-number">123</div>
                    </div>
                    <div class="title">Hồ sơ ứng tuyển</div>
                    <div class="status job-detail">
                        <div class="content__status-item status">
                            <span class="item-text">Ngoại tuyến</span>
                            <i class="item-icon fas fa-circle"></i>
                        </div>
                    </div>
                    <i class="icon-del far fa-trash-alt"></i>
                </div>
            </div>
            <div class="profile-jobseeker">
                <div class="tab-job">
                    <img class="tab-job__img" src={avajob} alt=""/>
                    <div class="tab-job__name">
                        <div class="tab-job__name-top">Tên hồ sơ</div>
                        <div class="tab-job__name-bottom">
                            <div class="language">C#</div>
                            <div class="language">C#</div>
                        </div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Ngày gia nhập</div>
                        <div class="date-joining-number">3/11/2021</div>
                    </div>
                    <div class="date-joining">
                        <div class="date-joining-lable">Số lượt xem</div>
                        <div class="date-joining-number">123</div>
                    </div>
                    <div class="title">Hồ sơ ứng tuyển</div>
                    <div class="status job-detail">
                        <div class="content__status-item status">
                            <span class="item-text">Ngoại tuyến</span>
                            <i class="item-icon fas fa-circle"></i>
                        </div>
                    </div>
                    <i class="icon-del far fa-trash-alt"></i>
                </div>
            </div>
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
);
