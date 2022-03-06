import React from 'react'
import './style.css'
const Search = () => {
  return (
    <div className="search">
        <div className="nav-search">
                    <div className="search__input-text">
                        <i className="nav-search__icon fas fa-search"></i>
                        
                        <input className="input__search" type="text" placeholder="Tìm kiếm việc làm, kỹ năng, tên công ty"/>
                    </div>
                    <div className="search__input-location">
                        <i className="nav-search__icon fas fa-map-marker-alt"></i>
                        <select id="location" className="search__select-location">
                            <option selected>Chọn địa điểm</option>
                            <option value="danang">Đà Nẵng</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hcm">TP. Hồ Chí Minh</option>
                            <option value="quangnam">Quảng Nam</option>
                            
                        </select>
                    </div>
                    <div className="search__button">
                        <button>Tìm kiếm</button>
                    </div>

                </div>
    </div>
  )
}

export default Search