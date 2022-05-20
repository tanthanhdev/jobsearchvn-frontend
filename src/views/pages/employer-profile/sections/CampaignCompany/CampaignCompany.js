import React, { useEffect, useState } from 'react';

// import { Navigate, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Button } from 'primereact/button';
// import * as Yup from "yup";
// import { FileUploader } from "react-drag-drop-files";
// import { AutoComplete } from "primereact/autocomplete";
// components
import CreateCampaign from "./components/CreateCampaign/CreateCampaign"
import ListCampaign from "./components/ListCampaigns/ListCampaign"
// services
import userService  from 'services/user.service';
// slices
// import { create_campaign } from "slices/company-profile";
// utils
import styles from "./CampaignCompany.module.css";

export const CampaignCompany = ({ isActive }) => {
    const [isReload, setIsReload] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [q, setQueryString] = useState("");

    useEffect(() => {
        userService.getAllCampaigns(q).then((res) => {
            setCampaigns(res.data);
            setIsReload(false);
        }).catch((err) => {
            if (err.response.status === 404) {
                setCampaigns([]);
            }
        });
    }, [isReload===true, q])

    return (
        <div className={styles.wrapper}>
            <CreateCampaign  setIsReload={setIsReload}/>
            <ListCampaign campaigns={campaigns} setIsReload={setIsReload} setQueryString={setQueryString} />
        </div>
    )
};
