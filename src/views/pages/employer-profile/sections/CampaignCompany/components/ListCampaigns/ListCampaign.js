import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { AutoComplete } from "primereact/autocomplete";
// components
// services
// import userService  from 'services/user.service';
// slices
import { UpdateMatchCV } from "slices/company-profile";
// utils
import styles from './ListCampaign.module.css';

const ListCampaign = ({ campaigns, setIsReload, setQueryString }) => {
    const { isError, isLoading } = useSelector((state) => state.profileEmployer);
    // const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error('Thay đổi trạng thái không thành công.', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }, [dispatch])


    const handleSwitchMatchCV = (is_match_cv, slug) => {
        let data = {
            "is_match_cv": is_match_cv ? false : true,
        }
        dispatch(UpdateMatchCV({ slug, data }))
            .unwrap()
            .then((res) => {
                setIsReload(true);
            })
            .catch(() => {
            });
    }

    const handleStatus = (status, slug) => {
        let data = {
            "status": status ? false : true,
            "is_match_cv": status ? false : false,
        }
        dispatch(UpdateMatchCV({ slug, data }))
            .unwrap()
            .then((res) => {
                setIsReload(true);
            })
            .catch(() => {
            });
    }

    return (
        <div data-v-14f1a322="" className={`${styles['container-fluid']} ${styles['page-content']}`}>
            <div data-v-14f1a322="" className={`${styles['d-flex']}`}>
                <div data-v-14f1a322="" id="filter-campaign-id" className={`${styles['d-flex']} ${styles['w-100']}`}>
                    <div data-v-14f1a322="" className={`${styles['search-campaign-wrapper']}`}>
                        <input data-v-14f1a322="" type="text"
                            placeholder="Tìm chiến dịch (Nhấn enter để tìm kiếm)"
                            className={`${styles['form-control']} ${styles['form-control-lg']}`}
                            onChange={(e) => {setQueryString(e.target.value)}}
                        />
                    </div>
                </div>
            </div>
            <table data-v-14f1a322=""
                className={`${styles['table']} ${styles['table-hover']} ${styles['bg-white']}
                ${styles['mt-4']} ${styles['mb-3']} ${styles['shadow-sm']} ${styles['border-0']}
                ${styles['rounded']} ${styles['campaign-table']} ${styles['w-100']}`}>
                <thead data-v-14f1a322="">
                    <tr data-v-14f1a322="">
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Chiến dịch tuyển dụng</th>
                        {/* <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Tối ưu</th> */}
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ width: '200px', }}>Tin tuyển dụng
                        </th>
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '190px', }}>Match CV</th>
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '130px', }}>Lọc CV</th>
                    </tr>
                </thead>
                <tbody data-v-14f1a322="">
                    {campaigns && campaigns.map((campaign, index) => (
                        <tr data-v-14f1a322="" className="" index={index}>
                            <td data-v-14f1a322="" className={`${styles['border-right']}`}>
                                <div data-v-13db6a09="" data-v-14f1a322="">
                                    <div data-v-13db6a09="" className={`${styles['d-flex']}`}><label data-v-13db6a09="" className={`${styles['switch']} ${styles['mr-1']}`}>
                                        <input
                                            type="checkbox" custom-checked={campaign.status ? "true" : "false"} defaultChecked={campaign.status}
                                            onClick={() => { handleStatus(campaign.status, campaign.slug) }} disabled={isLoading} /> <span
                                                className={`${styles['slider']} ${styles['round']}`}></span></label>
                                        <div data-v-13db6a09="" className={`${styles['ml-2']}`}>
                                            <a data-v-13db6a09=""
                                                href={`/employer/campaigns/${campaign.slug}`}
                                                className={`${styles['text-dark']} ${styles['text-decoration-none']} ${styles['font-weight-bold']}`}>
                                                {campaign.name}
                                            </a>
                                            <div data-v-13db6a09="" className={`${styles['mt-2']}`}><span data-v-13db6a09=""
                                                className={`${styles['badge']} ${styles['badge-secondary']} ${styles['text-muted']} ${styles['font-weight-normal']} ${styles['small']}`}>#{campaign.id}</span>
                                            </div>
                                            {/* <div data-v-13db6a09="" className={`${styles['mt-2']} ${styles['show-on-tr-hover']}`}>
                                                <a data-v-13db6a09=""
                                                role="button" className={`${styles['campaign-action']}`}>Sửa chiến dịch</a>
                                                <a
                                                    data-v-13db6a09="" href="/app/recruitment-campaigns/717838"
                                                    className={`${styles['campaign-action']}`}>Xem báo cáo</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            {/* <td data-v-14f1a322="" className={`${styles['border-right']}`}><span data-v-14f1a322="" className={`${styles['text-info']}`}><a
                                href="/app/suggestions" className="">
                                27%
                            </a></span></td> */}
                            <td data-v-14f1a322="" className={`${styles['border-right']}`} style={{ minWidth: '200px', }}>
                                <div data-v-14cf56b0="" data-v-14f1a322="">
                                    {campaign && campaign.status && (
                                        <a
                                            data-v-14cf56b0=""
                                            href={"/employer/campaigns/" + campaign.slug + "/create-job"}
                                            className={`${styles['btn']} ${styles['btn-xs']} ${styles['btn-primary']} ${styles['transparent-1']}`}>Đăng tin
                                        </a>
                                    )}
                                </div>
                            </td>
                            <td data-v-14f1a322="" className={`${styles['border-right']}`} style={{ maxWidth: '150px', }}>
                                <div data-v-f9c0a7f2="" data-v-14f1a322="">
                                    <p data-v-f9c0a7f2="" className={`${styles['font-weight-normal']} ${styles['mb-2']} ${styles['text-muted']}`}>
                                        {campaign.is_match_cv ? "Chiến dịch đang chạy" : "Chiến dịch đang tắt"}
                                    </p>
                                    <div className={`${styles['modal-content']} ${styles['border-0']}`}>
                                        <div data-v-e5f5b2d0="" className={`${styles['modal-footer']} ${styles['border-top-0']} ${styles['pt-0']}`}>
                                            <button data-v-e5f5b2d0="" type="button" onClick={() => { handleSwitchMatchCV(campaign.is_match_cv, campaign.slug) }}
                                                disabled={isLoading || !campaign.status}
                                                className={`${styles['btn']} ${styles['min-width']} ${styles['btn-primary']} ${styles['btn-lg']}`}>
                                                {isLoading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                                {campaign.is_match_cv ? (
                                                    <span>Dừng Match CV</span>
                                                ) : (<span>Tiếp tục Match CV</span>)
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-v-14f1a322="" className={`${styles['border-right']}`}>
                                <div data-v-14f1a322="">
                                    <a className={`${styles['btn']} ${styles['btn-xs']} ${styles['btn-primary']} ${styles['transparent-1']}`}
                                        href={"/employer/campaigns/" + campaign.slug + "/search-cv"}
                                    >Tìm CV</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <ToastContainer draggablePercent={60} limit={5} />
            </div>
        </div >
    );
};
export default ListCampaign;
