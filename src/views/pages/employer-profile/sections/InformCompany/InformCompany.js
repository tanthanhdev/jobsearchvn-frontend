import React from 'react';
import imgLogo from '../../images/img job.jpg'
export const InformCompany = ({isActive}) => {

    return (
        <div class={`info-company ${isActive ? 'apply' : ''}`}>
            <div class="recruitment-manager">
                <div class="recruitment-manager__heading">
                    <div class="content__status">
                        <div class="content__status-lable red">Không đạt</div>
                        <div class="content__status-lable yellow">Ứng viên từ chối</div>
                        <div class="content__status-lable green">Đã tuyển</div>
                    </div>
                    <div class="content__status-filter">
                        <i class="fas fa-filter"></i>
                    </div>                       
                </div>
                <div class="job-container">
                    <div class="job">
                        <img class="job__img" src={imgLogo} alt=""/>
                        <div class="job__name">
                            <div class="job__name-top">Software Engineer Fresher (Java, .NET)</div>
                            <div class="job-wage">Thương lượng</div>
                        </div>
                        <div class="job__date">
                            <div class="job-lable">Ngày hết hạn</div>
                            <div class="job-number">3/11/2021</div>
                        </div>
                        <div class="job__view">
                            <div class="job-lable">Số lần xem</div>
                            <div class="job-number">123</div>
                        </div>
                        <div class="content__status-lable job-detail">Hồ sơ ứng tuyển</div>
                        <div class="status job-detail">
                            <div class="content__status-lable red">Không đạt</div>
                        </div>
                        <i class="icon-del far fa-trash-alt"></i>
                    </div>
                </div>
                <div class="job-container">
                    <div class="job">
                        <img class="job__img" src={imgLogo} alt=""/>
                        <div class="job__name">
                            <div class="job__name-top">Software Engineer Fresher (Java, .NET)</div>
                            <div class="job-wage">Thương lượng</div>
                        </div>
                        <div class="job__date">
                            <div class="job-lable">Ngày hết hạn</div>
                            <div class="job-number">3/11/2021</div>
                        </div>
                        <div class="job__view">
                            <div class="job-lable">Số lần xem</div>
                            <div class="job-number">123</div>
                        </div>
                        <div class="content__status-lable job-detail">Hồ sơ ứng tuyển</div>
                        <div class="status job-detail">
                            <div class="content__status-lable yellow">Ứng viên từ chối</div>
                        </div>
                        <i class="icon-del far fa-trash-alt"></i>
                    </div>
                </div>

                <div class="job-container">
                    <div class="job">
                        <img class="job__img" src={imgLogo} alt=""/>
                        <div class="job__name">
                            <div class="job__name-top">Software Engineer Fresher (Java, .NET)</div>
                            <div class="job-wage">Thương lượng</div>
                        </div>
                        <div class="job__date">
                            <div class="job-lable">Ngày hết hạn</div>
                            <div class="job-number">3/11/2021</div>
                        </div>
                        <div class="job__view">
                            <div class="job-lable">Số lần xem</div>
                            <div class="job-number">123</div>
                        </div>
                        <div class="content__status-lable job-detail">Hồ sơ ứng tuyển</div>
                        <div class="status job-detail">
                            <div class="content__status-lable red">Không đạt</div>
                        </div>
                        <i class="icon-del far fa-trash-alt"></i>
                    </div>
                </div>

                <div class="job-container">
                    <div class="job">
                        <img class="job__img" src={imgLogo} alt=""/>
                        <div class="job__name">
                            <div class="job__name-top">Software Engineer Fresher (Java, .NET)</div>
                            <div class="job-wage">Thương lượng</div>
                        </div>
                        <div class="job__date">
                            <div class="job-lable">Ngày hết hạn</div>
                            <div class="job-number">3/11/2021</div>
                        </div>
                        <div class="job__view">
                            <div class="job-lable">Số lần xem</div>
                            <div class="job-number">123</div>
                        </div>
                        <div class="content__status-lable job-detail">Hồ sơ ứng tuyển</div>
                        <div class="status job-detail">
                            <div class="content__status-lable red">Không đạt</div>
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
        )
};
