import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import PublicService from "services/public.service";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null); //its just one value (not multiple)
  const [inputSearchNormal, setInputSearchNormal] = useState("");

  let navigate = useNavigate();
  
  useEffect(() => {
    PublicService.getCities().then((data) => setCities(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const onSubmitValueInput = () => {
    navigate("/search/" + inputSearchNormal + '/' + (selectedCity ? selectedCity.name : ''));
  };

  return (
    <div
      className="slider-homepage"
      style={{
        backgroundImage:
          "url(https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg)",
      }}
    >
      <div className="search">
        <div className="nav-search">
          <div className="search__input-text">
            <i className="nav-search__icon fas fa-search"></i>
            <input
              onChange={e => {setInputSearchNormal(e.target.value)}}
              className="input__search"
              type="text"
              placeholder="Tìm kiếm việc làm, kỹ năng, tên công ty"
            />
          </div>
          <div className="search__input-location">
            <i className="nav-search__icon fas fa-map-marker-alt"></i>
            <AutoComplete
              value={selectedCity}
              suggestions={filteredCities}
              completeMethod={searchCity}
              field="name"
              dropdown
              onChange={(e) => {
                setSelectedCity(e.value);
              }}
              placeholder="Thành phố"
            />
          </div>
          <div className="search__button">
            <button onClick={onSubmitValueInput}>Tìm kiếm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
