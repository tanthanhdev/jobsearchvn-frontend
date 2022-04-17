import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'primereact/button';
// import { ToastContainer, toast } from 'react-toastify';
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { AutoComplete } from "primereact/autocomplete";
// components
// services
// import PublicService from "services/public.service";
// import UserService from "services/user.service";
// slices
import { search_cv } from "slices/company-profile";
// utils
import styles from './SearchCV.module.css';

export const SearchCV = ({ slug }) => {
    const { isError, isLoading } = useSelector((state) => state.profileEmployer);
    const [CVs, setCVs] = useState(null);
    // modal toggle

    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch])

    // const handleSeenCV = (is_active, slug) => {
    //     let data = {
    //         "is_active": is_active ? false : true,
    //     }
    //     dispatch(seen_cv({ data, slug }))
    //         .unwrap()
    //         .then((res) => {
    //             setIsReload(true);
    //         })
    //         .catch(() => {
    //         });
    // }

    // const handleSearchCV = (formData) => {
    //     dispatch(search_cv())
    //         .unwrap()
    //         .then((res) => {
    //         })
    //         .catch(() => {
    //             toast.error("Tìm kiếm thất bại!", {
    //                 position: toast.POSITION.BOTTOM_RIGHT
    //             });
    //         });
    // }

    return (
        <main data-v-6d20d7c5="" className={`${styles['page-container']} ${styles['has-sub-breadcrumb']}`}>
            <div data-v-6d20d7c5="" className={`${styles['breadcrumb-box']}`}>
                <h6 className={`${styles['breadcrumb-title']} ${styles['d-flex']}`}>
                    <span>Tìm CV ứng viên</span>
                </h6>
                <div data-v-6d20d7c5="" className={`${styles['ml-2']}`}>
                    <div data-v-a803ee2a="" data-v-6d20d7c5="" id="ntVvJ" className={`${styles['well']} ${styles['campaign-select']}`}
                        style={{ overflow: 'unset' }}></div>
                    <div data-v-a803ee2a="" className={`${styles['slide1']}`}>
                        <div data-v-1900aee5="" data-v-a803ee2a="" className={`${styles['recruitment-select']}`}>
                            <div data-v-1900aee5="" id="OSrnfvZqfh" className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                                <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                                    <div className={`${styles['multiselect__selectt']}`}>

                                    </div>
                                    <div className={`${styles['multiselect__tags']}`}>
                                        <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}>

                                        </div>

                                        <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}>
                                        </div>
                                        <input name="" type="text" placeholder="Chọn chiến dịch tuyển dụng"
                                            className={`${styles['multiselect__input']}`}
                                            style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                                        <span className={`${styles['multiselect__single']}`}>sdfsdf</span>

                                    </div>
                                    <div className={`${styles['multiselect__content-wrapper']}`}
                                        style={{ maxHeight: '300px', display: 'none' }}>
                                        <ul className={`${styles['multiselect__content']}`} style={{ dispaly: 'inline-block' }}>

                                            <li className={`${styles['multiselect__element']}`}>
                                                <span data-select="" data-selected="" data-deselect=""
                                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']} ${styles['multiselect__option--selected']}`}><span
                                                        data-v-a803ee2a=""
                                                        className={`${styles['badge']} ${styles['badge-secondary']} ${styles['font-weight-normal']}
                                                            ${styles['mr-1']} ${styles['small']} ${styles['rounded-pill']}`}
                                                        style={{ color: 'rgb(153, 153, 153)' }}>731437</span>
                                                    <span data-v-a803ee2a="" className={`${styles['text-dark']}`}
                                                        style={{ fontSize: '12px' }}>sdfsdf
                                                    </span>
                                                </span>
                                            </li>
                                            <li className={`${styles['multiselect__element']}`}>
                                                <span data-select="" data-selected="" data-deselect=""
                                                    className={`${styles['multiselect__option']}`}>
                                                    <span data-v-a803ee2a=""
                                                        className={`${styles['badge']} ${styles['badge-secondary']} ${styles['font-weight-normal']}
                                                            ${styles['mr-1']} ${styles['small']} ${styles['rounded-pill']}`}
                                                        style={{ color: 'rgb(153, 153, 153)' }}>731387
                                                    </span>
                                                    <span data-v-a803ee2a="" className={`${styles['text-dark']}`}
                                                        style={{ fontSize: '12px' }}>sdfsdf
                                                    </span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-6d20d7c5="" className={`${styles['container-fluid']} ${styles['page-content']} ${styles['pl-3']} ${styles['pr-3']}`}>
                <div data-v-6d20d7c5="" className={`${styles['d-flex']}`}>
                    <div data-v-6d20d7c5="" className={`${styles['filter-col']} ${styles['bg-white']} ${styles['shadow-sm']} ${styles['rounded']}`}>
                        <form data-v-0f06c0b3="" data-v-6d20d7c5="" className={`${styles['filter-container']}`}>
                            <div data-v-0f06c0b3="" className={`${styles['filter-body']} ${styles['ps']} ${styles['ps--active-y']}`}>
                                <div data-v-0f06c0b3="" className={`${styles['p-2']} ${styles['border-bottom']}`}>
                                    <div data-v-0f06c0b3="" className={`${styles['font-weight-bold']} ${styles['text-uppercase']}
                                        ${styles['mb-2']} ${styles['text-primary']}`}>Tìm
                                        kiếm cơ bản</div>
                                    <div data-v-0f06c0b3="">
                                        <div className={`${styles['form-group']}`}><label className={`${styles['font-weight-bold']}`}>Từ khóa cần tìm</label>
                                            <div data-v-237e1ab2="">
                                                <div data-v-237e1ab2="" className={`${styles['input-container']} ${styles['ml-auto']}`}>
                                                    <input data-v-237e1ab2="" id="ayOZuiDXOV" type="text"
                                                        placeholder="Nhập từ khóa" className={`${styles['form-control']}`} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles['form-group']}`}>
                                            <label className={`${styles['font-weight-bold']}`}>Địa điểm</label>
                                            <div data-v-1900aee5="">
                                                <div data-v-1900aee5="" id="zzEFICjwlK"
                                                    className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                                                    <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                                                        <div className={`${styles['multiselect__selectt']}`}>

                                                        </div>
                                                        <div className={`${styles['multiselect__tags']}`}>
                                                            <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}>
                                                            </div>
                                                            <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}></div>
                                                            <input name="" type="text" placeholder="Nhập địa điểm"
                                                                className={`${styles['multiselect__input']}`}
                                                                style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                                                            <span className={`${styles['multiselect__placeholder']}`}>
                                                                Nhập địa điểm
                                                            </span>
                                                        </div>
                                                        <div className={`${styles['multiselect__content-wrapper']}`}
                                                            style={{ maxHeight: '300px', display: 'none' }}>
                                                            <ul className={`${styles['multiselect__content']}`} style={{ display: "block" }}>

                                                                <li style={{ display: 'none' }}>
                                                                    <span className={`${styles['multiselect__option']}`}>
                                                                        <span data-v-1900aee5="">
                                                                            Không tìm thấy kết kết quả
                                                                        </span></span>
                                                                </li>
                                                                <li>
                                                                    <span className={`${styles['multiselect__option']}`}>
                                                                        <span data-v-1900aee5="">Hãy nhập tên tỉnh
                                                                            thành
                                                                        </span>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-0f06c0b3="" className={`${styles['p-2']}`}>
                                    <div data-v-0f06c0b3="" className={`${styles['form-group']}`}><label>
                                        <div className={`${styles['v-popover']}`}>
                                            <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                                                <div className={`${styles['d-flex']} ${styles['align-item-center']}`}><span
                                                    className={`${styles['font-weight-bold']}`}>Giới tính</span> <i
                                                        className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`} style={{ marginTop: '4px' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                        <div className={`${styles['d-flex']}`}>
                                            <div className={`${styles['mr-3']}`}>
                                                <div data-v-1438c604="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                                    <input data-v-1438c604="" id="517AdWLA" type="radio" name=""
                                                        className={`${styles['custom-control-input']}`} value="all" />
                                                    <label data-v-1438c604="" for="517AdWLA" className={`${styles['custom-control-label']}`}>
                                                        Tất cả
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={`${styles['mr-3']}`}>
                                                <div data-v-1438c604="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                                    <input data-v-1438c604="" id="517rXKFS" type="radio" name=""
                                                        className={`${styles['custom-control-input']}`} value="male" />
                                                    <label data-v-1438c604="" for="517rXKFS" className={`${styles['custom-control-label']}`}>
                                                        Nam
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={`${styles['mr-3']}`}>
                                                <div data-v-1438c604="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                                    <input data-v-1438c604="" id="517VONBB" type="radio" name=""
                                                        className={`${styles['custom-control-input']}`} value="female" />
                                                    <label data-v-1438c604="" for="517VONBB" className={`${styles['custom-control-label']}`}>
                                                        Nữ
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-0f06c0b3="" className={`${styles['form-group']}`}>
                                        <label className={`${styles['font-weight-bold']}`}>
                                            Trình độ học vấn
                                        </label>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517UXTkZ" type="checkbox" className={`${styles['custom-control-input']}`}
                                                value="education_level:dai_hoc" />
                                            <label for="517UXTkZ" className={`${styles['custom-control-label']}`}>Đại học</label>
                                        </div>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517BYLdn" type="checkbox" className={`${styles['custom-control-input']}`}
                                                value="education_level:cao_dang" />
                                            <label for="517BYLdn" className={`${styles['custom-control-label']}`}>Cao đẳng</label>
                                        </div>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517RUIDf" type="checkbox" className={`${styles['custom-control-input']}`}
                                                value="education_level:trung_cap" />
                                            <label for="517RUIDf" className={`${styles['custom-control-label']}`}>Trung cấp</label>
                                        </div>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517dHyaB" type="checkbox" className={`${styles['custom-control-input']}`}
                                                value="education_level:sau_dai_hoc" />
                                            <label for="517dHyaB" className={`${styles['custom-control-label']}`}>Sau đại học (Thạc sỹ/Tiến
                                                sỹ)</label>
                                        </div>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517SuIxV" type="checkbox"
                                                className={`${styles['custom-control-input']}`} value="education_level:trung_tam_dao_tao" />
                                            <label for="517SuIxV" className={`${styles['custom-control-label']}`}>Trung tâm đào đạo</label>
                                        </div>
                                        <div className={`${styles['custom-control']} ${styles['custom-checkbox']}`}>
                                            <input id="517XnkTT" type="checkbox"
                                                className={`${styles['custom-control-input']}`} value="education_level:du_hoc" />
                                            <label
                                                for="517XnkTT" className={`${styles['custom-control-label']}`}>Du học</label>
                                        </div>
                                    </div>
                                    <div data-v-0f06c0b3="" className={`${styles['form-group']}`}>
                                        <label className={`${styles['font-weight-bold']}`}>Trường
                                            học</label>
                                        <div data-v-1900aee5="">
                                            <div data-v-1900aee5="" id="nZhMDqpoqK"
                                                className={`${styles['my-custom-select']} ${styles['position-relative']}`}>
                                                <div data-v-1900aee5="" className={`${styles['multiselect']}`}>
                                                    <div className={`${styles['multiselect__selectt']}`}></div>
                                                    <div className={`${styles['multiselect__tags']}`}>
                                                        <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}></div>

                                                        <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}></div>
                                                        <input name="" type="text" placeholder="Nhập tên trường học"
                                                            className={`${styles['multiselect__input']}`}
                                                            style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                                                        <span className={`${styles['multiselect__placeholder']}`}>
                                                            Nhập tên trường học
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-c70bf19a="" data-v-0f06c0b3="" className={`${styles['form-group']} ${styles['disabled']}`}>
                                        <label data-v-c70bf19a="" className={`${styles['font-weight-bold']}`}>
                                            <div data-v-c70bf19a="" className={`${styles['v-popover']}`}>
                                                <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                                                    <div data-v-c70bf19a="" className={`${styles['d-flex']} ${styles['align-item-center']}`}><span
                                                        data-v-c70bf19a="">Từng làm trong công ty</span><i
                                                            data-v-c70bf19a="" className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`}
                                                            style={{ marginTop: '4px' }}></i></div>
                                                </div>
                                            </div>
                                        </label>
                                        <div data-v-1900aee5="" data-v-c70bf19a="">
                                            <div data-v-1900aee5="" id="HKxDHEoxIb"
                                                className={`${styles['my-custom-select']} ${styles['position-relative']} ${styles['disabled']}`}>

                                                <div data-v-1900aee5=""
                                                    className={`${styles['multiselect multiselect--disabled']}`}>
                                                    <div className={`${styles['multiselect__selectt']}`}></div>
                                                    <div className={`${styles['multiselect__tags']}`}>
                                                        <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}></div>

                                                        <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}></div>
                                                        <input name="" type="text" placeholder="Nhập tên công ty"
                                                            disabled="disabled" className={`${styles['multiselect__input']}`}
                                                            style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                                                        <span className={`${styles['multiselect__placeholder']}`}>
                                                            Nhập tên công ty
                                                        </span>
                                                    </div>
                                                    <div className={`${styles['multiselect__content-wrapper']}`}
                                                        style={{ maxHeight: '300px', display: 'none' }}>
                                                        <ul className={`${styles['multiselect__content']}`} style={{ display: "block" }}>

                                                            <li style={{ display: 'none' }}>
                                                                <span className={`${styles['multiselect__option']}`}>
                                                                    <span data-v-1900aee5="">Không tìm thấy kết kết
                                                                        quả</span>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <span className={`${styles['multiselect__option']}`}>
                                                                    <span data-v-1900aee5="">Hãy nhập tên công
                                                                        ty</span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div data-v-382a777c="" data-v-0f06c0b3="" className={`${styles['form-group']} ${styles['disabled']}`}>
                                        <label data-v-382a777c="" className={`${styles['font-weight-bold']}`}>
                                            <div data-v-382a777c="" className={`${styles['v-popover']}`}>
                                                <div className={`${styles['trigger']}`} style={{ dispaly: 'inline-block' }}>
                                                    <div data-v-382a777c="" className={`${styles['d-flex']} ${styles['align-item-center']}`}>
                                                        <span data-v-382a777c="">Ngoại ngữ</span>
                                                        <i data-v-382a777c="" className={`${styles['ml-2']} ${styles['far']} ${styles['fa-info-circle']}`}
                                                            style={{ marginTop: '4px' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                        <div data-v-1900aee5="" data-v-382a777c="">
                                            <div data-v-1900aee5="" id="lrCPtBlFmZ"
                                                className={`${styles['my-custom-select']} ${styles['position-relative']} ${styles['disabled']}`}>

                                                <div data-v-1900aee5=""
                                                    className={`${styles['multiselect multiselect--disabled']}`}>
                                                    <div className={`${styles['multiselect__selectt']}`}></div>
                                                    <div className={`${styles['multiselect__tags']}`}>
                                                        <div className={`${styles['multiselect__tags-wrap']}`} style={{ display: 'none' }}></div>

                                                        <div className={`${styles['multiselect__spinner']}`} style={{ display: 'none' }}></div>
                                                        <input name="" type="text" placeholder="Ngoại ngữ"
                                                            disabled="disabled" className={`${styles['multiselect__input']}`}
                                                            style={{ width: '0px', position: 'absolute', padding: '0px' }} />
                                                        <span className={`${styles['multiselect__placeholder']}`}>
                                                            Ngoại ngữ
                                                        </span>
                                                    </div>
                                                    <div className={`${styles['multiselect__content-wrapper']}`}
                                                        style={{ maxHeight: '300px', display: 'none' }}>
                                                        <ul className={`${styles['multiselect__content']}`} style={{ dispaly: 'inline-block' }}>

                                                            <li className={`${styles['multiselect__element']}`}>
                                                                <span data-select="" data-selected="" data-deselect=""
                                                                    className={`${styles['multiselect__option']} ${styles['multiselect__option--highlight']}`}><span>Tiếng
                                                                        Nhật N1</span>
                                                                </span>
                                                            </li>
                                                            <li className={`${styles['multiselect__element']}`}>
                                                                <span data-select="" data-selected="" data-deselect=""
                                                                    className={`${styles['multiselect__option']}`}><span>Tiếng Nhật
                                                                        N2</span>
                                                                </span>

                                                            </li>
                                                            <li className={`${styles['multiselect__element']}`}>
                                                                <span data-select="" data-selected="" data-deselect=""
                                                                    className={`${styles['multiselect__option']}`}><span>Tiếng Nhật
                                                                        N3</span>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-0f06c0b3="" className={`${styles['filter-footer']} ${styles['p-2']} ${styles['border-top']}`}>
                                <button data-v-0f06c0b3="" type="submit"
                                    className={`${styles['btn']} ${styles['min-width']} ${styles['btn-primary']}
                                    ${styles['text-uppercase']} ${styles['mb-2']} ${styles['btn-block']}`}>
                                    Tìm CV
                                </button>
                            </div>
                        </form>
                    </div>
                    <div data-v-6d20d7c5="" className={`${styles['content-col']}`}>
                        <div data-v-6d20d7c5="" className={`${styles['d-flex']} ${styles['align-items-center']} ${styles['bg-white']}
                            ${styles['shadow-sm']} ${styles['rounded']} ${styles['p-3']} ${styles['mb-3']}`}>
                            <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                                Ưu tiên hiển thị:
                            </div>
                            <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                                <div data-v-1438c604="" data-v-6d20d7c5="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                    <input data-v-1438c604="" id="517AwuOv" type="radio" name=""
                                        className={`${styles['custom-control-input']}`} value="latest" />
                                    <label data-v-1438c604=""
                                        for="517AwuOv" className={`${styles['custom-control-label']}`}>
                                        Mới cập nhật
                                    </label>
                                </div>
                            </div>
                            <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                                <div data-v-1438c604="" data-v-6d20d7c5="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                    <input data-v-1438c604="" id="517ykNgW" type="radio" name=""
                                        className={`${styles['custom-control-input']}`} value="on_job" />
                                    <label data-v-1438c604=""
                                        for="517ykNgW" className={`${styles['custom-control-label']}`}>
                                        Đang tìm việc
                                    </label>
                                </div>
                            </div>
                            <div data-v-6d20d7c5="" className={`${styles['mr-2']}`}>
                                <div data-v-1438c604="" data-v-6d20d7c5="" className={`${styles['custom-control']} ${styles['custom-radio']}`}>
                                    <input data-v-1438c604="" id="517ArRjM" type="radio" name=""
                                        className={`${styles['custom-control-input']}`} value="exp" />
                                    <label data-v-1438c604="" for="517ArRjM"
                                        className={`${styles['custom-control-label']}`}>
                                        Có kinh nghiệm
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div data-v-243d831c="" data-v-6d20d7c5="" className={`${styles['mb-3']}`}>
                            <div data-v-243d831c="" className={`${styles['bg-white']} ${styles['rounded']}`}>
                                <table data-v-243d831c=""
                                    className={`${styles['table']} ${styles['mb-0']} ${styles['border-0']}
                                    ${styles['bg-white']} ${styles['shadow-sm']} ${styles['rounded']} ${styles['text-normal']}`}>
                                    <thead data-v-243d831c="">
                                        <tr data-v-243d831c="">
                                            <th data-v-243d831c="" width="230px"
                                                className={`${styles['font-weight-bolder']} ${styles['text-normal']} ${styles['text-uppercase']}`}>
                                                <span data-v-6d20d7c5="" data-v-243d831c="">
                                                    Tìm thấy <span data-v-6d20d7c5="" data-v-243d831c=""
                                                        className={`${styles['text-primary']} ${styles['font-weight-bold']}`}>5
                                                    </span> ứng viên phù hợp
                                                </span>
                                            </th>
                                            <th data-v-243d831c="" className={`${styles['font-weight-bolder']} ${styles['text-normal']} ${styles['text-uppercase']}`}>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody data-v-243d831c="">
                                        <tr data-v-243d831c="" >
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mb-3']}`}>
                                                    <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['align-items-center']}`}>
                                                        <div data-v-2a31697a="" data-v-243d831c=""
                                                            className={`${styles['rounded-circle']} ${styles['avatar']}`}
                                                            style={{
                                                                width: '64px', height: '64px', flex: '0 0 64px',
                                                                backgroundImage: 'url(&quot;https://static.topcv.vn/avatars/1Slydex8v1DzMKxBWz3k_6249a769dd1b1_cvtpl.jpg&quot;)'
                                                            }}>
                                                        </div>

                                                        <div data-v-243d831c="" className={`${styles['mt-2']}`}>
                                                            <span data-v-243d831c=""
                                                                className={`${styles['badge']} ${styles['small']} ${styles['badge-secondary']}
                                                                ${styles['rounded-pill']} ${styles['px-2']} ${styles['font-weight-normal']}`}>Đã
                                                                xem</span>
                                                        </div>


                                                    </div>
                                                    <div data-v-243d831c="" className={`${styles['ml-2']}`} style={{ width: '200px' }}>
                                                        <div data-v-243d831c="" className={`${styles['ml-1']}`}>
                                                            <a data-v-243d831c=""
                                                                href="https://tuyendung.topcv.vn/app/search-cv/cv-detail?recruitment_campaign_id=731437&amp;employer_id=360468&amp;cv_private_key=9ff2b547e372089518b54361cd5eb399&amp;cv_token=eyJkYXRhIjp7InByaXZhdGVfa2V5IjoiOWZmMmI1NDdlMzcyMDg5NTE4YjU0MzYxY2Q1ZWIzOTkifSwiZXhwaXJlQXQiOiIyMDIyLTA0LTI0IDE2OjA4OjM5Iiwic2lnbmF0dXJlIjoiM2I1NDQ5ZmNmMmZhNDRhODgyZmFmZTQxOTJkMThmMWIifQ%3D%3D&amp;view_cv_limit_token="
                                                                className={`${styles['font-weight-bold']} ${styles['text-primary-hover']} ${styles['text-capitalize']} ${styles['cv-fullname']}`}>Kiều
                                                                B.</a>
                                                            <div data-v-243d831c="" className={`${styles['mt-2']}`}>
                                                                <span data-v-243d831c=""
                                                                    className={`${styles['badge']} ${styles['badge-danger']} ${styles['font-weight-normal']}
                                                                    ${styles['small']} ${styles['rounded-pill']} ${styles['px-2']}`}>Đang
                                                                    tìm việc
                                                                </span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Nhân viên
                                                                    kinh
                                                                    doanh
                                                                </span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-map-marker']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Hồ Chí
                                                                    Minh</span>
                                                            </div>
                                                        </div>
                                                        <div data-v-243d831c=""
                                                            className={`${styles['p-1']} ${styles['rounded']} ${styles['mt-2']} ${styles['objective-text-block']}`}
                                                            style={{ width: '200px' }}>
                                                            <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-clock']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Cập nhật: 1
                                                                    tuần
                                                                    trước
                                                                </span>
                                                            </div>

                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-eye']}`}></i>
                                                                </div> <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>1 lượt
                                                                    xem</span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-id-badge']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt mở
                                                                    liên
                                                                    hệ
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Kinh
                                                        nghiệm</strong> (4 năm 4 tháng)
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Nhân viên bán hàng:
                                                            Cửa hàng
                                                            giày dép Phước An
                                                        </span>
                                                    </div>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Nhân viên lễ tân:
                                                            Khách sạn
                                                            Tiên Trang
                                                        </span>
                                                    </div>

                                                    <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...
                                                    </div>
                                                </div>

                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Học
                                                        vấn</strong>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-graduation-cap']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}> - trình độ học vấn
                                                            12/12.</span>
                                                    </div>


                                                </div>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Mục tiêu sự
                                                        nghiệp</strong>

                                                    <p data-v-766cea3c="" className={`${styles['mb-0']}`}>Tôi đã có kinh nghiệm được tích luỹ
                                                        trong gần một năm làm việc cùng với đó là kỹ năng chuyên môn để có
                                                        thể hoàn thành chỉ tiêu</p>
                                                    <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-v-243d831c="" >
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mb-3']}`}>
                                                    <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['align-items-center']}`}>
                                                        <div data-v-2a31697a="" data-v-243d831c=""
                                                            className={`${styles['rounded-circle']} ${styles['avatar']}`}
                                                            style={{
                                                                width: '64px', height: '64px', flex: '0 0 64px',
                                                                backgroundImage: 'url(&quot;https://static.topcv.vn/avatars/7qAzgssQiMpm1NXz3b3w_623d3dcc03244_cvtpl.jpg&quot;)'
                                                            }}>
                                                        </div>
                                                    </div>
                                                    <div data-v-243d831c="" className={`${styles['ml-2']}`} style={{ width: '200px' }}>
                                                        <div data-v-243d831c="" className={`${styles['ml-1']}`}>
                                                            <a data-v-243d831c=""
                                                                href="https://tuyendung.topcv.vn/app/search-cv/cv-detail?recruitment_campaign_id=731437&amp;employer_id=360468&amp;cv_private_key=da1b75f3dbe86735113491d254341727&amp;cv_token=eyJkYXRhIjp7InByaXZhdGVfa2V5IjoiZGExYjc1ZjNkYmU4NjczNTExMzQ5MWQyNTQzNDE3MjcifSwiZXhwaXJlQXQiOiIyMDIyLTA0LTI0IDE2OjA4OjM5Iiwic2lnbmF0dXJlIjoiOTI0NDZiZDNiNjkyZGQ0NDBkYzA1MzJiOWJmYTVlOGQifQ%3D%3D&amp;view_cv_limit_token="
                                                                className={`${styles['font-weight-bold']} ${styles['text-primary-hover']} ${styles['text-capitalize']} ${styles['cv-fullname']}`}>Lân
                                                                N.</a>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>PHOTO
                                                                    edit</span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-map-marker']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Hải
                                                                    Dương</span>
                                                            </div>
                                                        </div>
                                                        <div data-v-243d831c=""
                                                            className={`${styles['p-1']} ${styles['rounded']} ${styles['mt-2']} ${styles['objective-text-block']}`}
                                                            style={{ width: '200px' }}>
                                                            <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-clock']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Cập nhật: 3
                                                                    tuần
                                                                    trước</span>
                                                            </div>

                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-eye']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt
                                                                    xem</span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-id-badge']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt mở
                                                                    liên
                                                                    hệ</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Kinh
                                                        nghiệm</strong>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>DDS ZVSD</span>
                                                    </div>
                                                </div>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Học
                                                        vấn</strong>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-graduation-cap']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>LỚP THIẾT KẾ ĐỒ HỌA -
                                                            Tốt
                                                            nghiệp trung tâm REACH Hà Nội</span>
                                                    </div>
                                                </div>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Mục tiêu sự
                                                        nghiệp</strong>

                                                    <p data-v-766cea3c="" className={`${styles['mb-0']}`}>&nbsp;-TÌM KIẾM KINH NGHIỆM ĐỂ PHÁT
                                                        TRIỂN THÊM BẢN THÂN&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -ĐÓNG GÓP SẢN PHẨM
                                                        CHO TỔ CHỨC</p>
                                                    <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-v-243d831c="" >
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mb-3']}`}>
                                                    <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['align-items-center']}`}>
                                                        <div data-v-2a31697a="" data-v-243d831c=""
                                                            className={`${styles['rounded-circle']} ${styles['avatar']}`}
                                                            style={{
                                                                width: '64px', height: '64px', flex: '0 0 64px',
                                                                backgroundImage: 'url(&quot;https://tuyendung.topcv.vn/images/letter-avatar/SN.png&quot;)'
                                                            }}>
                                                        </div>
                                                    </div>
                                                    <div data-v-243d831c="" className={`${styles['ml-2']}`} style={{ width: '200px' }}>
                                                        <div data-v-243d831c="" className={`${styles['ml-1']}`}>
                                                            <a data-v-243d831c=""
                                                                href="https://tuyendung.topcv.vn/app/search-cv/cv-detail?recruitment_campaign_id=731437&amp;employer_id=360468&amp;cv_private_key=d191092ad0aae1317c038a7f8cd53c2c&amp;cv_token=eyJkYXRhIjp7InByaXZhdGVfa2V5IjoiZDE5MTA5MmFkMGFhZTEzMTdjMDM4YTdmOGNkNTNjMmMifSwiZXhwaXJlQXQiOiIyMDIyLTA0LTI0IDE2OjA4OjM5Iiwic2lnbmF0dXJlIjoiNTY0Zjg3YmU3NzQwOWQzZDMxZmMzYzc2MjRhZDIyYWIifQ%3D%3D&amp;view_cv_limit_token="
                                                                className={`${styles['font-weight-bold']} ${styles['text-primary-hover']} ${styles['text-capitalize']} ${styles['cv-fullname']}`}>Sơn
                                                                N.</a>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-map-marker']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Hà Nội</span>
                                                            </div>
                                                        </div>
                                                        <div data-v-243d831c=""
                                                            className={`${styles['p-1']} ${styles['rounded']} ${styles['mt-2']} ${styles['objective-text-block']}`}
                                                            style={{ width: '200px' }}>
                                                            <div data-v-243d831c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-clock']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Cập nhật: 1
                                                                    năm
                                                                    trước</span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-eye']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt
                                                                    xem</span>
                                                            </div>
                                                            <div data-v-243d831c=""
                                                                className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']} ${styles['mt-2']}`}>
                                                                <div
                                                                    className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']} ${styles['justify-content-center']}`}>
                                                                    <i className={`${styles['far']} ${styles['fa-id-badge']}`}></i>
                                                                </div>
                                                                <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>0 lượt mở
                                                                    liên
                                                                    hệ</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-v-243d831c="" className={`${styles['align-top']}`}>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Kinh
                                                        nghiệm</strong> (11 tháng)
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Nhân Viên Cộng caphe
                                                            - 35a
                                                            Nguyễn Hữu Huân</span>
                                                    </div>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-briefcase']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Senior Crew Jump
                                                            arena - 1a
                                                            tăng bạt hổ</span>
                                                    </div>

                                                    <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...
                                                    </div>
                                                </div>

                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Học
                                                        vấn</strong>
                                                    <div data-v-766cea3c="" className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                                                        <div
                                                            className={`${styles['d-flex']} ${styles['justify-content-left']} ${styles['icon-block']} ${styles['justify-content-center']} ${styles['mr-1']}`}>
                                                            <i className={`${styles['far']} ${styles['fa-graduation-cap']}`}></i>
                                                        </div>
                                                        <span className={`${styles['d-inline-block']} ${styles['text-block']}`}>Chuyên ngành: Du Lịch
                                                            - Đại
                                                            học Kinh doanh và công nghệ hà nội</span>
                                                    </div>
                                                </div>
                                                <div data-v-243d831c="" className={`${styles['mb-3']}`}>
                                                    <strong data-v-243d831c="">Mục tiêu sự
                                                        nghiệp</strong>
                                                    <p data-v-766cea3c="" className={`${styles['mb-0']}`}>- Ngắn hạn: rèn luyện kĩ năng xử lý
                                                        công việc chính xác, hiệu quả- Dài hạn: Phấn đấu để trở thành nhân
                                                        viên xuất sắc,có cơ hội</p>
                                                    <div data-v-766cea3c="" className={`${styles['text-primary']} ${styles['show-more']} ${styles['mt-1']}`}>Xem thêm...
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div data-v-6d20d7c5="" className={`${styles['d-flex']} ${styles['justify-content-center']}`}></div>
                    </div>
                </div>
            </div>
        </main>
    );
};
