import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AutoComplete } from "primereact/autocomplete";
// components
// services
import CityService from "services/city.service";
// slices
import { create_campaign } from "slices/company-profile";
// utils

const CreateCampaign = ({ setIsReload }) => {
  const { isError, isSuccess, isLoading } = useSelector((state) => state.profileEmployer);
  const { message } = useSelector((state) => state.message);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null); //its just one value (not multiple)
  const dispatch = useDispatch()

  useEffect(() => {
      CityService.getCities().then((data) => setCities(data));
  }, [])

  const searchCity = (event) => {
      setTimeout(() => {
        let _filteredCities;
        if (!event.query.trim().length) {
          _filteredCities = [...cities];
        } else {
          _filteredCities = cities.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
  
        setFilteredCities(_filteredCities);
      }, 250);
  };

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
      dispatch(create_campaign({ name, position,  city_id: selectedCity.id}))
        .unwrap()
        .then((res) => {
          console.log(res);
          setIsReload(true);
        })
        .catch(() => {
        });
  };

  return (
    <div className="shadow-sm bg-white mb-4 rounded">
            <div className="d-flex p-3 mb-3 border-bottom">
                <h5 className="mb-0 mt-0 box-title">Tạo chiến dịch tuyển dụng của bạn</h5>
            </div>
            <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCampaign}
            >
          <Form className="px-3 pb-3">

                <div className="row">
                    <div className="form-group col"><label className="font-weight-bold">Tên
                        chiến dịch tuyển dụng</label>
                        <div >
                            <div className="input-container ml-auto">
                                <Field name="name" type="text" className="form-control" 
                                    placeholder="VD: Tuyển dụng nhân viên Marketing tháng 10, tuyển dụng designer, .."/>
                                <ErrorMessage name="name" component="div" className="alert alert-danger"
                                />
                                {isError && message.name && (
                                    <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message.name ? message.name : ""}
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="form-group col"><label className="font-weight-bold">Vị trí
                        tuyển dụng</label>
                        <div >
                            <div className="input-container ml-auto">
                                <Field name="position" type="text" className="form-control" 
                                    placeholder="VD: Nhân viên Marketing, Designer, .."/>
                                <ErrorMessage name="position" component="div" className="alert alert-danger"
                                />
                                {isError && message.position && (
                                    <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message.position ? message.position : ""}
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group"><label className="font-weight-bold">Khu
                            vực làm việc</label>
                            <div>
                                <AutoComplete
                                    value={selectedCity}
                                    suggestions={filteredCities}
                                    completeMethod={searchCity}
                                    field="name"
                                    onChange={(e) => {
                                        setSelectedCity(e.value);
                                    }}
                                    placeholder="-- Chọn khu vực làm việc --"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center"><button type="submit"
                    className="btn min-width btn btn-primary btn-lg a">
                    Tạo mới
                </button></div>
          </Form>
          </Formik>
        </div>
  );
};
export default CreateCampaign;
