import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { InputSwitch } from 'primereact/inputswitch';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'primereact/button';
import { ToastContainer, toast } from 'react-toastify';
import { RadioButton } from 'primereact/radiobutton';
// import { useDispatch, useSelector } from "react-redux";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { AutoComplete } from "primereact/autocomplete";
// components
import { JobModal } from '../modals/JobModal';
// services
// import PublicService from "services/public.service";
import UserService from "services/user.service";
// slices
import { switch_active_job, delete_employer_jobs, get_apply_for_campaign } from "slices/company-profile";
// utils
import styles from './CampaignDetail.module.css';

export const CampaignDetail = ({ slug }) => {
    const { isLoading } = useSelector((state) => state.profileEmployer);
    const [campaign, setCampaign] = useState([]);
    const [jobCampaign, setJobCampaign] = useState([]);
    const [apply, setApply] = useState(null);
    const [job, setJob] = useState([]);
    const [matchCV, setMatchCV] = useState(null);
    const [isReload, setIsReload] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const search = useLocation().search;
    const tab = new URLSearchParams(search).get('tab');
    const categories = [{ name: 'Không đạt', key: '1' }, { name: 'Ứng viên từ chối', key: '2' }, { name: 'Đã tuyển', key: '3' },];
    // const [selectedCategory, setSelectedCategory] = useState(null);
    // modal toggle
    const [showModal, setShowModal] = useState(false);
    const toggleShow = () => setShowModal(p => !p);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        UserService.getCampaign(slug).then((res) => {
            setCampaign(res.data);
            UserService.getMatchCVOfCampaign(res.data.id).then((res) => {
                setMatchCV(res.data);
            })
                .catch(error => {
                    if (error.response.status === 404) { setMatchCV(null) }
                });
        });
        UserService.getJobsCampaign(slug).then((res) => setJobCampaign(res.data));
        setIsReload(false);
        // first get
        dispatch(get_apply_for_campaign({ slug }))
            .unwrap()
            .then((data) => {
                setApply(data);
            })
            .catch(() => {
            });
    }, [isReload === true, tab === "match_cv"])

    const handleStatus = (is_active, slug) => {
        let data = {
            "is_active": is_active ? false : true,
        }
        dispatch(switch_active_job({ data, slug }))
            .unwrap()
            .then((res) => {
                setIsReload(true);
            })
            .catch(() => {
            });
    }

    // const handleStatusApply = (is_active, slug) => {
    //     let data = {
    //         "is_active": is_active ? false : true,
    //     }
    //     dispatch(switch_active_job({ data, slug }))
    //         .unwrap()
    //         .then((res) => {
    //             setIsReload(true);
    //         })
    //         .catch(() => {
    //         });
    // }

    const handleDeleteJob = (slug) => {
        dispatch(delete_employer_jobs(slug))
            .unwrap()
            .then((res) => {
                toast.success("Xóa thành công tin tuyển dụng", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                setIsReload(true);
            })
            .catch(() => {
                toast.error("Xóa thất bại!", {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }

    return (
        <div data-v-649e7bbb="" className={`${styles['mt-3']} ${styles['rounded']}`}>
            <nav data-v-649e7bbb="" className={`${styles['bg-white']} ${styles['shadow-sm']}`}>
                <div data-v-649e7bbb="" className={`${styles['nav']} ${styles['nav-tabs']}  ${styles['px-3']}`}>
                    <a data-v-649e7bbb="" onClick={() => { navigate('/employer/campaigns/' + campaign.slug + '?tab=job') }} className={`${styles['nav-item']} ${styles['nav-link']} ${tab === 'job' || tab === null ? styles['active'] : ''}`}>
                        Tin tuyển dụng
                    </a>
                    <a data-v-649e7bbb="" onClick={() => { navigate('/employer/campaigns/' + campaign.slug + '?tab=apply_cv') }} className={`${styles['nav-item']} ${styles['nav-link']} ${tab === 'apply_cv' ? styles['active'] : ''}`}>
                        CV ứng tuyển
                    </a>
                    <a data-v-649e7bbb="" onClick={() => { navigate('/employer/campaigns/' + campaign.slug + '?tab=match_cv') }} className={`${styles['nav-item']} ${styles['nav-link']} ${tab === 'match_cv' ? styles['active'] : ''}`}>
                        CV đề xuất - MatchCV
                    </a>
                    {/* <a data-v-649e7bbb="" onClick={() => { navigate('/employer/campaigns/' + campaign.slug + '?tab=viewed_job') }} className={`${styles['nav-item']} ${styles['nav-link']} ${tab === 'viewed_job' ? styles['active'] : ''}`}>
                        Ứng viên đã xem tin
                        <span data-v-649e7bbb="" className={`${styles['number-item']} ${styles['lock']}`}>
                            <i data-v-649e7bbb="" className={`${styles['fas']} ${styles['fa-lock']}`}>
                            </i>
                        </span>
                    </a> */}
                </div>
            </nav>
            <div data-v-649e7bbb="" className={`${styles['tab-content']}`}>
                {((tab && tab === 'job') || tab === null) && (
                    <div data-v-7df64288="" data-v-649e7bbb="" id="" role="tabpanel"
                        className={`${styles['tab-pane']} ${styles['p-3']}
                        ${styles['fade']} ${styles['shadow-sm']} ${styles['active']} ${styles['show']}`}>
                        {jobCampaign && !jobCampaign.totals ? (
                            <div data-v-7df64288="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['mt-4']}`}>
                                <img data-v-7df64288="" src="https://tuyendung.topcv.vn/app/_nuxt/img/not-have-job.d6f1f9f.png"
                                    className={`${styles['m-auto']}`} style={{ maxWidth: '320px', }} />
                                <div data-v-7df64288="" className={`${styles['text-center']} ${styles['mt-2']} ${styles['mb-4']}`}>
                                    <span data-v-7df64288="">
                                        Bạn chưa đăng tin tuyển dụng
                                    </span>
                                </div>
                                <div data-v-7df64288="" className={`${styles['text-center']} ${styles['mb-4']}`}>
                                    <a data-v-7df64288=""
                                        href={"/employer/campaigns/" + campaign.slug + "/create-job"}
                                        className={`${styles['btn']} ${styles['btn-primary']} ${styles['transparent-1']} ${styles['btn-sm']}`}>
                                        <i data-v-7df64288="" className={`${styles['fal']} ${styles['fa-plus']}`}></i>
                                        Đăng tin ngay
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div data-v-7df64288="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['mt-4']}`}
                                style={{ overflowX: 'auto' }}>
                                <div data-v-7df64288="" className={`${styles['text-center']} ${styles['mt-2']} ${styles['mb-4']}`}>
                                    <span data-v-7df64288="">
                                        Bạn đã đăng {jobCampaign.totals} tin tuyển dụng
                                    </span>
                                </div>
                                {/* table list jobs */}
                                <table
                                    className={`${styles['table']} ${styles['table-hover']} ${styles['bg-white']}
                                    ${styles['mt-4']} ${styles['mb-3']} ${styles['shadow-sm']} ${styles['border-0']}
                                    ${styles['rounded']} ${styles['campaign-table']} ${styles['w-100']}`}>
                                    <thead>
                                        <tr>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Tên công việc</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ width: '200px', }}>Số điện thoại
                                            </th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '190px', }}>Trạng thái</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '130px', }}>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobCampaign && jobCampaign.results.map((job, index) => (
                                            <tr className="" index={index}>
                                                <td className={`${styles['border-right']}`}>
                                                    {job.title}
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    {job.phone_number}
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    <div>{(job.is_active && new Date(job.end_time) >= new Date()) ? 'Đang bật' : (new Date(job.end_time) < new Date() ? 'Hết hạn' : 'Đang tắt')}</div>
                                                    <InputSwitch checked={(job.is_active && new Date(job.end_time) >= new Date())} onChange={() => {
                                                        if (new Date(job.end_time) >= new Date()) {
                                                            handleStatus(job.is_active, job.slug)
                                                        }
                                                    }} disabled={isLoading || (new Date(job.end_time) < new Date())} />
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    <Button icon="pi pi-search" className="p-button-rounded p-button-success"
                                                        onClick={() => {
                                                            toggleShow();
                                                            setIsEdit(false);
                                                            setJob(job);
                                                        }} />
                                                    <Button icon="pi pi-user-edit" className="p-button-rounded p-button-info"
                                                        onClick={() => {
                                                            toggleShow();
                                                            setIsEdit(true);
                                                            setJob(job);
                                                        }} />
                                                    <Button icon="pi pi-times" className="p-button-rounded p-button-danger"
                                                        onClick={() => {
                                                            if (window.confirm('Bạn có chắc muốn hủy công việc này?')) {
                                                                handleDeleteJob(job.slug);
                                                            }
                                                        }} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
                {tab && tab === 'apply_cv' && (
                    <div data-v-620e97db="" data-v-649e7bbb="" id="" role="tabpanel" className={`${styles['tab-pane']} ${styles['active']} ${styles['show']}`} campaign-id="731437">
                        {apply && !apply ? (
                            <div data-v-620e97db="" className={`${styles['bg-white']} ${styles['shadow-sm']} ${styles['p-3']} ${styles['mb-3']}`}>
                                <div data-v-620e97db="" className={`${styles['filter']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['mb-3']}`}>
                                    <div data-v-620e97db="" className={`${styles['mr-4']}`}>
                                        <div data-v-17683809="" data-v-620e97db="">
                                            <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']} ${styles['right-inner-addon']}`}>
                                                <i data-v-17683809="" className={`${styles['right']} ${styles['far']} ${styles['fa-search']}`}></i>
                                                <input data-v-17683809="" id="KJFkWLxRvW" type="text" placeholder="Tìm ứng viên"
                                                    className={`${styles['form-control']} ${styles['search-input']}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div data-v-620e97db="" className={`${styles['quick-filter']} ${styles['flex-m']} ${styles['mr-auto']}`}>
                                        <div data-v-1438c604="" data-v-620e97db="" className={`${styles['custom-control']} ${styles['custom-radio']} ${styles[' mr-4']}`}>
                                            <input data-v-1438c604="" id="515VftxW" type="radio" name="quick-filter"
                                                className={`${styles['custom-control-input']}`} value="all" />
                                            <label data-v-1438c604="" className={`${styles['custom-control-label']}`}>
                                                Hiển thị tất cả CV
                                            </label>
                                        </div>
                                        <div data-v-1438c604="" data-v-620e97db="" className={`${styles['custom-control']} ${styles['custom-radio']} ${styles[' mr-4']}`}>
                                            <input data-v-1438c604="" id="515YbZqm" type="radio" name="quick-filter"
                                                className={`${styles['custom-control-input']}`} value="notViewed" />
                                            <label data-v-1438c604="" className={`${styles['custom-control-label']}`}>
                                                Chỉ hiển thị CV chưa xem
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div data-v-620e97db="" className={`${styles['text-center']} ${styles['p-3']}`}>
                                    <div data-v-620e97db="" className={`${styles['mb-3']}`}>
                                        <img data-v-620e97db="" src="https://tuyendung.topcv.vn/app/_nuxt/img/empty.6324905.png"
                                            className={`${styles['w-25']}`} />
                                    </div>
                                    <div data-v-620e97db="">Hiện chưa có CV nào ứng tuyển vào tin tuyển dụng.</div>
                                </div>
                            </div>
                        ) : (
                            <div data-v-7df64288="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['mt-4']}`}
                                style={{ overflowX: 'auto' }}>
                                {/* table list jobs */}
                                <table
                                    className={`${styles['table']} ${styles['table-hover']} ${styles['bg-white']}
                                    ${styles['mt-4']} ${styles['mb-3']} ${styles['shadow-sm']} ${styles['border-0']}
                                    ${styles['rounded']} ${styles['campaign-table']} ${styles['w-100']}`}>
                                    <thead>
                                        <tr>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Ảnh đại diện</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Tên CV</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Họ và tên</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Kinh nghiệm</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Lượt xem</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Trạng thái</th>
                                            <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Xem chi tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {apply && apply.map((app, index) => (
                                            <tr className="" index={index}>
                                                <td className={`${styles['border-right']}`}>
                                                    <a href={'/cv/' + app.member.member_cvs[0].slug} target="_blank">
                                                        <img alt={app.member.member_cvs[0].title} src={app.member.avatar} style={{ width: '100%', height: '120px' }} />
                                                    </a>
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    {app.member.member_cvs[0].title}
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    {app.member.user.first_name + ' ' + app.member.user.last_name}
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    <ul>
                                                        {app.member.member_cvs[0].cv_cv_experiences.map((exp, index) => (
                                                            <div dangerouslySetInnerHTML={{
                                                                __html: "Giai đoạn " + (index + 1) + ": </br >" +
                                                                    "- Tên vị trí: " + exp.job_title + "</br >" +
                                                                    "- Tên công ty: " + exp.company_name + "</br >" +
                                                                    "- Bắt đầu: " + exp.start_date + "</br >" +
                                                                    "- Kết thúc: " + exp.end_date + "</br >"
                                                            }}></div>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    {app.member.member_cvs[0].view}
                                                </td>
                                                <td>
                                                    {categories.map((category) => (
                                                        <div key={category.key} className="field-radiobutton">
                                                            <RadioButton
                                                                inputId={category.key}
                                                                name="category"
                                                                value={category}
                                                                onChange={(e) => { UserService.updateApplyForCampaign(e.value.key, app.id).then(() => { setIsReload(true) }) }}
                                                                checked={app.status === category.key}
                                                                disabled={app.status == 1 || app.status == 2 || app.status == 3}
                                                            />
                                                            <label htmlFor={category.key}>{category.name}</label>
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className={`${styles['border-right']}`}>
                                                    <a href={'/cv/' + app.member.member_cvs[0].slug} target="_blank">
                                                        <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
                {tab && tab === 'match_cv' && (
                    <div data-v-620e97db="" data-v-649e7bbb="" id="" role="tabpanel" className={`${styles['tab-pane']} ${styles['active']} ${styles['show']}`} campaign-id="731437">
                        <div data-v-620e97db="" className={`${styles['bg-white']} ${styles['shadow-sm']} ${styles['p-3']} ${styles['mb-3']}`}>
                            <div data-v-620e97db="" className={`${styles['filter']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['mb-3']}`}>
                                <div data-v-620e97db="" className={`${styles['mr-4']}`}>
                                    <div data-v-17683809="" data-v-620e97db="">
                                        <div data-v-17683809="" className={`${styles['input-container']} ${styles['ml-auto']} ${styles['right-inner-addon']}`}>
                                            <i data-v-17683809="" className={`${styles['right']} ${styles['far']} ${styles['fa-search']}`}></i>
                                            <input data-v-17683809="" id="KJFkWLxRvW" type="text" placeholder="Tìm ứng viên"
                                                className={`${styles['form-control']} ${styles['search-input']}`} />
                                        </div>
                                    </div>
                                </div>
                                <div data-v-620e97db="" className={`${styles['quick-filter']} ${styles['flex-m']} ${styles['mr-auto']}`}>
                                    <div data-v-1438c604="" data-v-620e97db="" className={`${styles['custom-control']} ${styles['custom-radio']} ${styles[' mr-4']}`}>
                                        <input data-v-1438c604="" id="515VftxW" type="radio" name="quick-filter"
                                            className={`${styles['custom-control-input']}`} value="all" />
                                        <label data-v-1438c604="" className={`${styles['custom-control-label']}`}>
                                            Hiển thị tất cả CV
                                        </label>
                                    </div>
                                    <div data-v-1438c604="" data-v-620e97db="" className={`${styles['custom-control']} ${styles['custom-radio']} ${styles[' mr-4']}`}>
                                        <input data-v-1438c604="" id="515YbZqm" type="radio" name="quick-filter"
                                            className={`${styles['custom-control-input']}`} value="notViewed" />
                                        <label data-v-1438c604="" className={`${styles['custom-control-label']}`}>
                                            Chỉ hiển thị CV chưa xem
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {!matchCV ? (
                                <div data-v-620e97db="" className={`${styles['text-center']} ${styles['p-3']}`}>
                                    <div data-v-620e97db="" className={`${styles['mb-3']}`}>
                                        <img data-v-620e97db="" src="https://tuyendung.topcv.vn/app/_nuxt/img/empty.6324905.png"
                                            className={`${styles['w-25']}`} />
                                    </div>
                                    <div data-v-620e97db="">Hiện chưa có CV nào phù hợp với tin tuyển dụng.</div>
                                </div>
                            ) : (
                                <div data-v-7df64288="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['mt-4']}`}
                                    style={{ overflowX: 'auto' }}>
                                    <div data-v-7df64288="" className={`${styles['text-center']} ${styles['mt-2']} ${styles['mb-4']}`}>
                                        <span data-v-7df64288="">
                                            Bạn có <b>{matchCV.totals}</b> hồ sơ phù hợp
                                        </span>
                                    </div>
                                    {/* table list cvs */}
                                    <table
                                        className={`${styles['table']} ${styles['table-hover']} ${styles['bg-white']}
                                    ${styles['mt-4']} ${styles['mb-3']} ${styles['shadow-sm']} ${styles['border-0']}
                                    ${styles['rounded']} ${styles['campaign-table']} ${styles['w-100']}`}>
                                        <thead>
                                            <tr>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Ảnh đại diện</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Tên CV</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Họ và Tên</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Giới tính</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Kinh nghiệm</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Ngành nghề</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Lương mong muốn</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Lượt xem</th>
                                                <th className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Xem chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {matchCV.results.map((cv, index) => (
                                                <tr className="" index={index}>
                                                    <td className={`${styles['border-right']}`}>
                                                        <a href={'/cv/' + cv.slug} target="_blank">
                                                            <img alt={cv.title} src={cv.member.avatar} style={{ width: '100%', height: '120px' }} />
                                                        </a>
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.title}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.member.user.first_name + ' ' + cv.member.user.last_name}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.member.user.gender ? cv.member.user.gender : 'Chưa rõ'}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        <ul>
                                                            {cv.cv_cv_experiences.map((exp, index) => (
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: "Giai đoạn " + (index + 1) + ": </br >" +
                                                                        "- Tên vị trí: " + exp.job_title + "</br >" +
                                                                        "- Tên công ty: " + exp.company_name + "</br >" +
                                                                        "- Bắt đầu: " + exp.start_date + "</br >" +
                                                                        "- Kết thúc: " + exp.end_date + "</br >"
                                                                }}></div>
                                                            ))}
                                                        </ul>
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.target_major}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.member.salary}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        {cv.view}
                                                    </td>
                                                    <td className={`${styles['border-right']}`}>
                                                        <a href={'/cv/' + cv.slug}>
                                                            <Button icon="pi pi-search" className="p-button-rounded p-button-success" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                    </div>
                )}
                {/* {tab && tab === 'viewed_job' && (
                    <div data-v-45fdeade="" data-v-649e7bbb="" id="" role="tabpanel" className={`${styles['tab-pane']} ${styles['active']} ${styles['show']}`}>
                        <div data-v-45fdeade="" className={`${styles['bg-white']} ${styles['mb-3']}`}>
                            {jobCampaign && !jobCampaign.totals ? (
                                <div data-v-45fdeade="" className={`${styles['d-flex']} ${styles['flex-column']} ${styles['pt-4']}`}>
                                    <img data-v-45fdeade="" src="https://tuyendung.topcv.vn/app/_nuxt/img/not-have-job.2652de6.svg"
                                        className={`${styles['m-auto']}`} style={{ maxWidth: '320px', }} />
                                    <div data-v-45fdeade="" className={`${styles['text-center']} ${styles['mt-2']} ${styles['mb-4']}`}>
                                        <span data-v-45fdeade="">Bạn chưa đăng tin
                                            tuyển dụng</span>
                                    </div>
                                    <div data-v-45fdeade="" className={`${styles['text-center']} ${styles['mb-4']}`}>
                                        <a data-v-45fdeade=""
                                            href={"/employer/campaigns/" + campaign.slug + "/create-job"}
                                            className={`${styles['btn']} ${styles['btn-primary']} ${styles['transparent-1']} ${styles['btn-sm']}`}>
                                            <i data-v-45fdeade="" className={`${styles['fal']} ${styles['fa-plus']}`}></i>
                                            Đăng tin ngay
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <span>Danh sach ung vien da xem ban</span>
                            )}
                        </div>
                    </div>
                )} */}
            </div>
            {/* modals */}
            {showModal && (
                <JobModal
                    showModal={showModal}
                    toggleShow={toggleShow}
                    job={job}
                    campaign={campaign}
                    slug={job.slug}
                    isEdit={isEdit}
                    setIsReload={setIsReload}
                />
            )}
            <div>
                <ToastContainer draggablePercent={60} limit={5} />
            </div>
        </div>
    );
};
