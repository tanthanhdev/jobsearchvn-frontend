import React from 'react';

export const InfoCompany = ({isActive}) => (
    <div class={`info-company ${isActive ? 'apply' : ''}`}>
        <div class="content">
            <div class="content__left">
                <div class="content__left-info">
                    <div class="left-heading">Công ty tài chính Fecredit</div>
                    <input class = "left-input" type="" placeholder="Thông tin chung"/>
                    
                    <div class="left__item">
                        <div class="left__item-lable">Tên công ty</div>
                        <div class="item__info">
                            <div class="item__info-lable">Công ty tài chính Fecredit</div>
                            <i class="item__info-icon fas fa-pen"></i>
                        </div>
                    </div>
                    
                    <div class="left__item">
                        <div class="left__item-lable">Điện thoại</div>
                        <div class="item__info">
                            <div class="item__info-lable">??????????</div>
                            <i class="item__info-icon fas fa-pen"></i>
                        </div>
                    </div>
        
                    <div class="left__item">
                        <div class="left__item-lable">Địa chỉ công ty</div>
                        <div class="item__info">
                            <div class="item__info-lable">??????????</div>
                            <i class="item__info-icon fas fa-pen"></i>
                        </div>
                    </div>

                    <div class="left__item">
                        <div class="left__item-lable">Số lượng nhân viên</div>
                        <div class="item__info">
                            <div class="item__info-lable">1000</div>
                            <i class="item__info-icon fas fa-pen"></i>
                        </div>
                    </div>
        
                    <div class="left__item">
                        <div class="left__item-lable">Ngành nghề</div>
                        <div class="item__info">
                            <div class="item__info--branch">
                                <div class="item__info--branch-lable">IT-Phần mềm</div>
                                <div class="item__info--branch-del">X</div>
                            </div>
                            <i class="item__info-icon fas fa-pen"></i>
                        </div>
                    </div>

                    <div class="left__item">
                        <div class="left__item-lable">Sơ lược về công ty</div>
                        <div class="left__item-content">?????</div>
                    </div>

                    <div class="left__item">
                        <div class="left__item-lable">Logo công ty</div>
                        <div class="left__item-content img_choose">Kéo và thả hình ảnh ở đây</div>
                    </div>
            
                    <div class="left__item">
                        <div class="left__item-lable">Hình ảnh công ty</div>
                        <div class="left__item-content img_choose">Kéo và thả hình ảnh ở đây</div>
                    </div>
                    <button class="btn-save">Lưu</button>
                </div>
            </div>
            <div class="content__right">
                <div class="content__right-heading">Cài đặt chế độ công ty</div>
                <div class="regime">
                    <input type="radio" value="Công khai" />
                    Công khai
                </div>
                <div class="regime">
                    <input type="radio" value="Riêng tư" />
                    Riêng tư
                </div>
            </div>
        </div>
    </div>
);
