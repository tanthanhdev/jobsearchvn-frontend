import React from 'react';
import imgLogo from '../../images/img job.jpg'
export const ManagerCompany = ({isActive}) => (
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
                    <div class="content__status-lable job-detail yellow">Chi tiết công việc</div>
                    <div class="content__status-lable job-detail red">Hết hạn</div>
                    <i class="icon-del far fa-trash-alt"></i>
                </div>
                <div class="job-discription">
                    <div class="job-discription__heading">Mô tả công việc</div>
                    <div class="job-discription__content">Hiện nay, chúng tôi đang tuyển dụng vị trí TRƯỞNG NHÓM QUAN HỆ KHÁCH HÀNG nhằm đồng hành và tạo dựng những dấu ấn thành công mới tại NEST BY AIA. 
                        Là một Leader, bạn sẽ được làm việc ở vị trí đắc địa như Lotte (Hà Nội) - không gian văn phòng đẹp nhất, tôn trọng thiên nhiên, trang thiết bị - cộng nghệ iPos hiện đại, thuận lợi cho quá trình làm việc. 
                        Kiến trúc & chức năng mở của văn phòng nest cũng là một điều cùng được yêu thích</div>
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
                    <div class="content__status-lable job-detail btn--job-detail">Chi tiết công việc</div>
                    <div class="content__status-lable job-detail red">Hết hạn</div>
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
                    <div class="content__status-lable job-detail btn--job-detail">Chi tiết công việc</div>
                    <div class="content__status-lable job-detail red">Hết hạn</div>
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
                    <div class="content__status-lable job-detail btn--job-detail">Chi tiết công việc</div>
                    <div class="content__status-lable job-detail red">Hết hạn</div>
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
                    <div class="content__status-lable job-detail btn--job-detail">Chi tiết công việc</div>
                    <div class="content__status-lable job-detail red">Hết hạn</div>
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
