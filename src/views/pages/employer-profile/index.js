import { Wrap } from 'components/wrap/Wrap';
import {Header} from './sections/Header/Header'
import {InfoCompany} from './sections/InfoCompany/InfoCompany'
import {InformCompany} from './sections/InformCompany/InformCompany'
import {ManagerCompany} from './sections/ManagerCompany/ManagerCompany'
import {SaveProfileCompany} from './sections/SaveProfileCompany/SaveProfileCompany'
import './style.css'
import imgLogo from './images/img job.jpg'
import avaCompany from './images/avatar company.jpg'
import avajob from './images/avatar jobseeker.png'
import { useState } from 'react';

export const EmployerProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const changeTab = (index) => {
    setActiveIndex(index)
  }

  return (
    <Wrap>
      <div className='wrapper__employ' style={{ minHeight: '500px' }}>
        <div style={{ paddingTop: '50px' }}></div>
        <div class="container">
          <Header activeIndex={activeIndex} changeTab={changeTab}/>
          <div class="container__content">
              {/* <!-- Hồ sơ công ty --> */}
              <InfoCompany isActive={activeIndex === 0}/>
              {/* <!-- Quản lý tuyển dụng --> */}
              <ManagerCompany  isActive={activeIndex === 1}/>
              {/* <!-- Thông báo ứng tuyển --> */}
              <InformCompany  isActive={activeIndex === 2}/>
              {/* <!-- Hồ sơ đã lưu --> */}
              <SaveProfileCompany  isActive={activeIndex === 3}/>
          </div>
      </div>
      </div>
    </Wrap>
  )
};

export default EmployerProfile;
