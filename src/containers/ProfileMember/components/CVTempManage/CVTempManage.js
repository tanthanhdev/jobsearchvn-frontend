import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { Paginator } from 'primereact/paginator';
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { AutoComplete } from "primereact/autocomplete";
// components
// services
// import userService  from 'services/user.service';
// slices
import { UpdateCV } from "slices/member-profile";
// utils
import styles from './CVTempManage.module.css';

const CVTempManage = ({ cvs, setIsReload, setPage }) => {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(cvs?.page_size);
    const { isError, isLoading } = useSelector((state) => state.profileMember);
    const { message } = useSelector((state) => state.message);
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page');
    const dispatch = useDispatch();
    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
        // pagination change
        setPage(event.first / 10 + 1);
        window.history.pushState('', '', '/profile-member/cvs?page=' + (event.first / 10 + 1));
        setIsReload(true);
    }
    useEffect(() => {
        if (isError) {
            toast.error('Thay đổi trạng thái không thành công.', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        // pagination
        if (page) {
            setPage(page);
            setIsReload(true);
        }
    }, [dispatch, page])


    const handleStatus = (status, slug) => {
        let data = {
            "status": status === "1" ? "0" : "1",
        }
        dispatch(UpdateCV({ slug, data }))
            .unwrap()
            .then((res) => {
                setIsReload(true);
            })
            .catch(() => {
                toast.error(message.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            });
    }

    return (
        <div data-v-14f1a322="" className={`${styles['container-fluid']} ${styles['page-content']}`}>
            {/* <div data-v-14f1a322="" className={`${styles['d-flex']}`}>
                <div data-v-14f1a322="" id="filter-campaign-id" className={`${styles['d-flex']} ${styles['w-100']}`}>
                    <div data-v-14f1a322="" className={`${styles['search-campaign-wrapper']}`}>
                        <input data-v-14f1a322="" type="text"
                            placeholder="Tìm chiến dịch (Nhấn enter để tìm kiếm)"
                            className={`${styles['form-control']} ${styles['form-control-lg']}`}
                            onChange={(e) => {setQueryString(e.target.value)}}
                        />
                    </div>
                </div>
            </div> */}
            <table data-v-14f1a322=""
                className={`${styles['table']} ${styles['table-hover']} ${styles['bg-white']}
                ${styles['mt-4']} ${styles['mb-3']} ${styles['shadow-sm']} ${styles['border-0']}
                ${styles['rounded']} ${styles['campaign-table']} ${styles['w-100']}`}>
                <thead data-v-14f1a322="">
                    <tr data-v-14f1a322="">
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>CV Mẫu</th>
                        {/* <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`}>Tối ưu</th> */}
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '190px', }}>Trạng thái</th>
                        <th data-v-14f1a322="" className={`${styles['text-nowrap']} ${styles['font-weight-bold']}`} style={{ minWidth: '130px', }}>Hành động</th>
                    </tr>
                </thead>
                <tbody data-v-14f1a322="">
                    {cvs && cvs.results.map((cv, index) => (
                        <tr data-v-14f1a322="" className="" index={index}>
                            <td data-v-14f1a322="" className={`${styles['border-right']}`}>
                                <div data-v-13db6a09="" data-v-14f1a322="">
                                    <div data-v-13db6a09="" className={`${styles['d-flex']}`}>
                                        {/* <label data-v-13db6a09="" className={`${styles['switch']} ${styles['mr-1']}`}>
                                            <input
                                                type="checkbox" custom-checked={cv.status === "1" ? "true" : "false"} defaultChecked={cv.status}
                                                onClick={() => { handleStatus(cv.status, cv.slug) }} disabled={isLoading} />
                                            <span
                                                className={`${styles['slider']} ${styles['round']}`}></span>
                                        </label> */}
                                        <div data-v-13db6a09="" className={`${styles['ml-2']}`}>
                                            <a data-v-13db6a09=""
                                                href={`/cv/${cv.slug}`}
                                                className={`${styles['text-dark']} ${styles['text-decoration-none']} ${styles['font-weight-bold']}`}>
                                                {cv.title}
                                            </a>
                                            <div data-v-13db6a09="" className={`${styles['mt-2']}`}><span data-v-13db6a09=""
                                                className={`${styles['badge']} ${styles['badge-secondary']} ${styles['text-muted']} ${styles['font-weight-normal']} ${styles['small']}`}>#{cv.id}</span>
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
                            <td data-v-14f1a322="" className={`${styles['border-right']}`} style={{ maxWidth: '150px', }}>
                                <div data-v-f9c0a7f2="" data-v-14f1a322="">
                                    <p data-v-f9c0a7f2="" className={`${styles['font-weight-normal']} ${styles['mb-2']} ${styles['text-muted']}`}>
                                        {cv.status === "1" ? "CV đang mở" : "CV đang tắt"}
                                    </p>
                                    <div className={`${styles['modal-content']} ${styles['border-0']}`}>
                                        <div data-v-e5f5b2d0="" className={`${styles['modal-footer']} ${styles['border-top-0']} ${styles['pt-0']}`}>
                                            <button data-v-e5f5b2d0="" type="button" onClick={() => { handleStatus(cv.status, cv.slug) }}
                                                disabled={isLoading}
                                                className={`${styles['btn']} ${styles['min-width']} ${styles['btn-primary']} ${styles['btn-lg']}`}>
                                                {isLoading && (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                )}
                                                {cv.status === "1" ? (
                                                    <span>Khóa CV</span>
                                                ) : (<span>Mở CV</span>)
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td data-v-14f1a322="" className={`${styles['border-right']}`}>
                                <div data-v-14f1a322="">
                                    <a className={`${styles['btn']} ${styles['btn-xs']} ${styles['btn-primary']} ${styles['transparent-1']}`}
                                        target="_blank"
                                        href={"/cv/" + cv.slug}
                                    >Xem chi tiết</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {cvs && (
                <Paginator
                    first={basicFirst}
                    rows={basicRows}
                    totalRecords={cvs.totals}
                    // rowsPerPageOptions={[10, 20, 30]}
                    onPageChange={onBasicPageChange}>
                </Paginator>
            )}
            {/* <div className={styles['pagination']}>
                {cvs && {
                }}
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a className={styles['active']} href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div> */}
            <div>
                <ToastContainer draggablePercent={60} limit={5} />
            </div>
        </div >
    );
};
export default CVTempManage;
