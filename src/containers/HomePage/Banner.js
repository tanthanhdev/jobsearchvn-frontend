import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import countriess from 'api/countriesApi'



function Banner(props) {
  const {onChange} =props;
  const [countries, setCountries] = useState([])
    useEffect(() => {
      const fecthCountries = async()=>{
        const countrie= await countriess.getAll()
        setCountries(countrie)
      }
      fecthCountries()
      },[])
  return (
    <div className="slider" style={{backgroundImage: 'url(https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg)'}}>
    <div className="search">
    <div className="nav-search">
                    <div className="search__input-text">
                        <i className="nav-search__icon fas fa-search"></i>
                        <input onChange={onChange} className="input__search" type="text" placeholder="Tìm kiếm việc làm, kỹ năng, tên công ty"/>
                    </div>
                    <div className="search__input-location">
                        <i className="nav-search__icon fas fa-map-marker-alt"></i>
                        <select id="location" className="search__select-location">
                            <option selected>Chọn địa điểm</option>
                            {countries.map(country => (<option key={country.id} value={country.name}>{country.name}</option>))}
                        </select>
                    </div>
                    <div className="search__button">
            <button>Tìm kiếm</button>
        </div>
      </div>
    </div>
  </div>
  );
}
Banner.propTypes = {
  onChange:PropTypes.func,
};
export default Banner;