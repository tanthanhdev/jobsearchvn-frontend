import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Field, Form, Formik, FormikProps, ErrorMessage } from 'formik';
// services
import CvService from 'services/cv.service'
import CvTemplateService from "services/cv-template";
// utils
import styles from './Filter.module.css';
import { icons } from 'utils/icons';

// interface IJobCards {
//   logo: string;
//   title: string;
//   salary: number;
//   currency: string;
//   country: string;
//   company_name: string;
// }
// const JobCards: FC<IJobCards> = ({ logo, title, salary, currency, country, company_name }) => {
export const Filter = ({ setCvTemplates }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const [careers, setCareers] = useState(null);
    const [designs, setDesigns] = useState(null);
    const [state, setState] = useState('Mới nhất');
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const options = [
        { value: 'Mới nhất', latest: 1, icon: 'pi pi-globe' },
        { value: 'Dùng nhiều nhất', polular: 1, icon: 'pi pi-lock-open' },
    ];

    const languages = [
        { name: 'Tiếng Việt', code: 'vi' },
    ];

    useEffect(() => {
        if (!careers && !designs) {
            CvService.getCareers().then((data) => { setCareers(data); });
            CvService.getDesigns().then((data) => { setDesigns(data); });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onLanguageChange = (e) => {
        setSelectedLanguage(e.value);
    }
    const onCareerChange = (e) => {
        setSelectedCareer(e.value);
    }
    const onDesignChange = (e) => {
        setSelectedDesign(e.value);
    }

    const onLoadingClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 250);
    }

    return (
        <>
            <div className={`${styles.filter}`}>
                <Formik
                    initialValues={{
                        q: "",
                        cv_career: "",
                        cv_design: "",
                        state: "Mới nhất"
                    }}
                    onSubmit={(values, actions) => {
                        onLoadingClick()
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            const { q, cv_career, cv_design, state } = values
                            CvTemplateService.getCvTemplates(q, cv_career.id, cv_design.id, state).then(data => {
                                console.log(data)
                                let resArr = [...data];
                                resArr = resArr.map(e => {
                                    return {
                                        id: e.id ? e.id : 0,
                                        cv_career: e.cv_career ? e.cv_career : null,
                                        cv_design: e.cv_design ? e.cv_design : null,
                                        title_template: e.title ? e.title : null,
                                        slug: e.slug ? e.slug : null,
                                        status: e.status ? e.status : null,
                                        view: e.view ? e.view : 0,
                                    };
                                });
                                setCvTemplates(resArr);
                            }).catch(error => {
                                console.log(error);
                                setCvTemplates([]);
                            });
                        }, 250);
                    }}
                >
                    {(props) => (
                        <Form>
                            <header className={`${styles.filter__heading}`}>
                                Tìm mẫu CV phù hợp
                            </header>
                            <span className="p-input-icon-left">
                                <i className="pi pi-search" />
                                <InputText className="p-inputtext-sm block"
                                    name="q"
                                    value={query}
                                    onChange={e => {
                                        props.setFieldValue("q", e.target.value);
                                        setQuery(e.target.value);
                                    }}
                                    placeholder="Tìm kiếm" />
                            </span>
                            <Dropdown className={`${styles.filter__list}`} value={selectedLanguage} options={languages} onChange={onLanguageChange} optionLabel="name" placeholder="Chọn ngôn ngữ" />
                            <Dropdown className={`${styles.filter__list}`}
                                name="cv_career" value={selectedCareer}
                                options={careers}
                                onChange={e => {
                                    props.setFieldValue("cv_career", e.target.value);
                                    onCareerChange(e);
                                }}
                                optionLabel="name"
                                placeholder="Chọn ngành nghề" />
                            <Dropdown className={`${styles.filter__list}`}
                                name="cv_design"
                                value={selectedDesign}
                                options={designs}
                                onChange={e => {
                                    props.setFieldValue("cv_design", e.target.value);
                                    onDesignChange(e);
                                }}
                                optionLabel="name"
                                placeholder="Chọn thiết kế" />
                            <div className={`${styles['field-checkbox']}`}>
                                <MultiStateCheckbox value={state}
                                options={options}
                                name="state"
                                optionValue="value"
                                onChange={e => {
                                    props.setFieldValue("state", e.target.value);
                                    setState(e.value);
                                }}
                                empty={false} />
                                <label>{state}</label>
                            </div>
                            <Button type="submit" label="Tìm Kiếm" loading={loading} icon="pi pi-check" className="p-button-sm" />
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};
