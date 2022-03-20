import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import CityService from "services/city.service";
import PropTypes from 'prop-types';

Banner.propTypes = {
  
};

function Banner(props) {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    CityService.getCities().then(data => setCities(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const searchCity = (event) => {
    setTimeout(() => {
      let _filteredCities;
      if (!event.query.trim().length) {
        _filteredCities = [...cities];
      }
      else {
        _filteredCities = cities.filter((country) => {
          return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCities(_filteredCities);
    }, 250);
  }


  return (
    <div className="slider" style={{backgroundImage: 'url(https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg)'}}>
    <div className="search">
    <div className="nav-search">
                    <div className="search__input-text">
                        <i className="nav-search__icon fas fa-search"></i>
                        <input className="input__search" type="text" placeholder="Tìm kiếm việc làm, kỹ năng, tên công ty"/>
                    </div>
                    <div className="search__input-location">
                        <i className="nav-search__icon fas fa-map-marker-alt"></i>
                        <AutoComplete
                          value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} field="name" onChange={(e) => setSelectedCity(e.value)} placeholder="Thành phố" 
                        />
                        {/* <select id="location" className="search__select-location">
                            <option selected>Chọn địa điểm</option>
                            <option value="danang">Đà Nẵng</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hcm">TP. Hồ Chí Minh</option>
                            <option value="quangnam">Quảng Nam</option>
                        </select> */}
                    </div>
                    <div className="search__button">
            <button>Tìm kiếm</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Banner;