import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { autocomplete } from "primereact/autocomplete";
// components
// services
import CityService from "services/city.service";
// slices
import { create_campaign } from "slices/company-profile";
// utils
import styles from './PostJob.module.css';

export const PostJob = () => {
  const { isError, isSuccess, isLoading } = useSelector((state) => state.profileEmployer);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch()

  useEffect(() => {
  }, [])


  const initialValues = {
    name: "",
    position: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    position: Yup.string().required("This field is required!"),
  });

  const handleCampaign = (formValue) => {
    const { name, position } = formValue;
    dispatch(create_campaign({ name, position, city_id: 1 }))
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
      });
  };

  return (
    <main data-v-ddcb31ba="" className={`${styles['page-container']} ${styles['has-sub-breadcrumb']}`}>
      <div data-v-ddcb31ba="" className={`${styles['breadcrumb-box']}`}>
        <h6 className={`${styles['breadcrumb-title']} ${styles['d-flex']}`}><span>Đăng tin tuyển dụng</span> </h6> <span data-v-ddcb31ba=""
          className={`${styles['border-left']} ${styles['mx-2']}`}></span>
        <div data-v-ddcb31ba=""
          className={`${styles['ml-2']} ${styles['bg-light']} ${styles['px-3']} ${styles['py-1']}
          ${styles['rounded-pill']} ${styles['font-weight-bold']} ${styles['d-inline-block']} ${styles['d-flex']} ${styles['align-items-center']}`}>
          <span data-v-ddcb31ba="" className={`${styles['font-weight-normal']} ${styles['d-inline-block']} ${styles['mr-2']}`}>Chiến dịch:</span> <span
            data-v-ddcb31ba="" className={`${styles['text-truncate']} ${styles['d-inline-block']}`} style={{ maxWidth: '250px', }}>sdfsdf</span>
        </div>
      </div>
      <div data-v-ddcb31ba="" className={`${styles['container-fluid']} ${styles['page-content']}`}>
        <h3 data-v-ddcb31ba="" className={`${styles['page-title']} ${styles['mb-4']}`}>Thông tin đăng tuyển chi tiết</h3>
        <div data-v-75adf416="" data-v-ddcb31ba="">
          <div data-v-75adf416="" className={`${styles['bg-white']} ${styles['border-left']} ${styles['border-primary']} ${styles['p-3']}
            ${styles['mb-4']} ${styles['rounded']} ${styles['shadow-sm']}`}
            style={{ borderLeftWidth: '3px!important', }}><span data-v-75adf416="">
              Tin tuyển dụng của bạn sẽ được kiểm duyệt trước khi chính thức hiển thị với các ứng viên tiềm năng.
            </span>
          </div>
          <form data-v-75adf416="">
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
              ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`}>
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`}><i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-pen']}
              ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`}></i>
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`}>Tiêu đề tin tuyển dụng</h6>
              </div>
              <div data-v-75adf416="" className={`${styles['pl-5']}`}>
                <div data-v-17683809="" data-v-75adf416="">
                  <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`}>

                    <input data-v-17683809="" id="SpqWouaUHy" type="text"
                      placeholder="VD: sdfsdf" autoComplete="off"
                      className={`${styles['form-control']} ${styles['input-underline']} ${styles['form-control-lg']}`} />
                  </div>

                </div>
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
    ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-folder']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`}></i >
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Ngành nghề & amp; Lĩnh vực</h6 >
              </div >
              <div data-v-75adf416="" className={`${styles['pl-5']} ${styles['row']}`}>
                <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                  className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Ngành nghề chính</label >
                  <div data-v-1900aee5="" data-v-75adf416="">
                    <div data-v-1900aee5="" id="ZVSOOKZSPD" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                      <div data-v-1900aee5="" tabIndex="-1" className={`${styles['multiselect']}`}>
                        <div className={`${styles['multiselect__select']}`}></div>
                        <div className={`${styles['multiselect__tags']}`} >
                          <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                          <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div > <input
                            name="" type="text" autoComplete="nope"
                            placeholder="Lựa chọn tối đa 1 ngành nghề chính cho tin tuyển dụng này"
                            tabIndex="0" className={`${styles['multiselect__input']}`}
                            style={{ width: '0px', position: 'absolute', padding: '0px', }} />
                          < span className={`${styles['multiselect__placeholder']}`} >
                            Lựa chọn tối đa 1 ngành nghề chính cho tin tuyển dụng này
                          </ span >
                        </div >
                        <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                          style={{ maxHeight: '300px', display: 'none', }}>
                          <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                            <li className={`${styles['multiselect__element']}`} > <span data-select=""
                              data-selected="" data-deselect=""
                              className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Kinh
                                doanh / Bán hàng</span></span >

                            </li >
                            <li className={`${styles['multiselect__element']}`} > <span data-select=""
                              data-selected="" data-deselect=""
                              className={`${styles['multiselect__option']}`} > <span>Biên / Phiên
                                dịch</span></span >

                            </li >
                            <li className={`${styles['multiselect__element']}`} > <span data-select=""
                              data-selected="" data-deselect=""
                              className={`${styles['multiselect__option']}`} > <span>Báo chí / Truyền
                                hình</span></span >

                            </li >
                          </ul >
                        </div >
                      </div >
                    </div >

                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['col-8']} ${styles['form-group']}`} > <label data-v-75adf416=""
                  className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Ngành nghề phụ</label >
                  <div data-v-1900aee5="" data-v-75adf416="">
                    <div data-v-1900aee5="" id="YdFurtenbe" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                      <div data-v-1900aee5="" tabIndex="-1" className={`${styles['multiselect']}`}>
                        <div className={`${styles['multiselect__select']}`}></div>
                        <div className={`${styles['multiselect__tags']}`} >
                          <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                          <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div > <input
                            name="" type="text" autoComplete="nope"
                            placeholder="Lựa chọn tối đa 2 ngành nghề phụ cho tin tuyển dụng này"
                            tabIndex="0" className={`${styles['multiselect__input']}`}
                            style={{ width: '0px', position: 'absolute', padding: '0px', }} />
                          <span span className={`${styles['multiselect__placeholder']}`} >
                            Lựa chọn tối đa 2 ngành nghề phụ cho tin tuyển dụng này
                          </span >
                        </div >
                        <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                          style={{ maxHeight: '300px', display: 'none', }}>
                          <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                            <li className={`${styles['multiselect__element']}`} > <span data-select=""
                              data-selected="" data-deselect=""
                              className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Kinh
                                doanh / Bán hàng</span></span >

                            </li >
                            <li className={`${styles['multiselect__element']}`} > <span data-select=""
                              data-selected="" data-deselect=""
                              className={`${styles['multiselect__option']}`} > <span>Biên / Phiên
                                dịch</span></span >

                            </li >
                          </ul >
                        </div >
                      </div >
                    </div >

                  </div >
                </div >
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
    ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-info']} ${styles['bg-muted']}
      ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Thông tin chung</h6 >
              </div >
              <div data-v-75adf416="" className={`${styles['pl-5']}`} >
                <p data-v-75adf416="" className={`${styles['text-secondary-dark']}`} >
                  Một số thông tin đã được điền sẵn dựa trên thông tin của chiến dịch
                  tuyển dụng mà bạn đã tạo trước đó
                </p >
                <div data-v-75adf416="" className={`${styles['row']}`} >
                  <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                    className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Số lượng tuyển</label >
                    <div data-v-e1812212="" data-v-75adf416="" className={`${styles['mask-input']}`} > <input
                      data-v-e1812212="" placeholder="Nhập số lượng" className={`${styles['form-control']}`} />


                    </div >
                  </div >
                  <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                    className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Loại công việc</label >
                    <div data-v-1900aee5="" data-v-75adf416="">
                      <div data-v-1900aee5="" id="ynZTUBdscf"
                        className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                        <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                          <div className={`${styles['multiselect__select']}`}></div>
                          <div className={`${styles['multiselect__tags']}`} >
                            <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                            <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                            <span className={`${styles['multiselect__placeholder']}`} >
                              --Chọn loại công việc--
                            </span >
                          </div >
                          <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                            style={{ maxHeight: '300px', display: 'none', }}>
                            <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Toàn
                                  thời gian</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>Bán thời
                                  gian</span></span >

                              </li >
                            </ul >
                          </div >
                        </div >
                      </div >

                    </div >
                  </div >

                </div >
                <div data-v-75adf416="" className={`${styles['row']}`} >
                  <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                    className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Giới tính</label >
                    <div data-v-1900aee5="" data-v-75adf416="">
                      <div data-v-1900aee5="" id="zymiawZuIN"
                        className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                        <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                          <div className={`${styles['multiselect__select']}`}></div>
                          <div className={`${styles['multiselect__tags']}`} >
                            <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                            <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                            <span className={`${styles['multiselect__placeholder']}`} >
                              --Chọn giới tính--
                            </span >
                          </div >
                          <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                            style={{ maxHeight: '300px', display: 'none', }}>
                            <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Nữ</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>Nam</span></span >

                              </li >
                            </ul >
                          </div >
                        </div >
                      </div >

                    </div >
                  </div >
                  <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                    className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Cấp bậc</label >
                    <div data-v-1900aee5="" data-v-75adf416="">
                      <div data-v-1900aee5="" id="PclVYPEbzB"
                        className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                        <div data-v-1900aee5="" tabIndex="-1" className={`${styles['multiselect']}`}>
                          <div className={`${styles['multiselect__select']}`}></div>
                          <div className={`${styles['multiselect__tags']}`} >
                            <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                            <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >
                            <input name="" type="text" autoComplete="nope"
                              placeholder="-- Chọn cấp bậc --" tabIndex="0"
                              className={`${styles['multiselect__input']}`}
                              style={{ width: '0px', position: 'absolute', padding: '0px', }} />
                            < span className={`${styles['multiselect__placeholder']}`} >
                              --Chọn cấp bậc--
                            </span >
                          </div >
                          <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                            style={{ maxHeight: '300px', display: 'none', }}>
                            <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Nhân
                                  viên</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>Trưởng
                                  nhóm</span></span >

                              </li >
                            </ul >
                          </div >
                        </div >
                      </div >

                    </div >
                  </div >
                  <div data-v-75adf416="" className={`${styles['col-4']} ${styles['form-group']}`} > <label data-v-75adf416=""
                    className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Kinh nghiệm</label >
                    <div data-v-1900aee5="" data-v-75adf416="">
                      <div data-v-1900aee5="" id="sdLjXIoCae"
                        className={`${styles['my-custom-select']} ${styles['position-relative']}`}><span data-v-1900aee5=""
                          className={`${styles['position-absolute']} ${styles['temr-autoxt']} ${styles['clear-all']}`}><i data-v-1900aee5=""
                            className={`${styles['far']} ${styles['fa-times']}`}></i></span >
                        <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`} >
                          <div className={`${styles['multiselect__select']}`} ></div >
                          <div className={`${styles['multiselect__tags']}`} >
                            <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}></div >

                            <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >
                            <span className={`${styles['multiselect__single']}`} > Chưa có kinh nghiệm</span >

                          </div >
                          <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                            style={{ maxHeight: '300px', display: 'none', }}>
                            <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']} ${styles['multiselect__option--selected']}`} > <span>Chưa
                                  có kinh nghiệm</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>Dưới 1 năm kinh
                                  nghiệm</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>1 năm kinh
                                  nghiệm</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>2 năm kinh
                                  nghiệm</span></span >

                              </li >
                              <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                data-selected="" data-deselect=""
                                className={`${styles['multiselect__option']}`} > <span>3 năm kinh
                                  nghiệm</span></span >

                              </li >
                            </ul >
                          </div >
                        </div >
                      </div >

                    </div >
                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                  className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Mức lương</label >
                  <div data-v-75adf416="" className={`${styles['row']}`} >
                    <div data-v-75adf416="" className={`${styles['col-3']}`} ><label data-v-75adf416="">Loại tiền tệ</label>
                      <div data-v-1900aee5="" data-v-75adf416="">
                        <div data-v-1900aee5="" id="UmCemECaOA"
                          className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                          <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                            <div className={`${styles['multiselect__select']}`}></div>
                            <div className={`${styles['multiselect__tags']}`} >
                              <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}>
                              </div >

                              <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                              <span className={`${styles['multiselect__placeholder']}`} >
                                --Chọn loại tiền tệ--
                              </span >
                            </div >
                            <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                              style={{ maxHeight: '300px', display: 'none', }}>
                              <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                  data-selected="" data-deselect=""
                                  className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>VND</span></span >

                                </li >
                                <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                  data-selected="" data-deselect=""
                                  className={`${styles['multiselect__option']}`} > <span>USD</span></span >

                                </li >
                                <li style={{ display: 'none', }}><span
                                  className={`${styles['multiselect__option']}`}><span
                                    data-v-1900aee5="">Không tìm thấy kết kết
                                    quả</span></span></li >
                                <li style={{ display: 'none', }}><span
                                  className={`${styles['multiselect__option']}`}><span
                                    data-v-1900aee5="">Danh sách trống</span></span>
                                </li >
                              </ul >
                            </div >
                          </div >
                        </div >

                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['col-3']}`} ><label data-v-75adf416="">Kiểu lương</label>
                      <div data-v-1900aee5="" data-v-75adf416="">
                        <div data-v-1900aee5="" id="SnwHkTQkJh"
                          className={`${styles['my-custom-select']} ${styles['position-relative']}`}>

                          <div data-v-1900aee5="" tabIndex="0" className={`${styles['multiselect']}`}>
                            <div className={`${styles['multiselect__select']}`}></div>
                            <div className={`${styles['multiselect__tags']}`} >
                              <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none', }}>
                              </div >

                              <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none', }}></div >

                              <span className={`${styles['multiselect__placeholder']}`} >
                                --Chọn kiểu lương--
                              </span >
                            </div >
                            <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                              style={{ maxHeight: '300px', display: 'none', }}>
                              <ul className={`${styles['multiselect__content']}`} style={{ display: 'inline-block', }}>

                                <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                  data-selected="" data-deselect=""
                                  className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Trong
                                    khoảng</span></span >

                                </li >
                                <li className={`${styles['multiselect__element']}`} > <span data-select=""
                                  data-selected="" data-deselect=""
                                  className={`${styles['multiselect__option']}`} > <span>Từ</span></span >

                                </li >
                              </ul >
                            </div >
                          </div >
                        </div >

                      </div >
                    </div >


                  </div >
                </div >
                <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                  className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Khu vực làm việc</label >
                  <div data-v-75adf416="">
                    <div data-v-f0015b7a="" className={`${styles['bg-light']} ${styles['border']} ${styles['job-location-box']} ${styles['mb-3']}`}>
                      <div data-v-f0015b7a=""
                        className={`${styles['p-4']} ${styles['location-box']} ${styles['d-flex']}
                        ${styles['justify-content-between']} ${styles['align-items-center']} ${styles['border-bottom']}`}>
                        <div data-v-f0015b7a="" className={`${styles['d-flex']} ${styles['w-75']}`}>
                          <div data-v-f0015b7a=""
                            className={`${styles['location-title']} ${styles['d-flex']} ${styles['align-items-center']}`}><i
                              data-v-f0015b7a="" className={`${styles['fa-solid']} ${styles['fa-location-dot']} ${styles['mr-2']}`}></i>
                            <span data-v-f0015b7a="">Khu vực 1:</span></div >
                          <div data-v-f0015b7a="" className={`${styles['location-box']}`} >
                            <div data-v-1900aee5="" data-v-f0015b7a="" className={`${styles['w-50']}`} >
                              <div data-v-1900aee5="" id="WIoWjAicWj"
                                className={`${styles['my-custom-select']} ${styles['position-relative']}`} >

                                <div data-v-1900aee5="" tabIndex="-1" className={`${styles['multiselect']}`} >
                                  <div className={`${styles['multiselect__select']}`} ></div >
                                  <div className={`${styles['multiselect__tags']}`} >
                                    <div className={`${styles['multiselect__tags-wrap']}`}
                                      style={{ display: 'none', }}></div >

                                    <div className={`${styles['multiselect__spinner']}`}
                                      style={{ display: 'none', }}></div > <input name=""
                                        type="text" autoComplete="nope"
                                        placeholder="Chọn Tỉnh/ Thành phố" tabIndex="0"
                                        className={`${styles['multiselect__input']}`}
                                        style={{ width: '0px', position: 'absolute', padding: '0px', }} />
                                    <span span className={`${styles['multiselect__placeholder']}`} >
                                      Chọn Tỉnh / Thành phố
                                    </span >
                                  </div >
                                  <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                    style={{ maxHeight: '300px', display: 'none', }}>
                                    <ul className={`${styles['multiselect__content']}`}
                                      style={{ display: 'inline-block', }}>

                                      <li className={`${styles['multiselect__element']}`} > <span
                                        data-select="" data-selected=""
                                        data-deselect=""
                                        className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`} > <span>Hà
                                          Nội</span></span >

                                      </li >
                                    </ul >
                                  </div >
                                </div >
                              </div >

                            </div >
                          </div >
                        </div >

                      </div >
                      <div data-v-f0015b7a="" className={`${styles['address-box']} ${styles['p-4']}`} >
                        <div data-v-ee372122="" data-v-f0015b7a=""
                          className={`${styles['address-item']} ${styles['d-flex']} ${styles['justify-content-between']}
      ${styles['align-items-center']} ${styles['mb-4']}`} >
                          <div data-v-ee372122="" className={`${styles['row']} ${styles['address-item-input']}`} >
                            <div data-v-1900aee5="" data-v-ee372122=""
                              className={`${styles['col-3']} ${styles['address-item-district']}`} >
                              <div data-v-1900aee5="" id="WhUZukVEmE"
                                className={`${styles['my-custom-select']} ${styles['position-relative']} ${styles['disabled']}`} >

                                <div data-v-1900aee5="" tabIndex="-1"
                                  className={`${styles['multiselect']} ${styles['multiselect--disabled']}`} >
                                  <div className={`${styles['multiselect__select']}`} ></div >
                                  <div tabIndex="-1" className={`${styles['multiselect__content-wrapper']}`}
                                    style={{ maxHeight: '300px', display: 'none', }}>
                                    <ul className={`${styles['multiselect__content']}`}
                                      style={{ display: 'block' }}>

                                      <li style={{ display: 'none', }}><span
                                        className={`${styles['multiselect__option']}`}><span
                                          data-v-1900aee5="">Không tìm thấy
                                          kết kết quả</span></span></li >
                                      <li><span className={`${styles['multiselect__option']}`}><span
                                        data-v-1900aee5="">Danh sách
                                        trống</span></span></li >
                                    </ul >
                                  </div >
                                </div >
                              </div >

                            </div >
                            <div data-v-17683809="" data-v-ee372122=""
                              className={`${styles['col']} ${styles['address-item-working-address']}`} >
                              <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`} >

                                <input data-v-17683809="" id="cEqMSAFNFc"
                                  type="text" placeholder="Nhập địa điểm làm việc cụ thể"
                                  autoComplete="true" disabled="disabled"
                                  className={`${styles['form-control']}`} />
                              </div >

                            </div >
                          </div >

                        </div > <span data-v-f0015b7a="" type="button" className={`${styles['text-primary']}`} > <i
                          data-v-f0015b7a="" className={`${styles['fa-solid']} ${styles['fa-plus']}`} ></i > Thêm địa chỉ
                        </span >
                      </div >
                    </div > <button type="button" className={`${styles['btn']} ${styles['min-width']} ${styles['btn']} ${styles['btn-primary']}`} >
                      Thêm khu vực mới
                    </button >
                  </div >
                </div >
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
    ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-align-left']} ${styles['bg-muted']}
      ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Nội dung tuyển dụng chi tiết</h6 >
              </div >
              <div data-v-75adf416="" className={`${styles['pl-5']}`} >
                <div data-v-75adf416="" className={`${styles['form-group']} ${styles['mb-4']}`} >
                  <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                    className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Mô tả công việc</label >
                  </div >
                  <textarea name="" id="" cols="30" rows="10" placeholder="Nhập nội dung mô tả công việc"></textarea>
                </div >
                <div data-v-75adf416="" className={`${styles['form-group']} ${styles['mb-4']}`} >
                  <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                    className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Yêu cầu ứng viên</label >
                  </div >
                  <textarea name="" id="" cols="30" rows="10" placeholder="Nhập nội dung yêu cầu ứng viên"></textarea>
                </div >
                <div data-v-75adf416="" className={`${styles['form-group']}`} >
                  <div data-v-75adf416="" className={`${styles['d-flex']}`} > <label data-v-75adf416=""
                    className={`${styles['mr-auto']} ${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Kỹ năng liên quan</label >
                  </div >
                  {/* <!-- Dùng multiple select --> */}
                  < input type="text" placeholder="Nhập thông tin kỹ năng liên quan đến công việc. VD: Photoshop, Microsoft Word" />
                </div >
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
    ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-briefcase']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Quyền lợi của ứng viên</h6 >
              </div >
              <div data-v-75adf416="" className={`${styles['pl-5']}`} >
                <textarea name="" id="" cols="30" rows="10" placeholder="Nhập nội dung quyền lợi của ứng viên"></textarea>
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['shadow-sm']} ${styles['bg-white']}
    ${styles['p-4']} ${styles['pb-0']} ${styles['mb-4']} ${styles['rounded']}`} >
              <div data-v-75adf416="" className={`${styles['title']} ${styles['d-flex']} ${styles['mb-3']}`} > <i data-v-75adf416=""
                className={`${styles['fas']} ${styles['fa-briefcase']} ${styles['bg-muted']} ${styles['p-2']} ${styles['mr-3']} ${styles['icon-info-category']}`} ></i >
                <h6 data-v-75adf416="" className={`${styles['pt-1']} ${styles['pl-1']} ${styles['font-weight-bold']}`} > Thông tin nhận CV</h6 >
              </div >
              <div data-v-75adf416="" className={`${styles['pl-5']}`} >
                <div data-v-75adf416="" className={`${styles['row']}`} >
                  <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                    <div data-v-75adf416="" className={`${styles['form-group']}`} > <label data-v-75adf416=""
                      className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`} > Hạn chót nhận CV</label > <input
                        data-v-7ba026ac="" id="VosTSIXOjv" type="text" placeholder="dd/mm/yyyy"
                        today-highlight="true" start-date="today" stop-propagation="true"
                        className={`${styles['form-control']}`} />

                    </div >
                  </div >
                </div >
                <div data-v-75adf416=""><label data-v-75adf416=""
                  className={`${styles['text-secondary-dark']} ${styles['font-weight-bold']}`}>Thông tin người nhận CV</label>
                  <div data-v-75adf416="" className={`${styles['row']}`} >
                    <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                      <div data-v-75adf416="" className={`${styles['form-group']}`} ><label data-v-75adf416="">Họ và
                        tên</label>
                        <div data-v-17683809="" data-v-75adf416="">
                          <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']}`}>

                            <input data-v-17683809="" id="OtlMYwogUO" type="text"
                              placeholder="Nhập tên người nhận CV" autoComplete="true"
                              className={`${styles['form-control']}`} />
                          </div>

                        </div >
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['col-md-3']}`} >
                      <div data-v-75adf416="" className={`${styles['form-group']}`} ><label data-v-75adf416="">Số điện
                        thoại</label>
                        <div data-v-e1812212="" data-v-75adf416="" className={`${styles['mask-input']}`} > <input
                          data-v-e1812212="" placeholder="Nhập số điện thoại người nhận CV"
                          className={`${styles['form-control']} ${styles['hidden-spin-button']}`} />
                        </div >
                      </div >
                    </div >
                    <div data-v-75adf416="" className={`${styles['col-md-6']}`} >
                      <div data-v-75adf416="" className={`${styles['form-group']}`} >
                        <label
                          data-v-75adf416="">Email</label>
                        <select multiple="" id="PfPqvALnSx"
                          className={`${styles['form-control']} ${styles['select2-hidden-accessible']}`} tabIndex="-1" hidden="true" >
                          <option value="jobsearchvnn@gmail.com" data-select2-id="3">
                            jobsearchvnn@gmail.com
                          </option>
                        </select >
                        <span className={`${styles['select2']} ${styles['select2-container']} ${styles['select2-container--default']}`}
                          dir="ltr" id="2" style={{ widht: '100%', }}> <span
                            className={`${styles['selection']}`} > <span
                              className={`${styles['select2-selection']} ${styles['select2-selection--multiple']}`}
                              role="combobox" haspopup="true" expanded="false"
                              tabIndex="-1" disabled="false" >
                              <ul className={`${styles['select2-selection__rendered']}`} >
                                <li className={`${styles['select2-selection__choice']}`} title="jobsearchvnn@gmail.com" data-select2-id="4">
                                  <span className={`${styles['select2']} ${styles['-']} ${styles['selection__choice__remove']}`} role="presentation">×</span>
                                  jobsearchvnn @gmail.com
                                </li >
                                <li className={`${styles['select2-search']} ${styles['select2-search--inline']}`} > <input
                                  className={`${styles['select2-search__field']}`} type="search"
                                  tabIndex="0" autoComplete="off" autoCorrect="off"
                                  autoCapitalize="none" spellCheck="false"
                                  role="searchbox" autocomplete="list"
                                  placeholder="" style={{ width: '12px', }} /></li >
                              </ul >
                            </span ></span > <span className={`${styles['dropdown-wrapper']}`}
                              hidden="true" ></span ></span >
                      </div >
                    </div >
                  </div >
                </div >
              </div >
            </div >
            <div data-v-75adf416="" className={`${styles['d-flex']}`} > <button data-v-75adf416="" type="button"
              className={`${styles['btn']} ${styles['min-width']} ${styles['btn']} ${styles['btn-secondary']}
    ${styles['min-width']} ${styles['mr-auto']} ${styles['shadow-sm']} ${styles['btn-lg']}`} >
              Hủy
            </button > <button data-v-75adf416="" type="submit"
              className={`${styles['btn']} ${styles['min-width']} ${styles['btn']} ${styles['btn-primary']} ${styles['shadow-sm']}
  ${styles['btn-lg']}`} >
                Lưu
              </button ></div >
          </form >
        </div >
      </div >
    </main >
  );
};
